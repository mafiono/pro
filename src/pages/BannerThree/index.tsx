import React from "react";

import { Img, Text } from "components";

const BannerThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 font-montserrat h-[632px] mx-auto overflow-auto relative w-full">
        <div className="absolute bottom-[0] left-[0] overflow-x-auto w-full">
          <div className="md:h-[1028px] h-[1216px] md:px-5 relative w-full">
            <div className="md:h-[1028px] h-[1216px] m-auto w-full">
              <div className="absolute bottom-[0] h-[1028px] right-[0] w-[79%] md:w-full">
                <div className="h-[1028px] m-auto w-full">
                  <div className="h-[1028px] m-auto w-full">
                    <div className="h-[1028px] m-auto w-full">
                      <div className="absolute h-[738px] inset-x-[0] mx-auto top-[0] w-full">
                        <div className="absolute h-[631px] inset-x-[0] mx-auto top-[0] w-full">
                          <Img
                            className="h-[631px] m-auto object-cover w-full"
                            src="images/img_rgclustertumblebackground.png"
                            alt="rgclustertumble"
                          />
                          <Img
                            className="absolute h-[370px] inset-x-[0] mx-auto object-cover top-[0] w-[41%]"
                            src="images/img_clustertumbleh1.png"
                            alt="clustertumblehOne"
                          />
                        </div>
                        <Img
                          className="absolute h-[738px] inset-y-[0] left-[0] my-auto object-cover rotate-[41deg] w-[59%]"
                          src="images/img_ellipse2.png"
                          alt="ellipseTwo"
                        />
                      </div>
                      <Img
                        className="absolute h-[1028px] inset-y-[0] my-auto object-cover right-[0] rotate-[41deg] w-[51%]"
                        src="images/img_ellipse3.png"
                        alt="ellipseThree"
                      />
                    </div>
                    <Img
                      className="absolute h-[629px] left-[0] object-cover top-[0] w-[68%]"
                      src="images/img_image116.png"
                      alt="image116"
                    />
                  </div>
                  <Img
                    className="absolute h-[632px] object-cover right-[8%] top-[0] w-[47%]"
                    src="images/img_image112.png"
                    alt="image112"
                  />
                </div>
                <div className="absolute bg-gradient6  h-[317px] inset-x-[0] mx-auto top-[31%] w-full"></div>
              </div>
              <Img
                className="absolute h-[529px] left-[0] object-cover top-[0] w-[52%]"
                src="images/img_image113.png"
                alt="image113"
              />
            </div>
            <Img
              className="absolute h-[632px] left-[21%] object-cover top-[15%] w-[26%]"
              src="images/img_image114.png"
              alt="image114"
            />
            <Img
              className="absolute h-[555px] object-cover right-[0] top-[22%] w-2/5"
              src="images/img_image115.png"
              alt="image115"
            />
          </div>
        </div>
        <div className="absolute bottom-[6%] flex flex-col gap-[21px] inset-x-[0] items-center justify-start max-w-[978px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-auto md:w-full">
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
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase"
            size="txtMontserratBlack32"
          >
            13-25 august 2022
          </Text>
        </div>
        <Img
          className="absolute h-[529px] object-cover right-[0] top-[0] w-[67%]"
          src="images/img_image113.png"
          alt="image108"
        />
      </div>
    </>
  );
};

export default BannerThreePage;
