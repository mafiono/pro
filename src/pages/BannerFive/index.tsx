import React from "react";

import { Img, Text } from "components";

const BannerFivePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 font-montserrat h-[632px] mx-auto relative w-full">
        <div className="absolute bottom-[0] md:h-[1028px] h-[1156px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="md:h-[1028px] h-[1156px] m-auto w-full">
            <div className="absolute inset-x-[0] mx-auto overflow-x-auto top-[0] w-full">
              <div className="flex overflow-auto relative w-full">
                <div className="h-[1028px] m-auto w-full">
                  <div className="h-[1028px] m-auto w-full">
                    <Img
                      className="absolute h-[738px] left-[0] object-cover rotate-[41deg] top-[0] w-[59%]"
                      src="images/img_ellipse2_738x744.png"
                      alt="ellipseTwo"
                    />
                    <Img
                      className="absolute h-[1028px] inset-y-[0] my-auto object-cover right-[0] rotate-[41deg] w-[51%]"
                      src="images/img_ellipse3_1028x640.png"
                      alt="ellipseThree"
                    />
                  </div>
                  <Img
                    className="absolute h-[632px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_image98.png"
                    alt="imageNinetyEight"
                  />
                </div>
                <Img
                  className="h-[977px] ml-[-393px] my-auto object-cover w-[63%] z-[1]"
                  src="images/img_clustertumblescatter.png"
                  alt="clustertumblesc"
                />
              </div>
            </div>
            <div className="absolute h-[1156px] md:h-[632px] inset-[0] justify-center m-auto pb-[524px] w-full">
              <div className="h-[632px] mx-auto w-full">
                <Img
                  className="h-[632px] m-auto object-cover w-full"
                  src="images/img_mmatwoprofess.png"
                  alt="mmatwoprofess"
                />
                <div className="absolute bg-gradient7  bottom-[0] h-[308px] inset-x-[0] mx-auto w-full"></div>
              </div>
              <div className="absolute h-[357px] right-[0] top-[0] w-1/2 md:w-full">
                <Img
                  className="h-[357px] m-auto object-cover w-full"
                  src="images/img_image107.png"
                  alt="image107"
                />
                <Img
                  className="absolute h-[86px] left-[31%] object-cover top-[0] w-[24%]"
                  src="images/img_image109.png"
                  alt="image109"
                />
              </div>
            </div>
            <div className="absolute h-[558px] left-[0] top-[0] w-[47%] sm:w-full">
              <Img
                className="h-[558px] m-auto object-cover w-full"
                src="images/img_image106.png"
                alt="image106"
              />
              <Img
                className="absolute h-[129px] left-[3%] object-cover top-[9%] w-[23%]"
                src="images/img_image110.png"
                alt="image110"
              />
            </div>
            <Img
              className="absolute h-[316px] object-cover right-[0] top-[21%] w-[24%]"
              src="images/img_image108.png"
              alt="image108"
            />
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[32%] w-auto">
            <Text
              className="md:text-5xl text-[80px] text-white-A700 uppercase w-auto"
              size="txtMontserratBlack80"
            >
              push it to the limit
            </Text>
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 uppercase w-auto"
              size="txtMontserratBlack50"
            >
              €5000 push gaming tournament
            </Text>
          </div>
        </div>
        <Text
          className="absolute bottom-[6%] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-max"
          size="txtMontserratBlack32"
        >
          13-25 august 2022
        </Text>
        <Img
          className="absolute bottom-[0] h-[977px] left-[0] object-cover w-[63%]"
          src="images/img_clustertumblescatter.png"
          alt="clustertumblesc_One"
        />
      </div>
    </>
  );
};

export default BannerFivePage;
