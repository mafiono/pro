import React from "react";

import { Button, Img, Line, List, Text } from "components";
import C1920WithoutSidebarSevenLevelcard from "components/C1920WithoutSidebarSevenLevelcard";
import C1920WithoutSidebarTwoLevelcard from "components/C1920WithoutSidebarTwoLevelcard";
import Header2 from "components/Header2";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const WithoutsidebarThree1Page: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-10 items-center justify-start mx-auto w-full">
        <Header2 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 h-[3267px] md:h-auto items-center justify-start max-w-[945px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
              size="txtMontserratBold40"
            >
              Be treated like a king!
            </Text>
            <Text
              className="text-center text-white-A700 text-xl w-auto"
              size="txtMontserratMedium20"
            >
              What a true VIP experience should be. Only it’s more!
            </Text>
          </div>
          <div className="flex flex-col gap-9 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[393px] md:h-auto object-cover w-full"
                src="images/img_winningvipbanner2.png"
                alt="winningvipbanne"
              />
            </div>
            <div className="bg-blue_gray-900_01 md:h-[137px] h-[244px] p-3 relative rounded-md w-1/2 sm:w-full">
              <div className="absolute bottom-[18%] md:h-[137px] h-[146px] inset-x-[0] mx-auto w-[72%]">
                <Img
                  className="absolute backdrop-opacity-[0.5] blur-[50.00px] bottom-[0] h-[58px] left-[0] w-[41%]"
                  src="images/img_star1_4.svg"
                  alt="starOne"
                />
                <div className="absolute flex flex-row gap-[27px] inset-x-[0] items-center justify-between mx-auto top-[0] w-auto">
                  <Img
                    className="h-[137px] w-[115px]"
                    src="images/img_level3.svg"
                    alt="levelThree"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2.5 items-start justify-center w-auto">
                      <div className="flex flex-col gap-1 items-start justify-center w-[181px]">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                          size="txtMontserratBold32"
                        >
                          Level 3
                        </Text>
                        <Text
                          className="text-sm text-yellow-700 w-auto"
                          size="txtMontserratMedium14Yellow700"
                        >
                          145 Free Spins
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center w-[181px]">
                        <div className="flex flex-row gap-[5px] items-center justify-center w-[181px]">
                          <Text
                            className="text-base text-white-A700 w-auto"
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
                      </div>
                    </div>
                    <div className="h-[11px] overflow-hidden relative rounded-[50%] shadow-bs6 w-full">
                      <div className="w-full h-full absolute bg-blue_gray_900 rounded-[5px]"></div>
                      <div
                        className="h-full absolute bg-teal_400  rounded-[5px]"
                        style={{ width: "38%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[91px] right-[5%] top-[5%]"
                src="images/img_settings_blue_gray_900.svg"
                alt="settings"
              />
              <Img
                className="absolute bottom-[5%] h-[91px] left-[5%]"
                src="images/img_corner.svg"
                alt="corner"
              />
              <Img
                className="absolute bottom-[5%] h-[89px] right-[5%]"
                src="images/img_user_blue_gray_900.svg"
                alt="user"
              />
              <Img
                className="absolute h-[89px] left-[5%] top-[5%]"
                src="images/img_settings_blue_gray_900_89x91.svg"
                alt="settings_One"
              />
            </div>
            <Text
              className="leading-[20.00px] text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              <span className="md:text-3xl sm:text-[28px] text-white-A700 font-montserrat text-left text-[32px] font-bold">
                The Winning Club
              </span>
              <span className="text-gray-500 font-montserrat text-left font-medium">
                <>
                  <br />
                  <br />
                  Thanks to our Loyalty system, on Winning every player get a
                  fancy treatment, regardless of their levels, but if you really
                  aim for that royal experience with a shiny crown on your head,
                  you definitley want to get in our VIP throne room.
                  <br />
                  <br />
                </>
              </span>
              <span className="text-white-A700 font-montserrat text-left font-bold">
                <>
                  How to become a VIP?
                  <br />
                </>
              </span>
              <span className="text-gray-500 font-montserrat text-left font-medium">
                <>
                  <br />
                  Entry to this exclusive club is by invitation only. The best
                  way to get an invite is to keep on playing and we will alert
                  you when you have reached the required level.
                  <br />
                  Think you have what it takes? Ready to take the crown?
                  <br />
                  <br />
                </>
              </span>
              <span className="text-white-A700 font-montserrat text-left font-bold">
                What do we offer?
              </span>
            </Text>
            <Img
              className="h-[11px] w-[598px]"
              src="images/img_divider.svg"
              alt="divider"
            />
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[186px] items-center justify-start p-4 w-full"
                style={{ backgroundImage: "url('images/img_vipmanager.svg')" }}
              >
                <div className="flex flex-col gap-4 items-center justify-start mb-[9px] w-[81%] md:w-full">
                  <Img
                    className="h-10"
                    src="images/img_ticket_orange_300.svg"
                    alt="ticket"
                  />
                  <Text
                    className="text-center text-white-A700 text-xs"
                    size="txtMontserratBold12"
                  >
                    <span className="text-white-A700 font-montserrat font-bold">
                      <>
                        VIP Manager
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="text-gray-500 font-montserrat font-medium">
                      Personalised attention from one of our VIP Managers, who
                      will always go the extra mile to meet your gaming needs
                      and desires.
                    </span>
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[186px] items-center justify-start p-4 w-full"
                style={{ backgroundImage: "url('images/img_vipmanager.svg')" }}
              >
                <div className="flex flex-col gap-4 items-center justify-start mb-[9px] w-[81%] md:w-full">
                  <Img
                    className="h-10"
                    src="images/img_thumbsup_40x42.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-center text-white-A700 text-xs"
                    size="txtMontserratBold12"
                  >
                    <span className="text-white-A700 font-montserrat font-bold">
                      <>
                        Gifts and rewards
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="text-gray-500 font-montserrat font-medium">
                      A king need offerings. We are here to shower you with free
                      gifts and surprises tailored to your gaming style.
                    </span>
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[186px] items-center justify-start p-4 w-full"
                style={{ backgroundImage: "url('images/img_vipmanager.svg')" }}
              >
                <div className="flex flex-col gap-4 items-center justify-start mb-[9px] w-[81%] md:w-full">
                  <Img
                    className="h-10"
                    src="images/img_diamond.svg"
                    alt="diamond"
                  />
                  <Text
                    className="text-center text-white-A700 text-xs"
                    size="txtMontserratBold12"
                  >
                    <span className="text-white-A700 font-montserrat font-bold">
                      <>
                        Unique offers and promotions
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="text-gray-500 font-montserrat font-medium">
                      Let us treat you with rewards with exclusive cashback
                      promotions, exciting leaderboards and huge free spins!
                      Plus, much more!
                    </span>
                  </Text>
                </div>
              </div>
            </List>
            <Text
              className="leading-[20.00px] text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              <span className="md:text-3xl sm:text-[28px] text-white-A700 font-montserrat text-left text-[32px] font-bold">
                Our Loyalty Levels
              </span>
              <span className="text-gray-500 font-montserrat text-left font-medium">
                <>
                  <br />
                  <br />
                  Just because you are not a VIP it shouldn’t mean that you are
                  left out from all goodies. Well, it does not!
                  <br />
                  With our Loyalty system everyone get their fair share.
                  <br />
                  <br />
                </>
              </span>
              <span className="text-white-A700 font-montserrat text-left font-bold">
                <>
                  How to level up?
                  <br />
                </>
              </span>
              <span className="text-gray-500 font-montserrat text-left font-medium">
                Every time you place a bet you receive loyalty points. Collect
                those loyalty points to increase your level with the value of
                the prize that comes with it.
              </span>
            </Text>
            <List
              className="flex flex-col gap-4 items-center w-[944px]"
              orientation="vertical"
            >
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start max-w-[944px] my-0 w-full">
                <C1920WithoutSidebarTwoLevelcard
                  className="flex flex-col h-[304px] items-center justify-start w-[304px]"
                  settingsimage="images/img_settings_gray_700.svg"
                  vectorimage="images/img_vector_gray_700.svg"
                  vectoroneimage="images/img_vector_gray_700.svg"
                  mobileimage="images/img_mobile_gray_700.svg"
                  vectorfourimage="images/img_vector_gray_700_4x4.svg"
                  vectorthreeimage="images/img_vector_gray_700_7x5.svg"
                  vectorsevenimage="images/img_vector_gray_700_1x47.svg"
                  vectoreightimage="images/img_vector_gray_700_4x4.svg"
                  vectornineimage="images/img_vector_gray_700_7x5.svg"
                  vectortenimage="images/img_vector_gray_700_5x18.svg"
                  settingsoneimage="images/img_settings_blue_gray_900.svg"
                  settingstwoimage="images/img_settings_gray_700_12x15.svg"
                  settingsthreeimage="images/img_settings_gray_700_15x12.svg"
                  settingsfourimage="images/img_settings_gray_700_15x12.svg"
                  settingsfiveimage="images/img_settings_5.svg"
                  vectorthirteenimage="images/img_vector_7.svg"
                  vectorfourteenimage="images/img_vector_gray_700_5x7.svg"
                  vectorfifteenimage="images/img_vector_8.svg"
                  vectoreighteenimage="images/img_vector_gray_700_5x7.svg"
                  vectornineteenimage="images/img_vector_7.svg"
                  vectortwentyoneimage="images/img_vector_9.svg"
                  userimage="images/img_user_blue_gray_900.svg"
                />
                <C1920WithoutSidebarTwoLevelcard
                  className="bg-cover bg-no-repeat md:h-[134px] h-[304px] p-[34px] sm:px-5 relative w-[304px]"
                  style={{
                    backgroundImage:
                      "url('images/img_levelcard_blue_gray_900_03.svg')",
                  }}
                  levelcountertext="Level 2"
                  freespinstext="€ 35 Free Bet"
                  leveloneimage="images/img_level2.svg"
                />
                <C1920WithoutSidebarTwoLevelcard
                  className="flex flex-col h-[304px] items-center justify-start w-[304px]"
                  levelcountertext="Level 3"
                  freespinstext="145 Free Spins"
                  leveloneimage="images/img_level3.svg"
                />
              </div>
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start my-0 w-auto md:w-full">
                <C1920WithoutSidebarSevenLevelcard
                  className="flex flex-col h-[304px] items-center justify-start w-[304px]"
                  vectorimage="images/img_vector_blue_gray_900.svg"
                  checkmarkimage="images/img_checkmark.svg"
                  checkmarkoneimage="images/img_checkmark.svg"
                  mobileimage="images/img_mobile.svg"
                  vectortwoimage="images/img_vector_blue_gray_900_4x4.svg"
                  vectorthreeimage="images/img_vector_blue_gray_900_7x5.svg"
                  vectorsiximage="images/img_vector_blue_gray_900_1x47.svg"
                  vectorsevenimage="images/img_vector_blue_gray_900_4x4.svg"
                  vectoreightimage="images/img_vector_blue_gray_900_7x5.svg"
                  vectornineimage="images/img_vector_blue_gray_900_5x18.svg"
                  settings="images/img_settings_blue_gray_900.svg"
                  levelone="images/img_level4.svg"
                  settingsoneimage="images/img_settings_blue_gray_900_12x15.svg"
                  clockimage="images/img_clock_blue_gray_900.svg"
                  clockoneimage="images/img_clock_blue_gray_900.svg"
                  settingstwoimage="images/img_settings_12x15.svg"
                  vectortwelveimage="images/img_vector_4x4.svg"
                  vectorthirteenimage="images/img_vector_blue_gray_900_5x7.svg"
                  vectorfourteenimage="images/img_vector_5x18.svg"
                  vectorseventeenimage="images/img_vector_blue_gray_900_5x7.svg"
                  vectoreighteenimage="images/img_vector_4x4.svg"
                  vectortwentyimage="images/img_vector_1x47.svg"
                  userimage="images/img_user_blue_gray_900.svg"
                  levelcountertext="Level 4"
                  freespinstext="€ 35 Cash"
                />
                <C1920WithoutSidebarSevenLevelcard
                  className="bg-cover bg-no-repeat flex flex-col h-[304px] items-center justify-end p-[49px] md:px-10 sm:px-5 w-[304px]"
                  style={{ backgroundImage: "url('images/img_levelcard.svg')" }}
                  levelone="images/img_level5.svg"
                  levelcountertext="Level 5"
                  freespinstext="170 Free Spins"
                />
                <C1920WithoutSidebarSevenLevelcard
                  className="flex flex-col h-[304px] items-center justify-start w-[304px]"
                  levelone="images/img_level6.svg"
                  levelcountertext="Level 6"
                  freespinstext="€ 50 Risk-free Bet"
                />
              </div>
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start my-0 w-auto md:w-full">
                <C1920WithoutSidebarSevenLevelcard
                  className="flex flex-col h-[304px] items-center justify-start w-[304px]"
                  vectorimage="images/img_vector_blue_gray_900.svg"
                  checkmarkimage="images/img_checkmark.svg"
                  checkmarkoneimage="images/img_checkmark.svg"
                  mobileimage="images/img_mobile.svg"
                  vectortwoimage="images/img_vector_blue_gray_900_4x4.svg"
                  vectorthreeimage="images/img_vector_blue_gray_900_7x5.svg"
                  vectorsiximage="images/img_vector_blue_gray_900_1x47.svg"
                  vectorsevenimage="images/img_vector_blue_gray_900_4x4.svg"
                  vectoreightimage="images/img_vector_blue_gray_900_7x5.svg"
                  vectornineimage="images/img_vector_blue_gray_900_5x18.svg"
                  settings="images/img_settings_blue_gray_900.svg"
                  levelone="images/img_level7.svg"
                  settingsoneimage="images/img_settings_blue_gray_900_12x15.svg"
                  clockimage="images/img_clock_blue_gray_900.svg"
                  clockoneimage="images/img_clock_blue_gray_900.svg"
                  settingstwoimage="images/img_settings_12x15.svg"
                  vectortwelveimage="images/img_vector_4x4.svg"
                  vectorthirteenimage="images/img_vector_blue_gray_900_5x7.svg"
                  vectorfourteenimage="images/img_vector_5x18.svg"
                  vectorseventeenimage="images/img_vector_blue_gray_900_5x7.svg"
                  vectoreighteenimage="images/img_vector_4x4.svg"
                  vectortwentyimage="images/img_vector_1x47.svg"
                  userimage="images/img_user_blue_gray_900.svg"
                  levelcountertext="Level 7"
                  freespinstext="205 Free Spins"
                />
                <C1920WithoutSidebarSevenLevelcard
                  className="bg-cover bg-no-repeat flex flex-col h-[304px] items-center justify-end p-[34px] sm:px-5 w-[304px]"
                  style={{ backgroundImage: "url('images/img_levelcard.svg')" }}
                  levelone="images/img_level8.svg"
                  levelcountertext="Level 8"
                  freespinstext="€ 50 Live Casino Bonus"
                />
                <C1920WithoutSidebarSevenLevelcard
                  className="flex flex-col h-[304px] items-center justify-start w-[304px]"
                  levelone="images/img_level9.svg"
                  levelcountertext="Level 9"
                  freespinstext="100 Risk-free Bet"
                />
              </div>
            </List>
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
                      alt="user_One"
                    />
                    <Img
                      className="h-5 w-[69px]"
                      src="images/img_settings.svg"
                      alt="settings_Two"
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

export default WithoutsidebarThree1Page;
