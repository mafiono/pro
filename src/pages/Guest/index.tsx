import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Header5 from "components/Header5";

const GuestPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <Header5 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
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

export default GuestPage;
