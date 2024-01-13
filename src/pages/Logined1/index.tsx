import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header1 from "components/Header1";
import PWAOneGamecard from "components/PWAOneGamecard";
import PWAOneGamecard1 from "components/PWAOneGamecard1";
import PWAOneGamecard2 from "components/PWAOneGamecard2";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const Logined1Page: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-[19px] items-center justify-start mx-auto pb-14 w-full">
        <Header1 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1264px] mx-auto md:px-5 w-full">
          <Img
            className="h-[875px] sm:h-auto object-cover rounded-bl-md rounded-br-md w-full"
            src="images/img_20210324.png"
            alt="20210324"
          />
          <div className="bg-gray-900 flex sm:flex-col flex-row md:gap-10 h-12 md:h-auto items-center justify-between max-w-[1264px] sm:px-5 px-6 py-1 rounded-md w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-center text-white-A700 text-xs w-auto"
                size="txtMontserratBold12"
              >
                The Dog House Megaways - Pragmatic Play
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_icongamecardheartoff.svg"
                alt="icongamecardhea"
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
          <div className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                Recently Played
              </Text>
              <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                <Button
                  className="flex h-[35px] items-center justify-center rounded-[3px] w-[35px]"
                  shape="round"
                  color="blue_gray_900_01"
                  size="md"
                  variant="fill"
                >
                  <Img
                    src="images/img_arrowdown_gray_600.svg"
                    alt="arrowdown_One"
                  />
                </Button>
                <Button
                  className="flex h-[35px] items-center justify-center rounded-[3px] w-[35px]"
                  shape="round"
                  color="blue_gray_900_01"
                  size="md"
                  variant="fill"
                >
                  <Img src="images/img_arrowleft.svg" alt="arrowleft" />
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[50px] rounded-[3px] text-center text-sm"
                  shape="round"
                  color="blue_gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  All
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                userimage="images/img_notombofakhenaten.png"
                priceOne="EUR 8.000.000"
              />
              <List
                className="sm:flex-col flex-row gap-4 grid grid-cols-2 w-1/4 md:w-full"
                orientation="horizontal"
              >
                <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_1.png"
                />
              </List>
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                priceOne="EUR 8.000.000"
              />
              <PWAOneGamecard1
                className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                userimage="images/img_notombofakhenaten_3.png"
              />
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                userimage="images/img_notombofakhenaten_4.png"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                priceOne="EUR 8.000.000"
              />
              <PWAOneGamecard2 className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full" />
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                userimage="images/img_notombofakhenaten_5.png"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                priceOne="EUR 8.000.000"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-md w-full">
            <div className="bg-blue_gray-900_01 md:h-[334px] h-[344px] md:px-10 sm:px-5 px-[50px] py-10 relative rounded-md w-[1264px] md:w-full">
              <div className="absolute bottom-[12%] h-[304px] inset-x-[0] mx-auto w-full">
                <div className="absolute flex flex-col gap-2.5 h-full inset-[0] items-start justify-start m-auto w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtMontserratBold16"
                  >
                    THE DOG HOUSE MEGAWAYS SLOT
                  </Text>
                  <Text
                    className="leading-[20.00px] text-gray-500 text-sm"
                    size="txtMontserratMedium14"
                  >
                    <>
                      The Dog House Megaways is the game developed by renowned
                      studio Pragmatic Play. Released on 17.07.2020 it became an
                      instant success among gamblers for its immersive engine
                      and high-quality artwork. This review explains all of its
                      main characteristics that along with free test mode
                      available on Clash of Slots give a good idea of experience
                      you’ll be getting.
                      <br />
                      <br />
                      Playing the Dog House Megaways slot, you will again have
                      to go to a chic hotel for dogs, which has become much
                      larger due to an increased play field, to see in what
                      conditions our four-legged friends can live.
                      <br />
                      <br />A significant difference between the two The Dog
                      House slots in the increased play field; in the first
                      version it is very standard: five reels and 20 paylines,
                      and in the second version, thanks to the Megaways engine,
                      you have six reels with a different number of symbols on
                      each of them, which in total can provide the maximum
                      number of ways to win, namely 117649. A winning
                      combination is created when the same symbols appear on
                      successive reels in any position starting from the first.
                      <br />
                      <br />
                      You can play The Dog House Megaways slot on all devices,
                      the bets range from $0.20 to 100 per spin. You can play
                      the Dog House slot in manual mode, or click the Autoplay
                      button, where you can choose up to 1000 auto spins. The
                      Dog House Megaways has high dispersion, and RTP of 96.55%,
                      while the maximum payout you can get is 12305 times your
                      bet.
                    </>
                  </Text>
                </div>
                <div className="absolute bg-gradient1  bottom-[0] h-[50px] inset-x-[0] mx-auto rounded-bl-md rounded-br-md w-full"></div>
              </div>
              <div className="absolute h-[334px] inset-y-[0] my-auto right-[15%] w-[1%]">
                <Line className="bg-blue_gray-800 h-[334px] m-auto rounded-sm w-[5px]" />
                <Line className="absolute bg-teal-400 h-7 inset-x-[0] mx-auto rounded-sm top-[5%] w-[5px]" />
              </div>
            </div>
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
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Live Support
                </Text>
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

export default Logined1Page;
