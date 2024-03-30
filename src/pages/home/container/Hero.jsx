import React from "react";

import images from "../../../constants/images";
import Search from "../../../components/Search";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllPosts } from "../../../services/index/posts";

import { useSearchParams } from "react-router-dom";

let isFirstRun = true;

const Hero = ({ isDarkMode }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsValue = Object.fromEntries([...searchParams]);

  const currentPage = parseInt(searchParamsValue?.page) || 1;
  const searchKeyword = searchParamsValue?.search || "";

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryFn: () => getAllPosts(searchKeyword, currentPage, 6),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
    },
  });

  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [currentPage, searchKeyword, refetch]);

  const handlePageChange = (page) => {
    // change the page's query string in the URL
    setSearchParams({ page, search: searchKeyword });
  };

  const handleSearch = ({ searchKeyword }) => {
    setSearchParams({ page: 1, search: searchKeyword });
  };

  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row dark:bg-[#050e15]">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-Roboto text-3xl text-center font-bold text-black dark:text-[#1E496A] md:text-5xl lg:text-4xl lx:text-5xl lg:text-left lg:max-w-[540px]">
          Read The Most Interesting Articles
        </h1>
        <p className="text-black dark:text-[#1E496A] mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          The Blog’s Target Audience is Technology & Business Enthusiasts,
          Especially Startup Founders and Investors
        </p>
        <Search
          className="mt-10 lg:mt-6 xl:mt-10"
          onSearchKeyword={handleSearch}
          isDarkMode={isDarkMode}
        />
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-black dark:text-[#1E496A] font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-dark-light dark:text-[#1D72E9] bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-dark-light dark:text-[#1D72E9] bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-dark-light dark:text-[#1D72E9] bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
