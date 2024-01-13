import React from "react";

import { Img, Text } from "components";

type C1920WithoutSidebarSixItemProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "icon" | "text"
> &
  Partial<{ icon: string; text: string }>;

const C1920WithoutSidebarSixItem: React.FC<C1920WithoutSidebarSixItemProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3.5 items-center justify-start ml-1.5 md:ml-[0] w-auto">
          <Img className="h-6 w-6" alt="iconprovider1xTwo" src={props?.icon} />
          <Text
            className="capitalize text-sm text-white-A700 w-auto"
            size="txtMontserratRomanRegular14"
          >
            {props?.text}
          </Text>
        </div>
      </div>
    </>
  );
};

C1920WithoutSidebarSixItem.defaultProps = {
  icon: "images/img_iconprovider1x2gaming.svg",
};

export default C1920WithoutSidebarSixItem;
