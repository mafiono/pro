import React from "react";

import { Img, Text } from "components";

const BannerNinePage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-montserrat h-[632px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_bannernine.png')" }}
      >
        <div className="absolute bottom-[0] h-[937px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="overflow-x-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
                <Img
                  className="md:flex-1 h-[385px] sm:h-auto object-cover w-[56%] md:w-full"
                  src="images/img_image100.png"
                  alt="image100"
                />
                <div className="backdrop-opacity-[0.5] bg-teal-300 blur-[200.00px] h-[817px] md:mt-0 mt-[120px] rotate-[41deg] rounded-[408px] w-[817px]"></div>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[385px] object-cover right-[0] top-[0] w-[56%]"
            src="images/img_image101.png"
            alt="image101"
          />
          <div className="absolute md:h-[659px] h-[813px] inset-x-[0] mx-auto pb-[85px] top-[0] w-full">
            <div className="md:h-[659px] h-[728px] mx-auto w-full">
              <div className="md:h-[659px] h-[728px] m-auto w-full">
                <div className="md:h-[659px] h-[728px] m-auto w-full">
                  <Img
                    className="absolute h-[632px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_image98.png"
                    alt="imageNinetyEight"
                  />
                  <Img
                    className="absolute bottom-[11%] h-[447px] left-[0] object-cover w-[42%]"
                    src="images/img_image99.png"
                    alt="imageNinetyNine"
                  />
                  <Img
                    className="absolute bottom-[0] h-[659px] object-cover right-[10%] w-[27%]"
                    src="images/img_baseballplayer.png"
                    alt="baseballplayer"
                  />
                </div>
                <Img
                  className="absolute h-[589px] object-cover right-[16%] top-[2%] w-[64%]"
                  src="images/img_frame10446.png"
                  alt="frame10446"
                />
              </div>
              <div className="absolute bg-gradient8  bottom-[13%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col gap-[22px] h-[263px] md:h-auto items-center justify-start max-w-[1264px] shadow-bs3 w-full">
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <Text
                      className="md:text-5xl text-[70px] text-white-A700 uppercase w-auto"
                      size="txtMontserratBlack70"
                    >
                      Battle of the magicians
                    </Text>
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 uppercase w-auto"
                      size="txtMontserratBlack50"
                    >
                      €1000 Toutnament
                    </Text>
                  </div>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-auto"
                    size="txtMontserratBlack32"
                  >
                    1-12 july 2022
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[126px] object-cover right-[35%] top-[0] w-[14%]"
              src="images/img_image102.png"
              alt="image102"
            />
            <Img
              className="absolute h-36 left-[0] object-cover top-[31%] w-[7%]"
              src="images/img_image103.png"
              alt="image103"
            />
            <Img
              className="absolute h-[78px] object-cover right-[0] top-[20%] w-[5%]"
              src="images/img_image104.png"
              alt="image104"
            />
          </div>
        </div>
        <div className="absolute backdrop-opacity-[0.5] bg-teal-300 blur-[200.00px] bottom-[0] h-[817px] left-[0] md:px-5 rotate-[41deg] rounded-[408px] w-[817px]"></div>
      </div>
    </>
  );
};

export default BannerNinePage;
