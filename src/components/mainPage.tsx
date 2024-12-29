"use client";
import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos";
import "aos/dist/aos.css";
import { Detail } from "./detail";
import { Sidebar } from "./sidebar";
import MobileCard from "./mobileComponents/card";
import MobileEducation from "./mobileComponents/education";
import MobileExperience from "./mobileComponents/experience";
import MobileSkills from "./mobileComponents/skills";
import MobileProjects from "./mobileComponents/projects";
import MobileContact from "./mobileComponents/contact";

const MainPage = () => {
  //    useEffect for AOS
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div>
      <div className="overflow-x-hidden bg-white h-screen sm:hidden">
        {/* card */}
        <MobileCard/>
        {/* education */}
        <MobileEducation/>
        {/* experience */}
        <MobileExperience/>
        {/* skills */}
        <MobileSkills/>
        {/* projects */}
        <MobileProjects/>
        {/* contact */}
        <MobileContact/>
      </div>
      {/* Desktop View */}
      <div className="hidden sm:flex sm:overflow-hidden sm:h-screen">
        {/* sideBar */}
        <div className="w-1/5">
          <Sidebar />
        </div>
        {/* main page */}
        <div className="w-full">
          <Detail />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
