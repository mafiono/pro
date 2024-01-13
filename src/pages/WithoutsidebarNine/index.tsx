import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import PWAOneGamecard from "components/PWAOneGamecard";
import PWAOneGamecard1 from "components/PWAOneGamecard1";
import PWAOneGamecard2 from "components/PWAOneGamecard2";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const WithoutsidebarNinePage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat mx-auto pb-[25px] relative w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mx-auto md:px-10 sm:px-5 px-[70px] w-full">
          <div className="h-[500px] max-w-[1780px] mx-auto relative w-full">
            <Img
              className="h-[500px] m-auto object-cover w-full"
              src="images/img_majestictreasu.png"
              alt="majestictreasu"
            />
            <Img
              className="absolute bottom-[0] h-[431px] object-cover right-[18%] w-[28%]"
              src="images/img_character41_431x487.png"
              alt="characterFortyOne"
            />
            <div className="absolute flex flex-col gap-3 h-max inset-y-[0] items-start justify-start left-[16%] my-auto w-auto">
              <Text
                className="text-orange-300_01 text-xl w-auto"
                size="txtMontserratRegular20"
              >
                Exclusive Offer
              </Text>
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtMontserratBold20"
              >
                Get your royal welcome bonus!
              </Text>
              <Text
                className="max-w-[480px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtMontserratBold40"
              >
                100% up to €3500 or 3.5 BTC
              </Text>
            </div>
            <Img
              className="absolute h-[61px] inset-x-[0] mx-auto object-cover top-[4%]"
              src="images/img_logo.png"
              alt="winninglogo"
            />
          </div>
        </div>
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1264px] mt-[-45px] mx-auto md:px-5 w-full z-[1]">
          <div className="bg-blue_gray-800_02 flex flex-col gap-[19px] items-center justify-center md:px-10 sm:px-5 px-[51px] py-6 rounded-md w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-auto md:w-full">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtMontserratBold20"
              >
                Create a free account now!
              </Text>
              <div className="flex sm:flex-col flex-row gap-[45px] items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-[11px] items-start justify-start w-auto">
                  <Button
                    className="flex h-[30px] items-center justify-center outline outline-[0.5px] outline-gray-900 w-[30px]"
                    shape="circle"
                    color="blue_gray_800_07"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      src="images/img_frame48095800.png"
                      alt="frame48095800"
                    />
                  </Button>
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtMontserratBold12"
                  >
                    <span className="text-white-A700 font-montserrat text-left font-bold">
                      <>
                        4000+ Games
                        <br />
                      </>
                    </span>
                    <span className="text-gray-500 font-montserrat text-left font-medium">
                      and more every week
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row gap-[11px] items-start justify-start w-auto">
                  <Button
                    className="flex h-[30px] items-center justify-center outline outline-[0.5px] outline-gray-900 w-[30px]"
                    shape="circle"
                    color="blue_gray_800_07"
                    size="xs"
                    variant="fill"
                  >
                    <Img src="images/img_close_yellow_900_01.svg" alt="close" />
                  </Button>
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtMontserratBold12"
                  >
                    <span className="text-white-A700 font-montserrat text-left font-bold">
                      <>
                        Fast Withdrawals
                        <br />
                      </>
                    </span>
                    <span className="text-gray-500 font-montserrat text-left font-medium">
                      in Fiat and Crypto
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row gap-[11px] items-start justify-start w-auto">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_frame48095798.svg"
                    alt="frame48095798"
                  />
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtMontserratBold12"
                  >
                    <span className="text-white-A700 font-montserrat text-left font-bold">
                      <>
                        Unique Promotions
                        <br />
                      </>
                    </span>
                    <span className="text-gray-500 font-montserrat text-left font-medium">
                      tailored to your style
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-3.5 items-start justify-between w-full">
              <Text
                className="bg-gray-900 h-10 justify-center pl-2.5 sm:pr-5 pr-[35px] py-3 rounded text-center text-gray-500 text-xs w-[140px]"
                size="txtMontserratRegular12Gray500"
              >
                Email
              </Text>
              <Text
                className="bg-gray-900 h-10 justify-center pl-2.5 sm:pr-5 pr-[35px] py-3 rounded text-center text-gray-500 text-xs w-[140px]"
                size="txtMontserratRegular12Gray500"
              >
                Username
              </Text>
              <div className="bg-gray-900 flex flex-row font-montserrat gap-2.5 h-10 md:h-auto items-center justify-between px-2.5 py-[11px] rounded w-[140px]">
                <Text
                  className="text-center text-gray-500 text-xs w-auto"
                  size="txtMontserratRegular12Gray500"
                >
                  Pasword
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_icon_sidebar_eyeon.svg"
                  alt="iconsidebareyeo"
                />
              </div>
              <Button
                className="cursor-pointer flex h-10 items-center justify-center w-[100px]"
                rightIcon={
                  <Img
                    className="h-[18px] ml-[7px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="gray_900"
                size="md"
                variant="fill"
              >
                <div className="font-montserrat leading-[normal] text-center text-xs">
                  Currency
                </div>
              </Button>
              <Button
                className="cursor-pointer flex h-10 items-center justify-center w-[100px]"
                rightIcon={
                  <Img
                    className="h-[18px] ml-[13px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="gray_900"
                size="md"
                variant="fill"
              >
                <div className="font-montserrat leading-[normal] text-center text-xs">
                  Сountry
                </div>
              </Button>
              <div className="flex flex-col font-montserrat items-start justify-start w-[120px]">
                <div className="bg-gray-900 flex p-2 relative rounded-md w-full">
                  <div className="flex flex-row gap-2 items-center justify-center ml-1.5 my-auto w-[82px]">
                    <div className="flex flex-col h-6 items-center justify-start w-6">
                      <div className="flex flex-col items-center justify-start my-[3px] w-[92%] md:w-full">
                        <Img
                          className="h-[15px] md:h-auto object-cover w-full"
                          src="images/img_image43.png"
                          alt="imageFortyThree"
                        />
                      </div>
                    </div>
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtMontserratRomanRegular14"
                    >
                      +995
                    </Text>
                  </div>
                  <Img
                    className="h-6 ml-[-9px] my-auto w-6 z-[1]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <Text
                className="bg-gray-900 h-10 justify-center pl-2.5 sm:pr-5 pr-[35px] py-3 rounded text-center text-gray-500 text-xs w-40"
                size="txtMontserratRegular12Gray500"
              >
                Number
              </Text>
              <Button
                className="cursor-pointer font-bold font-roboto h-10 leading-[normal] rounded-md text-center text-lg w-[162px]"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                Register
              </Button>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start max-w-[1161px] w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <CheckBox
                    className="font-medium text-left text-xs"
                    inputClassName="h-[17px] mr-[5px] w-[17px]"
                    name="receiveemailpro_One"
                    id="receiveemailpro_One"
                    label="Receive Email Promos"
                  ></CheckBox>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <CheckBox
                    className="font-medium text-left text-xs"
                    inputClassName="h-[17px] mr-[5px] w-[17px]"
                    name="iam18yearsold"
                    id="iam18yearsold"
                    label="I am 18 years old and I accept the Privacy Policy and Terms*"
                  ></CheckBox>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[27%] md:w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    Or join with
                  </Text>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="round"
                      color="gray_900"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="round"
                      color="gray_900"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="round"
                      color="gray_900"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_save_white_a700.svg"
                        alt="save"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="round"
                      color="gray_900"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_forward_white_a700.svg"
                        alt="forward"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-auto md:w-full">
            <div className="bg-blue_gray-900 md:h-[184px] h-[213px] p-[5px] relative rounded-[5px] w-[31%] md:w-full">
              <div className="absolute md:h-[184px] h-[185px] inset-[0] justify-center m-auto w-[96%]">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[96%]">
                  <div className="flex flex-col gap-[34px] justify-start w-full">
                    <div className="flex flex-row items-start justify-end md:ml-[0] ml-[100px] w-[70%] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-[42px] ml-[122px] mt-[29px] rounded-[5px]"
                        src="images/img_level5_blue_gray_600.svg"
                        alt="levelFive"
                      />
                      <Img
                        className="h-[23px] ml-6 mt-1 w-[23px]"
                        src="images/img_signal_gray_900.svg"
                        alt="signal_One"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start w-full">
                      <Img
                        className="h-7 mt-[11px] w-[29px]"
                        src="images/img_signal.svg"
                        alt="signal_Two"
                      />
                      <Img
                        className="h-[54px] ml-[17px] mt-[13px] rounded-[5px]"
                        src="images/img_level8_blue_gray_600.svg"
                        alt="levelEight"
                      />
                      <Img
                        className="h-[38px] ml-[95px] mt-[34px] w-[38px]"
                        src="images/img_signal_gray_900.svg"
                        alt="signal_Three"
                      />
                      <Img
                        className="h-[78px] ml-[51px] rounded-[5px]"
                        src="images/img_profile.svg"
                        alt="profile"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[84px] left-[0] rounded-[5px] top-[11%]"
                  src="images/img_thumbsup_blue_gray_600.svg"
                  alt="thumbsup"
                />
              </div>
              <Img
                className="absolute h-[157px] inset-x-[0] mx-auto object-cover rounded-[5px] top-[5%] w-[52%]"
                src="images/img_rectangle39468.png"
                alt="rectangle39468"
              />
              <div className="absolute bg-blue_gray-100 h-[21px] left-[7%] rounded-sm top-[7%] w-[2%]"></div>
              <div className="absolute bg-blue_gray-100 h-[21px] left-[11%] rounded-sm top-[4%] w-[2%]"></div>
              <div className="absolute bg-blue_gray-100 h-[21px] left-[16%] rounded-sm top-[10%] w-[2%]"></div>
              <div className="absolute bottom-[39%] flex flex-row items-start justify-center right-[9%] w-[10%]">
                <div className="bg-blue_gray-100 h-[21px] mt-[13px] rounded-sm w-[11%]"></div>
                <div className="bg-blue_gray-100 h-[21px] mb-[13px] ml-3 rounded-sm w-[11%]"></div>
                <div className="bg-blue_gray-100 h-[21px] ml-3 my-1.5 rounded-sm w-[11%]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start max-w-[860px] w-full">
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtMontserratMedium14Black900"
              >
                <span className="md:text-3xl sm:text-[28px] text-white-A700 font-montserrat text-left text-[32px] font-bold">
                  Let us treat you like a Royalty
                </span>
                <span className="text-gray-500 font-montserrat text-left font-medium">
                  <>
                    <br />
                  </>
                </span>
              </Text>
              <Text
                className="leading-[20.00px] text-gray-500 text-sm"
                size="txtMontserratMedium14"
              >
                <>
                  With signing up - which is fast and free, by the way - you
                  automatically join to the Winning Club as well. <br />
                  You can play unique tournaments, fun missions, exciting chases
                  and races, or you can win one of our jackpots any time.{" "}
                </>
              </Text>
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtMontserratMedium14WhiteA700"
              >
                But there is more!{" "}
              </Text>
              <Text
                className="leading-[20.00px] text-gray-500 text-sm"
                size="txtMontserratMedium14"
              >
                <>
                  With our amazing Loyalty Program we made sure that we can
                  reward everyone.
                  <br />
                  Bonus money, Free Spins, Cash bonuses for casino, live casino
                  or sports? You name it. We have it all ready for you!
                </>
              </Text>
            </div>
          </div>
          <div className="bg-blue_gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 rounded-md w-full">
            <Text
              className="ml-11 md:ml-[0] text-base text-white-A700"
              size="txtMontserratBold16"
            >
              Get crypto in seconds
            </Text>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[25px] items-start justify-start md:ml-[0] ml-[363px] w-auto sm:w-full">
              <Img
                className="h-[25px] w-[75px]"
                src="images/img_settings_white_a700.svg"
                alt="settings"
              />
              <Img
                className="h-[25px] w-10"
                src="images/img_user_yellow_800.svg"
                alt="user"
              />
              <Img
                className="h-[25px] w-[63px]"
                src="images/img_settings_white_a700_25x63.svg"
                alt="settings_One"
              />
              <Img
                className="h-[25px] w-[52px]"
                src="images/img_settings_white_a700_25x52.svg"
                alt="settings_Two"
              />
              <Img
                className="h-[25px] w-[98px]"
                src="images/img_settings_white_a700_25x98.svg"
                alt="settings_Three"
              />
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[120px] md:ml-[0] ml-[39px] text-center text-sm"
              shape="round"
              color="teal_400"
              size="md"
              variant="fill"
            >
              Buy crypto
            </Button>
          </div>
          <div className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                New Games
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
                className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                userimage="images/img_notombofakhenaten.png"
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
                className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
              />
              <PWAOneGamecard1
                className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                userimage="images/img_notombofakhenaten_3.png"
              />
              <PWAOneGamecard
                className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                userimage="images/img_notombofakhenaten_4.png"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
              />
              <PWAOneGamecard2 className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full" />
              <PWAOneGamecard
                className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                userimage="images/img_notombofakhenaten_5.png"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[33px] items-start justify-start w-auto md:w-full">
            <Line className="bg-blue_gray-700 h-px w-full" />
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
                    alt="user_One"
                  />
                  <Img
                    className="h-5 w-[69px]"
                    src="images/img_settings.svg"
                    alt="settings_Four"
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

export default WithoutsidebarNinePage;
