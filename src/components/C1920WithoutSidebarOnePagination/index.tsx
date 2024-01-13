import React from "react";

import { Line, Text } from "components";

type C1920WithoutSidebarOnePaginationProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "gamecount"
> &
  Partial<{ gamecount: string }>;

const C1920WithoutSidebarOnePagination: React.FC<
  C1920WithoutSidebarOnePaginationProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-center text-white-A700 text-xs w-auto"
          size="txtMontserratBold12"
        >
          {props?.gamecount}
        </Text>
        <div className="h-0.5 relative w-full">
          <Line className="absolute bg-blue_gray-900_01 h-0.5 inset-[0] justify-center m-auto rounded-[1px] w-full" />
          <Line className="absolute bg-teal-400 h-0.5 inset-y-[0] left-[0] my-auto rounded-[1px] w-[44%]" />
        </div>
      </div>
    </>
  );
};

C1920WithoutSidebarOnePagination.defaultProps = { gamecount: "32 of 65 Games" };

export default C1920WithoutSidebarOnePagination;
