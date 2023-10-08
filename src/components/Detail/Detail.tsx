import React from "react";
import Image from "next/image";
import ListComponent, { listDataProp } from "../List/ListComponent";

export interface DetailProp extends listDataProp {
  id?: Key | null | undefined;
  Logo?: string ;
  Logoalt?: string;
  title?: string;
  buttonLabel?: string;
  onClick?: () => void;
  backgroundColor?: string;
  heroImage?: string;
}

const Detail = ({
  Logo,
  Logoalt,
  title,
  listData,
  buttonLabel,
  onClick,
}: DetailProp) => {
  return (
    <div className={`flex  flex-col md:gap-12 gap-4 lg:p-6 justify-start `}>
      <div>
        {/* Logo */}
        <Image
          width={0}
          height={0}
          sizes="100vh"
          src={Logo}
          alt={Logoalt ?? "image-here"}
          className="max-w-[153px] min-w-[153px]  max-h-[50px] object-contain  "
        />
      </div>

      {/* Heading */}
      <h3 className="lg:text-[32px] md:text-[28px] text-[24px] font-semibold">
        {title}
      </h3>

      {/* list */}
      <ListComponent
        listData={listData}
        className="font-medium	md:gap-4 gap-2 lg:text-[16px] text-[12px]"
      />

      {/* viewButton */}

      {buttonLabel && (
        <button
          onClick={onClick}
          className="text-[#E06343] md:text-[16px] text-[14px] font-normal self-start"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Detail;
