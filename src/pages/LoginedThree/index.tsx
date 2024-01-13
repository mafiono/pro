import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C1248LoginedThreeGamesearch from "components/C1248LoginedThreeGamesearch";
import C1248LoginedThreeGamesearch1 from "components/C1248LoginedThreeGamesearch1";
import Header6 from "components/Header6";

const LoginedThreePage: React.FC = () => {
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
              <div className="bg-gray-900 flex flex-1 flex-col items-center justify-end pt-[19px] md:px-5 px-[19px] rounded-md w-full">
                <Input
                  name="search"
                  placeholder="Pirates 2 Mu..."
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-center text-sm w-full"
                  wrapClassName="border border-solid border-teal-400 flex rounded-[7px] w-3/5"
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
                <div className="flex flex-col font-montserrat gap-[38px] items-center justify-start mt-0.5 rounded-md w-3/5 md:w-full">
                  <div className="flex flex-col gap-[38px] items-start justify-start rounded-md w-auto">
                    <div className="h-[274px] relative w-full">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <C1248LoginedThreeGamesearch
                            className="bg-blue_gray-900 flex flex-row gap-2.5 items-center justify-start p-1.5 w-full"
                            pushgaming="PUSH GAMING"
                          />
                          <C1248LoginedThreeGamesearch1 className="bg-gray-900 flex flex-row gap-2.5 items-center justify-start p-1.5 w-full" />
                          <C1248LoginedThreeGamesearch
                            className="bg-blue_gray-900 flex flex-row gap-2.5 items-center justify-start p-1.5 w-full"
                            userimage="images/img_notombofakhenaten_7.png"
                            pushgaming="PUSH GAMING"
                          />
                          <C1248LoginedThreeGamesearch
                            className="bg-blue_gray-900 flex flex-row gap-2.5 items-end justify-start pt-1.5 px-1.5 w-full"
                            userimage="images/img_notombofakhenaten_33x64.png"
                          />
                        </div>
                      </div>
                      <div className="absolute h-[250px] right-[0] top-[1%] w-[2%]">
                        <Line className="bg-blue_gray-800 h-[250px] m-auto rounded-sm w-[5px]" />
                        <Line className="absolute bg-teal-400 h-7 inset-x-[0] mx-auto rounded-sm top-[12%] w-[5px]" />
                      </div>
                    </div>
                    <C1248LoginedThreeGamesearch
                      className="bg-blue_gray-900 flex flex-row gap-2.5 items-end justify-start pt-1.5 px-1.5 w-full"
                      userimage="images/img_notombofakhenaten_1x64.png"
                      pushgaming="PUSH GAMING"
                    />
                  </div>
                  <Line className="bg-gradient1  h-[-37px] rounded-bl-md rounded-br-md w-full" />
                </div>
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

export default LoginedThreePage;
