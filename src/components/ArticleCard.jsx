// ArticleCard.js
import React, { useRef } from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { images, stables } from "../constants";
import { Link } from "react-router-dom";
import "./ArticleCardAnimation.css"; // Import CSS file for animation

const ArticleCard = ({ post, className, isDarkMode }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Calculate mouse position relative to the card
    const y = e.clientY - rect.top;
    const rotationX = (y - rect.height / 2) / 20; // Adjust rotation based on mouse position
    const rotationY = (x - rect.width / 2) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "none"; // Reset transform when mouse leaves
  };

  return (
    <div
      className={`article-card ${className}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/blog/${post.slug}`}>
        <img
          src={
            post.photo
              ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
              : images.samplePostImage
          }
          alt="title"
          className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
        />
      </Link>
      <div className="p-5">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px] dark:text-[#1E496A]">
            {post.title}
          </h2>
          <p className="text-dark-light mt-3 text-sm md:text-lg dark:text-[#1E496A]">
            {post.caption}
          </p>
        </Link>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={
                post.user.avatar
                  ? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar
                  : images.userImage
              }
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base dark:text-[#1E496A]">
                {post.user.name}
              </h4>
              <div className="flex items-center gap-x-2">
                <span
                  className={`${
                    post.user.verified ? "bg-[#36B37E] dark:bg-[#3d7f64]" : "bg-red-500 dark:bg-[#8e3d3d]"
                  } w-fit bg-opacity-20 p-1.5 rounded-full`}
                >
                  {post.user.verified ? (
                    <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E] dark:text-[#23362e]" />
                  ) : (
                    <AiOutlineClose className="w-1.5 h-1.5 text-red-500 dark:text-[#23362e]" />
                  )}
                </span>
                <span className="italic text-dark-light dark:text-[#5A7184] text-xs md:text-sm">
                  {post.user.verified ? "Verified" : "Unverified"} writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light dark:text-[#5A7184] italic text-sm md:text-base">
            {new Date(post.createdAt).getDate()}{" "}
            {new Date(post.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
