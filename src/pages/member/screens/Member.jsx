import React, { useState, useEffect } from "react";
import "./Member.css"; // Import your CSS file here
import user from "./user.png";
import member from "./member.png";
import blog from "./blog.png";
import comment from "./comment.png";
import ParticlesComponent from "../../pricing/particles";
import "../../pricing/particles.css";


function Member() {
  const [counts, setCounts] = useState({
    publicUsers: 0,
    members: 0,
    blogPosts: 0,
  });

  const [isHoveredPublicUsers, setIsHoveredPublicUsers] = useState(false);
  const [isHoveredMembers, setIsHoveredMembers] = useState(false);
  const [isHoveredBlogPosts, setIsHoveredBlogPosts] = useState(false);

  useEffect(() => {
    let interval;

    if (isHoveredPublicUsers) {
      setCounts({ ...counts, publicUsers: 0 }); // Reset count
      interval = setInterval(() => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          publicUsers:
            prevCounts.publicUsers < 10 ? prevCounts.publicUsers + 1 : 10,
        }));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isHoveredPublicUsers]);

  useEffect(() => {
    let interval;

    if (isHoveredMembers) {
      setCounts({ ...counts, members: 0 }); // Reset count
      interval = setInterval(() => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          members: prevCounts.members < 15 ? prevCounts.members + 1 : 15,
        }));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isHoveredMembers]);

  useEffect(() => {
    let interval;

    if (isHoveredBlogPosts) {
      setCounts({ ...counts, blogPosts: 0 }); // Reset count
      interval = setInterval(() => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          blogPosts: prevCounts.blogPosts < 5 ? prevCounts.blogPosts + 1 : 5,
        }));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isHoveredBlogPosts]);

  return (
    <>
    {/* particle.js background */}
    <ParticlesComponent id="particles" />
      <div className="demo">
        <div
          className="card"
          onMouseEnter={() => setIsHoveredPublicUsers(true)}
          onMouseLeave={() => setIsHoveredPublicUsers(false)}
        >
          <div className="slide slide1">
            <div className="content">
              <div className="icon" style={{ background: "#FFC107" }}>
                <img src={user} alt="Public User" />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h1 className="text-5xl font-bold text-center text-[#1565D8]">
                {counts.publicUsers}+
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 className="text-2xl font-bold text-center text-[#1565D8]">
                Public Users
              </h1>
            </div>
          </div>
        </div>

        <div
          className="card"
          onMouseEnter={() => setIsHoveredMembers(true)}
          onMouseLeave={() => setIsHoveredMembers(false)}
        >
          <div className="slide slide1">
            <div className="content">
              <div className="icon" style={{ background: "#248AFD" }}>
                <img src={member} alt="Member" />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h1 className="text-5xl font-bold text-center text-[#1565D8]">
                {counts.members}+
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 className="text-2xl font-bold text-center text-[#1565D8]">
                Members
              </h1>
            </div>
          </div>
        </div>

        <div
          className="card"
          onMouseEnter={() => setIsHoveredBlogPosts(true)}
          onMouseLeave={() => setIsHoveredBlogPosts(false)}
        >
          <div className="slide slide1">
            <div className="content">
              <div className="icon" style={{ background: "#fce1e8" }}>
                <img src={blog} alt="Blog Post" />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h1 className="text-5xl font-bold text-center text-[#1565D8]">
                {counts.blogPosts}+
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 className="text-2xl font-bold text-center text-[#1565D8]">
                Blog Posts
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
