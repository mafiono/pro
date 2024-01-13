import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header5 from "components/Header5";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const Page2: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-9 items-center justify-start mx-auto pb-[86px] w-full">
        <Header5 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1248px] w-full">
          <div className="flex flex-col gap-9 items-center justify-start max-w-[944px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-3 items-start justify-start max-w-[944px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                size="txtMontserratBold40"
              >
                Battle of the Magicians - €1000 Tournament
              </Text>
              <Text
                className="text-gray-500 text-sm w-auto"
                size="txtMontserratMedium14"
              >
                1-12. July 2022
              </Text>
            </div>
            <div className="h-[472px] relative w-full">
              <Img
                className="h-[472px] m-auto object-cover w-full"
                src="images/img_image96_152x304.png"
                alt="imageNinetySix"
              />
              <div className="absolute bottom-[0] h-[196px] inset-x-[0] mx-auto w-[944px] md:w-full">
                <div className="absolute h-[195px] md:h-[196px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[196px] m-auto shadow-bs3 w-full"></div>
                  <Text
                    className="absolute bottom-[16%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl uppercase w-max"
                    size="txtMontserratBlack24"
                  >
                    1-12 july 2022
                  </Text>
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
                  <Text
                    className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700 uppercase w-auto"
                    size="txtMontserratBlack52"
                  >
                    Battle of the magicians
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase w-auto"
                    size="txtMontserratBlack40"
                  >
                    €1000 Toutnament
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[944px] w-full">
              <Text
                className="max-w-[944px] md:max-w-full text-gray-500 text-sm"
                size="txtMontserratMedium14"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtMontserratBold30"
                >
                  Lorem Ipsum
                </Text>
                <Text
                  className="max-w-[944px] md:max-w-full text-gray-500 text-sm"
                  size="txtMontserratMedium14"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtMontserratBold20"
                >
                  Lorem Ipsum
                </Text>
                <Text
                  className="max-w-[944px] md:max-w-full text-gray-500 text-sm"
                  size="txtMontserratMedium14"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtMontserratBold14"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="max-w-[944px] md:max-w-full text-gray-500 text-sm"
                  size="txtMontserratMedium14"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-9 sm:px-5 w-full">
            <div className="flex flex-col gap-[18px] h-[315px] md:h-auto items-start justify-start max-w-[944px] mx-auto md:px-5 w-full">
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtMontserratBold14"
              >
                Other Articles
              </Text>
              <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[274px] justify-center max-w-[944px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="h-[152px] relative w-full">
                    <Img
                      className="h-[152px] m-auto object-cover w-full"
                      src="images/img_image96_152x304.png"
                      alt="imageNinetySix"
                    />
                    <div className="absolute bottom-[0] flex flex-col gap-1.5 h-[66px] md:h-auto inset-x-[0] items-center justify-start mx-auto shadow-bs3 w-[304px]">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-white-A700 uppercase w-auto"
                          size="txtMontserratBlack16"
                        >
                          Battle of the magicians
                        </Text>
                        <Text
                          className="text-sm text-white-A700 uppercase w-auto"
                          size="txtMontserratBlack14"
                        >
                          €1000 Toutnament
                        </Text>
                      </div>
                      <Text
                        className="text-[8px] text-white-A700 uppercase w-auto"
                        size="txtMontserratBlack8"
                      >
                        1-12 july 2022
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="max-w-[304px] md:max-w-full text-sm text-white-A700"
                      size="txtMontserratBold14"
                    >
                      Battle of the Magicians - €1000 Tournament
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-gray-500 text-sm w-full"
                        size="txtMontserratMedium14"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-[304px]">
                  <div className="h-[152px] relative w-full">
                    <Img
                      className="h-[152px] m-auto object-cover rounded-sm w-full"
                      src="images/img_image96_2.png"
                      alt="imageNinetySix"
                    />
                    <div className="absolute bottom-[0] flex flex-col gap-1.5 h-[66px] md:h-auto inset-x-[0] items-center justify-start mx-auto shadow-bs3 w-[304px]">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-white-A700 uppercase w-auto"
                          size="txtMontserratBlack16"
                        >
                          push it to the limit
                        </Text>
                        <Text
                          className="text-sm text-white-A700 uppercase w-auto"
                          size="txtMontserratBlack14"
                        >
                          €5000 push gaming tournament
                        </Text>
                      </div>
                      <Text
                        className="text-[8px] text-white-A700 uppercase w-auto"
                        size="txtMontserratBlack8"
                      >
                        13-25 august 2022
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtMontserratBold14"
                    >
                      €5000 Push Gaming Tournament
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-gray-500 text-sm w-full"
                        size="txtMontserratMedium14"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-[304px]">
                  <div className="h-[152px] relative w-full">
                    <Img
                      className="h-[152px] m-auto object-cover rounded-sm w-full"
                      src="images/img_image96_1.png"
                      alt="imageNinetySix"
                    />
                    <div className="absolute bottom-[0] flex flex-col h-[66px] md:h-auto inset-x-[0] items-center justify-start mx-auto shadow-bs3 w-[304px]">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-white-A700 uppercase w-auto"
                          size="txtMontserratBlack16"
                        >
                          The winning club
                        </Text>
                        <Text
                          className="text-sm text-white-A700 uppercase w-auto"
                          size="txtMontserratBlack14"
                        >
                          the crown is waiting for you
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtMontserratBold14"
                    >
                      Join the Winning Club
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-gray-500 text-sm w-full"
                        size="txtMontserratMedium14"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col gap-[34px] items-center justify-start max-w-[945px] mx-auto md:px-5 w-full">
            <Line className="bg-blue_gray-700 h-px w-full" />
            <div className="flex flex-col gap-[33px] items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-start w-auto md:w-full">
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
                  <a
                    href="javascript:"
                    className="text-gray-500 text-sm w-auto"
                  >
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
                  <a
                    href="javascript:"
                    className="text-gray-500 text-sm w-auto"
                  >
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
                  className="h-[100px] w-[908px]"
                  src="images/img_frame10403.svg"
                  alt="frame10403"
                />
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start max-w-[944px] w-full">
                <div className="flex flex-col items-start justify-start max-w-[944px] w-full">
                  <Text
                    className="leading-[20.00px] max-w-[890px] md:max-w-full text-gray-500 text-xs"
                    size="txtMontserratMedium12"
                  >
                    Winning is operated by Dama N.V., a company registered and
                    established under the laws of Curacao. Dama N.V. is licensed
                    and regulated by Antillephone N.V. (license no.
                    8048/JAZ2020-013). Dama N.V.’s registration number is 152125
                    and its registered address is Julianaplein 36, Willemstad,
                    Curaçao. Friolion Limited is a subsidiary of Dama N.V.,
                    acting as an Agent on behalf of Dama N.V., registered in
                    Cyprus with registered address Leandrou, 12A 3086, Limassol,
                    Cyprus, and registration number ΗΕ 419102. All payments with
                    Paysafe are made via Dama N.V. Winning © Copyright 2022.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[41%] md:w-full">
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
      </div>
    </>
  );
};

export default Page2;
