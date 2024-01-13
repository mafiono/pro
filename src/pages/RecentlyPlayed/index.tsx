import React from "react";

import { Button, Img, List, Text } from "components";
import Header5 from "components/Header5";
import PWAOneGamecard from "components/PWAOneGamecard";
import PWAOneGamecard1 from "components/PWAOneGamecard1";
import PWAOneGamecard2 from "components/PWAOneGamecard2";

const RecentlyPlayedPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <Header5 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[1282px] h-[702px] md:px-5 relative w-full">
            <Img
              className="h-[702px] m-auto object-cover w-full"
              src="images/img_doghouse2.png"
              alt="doghouseTwo"
            />
            <div className="absolute bg-blue_gray-900_01 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[18px] rounded-tl-[10px] rounded-tr-[10px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start max-w-[1200px] w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1200px] w-full">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtMontserratBold16"
                    >
                      Recently Played
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <Button
                        className="flex h-[35px] items-center justify-center rounded-[3px] w-[35px]"
                        shape="round"
                        color="blue_gray_900_01"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          src="images/img_arrowdown_gray_600.svg"
                          alt="arrowdown"
                        />
                      </Button>
                      <Button
                        className="flex h-[35px] items-center justify-center rounded-[3px] w-[35px]"
                        shape="round"
                        color="blue_gray_900_01"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_arrowleft.svg" alt="arrowleft" />
                      </Button>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[50px] rounded-[3px] text-center text-sm"
                        shape="round"
                        color="blue_gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        All
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1200px] w-full">
                    <PWAOneGamecard
                      className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                      userimage="images/img_notombofakhenaten.png"
                      priceOne="EUR 8.000.000"
                    />
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-8 grid grid-cols-2 w-[27%] md:w-full"
                      orientation="horizontal"
                    >
                      <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                      <PWAOneGamecard1
                        className="md:h-[198px] h-[200px] relative rounded-md w-full"
                        userimage="images/img_notombofakhenaten_1.png"
                      />
                    </List>
                    <PWAOneGamecard
                      className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                      iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                      priceOne="EUR 8.000.000"
                    />
                    <PWAOneGamecard1
                      className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                      userimage="images/img_notombofakhenaten_2.png"
                    />
                    <PWAOneGamecard2 className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full" />
                    <PWAOneGamecard
                      className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                      userimage="images/img_notombofakhenaten_5.png"
                      iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                      priceOne="EUR 8.000.000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-gray-900 flex sm:flex-col flex-row md:gap-10 h-12 md:h-auto items-center justify-between max-w-[1248px] sm:px-5 px-6 py-1 w-full">
              <div className="flex flex-col items-start justify-start md:px-5 w-auto">
                <Text
                  className="text-center text-white-A700 text-xs w-auto"
                  size="txtMontserratBold12"
                >
                  The Dog House Megaways - Pragmatic Play
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start md:px-5 w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_icongamepageinfo.svg"
                  alt="icongamepageinf"
                />
                <Img
                  className="h-6 rounded w-6"
                  src="images/img_icongamepagerecent_teal_400.svg"
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
                <Img className="h-6 w-6" src="images/img_grid.svg" alt="grid" />
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

export default RecentlyPlayedPage;
