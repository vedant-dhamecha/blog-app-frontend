import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/index/users";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const MemberLayout = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const userRole = userState?.userInfo?.member;

  useEffect(() => {
    if (!userRole) {
      toast.error("You are not allowed to access the member panel");
      navigate("/login"); // Redirect to homepage
    }
  }, [userRole, navigate]);

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
    onSuccess: (data) => {
      if (!data?.member) {
        navigate("/");
        toast.error("Your are not allowed to access member panel");
      }
    },
    onError: (err) => {
      console.log(err);
      navigate("/");
      toast.error("Your are not allowed to access member panel");
    },
    enabled: userRole === true, // Only fetch profile data if user is member
  });

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h3 className="text-2xl text-slate-700">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Header />
      <main className=" flex-1 p-4 lg:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MemberLayout;