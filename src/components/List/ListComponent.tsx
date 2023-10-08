import { cn } from "@/utlis/cn";
import React from "react";
export interface listDataProp {
  listData: string[];
  className?: string;
}

const ListComponent = ({ listData, className }: listDataProp) => {
  return (
    <div>
      <ul className={cn(["list-none  flex flex-col ", className])}>
        {listData &&
          listData.map((e: string, index: number) => <li key={index}>{e}</li>)}
      </ul>
    </div>
  );
};

export default ListComponent;
