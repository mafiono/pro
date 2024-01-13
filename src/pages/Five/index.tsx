import React from "react";

import { Button, Img, Line, Text } from "components";
import Header1 from "components/Header1";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const FivePage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-9 items-center justify-start mx-auto pb-[43px] w-full">
        <Header1 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1264px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-9 items-center justify-start w-auto md:w-full">
            <div className="md:h-[435px] h-[527px] sm:h-[910px] relative w-[61%] md:w-full">
              <div className="absolute md:h-[435px] h-[526px] sm:h-[910px] inset-[0] justify-center m-auto w-[99%] md:w-full">
                <div className="absolute bottom-[0] h-[435px] sm:h-[910px] inset-x-[0] mx-auto w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="md:text-5xl text-[400px] text-white-A700"
                        size="txtMontserratExtraBold400"
                      >
                        4
                      </Text>
                      <Text
                        className="md:text-5xl text-[400px] text-white-A700"
                        size="txtMontserratExtraBold400"
                      >
                        4
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[338px] object-cover right-[20%] w-[56%]"
                    src="images/img_visitorssymcow.png"
                    alt="visitorssymcow"
                  />
                </div>
                <Img
                  className="absolute h-[404px] inset-x-[0] mx-auto object-cover top-[0] w-[67%]"
                  src="images/img_farminvaderscharacter2.png"
                  alt="farminvaderscha"
                />
              </div>
              <div className="absolute backdrop-opacity-[0.5] blur-[4.00px] flex h-[82px] justify-end right-[0] top-[17%] w-[14%]">
                <Img
                  className="h-[21px] mt-auto mx-auto object-cover w-[21px]"
                  src="images/img_chicken1.png"
                  alt="chickenOne"
                />
                <Img
                  className="absolute h-[82px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_farminvaderscharacter2_82x102.png"
                  alt="farminvaderscha_One"
                />
              </div>
              <div className="absolute backdrop-opacity-[0.5] blur-[2.00px] md:h-[150px] h-[194px] left-[0] top-[0] w-1/4">
                <Img
                  className="absolute bottom-[0] h-[81px] inset-x-[0] mx-auto object-cover w-[37%]"
                  src="images/img_sheep1.png"
                  alt="sheepOne"
                />
                <Img
                  className="absolute h-[150px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  src="images/img_farminvaderscharacter2_150x187.png"
                  alt="farminvaderscha_Two"
                />
              </div>
            </div>
            <div className="flex flex-col gap-9 items-center justify-center w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                  size="txtMontserratBold40"
                >
                  Sorry, we couldn’t find the page you are looking for...
                </Text>
                <Text
                  className="leading-[160.00%] max-w-[1200px] md:max-w-full text-base text-center text-gray-500"
                  size="txtMontserratMedium16"
                >
                  <>
                    It may have been removed, had its name changed, or is
                    temporarily unavailable. Casino Team is really sorry we
                    couldn&#39;t provide you with what you were searching for,
                    but we promise to try our best to help you.
                  </>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-[440px]"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                Go to the Main Page
              </Button>
            </div>
            <Line className="bg-blue_gray-700 h-px w-full" />
          </div>
          <div className="flex flex-col gap-[33px] items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[147px] items-start justify-between w-auto md:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  Casino
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Games
                </Text>
                <Text
                  className="text-sm text-yellow-700 w-auto"
                  size="txtMontserratMedium14Yellow700"
                >
                  Winning Club
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Promotions
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Game Providers
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  Sports
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Home
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Live Events
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Sport Rules
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <a
                  href="javascript:"
                  className="text-base text-white-A700 w-auto"
                >
                  <Text size="txtMontserratBold16">Support</Text>
                </a>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Affiliate Program
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Responsible Gaming
                </Text>
                <a href="javascript:" className="text-gray-500 text-sm w-auto">
                  <Text size="txtMontserratMedium14">Contact Us</Text>
                </a>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  FAQ
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  About Winning
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  About Us
                </Text>
                <a href="javascript:" className="text-gray-500 text-sm w-auto">
                  <Text size="txtMontserratMedium14">Privacy Policy</Text>
                </a>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Cookie Policy
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  General Terms
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Bonus Terms
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <PaymentsDepositItem className="bg-gray-900 flex flex-row gap-[17px] items-center justify-between p-[7px] rounded-md w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
              <Text
                className="text-base text-white-A700 w-[154px]"
                size="txtMontserratBold16"
              >
                Payment Methods
              </Text>
              <Img
                className="h-[60px] w-[1258px]"
                src="images/img_frame10403.svg"
                alt="frame10403"
              />
            </div>
            <div className="flex flex-col gap-[31px] items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[1264px] w-full">
                <Text
                  className="leading-[20.00px] max-w-[1210px] md:max-w-full text-gray-500 text-xs"
                  size="txtMontserratMedium12"
                >
                  Winning is operated by Dama N.V., a company registered and
                  established under the laws of Curacao. Dama N.V. is licensed
                  and regulated by Antillephone N.V. (license no.
                  8048/JAZ2020-013). Dama N.V.’s registration number is 152125
                  and its registered address is Julianaplein 36, Willemstad,
                  Curaçao. Friolion Limited is a subsidiary of Dama N.V., acting
                  as an Agent on behalf of Dama N.V., registered in Cyprus with
                  registered address Leandrou, 12A 3086, Limassol, Cyprus, and
                  registration number ΗΕ 419102. All payments with Paysafe are
                  made via Dama N.V. Winning © Copyright 2022.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                  <Img
                    className="h-5 w-[26px]"
                    src="images/img_user_gray_500.svg"
                    alt="user"
                  />
                  <Img
                    className="h-5 w-[69px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Img
                    className="h-5 w-[154px]"
                    src="images/img_begambleaware.svg"
                    alt="begambleaware"
                  />
                  <Img
                    className="h-5 w-8"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_image60.png"
                    alt="imageSixty"
                  />
                </div>
              </div>
              <Text
                className="text-gray-500 text-xs w-auto"
                size="txtMontserratMedium12"
              >
                Winning.io © Copyright 2022. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FivePage;
