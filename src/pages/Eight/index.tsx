import React from "react";

import { Button, Img, Line, Text } from "components";
import C1920TenAboutcard from "components/C1920TenAboutcard";
import Header5 from "components/Header5";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const EightPage: React.FC = () => {
  const c1920TenAboutcardPropList = [
    {},
    {
      descriptiontext: (
        <>
          We&#39;ve got over 5,000 games <br />
          from the top game providers.
        </>
      ),
      customercaretext: "Only the best Slots games",
      supporticon: "images/img_iconaboutslots.svg",
    },
    {
      descriptiontext:
        "Bitcoin Payments, MasterCard, Visa, CoinsPaid, Neteller and many more.",
      customercaretext: "Over 30 payment methods",
      supporticon: "images/img_iconaboutpayment.svg",
    },
    {
      descriptiontext: (
        <>
          Enjoy our Live Casino with Blackjack, <br />
          Roulette, Baccarat and Dice Duel.
        </>
      ),
      customercaretext: "Huge choice of Live games",
      supporticon: "images/img_thumbsup_teal_400_34x34.svg",
    },
    {
      descriptiontext: (
        <>
          🔐 Fully PCI DSS compliant, iBank Direct <br />
          Integration and Pogg certified.
        </>
      ),
      customercaretext: "Fast and secure paymentst",
      supporticon: "images/img_iconaboutsecure.svg",
    },
    {
      descriptiontext: "Free spins, deposit bonuses, tournament, cashback.",
      customercaretext: "Million euro promotions",
      supporticon: "images/img_iconaboutpromotion.svg",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-9 items-center justify-end mx-auto w-full">
        <Header5 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col font-roboto gap-[51px] items-start justify-start max-w-[945px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-gray-900 h-[400px] md:h-[655px] relative rounded-md w-full">
                <div className="h-[400px] md:h-[655px] m-auto w-full">
                  <div className="h-[400px] md:h-[655px] m-auto w-full">
                    <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-y-[0] items-start justify-evenly my-auto right-[0] w-[66%]">
                      <div
                        className="bg-cover bg-no-repeat md:h-[383px] h-[400px] md:pl-10 sm:pl-5 pl-[85px] relative rounded-md w-full"
                        style={{
                          backgroundImage: "url('images/img_group258.svg')",
                        }}
                      >
                        <div className="absolute bottom-[0] h-[383px] inset-x-[0] mx-auto w-[73%] sm:w-full">
                          <Img
                            className="absolute h-[173px] left-[0] object-cover rounded-md top-[0] w-[173px]"
                            src="images/img_image79_173x173.png"
                            alt="imageSeventyNine"
                          />
                          <Img
                            className="absolute h-[383px] inset-[0] justify-center m-auto object-cover rounded-md w-[97%]"
                            src="images/img_1921.png"
                            alt="1921"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[125px] object-cover right-[6%] rounded-md w-[22%]"
                          src="images/img_image77_125x133.png"
                          alt="imageSeventySeven"
                        />
                        <Img
                          className="absolute h-[155px] object-cover right-[0] rounded-md top-[0] w-[27%]"
                          src="images/img_image75_155x167.png"
                          alt="imageSeventyFive"
                        />
                      </div>
                      <Img
                        className="h-[252px] sm:h-auto object-cover w-[1%] md:w-full"
                        src="images/img_gradient4_252x1.png"
                        alt="gradientFour"
                      />
                    </div>
                    <div className="absolute backdrop-opacity-[0.5] bg-yellow-700_6c blur-[482.00px] bottom-[0] h-[293px] left-[0] rounded-[172px] w-[37%]"></div>
                  </div>
                  <Img
                    className="absolute bottom-[35%] h-[91px] left-[36%] object-cover rounded-md w-[91px]"
                    src="images/img_image78_91x91.png"
                    alt="imageSeventyEight"
                  />
                  <Img
                    className="absolute h-[105px] left-[21%] object-cover rounded-md top-[11%] w-[105px]"
                    src="images/img_image80_105x105.png"
                    alt="imageEighty"
                  />
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[8%] my-auto rounded-md w-auto">
                  <div className="flex flex-col items-start justify-start rounded-md w-auto sm:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-yellow-700 w-[111px]"
                      size="txtRobotoRegular36"
                    >
                      Casino
                    </Text>
                    <div className="md:h-[75px] h-[78px] relative w-[63%]">
                      <Text
                        className="absolute inset-x-[0] mx-auto md:text-5xl text-[64px] text-white-A700 top-[0] w-max"
                        size="txtRobotoBlack64"
                      >
                        Winning{" "}
                      </Text>
                      <div className="absolute bg-teal-400 bottom-[0] h-[9px] left-[0] rounded w-[29%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-montserrat gap-[9px] items-start justify-center max-w-[944px] py-1 w-full">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[300px]"
              size="txtMontserratBold24"
            >
              About Goodman Casino
            </Text>
            <Text
              className="leading-[140.00%] max-w-[944px] md:max-w-full text-base text-white-A700"
              size="txtMontserratRegular16"
            >
              Welcome to the Goodman Casino: a perfectly tailored gaming
              platform. The world’s top providers, bonuses and games to suit any
              player’s request. Experience some of the highest quality gaming
              alongside customer support round the clock.
            </Text>
          </div>
          <div className="flex flex-col font-montserrat items-start justify-start w-auto md:w-full">
            <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {c1920TenAboutcardPropList.map((props, index) => (
                <React.Fragment key={`C1920TenAboutcard${index}`}>
                  <C1920TenAboutcard
                    className="bg-gray-900 h-[150px] md:h-[88px] pb-[22px] sm:pl-5 pl-[22px] relative rounded-md w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-col font-montserrat items-center justify-start rounded-md w-full">
            <div className="bg-blue_gray-900_01 md:h-[238px] h-[344px] pb-10 md:px-10 sm:px-5 px-[50px] relative rounded-md w-[945px] md:w-full">
              <div className="flex flex-col gap-2.5 h-full items-start justify-start max-w-[817px] mx-auto w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtMontserratBold24"
                >
                  Licence
                </Text>
                <Text
                  className="leading-[140.00%] max-w-[817px] md:max-w-full text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  winning.com is owned and operated by Dama N.V., a company
                  registered and established under the laws of Curaçao, with
                  registration number 152125 and registered address at
                  Julianaplein 36, Willemstad, Curaçao, and its wholly-owned
                  subsidiary, Friolion Limited, registered in Cyprus with
                  registration number HE 419102 and registered address Pavlou
                  Nirvana and Aipeias, 4, ALPHA TOWER, Floor 1, Flat 11, 3021,
                  Limassol, Cyprus. Dama N.V. is licensed and regulated by
                  Antillephone N.V. (license no. 8048/JAZ2020-013).
                </Text>
              </div>
              <div className="absolute h-[339px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[238px] h-[334px] mb-[-96.12px] ml-auto mr-1 mt-auto w-[1%] z-[1]">
                  <Line className="bg-blue_gray-800 h-[334px] m-auto rounded-sm w-[5px]" />
                  <Line className="absolute bg-teal-400 h-7 inset-x-[0] mx-auto rounded-sm top-[5%] w-[5px]" />
                </div>
                <div className="h-[101px] md:h-[106px] mt-auto mx-auto w-full">
                  <div className="absolute flex flex-col gap-2.5 h-full inset-[0] items-start justify-start m-auto max-w-[817px] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtMontserratBold24"
                    >
                      Affiliates Partnership
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[817px] md:max-w-full text-gray-500 text-sm"
                      size="txtMontserratMedium14"
                    >
                      <span className="text-white-A700 font-montserrat text-left text-base font-normal">
                        We are always looking for ways to better ourselves,
                        expand, and work with those who are as enthusiastic
                        about succeeding as we are. If you’re working with
                        internet traffic as an affiliate, you can sign up for
                        our affiliate program or reach out to
                      </span>
                      <span className="text-white-A700 font-montserrat text-left text-base font-light">
                        {" "}
                        ✉️{" "}
                      </span>
                      <span className="text-yellow-A700 font-montserrat text-left text-base font-medium">
                        affiliates@winning.com
                      </span>
                      <span className="text-white-A700 font-montserrat text-left text-base font-light">
                        {" "}
                      </span>
                      <span className="text-white-A700 font-montserrat text-left text-base font-normal">
                        <>and we&#39;ll reply in no time.</>
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-gradient1  bottom-[0] h-[50px] inset-x-[0] mx-auto rounded-bl-md rounded-br-md w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-700 h-px w-full" />
          <div className="flex flex-col font-montserrat gap-[33px] items-start justify-start w-auto md:w-full">
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

export default EightPage;
