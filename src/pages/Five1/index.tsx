import React from "react";

import { Button, Img, Line, Text } from "components";
import Header5 from "components/Header5";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const Five1Page: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-9 items-center justify-start mx-auto pb-[174px] w-full">
        <Header5 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-center justify-start max-w-[945px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
            size="txtMontserratBold40"
          >
            Winning News
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-4 h-[286px] md:h-auto items-start justify-start max-w-[944px] w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[58%] md:w-full">
                <div className="h-[286px] relative w-full">
                  <div className="absolute h-[286px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[286px] m-auto object-cover rounded-[5px] w-full"
                      src="images/img_cgbonusgamebackground_286x544.png"
                      alt="cgbonusgameback"
                    />
                    <Img
                      className="absolute h-[286px] inset-y-[0] my-auto object-cover right-[20%] rounded-[5px] w-[42%]"
                      src="images/img_blazeofracharacterfull_286x226.png"
                      alt="blazeofracharac"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[264px] left-[20%] object-cover rounded-[5px] w-[42%]"
                    src="images/img_mage1_264x227.png"
                    alt="mageOne"
                  />
                  <Img
                    className="absolute h-7 left-[3%] rounded-[5px] top-[5%]"
                    src="images/img_close_white_a700_28x32.svg"
                    alt="close"
                  />
                  <div className="absolute bg-gradient5  flex flex-col h-full inset-[0] items-center justify-center m-auto pt-[185px] rounded-[5px] w-full">
                    <div className="h-[100px] relative w-[544px] sm:w-full">
                      <div className="absolute md:h-[100px] h-[99px] inset-[0] justify-center m-auto w-full">
                        <div className="h-[100px] m-auto rounded-[5px] shadow-bs3 w-full"></div>
                        <Text
                          className="absolute bottom-[13%] inset-x-[0] mx-auto text-white-A700 text-xs uppercase w-max"
                          size="txtMontserratBlack12"
                        >
                          1-12 july 2022
                        </Text>
                      </div>
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-[5px] top-[0] w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-auto"
                          size="txtMontserratBlack32"
                        >
                          Battle of the magicians
                        </Text>
                        <Text
                          className="text-white-A700 text-xl uppercase w-auto"
                          size="txtMontserratBlack20"
                        >
                          €1000 Toutnament
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratBold24"
                >
                  Battle of the Magicians - €1000 Tournament
                </Text>
                <Text
                  className="md:max-w-full max-w-sm text-gray-500 text-sm"
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
            <div className="gap-4 md:gap-5 grid grid-cols-3 sm:grid-cols-[repeat(0,_1fr_945px)_1fr] md:grid-cols-[repeat(1,_1fr_945px)_1fr] justify-center min-h-[auto] mt-[35px] w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="flex flex-1 flex-col gap-4 h-[266px] md:h-auto items-start justify-start w-full">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[33px] items-start justify-start mt-[71px] w-auto md:w-full">
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

export default Five1Page;
