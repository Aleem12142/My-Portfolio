import React from "react";
import Image from "next/image";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { Button } from "../ui/button";

const MobileCard = () => {
  return (
    <div data-aos="fade-up" className="h-[90vh] flex flex-col items-center justify-center">
      <div className="card glass bg-blue-100 w-80 p-5 flex flex-col justify-center items-center">
        <Image
          src={"/image/profile.jpg"}
          alt="profile-pic"
          width={200}
          height={200}
          className="rounded-lg mx-auto"
        />
        <div className="card-body">
            {/* Name here */}
          <h1 className="card-title scroll-m-20 text-2xl text-center justify-center font-bold tracking-tight uppercase">
          M Aleem
        </h1>
        <h2 className="scroll-m-20 text-md text-center font-semibold text-blue-600">Developer, UI/UX Developer,Engineer
        </h2>
        {/* social media */}
         <div className="grid grid-cols-3 gap-2">
        {/* Github */}
        <div className="mt-4">
          <Link
            href={"https://github.com/Aleem12142"}
            target="_blank"
            className=" text-stone-600 hover:text-[#6e5494]"
          >
            <BsGithub className="text-3xl " />
          </Link>
        </div>
        {/* Instagram */}
        <div className="mt-4">
          <Link
            href={"https://www.instagram.com/m.aleem_150/"}
            target="_blank"
            className=" text-stone-600 hover:text-[#c13584]"
          >
            <BsInstagram className="text-3xl " />
          </Link>
        </div>
        {/* Facebook */}
        <div className="mt-4">
          <Link
            href={"https://www.facebook.com/muhammad.aleem.9822/"}
            target="_blank"
            className=" text-stone-600 hover:text-[#1877F2]"
          >
            <FaSquareFacebook className="text-3xl" />
          </Link>
        </div>
         </div>
           {/* cv download button */}
      <Link
        href={"https://resume-aleems-projects-b29b6cdd.vercel.app/"}
        className="mt-4 w-full"
        target="_blank"
      >
        <Button>
          <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
