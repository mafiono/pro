import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const LoginedTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full">
          <Img
            className="h-6 md:ml-[0] ml-[11px] md:mt-0 my-[17px] w-6"
            src="images/img_megaphone_gray_500.svg"
            alt="megaphone"
          />
          <div className="flex flex-1 flex-row md:gap-10 items-center justify-between max-w-[1050px] md:ml-[0] ml-[11px] mr-[152px] md:mt-0 my-2.5 w-full">
            <Img
              className="h-10 md:h-auto object-cover w-[94px]"
              src="images/img_logo.png"
              alt="logo"
            />
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="round"
                color="gray_900"
                size="sm"
                variant="fill"
              >
                <Img className="h-6" src="images/img_search.svg" alt="search" />
              </Button>
              <Button
                className="cursor-pointer font-bold h-10 leading-[normal] min-w-[76px] text-center text-sm"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                Wallet
              </Button>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="round"
                color="gray_900"
                size="sm"
                variant="fill"
              >
                <Img className="h-6" src="images/img_lock.svg" alt="lock" />
              </Button>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="round"
                color="gray_900"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_iconheaderbell.svg"
                  alt="iconheaderbell"
                />
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col h-[750px] md:h-auto items-center justify-start max-w-[1248px] w-full">
          <Img
            className="h-[702px] sm:h-auto object-cover w-[1248px] md:w-full"
            src="images/img_doghouse2.png"
            alt="doghouseTwo"
          />
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-gray-900 flex sm:flex-col flex-row md:gap-10 h-12 md:h-auto items-start justify-between max-w-[1248px] sm:px-5 px-6 py-1 w-full">
              <Sidebar className="!sticky !w-[274px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
                <Text
                  className="text-center text-white-A700 text-xs w-auto"
                  size="txtMontserratBold12"
                >
                  The Dog House Megaways - Pragmatic Play
                </Text>
              </Sidebar>
              <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:px-5 w-full">
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
                  src="images/img_icongamecardheartoff.svg"
                  alt="icongamecardhea"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_icongamepagefullscreen.svg"
                  alt="icongamepageful"
                />
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="round"
                  color="teal_400"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_computer.svg" alt="computer" />
                </Button>
                <Img className="h-6 w-6" src="images/img_grid.svg" alt="grid" />
                <Img className="h-6 w-6" src="images/img_menu.svg" alt="menu" />
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_general_crosssmall_white_a700.svg"
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

export default LoginedTwoPage;
