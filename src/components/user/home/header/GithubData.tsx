"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const GithubData = () => {
  const [githubData, setGithubData] = useState<any>(null);
  const getGithubData = async () => {
    const res = await fetch("https://api.github.com/users/jahedul29");
    const result = await res.json();

    setGithubData(result);
  };

  useEffect(() => {
    getGithubData();
  }, []);

  console.log({ githubData });
  return (
    <Link
      href={githubData?.url || ""}
      target="_blank"
      className="absolute flex rounded-lg text-ternaryText border border-ternaryText left-[200px]"
    >
      <div className="relative overflow-hidden w-[50px] h-[50px]  rounded-l-lg ">
        <Image
          fill={true}
          src={githubData?.avatar_url || ""}
          className="object-cover"
          alt="github avatar"
        />
      </div>
      <div></div>
    </Link>
  );
};

export default GithubData;
