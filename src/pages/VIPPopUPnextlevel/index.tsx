import React from "react";

import { Img, Text } from "components";

const VIPPopUPnextlevelPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-blue_gray-900 bg-cover bg-no-repeat flex flex-col font-montserrat h-[1136px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_vippopupnextlevel.png')" }}
      >
        <div className="bg-gray-900_a2 flex flex-col items-center justify-start p-[375px] md:px-10 sm:px-5 w-full">
          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start md:px-5 rounded-md w-[94%] md:w-full">
            <div className="h-[385px] relative w-full">
              <div className="h-[385px] m-auto w-full">
                <div className="h-[385px] m-auto w-full">
                  <Img
                    className="absolute h-[385px] inset-[0] justify-center m-auto object-cover rounded-md w-full"
                    src="images/img_rectangle39465.png"
                    alt="rectangle39465"
                  />
                  <Img
                    className="absolute backdrop-opacity-[0.5] blur-[50.00px] bottom-[31%] h-[103px] inset-x-[0] mx-auto w-[51%]"
                    src="images/img_star1_103x236.svg"
                    alt="starOne"
                  />
                  <div className="absolute flex flex-col gap-2.5 h-max inset-[0] items-center justify-start m-auto w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                        size="txtMontserratBold40"
                      >
                        Congratulations!
                      </Text>
                      <Text
                        className="text-center text-sm text-white-A700 w-auto"
                        size="txtMontserratMedium14WhiteA700"
                      >
                        You have unlocked
                      </Text>
                    </div>
                    <Img
                      className="h-[137px] w-[115px]"
                      src="images/img_level3.svg"
                      alt="levelThree"
                    />
                    <div className="flex flex-col gap-1 items-center justify-start w-[181px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                        size="txtMontserratBold32"
                      >
                        Level 3
                      </Text>
                      <Text
                        className="text-center text-sm text-yellow-700 w-auto"
                        size="txtMontserratMedium14Yellow700"
                      >
                        145 Free Spins
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-center justify-center w-auto">
                      <div className="flex flex-row gap-[5px] items-center justify-center w-[167px]">
                        <Text
                          className="text-base text-right text-white-A700 w-auto"
                          size="txtMontserratRomanMedium16"
                        >
                          Next Level:
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtMontserratBold20"
                        >
                          Level 4
                        </Text>
                      </div>
                      <Text
                        className="text-center text-sm text-yellow-700 w-auto"
                        size="txtMontserratMedium14Yellow700"
                      >
                        € 35 Cash
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[91px] right-[3%] top-[3%]"
                  src="images/img_settings_blue_gray_900.svg"
                  alt="settings"
                />
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[180px] h-max inset-[0] items-center justify-center m-auto w-[96%]">
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    className="h-[89px] mt-0.5"
                    src="images/img_settings_blue_gray_900_89x91.svg"
                    alt="settings_One"
                  />
                  <Img
                    className="h-[23px] w-6"
                    src="images/img_icon_general_crosssmall_white_a700.svg"
                    alt="iconheadercrosm"
                  />
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Img
                    className="h-[91px]"
                    src="images/img_corner.svg"
                    alt="corner"
                  />
                  <Img
                    className="h-[89px]"
                    src="images/img_user_blue_gray_900.svg"
                    alt="user"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VIPPopUPnextlevelPage;
