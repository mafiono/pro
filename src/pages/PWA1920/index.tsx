import React from "react";

import { Button, Img, Text } from "components";

const PWA1920Page: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-end mx-auto w-full">
        <header className="bg-gray-900 flex flex-col items-center justify-center md:px-5 w-full">
          <div className="flex flex-row gap-7 items-center justify-between max-w-[1886px] mx-auto my-[7px] w-full">
            <div className="header-row my-0.5">
              <div className="flex flex-row gap-[7px] items-center justify-start">
                <div className="flex flex-col items-center justify-end p-[5px] w-7">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_icon_general_crosssmall_white_a700.svg"
                    alt="iconheadercrosm"
                  />
                </div>
                <div className="flex flex-col h-9 items-center justify-start w-9">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-9 items-center justify-start p-0.5 w-9"
                    style={{
                      backgroundImage: "url('images/img_contentpwa.svg')",
                    }}
                  >
                    <Img
                      className="h-[27px] md:h-auto object-cover"
                      src="images/img_logo_389x440.png"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xs w-auto"
                    size="txtRobotoRegular12"
                  >
                    Winning Casino App
                  </Text>
                  <Text
                    className="text-[9px] text-gray-600 w-auto"
                    size="txtRobotoRegular9"
                  >
                    for all devices
                  </Text>
                </div>
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold sm:hidden leading-[normal] min-w-[120px] rounded-md text-center text-lg"
              shape="round"
              color="teal_400"
              size="md"
              variant="fill"
            >
              Download
            </Button>
          </div>
        </header>
        <Img
          className="h-[2648px] sm:h-auto object-cover w-full"
          src="images/img_image69_2648x1920.png"
          alt="imageSixtyNine"
        />
      </div>
    </>
  );
};

export default PWA1920Page;
