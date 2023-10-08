"use client";

import Detail, { DetailProp } from "@/components/Detail/Detail";
import fakeDetailData from "@/Data/Data";
import Image from "next/image";
import React from "react";
import DefaultImage from "@/components/Assets/noImage.png";

const HeroSection = () => {
  const data = fakeDetailData;
  return (
    <div className="">
      {data &&
        data.map((e: DetailProp) => (
          <div
            key={e?.id}
            className={` odd:bg-[#FEF8F6] even:bg-[#FFFFFF]  lg:odd:flex-row flex-col   lg:even:flex-row-reverse flex justify-center lg:gap-x-[60px]  md:gap-12 gap-[20px] lg:p-[120px_116px] md:p-[60px_50px] p-[40px_25px] `}
          >
            <div className="flex-1 ">
              <Detail
                listData={e?.listData}
                Logo={e.Logo}
                Logoalt={e?.Logoalt}
                buttonLabel={e?.buttonLabel}
                onClick={e?.onClick}
                title={e?.title}
              />
            </div>

            <div className="flex-1 overflow-hidden ">
              <Image
                src={e.heroImage ?? DefaultImage.src}
                alt="hello"
                width={0}
                height={0}
                sizes="100vh"
                className={`w-full h-full object-cover`}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default HeroSection;
