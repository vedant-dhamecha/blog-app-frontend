import React from "react";
import { Link } from "react-router-dom";
import { images, stables } from "../../../constants";

const SuggestedPosts = ({ className, header, posts = [], tags, isDarkMode }) => {
  return (
    <div
      className={`w-full dark:bg-[#0D0D0D] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-Roboto font-medium dark:text-[#C9E0F2] text-dark-blue md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x- lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={
                item?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + item?.photo
                  : images.samplePostImage
              }
              alt={item.title}
            />
            <div className="text-sm font-Roboto dark:text-[#FFFFFF] font-bold">
              <h3 className="text-sm font-Roboto text-dark-blue dark:text-[#C9E0F2] font-medium md:text-base lg:text-lg">
              <Link to={`/blog/${item.slug}`}>{item.title}</Link>
              </h3>
              <span className="test-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-Roboto font-medium text-dark-blue dark:text-white mt-8 md:text-xl">
        Tags
      </h2>
      {tags.length === 0 ? (
        <p className="text-slate-500 text-xs mt-2">
          There is not tags for this post
        </p>
      ) : (
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
          {tags.map((item, index) => (
            <Link
              key={index}
              to="/"
              className="inline-block font-bold rounded-md px-3 py-1.5 bg-primary font-Roboto text-xs text-white dark:text-[#0D0D0D] md:text-sm"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuggestedPosts;