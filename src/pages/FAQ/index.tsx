import React from "react";

import { Button, Img, Line, Text } from "components";
import Header3 from "components/Header3";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const FAQPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-5 items-center justify-end mx-auto w-full">
        <Header3 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-[35px] items-start justify-start max-w-[945px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
            size="txtMontserratBold40"
          >
            FREQUENTLY ASKED QUESTIONS
          </Text>
          <div className="flex flex-col gap-2 items-start justify-start max-w-[944px] w-full">
            <div className="bg-gray-900 flex md:flex-col flex-row gap-9 items-start justify-between p-1.5 rounded-md w-full">
              <div className="flex flex-1 flex-col gap-1.5 items-start justify-start max-w-[863px] mb-3 md:ml-[0] ml-[11px] w-full">
                <Text
                  className="text-base text-white-A700 tracking-[0.16px] w-auto"
                  size="txtMontserratMedium16WhiteA700"
                >
                  What should I do if I have forgotten my password?
                </Text>
                <Text
                  className="max-w-[863px] md:max-w-full text-base text-gray-500"
                  size="txtRobotoRegular16"
                >
                  <span className="text-gray-500 tracking-[0.16px] font-montserrat text-left font-medium">
                    If you forgot your password you can get a new password
                    immediately using the forgot password page. If you run into
                    any issues our super friendly 24/7 support staff will help
                    you in real time via chat - the orange icon at the bottom
                    right of this page will open chat - or email at
                    support@casino.com
                  </span>
                  <span className="text-gray-500 tracking-[0.16px] font-montserrat text-left font-medium">
                    .
                  </span>
                </Text>
              </div>
              <Img
                className="h-[18px] mr-1 md:mt-0 mt-1 rounded w-[18px]"
                src="images/img_icongeneralarrowdown_white_a700_1.svg"
                alt="icongeneralarro"
              />
            </div>
            <div className="bg-gray-900 flex flex-row sm:gap-10 items-center justify-between p-1.5 rounded-md w-full">
              <Text
                className="ml-2.5 mt-[5px] text-base text-gray-500 tracking-[0.16px]"
                size="txtMontserratMedium16"
              >
                Are the games fair?
              </Text>
              <Img
                className="h-[18px] mr-0.5 rounded w-[18px]"
                src="images/img_icongeneralarrowup_gray_500.svg"
                alt="icongeneralarro_One"
              />
            </div>
            <div className="bg-gray-900 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-1.5 rounded-md w-full">
              <Text
                className="ml-2.5 sm:ml-[0] sm:mt-0 mt-[5px] text-base text-gray-500 tracking-[0.16px]"
                size="txtMontserratMedium16"
              >
                Can I play the casino games without spending any money?
              </Text>
              <Img
                className="h-[18px] mr-0.5 rounded w-[18px]"
                src="images/img_icongeneralarrowup_gray_500.svg"
                alt="icongeneralarro_Two"
              />
            </div>
            <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between p-1.5 rounded-md w-full">
              <Text
                className="ml-2.5 md:ml-[0] md:mt-0 mt-[5px] text-base text-gray-500 tracking-[0.16px]"
                size="txtMontserratMedium16"
              >
                What happens if the game I’m playing freezes in the middle of a
                round?
              </Text>
              <Img
                className="h-[18px] mr-0.5 rounded w-[18px]"
                src="images/img_icongeneralarrowup_gray_500.svg"
                alt="icongeneralarro_Three"
              />
            </div>
            <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between p-1.5 rounded-md w-full">
              <Text
                className="ml-2.5 md:ml-[0] md:mt-0 mt-[5px] text-base text-gray-500 tracking-[0.16px]"
                size="txtMontserratMedium16"
              >
                I can’t get the casino game to start when I click the link. What
                should I do?
              </Text>
              <Img
                className="h-[18px] mr-0.5 rounded w-[18px]"
                src="images/img_icongeneralarrowup_gray_500.svg"
                alt="icongeneralarro_Four"
              />
            </div>
            <div className="bg-gray-900 flex flex-row sm:gap-10 items-center justify-between p-1.5 rounded-md w-full">
              <Text
                className="ml-2.5 mt-[5px] text-base text-gray-500 tracking-[0.16px]"
                size="txtMontserratMedium16"
              >
                Is all my information secure on Casino?
              </Text>
              <Img
                className="h-[18px] mr-0.5 rounded w-[18px]"
                src="images/img_icongeneralarrowup_gray_500.svg"
                alt="icongeneralarro_Five"
              />
            </div>
            <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between p-1.5 rounded-md w-full">
              <Text
                className="ml-2.5 md:ml-[0] md:mt-0 mt-[5px] text-base text-gray-500 tracking-[0.16px]"
                size="txtMontserratMedium16"
              >
                How do I submit my documents? Where can I see the status of my
                documents?
              </Text>
              <Img
                className="h-[18px] mr-0.5 rounded w-[18px]"
                src="images/img_icongeneralarrowup_gray_500.svg"
                alt="icongeneralarro_Six"
              />
            </div>
            <div className="bg-gray-900 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-1.5 rounded-md w-full">
              <Text
                className="ml-2.5 sm:ml-[0] sm:mt-0 mt-[5px] text-base text-gray-500 tracking-[0.16px]"
                size="txtMontserratMedium16"
              >
                Can I close my account for a specified amount of time?
              </Text>
              <Img
                className="h-[18px] mr-0.5 rounded w-[18px]"
                src="images/img_icongeneralarrowup_gray_500.svg"
                alt="icongeneralarro_Seven"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[0.24px] w-auto"
                size="txtMontserratBold24"
              >
                BEST ONLINE CASINO REAL MONEY
              </Text>
              <Text
                className="leading-[160.00%] text-gray-500 text-justify text-sm tracking-[0.14px]"
                size="txtMontserratMedium14"
              >
                <>
                  Prepare to become number one with virtual casino Winning
                  Casino sites are dime a dozen, but we stand out among online
                  casinos for sure. Play casino like never before and get high
                  octane experience thanks to huge library, and diversity of
                  games, generous offers, support, transparency and amenity of
                  our service!
                  <br />
                  It is easy to hit full throttle with the online casino N1.
                  Welcome package for all fresh players consists of three
                  deposits giving in total 400 EUR and 200 freespins. But there
                  is more! We won’t live you on the track without a fuel. Monday
                  reload and Friday Route are reloads offered by Winning casino
                  that will refill excitement and help to win real money.
                  <br />
                  When you want to try a new online casino, be sure it has games
                  you like. One of the reasons why N1 online casino is among the
                  best casino sites is lots of options. Fans of gambling will be
                  pleased with an unparalleled list of exciting, entertaining
                  and high quality best online casino games. Winning Casino
                  works with all leading game providers. Well-known games as
                  Belatra, Betsoft Gaming, Endorphina, Evolution, iSoftBet,
                  Netent, Play&#39;n Go, Microgaming, BGaming, Yggdrasil,
                  Ainsworth, Amaya, ELK, NextGen Gaming and Thunderkick. Before
                  playing one game or the other you always can try it first and
                  only then proceed with making real bets.
                </>
              </Text>
            </div>
          </div>
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
                  Curaçao. Friolion Limited is a subsidiary of Dama N.V., acting
                  as an Agent on behalf of Dama N.V., registered in Cyprus with
                  registered address Leandrou, 12A 3086, Limassol, Cyprus, and
                  registration number ΗΕ 419102. All payments with Paysafe are
                  made via Dama N.V. Winning © Copyright 2022.
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
    </>
  );
};

export default FAQPage;
