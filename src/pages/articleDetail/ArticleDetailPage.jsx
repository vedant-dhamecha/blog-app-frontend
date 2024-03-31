import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import CommentsContainer from "../../components/comments/CommentsContainer";
import MainLayout from "../../components/MainLayout";
import SocialShareButtons from "../../components/SocialShareButtons";
import { images, stables } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts, getSinglePost } from "../../services/index/posts";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";
import parseJsonToHtml from "../../utils/parseJsonToHtml";
import Editor from "../../components/editor/Editor";

const ArticleDetailPage = ({isDarkMode}) => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const {
    data,
    isLoading: queryIsLoading,
    isError,
  } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!slug || !data) {
          setLoading(true);
          // Perform any additional loading state logic if needed
        } else {
          setbreadCrumbsData([
            { name: "Home", link: "/" },
            { name: "Blog", link: "/blog" },
            { name: "Article title", link: `/blog/${data.slug}` },
          ]);

          if (data && data.body) {
            setBody(parseJsonToHtml(data?.body));
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, [data, slug]);

  const { data: postsData } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
  });

  return (
    <MainLayout isDarkMode={isDarkMode}>
      {queryIsLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post detail" />
      ) : (
        <div  className="dark:bg-[#050e15]">
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />
            <img
              className="rounded-xl w-full"
              src={
                data?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                  : images.samplePostImage
              }
              alt={data?.title}
            />
            <div className="mt-4 flex gap-2">
              {data?.categories.map((category) => (
                <Link
                  to={`/blog?category=${category.name}`}
                  className="text-primary dark:text-[#C9E0F2] text-sm font-Roboto inline-block md:text-base"
                >
                  {category?.name}
                </Link>
              ))}
            </div>
            <h1 className="text-xl font-medium font-Roboto mt-4 text-dark-hard dark:text-[#1D72E9] md:text-[26px]">
              {data?.title}
            </h1>
            <div className="w-full">
              {!isLoading && !isError && (
                <Editor content={data?.body} editable={false} />
              )}
            </div>
            <CommentsContainer
              comments={data?.comments}
              className="mt-10"
              logginedUserId={userState?.userInfo?._id}
              postSlug={slug}
              isDarkMode={isDarkMode}
            />
          </article>
          <div>
            <SuggestedPosts
              header="Latest Article"
              posts={postsData?.data}
              tags={data?.tags}
              className="mt-8 lg:mt-0 lg:max-w-xs"
              isDarkMode={isDarkMode}
            />
            <div className="mt-7">
              <h2 className="font-Roboto dark:text-[#C9E0F2] font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
              <SocialShareButtons
                url={encodeURI(window.location.href)}
                title={encodeURIComponent(data?.title)}
              />
            </div>
          </div>
        </section>
        </div>
      )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
