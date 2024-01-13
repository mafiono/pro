import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Header4 from "components/Header4";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const Page: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-9 items-center justify-start mx-auto pb-[21px] w-full">
        <Header4 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-start justify-start max-w-[1264px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-center py-1 w-auto md:w-full">
            <a
              href="javascript:"
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
            >
              <Text size="txtMontserratBold24">Support</Text>
            </a>
            <Text
              className="text-base text-white-A700 w-[443px]"
              size="txtMontserratRegular16"
            >
              Please, fill the information below. All fields are required.
            </Text>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start max-w-[1264px] w-full">
            <div className="flex md:flex-col flex-row gap-4 items-center justify-between max-w-[1105px] w-full">
              <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Input
                  name="inputs"
                  placeholder="Enter your Email"
                  className="leading-[normal] md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-center text-xs w-full"
                  wrapClassName="rounded w-full"
                  type="email"
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="fill"
                ></Input>
                <TextArea
                  className="bg-gray-900 border-0 gap-2.5 h-[200px] leading-[normal] max-w-[704px] px-2.5 py-[11px] rounded text-center placeholder:text-gray-500 text-gray-500 text-xs w-full"
                  name="inputs_One"
                  placeholder="Enter your Message"
                ></TextArea>
              </div>
              <div className="flex sm:flex-1 flex-col gap-5 h-[255px] md:h-auto items-start justify-start w-[385px] sm:w-full">
                <div className="flex flex-row gap-[19px] items-start justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_iconsupportchat.svg"
                    alt="iconsupportchat"
                  />
                  <div className="flex flex-col gap-1 items-start justify-start w-[305px]">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtMontserratBold18"
                    >
                      Chat
                    </Text>
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtMontserratLight12"
                    >
                      Get the answer as quick as lightning!
                    </Text>
                    <Input
                      name="frame369"
                      placeholder="Chat with us"
                      className="font-bold leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-left text-white-A700 text-xs w-full"
                      wrapClassName="flex pr-[35px] w-full"
                      prefix={
                        <Img
                          className="mr-1 my-px"
                          src="images/img_icon_support_chat_white_a700.svg"
                          alt="icon/Support/chat"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-row gap-[19px] items-start justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_iconsupportmessage.svg"
                    alt="iconsupportmess"
                  />
                  <div className="flex flex-col gap-1 items-start justify-start w-[237px]">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtMontserratBold18"
                    >
                      Email
                    </Text>
                    <Text
                      className="max-w-[237px] md:max-w-full text-white-A700 text-xs"
                      size="txtRobotoLight12"
                    >
                      <span className="text-white-A700 font-montserrat text-left font-light">
                        We monitor our inboxes and respond as quick as a flash{" "}
                      </span>
                      <span className="text-teal-400 font-montserrat text-left font-medium">
                        support@winning.io
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[19px] items-start justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_iconsupportfaq.svg"
                    alt="iconsupportfaq"
                  />
                  <div className="flex flex-col gap-1 items-start justify-start w-[281px]">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtMontserratBold18"
                    >
                      FAQ
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtRobotoLight12"
                    >
                      <span className="text-white-A700 font-montserrat text-left font-light">
                        <>
                          How to play?
                          <br />
                          How can i withdraw the winnings?
                          <br />
                          Answer to these questions in the{" "}
                        </>
                      </span>
                      <span className="text-teal-400 font-montserrat text-left font-medium">
                        FAQ
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold h-10 leading-[normal] min-w-[82px] text-center text-sm"
              shape="round"
              color="teal_400"
              size="md"
              variant="fill"
            >
              Submit
            </Button>
          </div>
          <Line className="bg-blue_gray-700 h-px w-full" />
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

export default Page;
