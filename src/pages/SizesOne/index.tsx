import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img } from "components";

const SizesOnePage: React.FC = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row gap-2.5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar
          className="!sticky !w-[512px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
          style={{ backgroundImage: "url('images/img_512.png')" }}
        >
          <Img
            className="h-[389px] md:h-auto mx-auto my-[61px] object-cover"
            src="images/img_logo_389x440.png"
            alt="logo"
          />
        </Sidebar>
        <div className="flex flex-1 flex-col h-48 items-center justify-start md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-48 items-center justify-start p-[13px] w-48"
            style={{ backgroundImage: "url('images/img_512.png')" }}
          >
            <Img
              className="h-[146px] md:h-auto my-[9px] object-cover"
              src="images/img_logo_389x440.png"
              alt="logo_One"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col h-[180px] items-center justify-start md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[180px] items-center justify-start p-3 w-[180px]"
            style={{ backgroundImage: "url('images/img_512.png')" }}
          >
            <Img
              className="h-[137px] md:h-auto my-2 object-cover"
              src="images/img_logo_389x440.png"
              alt="logo_Two"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col h-36 items-center justify-start md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-36 items-center justify-start p-2.5 w-36"
            style={{ backgroundImage: "url('images/img_512.png')" }}
          >
            <Img
              className="h-[109px] md:h-auto my-[7px] object-cover"
              src="images/img_logo_389x440.png"
              alt="logo_Three"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col h-24 items-center justify-start md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-24 items-center justify-start p-1.5 w-24"
            style={{ backgroundImage: "url('images/img_512.png')" }}
          >
            <Img
              className="h-[73px] md:h-auto my-1 object-cover"
              src="images/img_logo_389x440.png"
              alt="logo_Four"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col h-[72px] items-center justify-start md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[72px] items-center justify-start p-[5px] w-[72px]"
            style={{ backgroundImage: "url('images/img_512.png')" }}
          >
            <Img
              className="h-[54px] md:h-auto my-[3px] object-cover"
              src="images/img_logo_389x440.png"
              alt="logo_Five"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col h-12 items-center justify-start md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-12 items-center justify-start p-[3px] w-12"
            style={{ backgroundImage: "url('images/img_512.png')" }}
          >
            <Img
              className="h-9 md:h-auto my-0.5 object-cover"
              src="images/img_logo_389x440.png"
              alt="logo_Six"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col h-9 items-center justify-start md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-9 items-center justify-start p-0.5 w-9"
            style={{ backgroundImage: "url('images/img_512.png')" }}
          >
            <Img
              className="h-[27px] md:h-auto object-cover"
              src="images/img_logo_389x440.png"
              alt="logo_Seven"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SizesOnePage;
