import React from "react";

import { Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="bg-blue_gray-900 flex flex-col h-[60px] md:h-auto items-center justify-start p-2.5 w-60 md:w-full">
          <Img
            className="h-6 w-6"
            src="images/img_megaphone.svg"
            alt="megaphone"
          />
        </div>
        <div className="flex flex-col items-center justify-start mt-2.5 w-full">
          <div className="flex flex-col items-center justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-gray-900 flex flex-col items-center justify-start p-2 w-full">
                <div className="flex flex-row gap-[18px] items-start justify-between w-[217px]">
                  <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconsidebarcasino.svg"
                      alt="iconsidebarcasi"
                    />
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtMontserratBold14"
                    >
                      Casino
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_icongeneralarrowdown.svg"
                    alt="icongeneralarro"
                  />
                </div>
              </div>
              <div className="bg-gray-900 flex flex-col items-center justify-start p-2 w-full">
                <div className="flex flex-row gap-[18px] items-start justify-between w-[217px]">
                  <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtMontserratBold14"
                    >
                      Sport
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_Two"
                  />
                </div>
              </div>
              <div className="bg-gray-900 h-10 px-2.5 relative w-full">
                <div className="bg-teal-400 h-10 m-auto rounded w-[92%]"></div>
                <div className="absolute flex flex-row gap-3.5 h-max inset-y-[0] items-center justify-start left-[6%] my-auto w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconsidebarwinningclub.svg"
                    alt="iconsidebarwinn"
                  />
                  <Text
                    className="capitalize text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    Winning Club
                  </Text>
                </div>
              </div>
              <div className="bg-gray-900 flex flex-col items-start justify-start p-2 w-full">
                <div className="flex flex-row gap-3.5 items-center justify-start ml-1.5 md:ml-[0] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_thumbsup_white_a700.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="capitalize text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    Promotions
                  </Text>
                </div>
              </div>
              <div className="bg-gray-900 flex flex-col items-start justify-start p-2 w-full">
                <div className="flex flex-row gap-3.5 items-center justify-start ml-1.5 md:ml-[0] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_ticket_white_a700.svg"
                    alt="ticket"
                  />
                  <Text
                    className="capitalize text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    Tournament
                  </Text>
                </div>
              </div>
              <div className="bg-gray-900 flex flex-col items-start justify-start p-2 w-full">
                <div className="flex flex-row gap-3.5 items-center justify-start ml-1.5 md:ml-[0] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_television_white_a700.svg"
                    alt="television_One"
                  />
                  <Text
                    className="capitalize text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    News
                  </Text>
                </div>
              </div>
              <div className="bg-gray-900 flex flex-col items-start justify-start p-2 w-full">
                <div className="flex flex-row gap-3.5 items-center justify-start ml-1.5 md:ml-[0] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_topbariconsidebaremailus_white_a700.svg"
                    alt="topbariconsideb"
                  />
                  <Text
                    className="capitalize text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    Email Us
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mb-[1614px] mt-[569px] w-auto md:w-full">
          <div className="bg-gray-900 flex flex-col items-center justify-end p-[19px] w-full">
            <Line className="bg-blue_gray-900 h-px w-full" />
          </div>
          <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="bg-blue_gray-900_01 flex flex-row gap-[17px] items-center justify-between p-[7px] rounded-md w-full">
                <div className="flex flex-row gap-3.5 items-center justify-start ml-[7px] w-auto">
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <div className="flex flex-col items-center justify-start my-[3px] w-[92%] md:w-full">
                      <Img
                        className="h-[15px] md:h-auto object-cover w-full"
                        src="images/img_image43.png"
                        alt="imageFortyThree_One"
                      />
                    </div>
                  </div>
                  <Text className="capitalize font-montserrat text-sm text-white-A700 w-auto">
                    English
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown_Three"
                />
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col items-start justify-start p-2 rounded-md w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start ml-1.5 md:ml-[0] w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconsidebarlivesupport.svg"
                  alt="iconsidebarlive"
                />
                <Text className="capitalize font-montserrat text-sm text-white-A700 w-auto">
                  Live support
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
