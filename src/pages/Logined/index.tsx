import React from "react";

import { Button, Img, Input, Text } from "components";
import Header6 from "components/Header6";

const LoginedPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-1.5 items-center justify-start mx-auto w-full">
        <Header6 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col font-roboto gap-1.5 h-[744px] md:h-auto items-center justify-start max-w-[1248px] w-full">
          <div className="flex flex-col h-[690px] md:h-auto items-center justify-start w-auto md:w-full">
            <div className="gap-4 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="h-[337px] md:px-5 relative w-full">
                <Img
                  className="h-[337px] m-auto object-cover rounded-md w-full"
                  src="images/img_doghouse2_337x600.png"
                  alt="doghouseTwo"
                />
                <div className="absolute flex flex-row gap-1 items-center justify-center right-[1%] top-[3%] w-auto">
                  <div className="bg-black-900_33 flex flex-col h-[18px] items-center justify-end p-[3px] rounded-sm w-[18px]">
                    <Img
                      className="h-[11px] w-3"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </div>
                  <div className="bg-black-900_33 flex flex-col h-[18px] items-center justify-start p-1 rounded-sm w-[18px]">
                    <Img
                      className="h-[9px] w-[9px]"
                      src="images/img_close_white_a700_9x9.svg"
                      alt="close"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[337px] md:px-5 relative w-full">
                <Img
                  className="h-[337px] m-auto object-cover rounded-md w-full"
                  src="images/img_doghouse2_337x600.png"
                  alt="doghouseThree"
                />
                <div className="absolute flex flex-row gap-1 items-center justify-center right-[1%] top-[3%] w-auto">
                  <div className="bg-black-900_33 flex flex-col h-[18px] items-center justify-end p-[3px] rounded-sm w-[18px]">
                    <Img
                      className="h-[11px] w-3"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </div>
                  <div className="bg-black-900_33 flex flex-col h-[18px] items-center justify-start p-1 rounded-sm w-[18px]">
                    <Img
                      className="h-[9px] w-[9px]"
                      src="images/img_close_white_a700_9x9.svg"
                      alt="close"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[337px] md:px-5 relative w-full">
                <Img
                  className="h-[337px] m-auto object-cover rounded-md w-full"
                  src="images/img_doghouse2_337x600.png"
                  alt="doghouseTwo"
                />
                <div className="absolute flex flex-row gap-1 items-center justify-center right-[1%] top-[2%] w-auto">
                  <div className="bg-black-900_33 flex flex-col h-[18px] items-center justify-end p-[3px] rounded-sm w-[18px]">
                    <Img
                      className="h-[11px] w-3"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </div>
                  <div className="bg-black-900_33 flex flex-col h-[18px] items-center justify-start p-1 rounded-sm w-[18px]">
                    <Img
                      className="h-[9px] w-[9px]"
                      src="images/img_close_white_a700_9x9.svg"
                      alt="close"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 flex flex-1 flex-col items-center justify-start p-[132px] md:px-5 rounded-md w-full">
                <Input
                  name="search"
                  placeholder="Search Game"
                  className="!placeholder:text-white-A700_7f !text-white-A700_7f leading-[normal] p-0 text-center text-sm w-full"
                  wrapClassName="flex mb-6 mt-[7px] w-full"
                  prefix={
                    <Img
                      className="h-[21px] mr-2.5 my-auto"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  }
                  suffix={
                    <div className="h-[18px] ml-[35px] w-[18px] rounded-sm my-px">
                      <Img
                        className="h-[18px] rounded-sm my-auto"
                        src="images/img_icon_general_crosssmall_white_a700_18x18.svg"
                        alt="icon/general/cross-small"
                      />
                    </div>
                  }
                  shape="round"
                  color="blue_gray_900"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-gray-900 flex flex-col h-12 md:h-auto items-center justify-between max-w-[1248px] sm:px-5 px-6 py-1 w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start md:px-5 w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_icongamepageinfo.svg"
                  alt="icongamepageinf"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_icongamepagerecent.svg"
                  alt="icongamepagerec"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_icongamepagefullscreen.svg"
                  alt="icongamepageful"
                />
                <Img
                  className="h-6 rounded w-6"
                  src="images/img_computer_white_a700.svg"
                  alt="computer"
                />
                <Img
                  className="h-6 rounded w-6"
                  src="images/img_thumbsup_teal_400.svg"
                  alt="thumbsup"
                />
                <Img className="h-6 w-6" src="images/img_menu.svg" alt="menu" />
                <Img
                  className="h-6 w-6"
                  src="images/img_icongeneralcrosssmall.svg"
                  alt="icongeneralcros"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginedPage;
