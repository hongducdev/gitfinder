import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiBriefcaseLine,
  RiGlobalLine,
  RiLink,
  RiTwitterXFill,
  RiUser3Fill,
} from "react-icons/ri";

const Information = () => {
  return (
    <div>
      <Image
        src="https://avatars.githubusercontent.com/u/73995275?v=4"
        alt="CTP"
        width={500}
        height={500}
        className="rounded-full bg-cover object-cover"
      />
      <div className="mt-5">
        <h1 className="text-2xl font-bold">Nguyễn Hồng Đức</h1>
        <Link
          href=""
          className="text-ctp-subtext0 hover:text-ctp-blue hover:underline"
        >
          hongducdev
        </Link>
        <span className="line-clamp-3 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
          consequatur numquam dolorum tempora accusantium deleniti esse non
          suscipit nobis enim doloremque facere ex animi obcaecati libero magnam
          nam asperiores in.
        </span>

        <div className="mt-3 flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <RiBriefcaseLine className="text-2xl" />
            <Link href="" className="text-ctp-subtext0 hover:text-ctp-blue">
              hongducdev.com
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <RiTwitterXFill className="text-2xl" />
            <Link href="" className="text-ctp-subtext0 hover:text-ctp-blue">
              hongducdev
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <RiTwitterXFill className="text-2xl" />
            <Link href="" className="text-ctp-subtext0 hover:text-ctp-blue">
              hongducdev
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
