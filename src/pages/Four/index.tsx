import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header5 from "components/Header5";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const FourPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-[37px] items-center justify-start mx-auto px-1 w-full">
        <Header5 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-center justify-start max-w-[945px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
              size="txtMontserratBold40"
            >
              Tournaments
            </Text>
            <Text
              className="text-center text-white-A700 text-xl w-auto"
              size="txtMontserratMedium20"
            >
              Challenge, compete and win!
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <List
              className="flex flex-col gap-[18px] items-center w-full"
              orientation="vertical"
            >
              <div className="h-[337px] md:h-[356px] my-0 relative rounded-md w-full">
                <Img
                  className="h-[337px] m-auto object-cover rounded-md w-full"
                  src="images/img_image97_337x944.png"
                  alt="imageNinetySeven"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-[96%]">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                    <Text
                      className="max-w-[300px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtMontserratBold30"
                    >
                      Push it to the Limit
                    </Text>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-36"
                        shape="round"
                        color="blue_gray_900_01"
                        size="md"
                        variant="fill"
                      >
                        Read More
                      </Button>
                      <Button
                        className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-36"
                        shape="round"
                        color="teal_400"
                        size="md"
                        variant="fill"
                      >
                        Join
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 items-start justify-start w-auto">
                    <div className="flex flex-col gap-px items-end justify-start w-auto">
                      <Text
                        className="text-right text-sm text-white-A700 w-auto"
                        size="txtMontserratMedium14WhiteA700"
                      >
                        Prize pool
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-right text-white-A700 w-auto"
                        size="txtMontserratBlack30"
                      >
                        €5000
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtMontserratMedium14WhiteA700"
                      >
                        Starts in:
                      </Text>
                      <div className="bg-black-900_b2 flex flex-row gap-5 items-center justify-center px-3.5 py-2.5 rounded-md w-auto">
                        <div className="flex flex-col gap-[3px] items-center justify-start w-auto">
                          <Text
                            className="text-[10px] text-center text-white-A700 w-auto"
                            size="txtMontserratMedium10"
                          >
                            DAYS
                          </Text>
                          <Text
                            className="text-center text-white-A700 text-xl"
                            size="txtMontserratBold20"
                          >
                            05
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-[30px] w-px" />
                        <div className="flex flex-col gap-[3px] items-center justify-start w-[38px]">
                          <Text
                            className="text-[10px] text-center text-white-A700 w-auto"
                            size="txtMontserratMedium10"
                          >
                            HOURS
                          </Text>
                          <Text
                            className="text-center text-white-A700 text-xl"
                            size="txtMontserratBold20"
                          >
                            23
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-[30px] w-px" />
                        <div className="flex flex-col gap-[3px] items-center justify-start w-auto">
                          <Text
                            className="text-[10px] text-center text-white-A700 w-auto"
                            size="txtMontserratMedium10"
                          >
                            MINUTES
                          </Text>
                          <Text
                            className="text-center text-white-A700 text-xl w-auto"
                            size="txtMontserratBold20"
                          >
                            41
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-[30px] w-px" />
                        <div className="flex flex-col gap-[3px] items-center justify-start w-auto">
                          <Text
                            className="text-[10px] text-center text-white-A700 w-auto"
                            size="txtMontserratMedium10"
                          >
                            SECONDS
                          </Text>
                          <Text
                            className="text-center text-white-A700 text-xl"
                            size="txtMontserratBold20"
                          >
                            45
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-700 w-full" />
              <div className="h-[337px] md:h-[393px] my-0 relative rounded-md w-full">
                <Img
                  className="h-[337px] m-auto object-cover rounded-md w-full"
                  src="images/img_image98_337x944.png"
                  alt="imageNinetyEight"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-[92%]">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                    <Text
                      className="max-w-[300px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtMontserratBold30"
                    >
                      Battle of the Magicians
                    </Text>
                    <Button
                      className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-36"
                      shape="round"
                      color="blue_gray_900_01"
                      size="md"
                      variant="fill"
                    >
                      Read More
                    </Button>
                  </div>
                  <div className="flex flex-col gap-10 items-start justify-start w-auto">
                    <div className="flex flex-col gap-px items-end justify-start w-auto">
                      <Text
                        className="text-right text-sm text-white-A700 w-auto"
                        size="txtMontserratMedium14WhiteA700"
                      >
                        Prize pool
                      </Text>
                      <Text
                        className="max-w-[300px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-right text-white-A700"
                        size="txtMontserratBlack30"
                      >
                        €1000 + 350 Free Spins
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtMontserratMedium14WhiteA700"
                      >
                        Starts in:
                      </Text>
                      <div className="bg-black-900_b2 flex flex-row gap-5 items-center justify-center px-3.5 py-2.5 rounded-md w-auto">
                        <div className="flex flex-col gap-[3px] items-center justify-start w-auto">
                          <Text
                            className="text-[10px] text-center text-white-A700 w-auto"
                            size="txtMontserratMedium10"
                          >
                            DAYS
                          </Text>
                          <Text
                            className="text-center text-white-A700 text-xl"
                            size="txtMontserratBold20"
                          >
                            05
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-[30px] w-px" />
                        <div className="flex flex-col gap-[3px] items-center justify-start w-[38px]">
                          <Text
                            className="text-[10px] text-center text-white-A700 w-auto"
                            size="txtMontserratMedium10"
                          >
                            HOURS
                          </Text>
                          <Text
                            className="text-center text-white-A700 text-xl"
                            size="txtMontserratBold20"
                          >
                            23
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-[30px] w-px" />
                        <div className="flex flex-col gap-[3px] items-center justify-start w-auto">
                          <Text
                            className="text-[10px] text-center text-white-A700 w-auto"
                            size="txtMontserratMedium10"
                          >
                            MINUTES
                          </Text>
                          <Text
                            className="text-center text-white-A700 text-xl w-auto"
                            size="txtMontserratBold20"
                          >
                            41
                          </Text>
                        </div>
                        <Line className="bg-white-A700 h-[30px] w-px" />
                        <div className="flex flex-col gap-[3px] items-center justify-start w-auto">
                          <Text
                            className="text-[10px] text-center text-white-A700 w-auto"
                            size="txtMontserratMedium10"
                          >
                            SECONDS
                          </Text>
                          <Text
                            className="text-center text-white-A700 text-xl"
                            size="txtMontserratBold20"
                          >
                            45
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start mt-[35px] rounded-md w-full">
              <div className="bg-blue_gray-900_01 md:h-[245px] h-[344px] pb-10 md:px-10 sm:px-5 px-[50px] relative rounded-md w-[945px] md:w-full">
                <div className="flex flex-col gap-2.5 h-full items-start justify-start max-w-[817px] mx-auto w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtMontserratBold24"
                  >
                    The Winning Online Casino Experience
                  </Text>
                  <Text
                    className="leading-[20.00px] max-w-[817px] md:max-w-full text-gray-500 text-sm"
                    size="txtMontserratMedium14"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </Text>
                </div>
                <div className="absolute h-[339px] inset-[0] justify-center m-auto w-full">
                  <div className="md:h-[245px] h-[334px] mb-[-89.01px] ml-auto mr-1 mt-auto w-[1%] z-[1]">
                    <Line className="bg-blue_gray-800 h-[334px] m-auto rounded-sm w-[5px]" />
                    <Line className="absolute bg-teal-400 h-7 inset-x-[0] mx-auto rounded-sm top-[5%] w-[5px]" />
                  </div>
                  <div className="h-[94px] md:h-[99px] mt-auto mx-auto w-full">
                    <div className="absolute flex flex-col gap-2.5 h-full inset-[0] items-start justify-start m-auto max-w-[817px] w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtMontserratBold24"
                      >
                        At vero eos et accusamus et iusto odio dignissimos
                      </Text>
                      <Text
                        className="leading-[20.00px] max-w-[817px] md:max-w-full text-gray-500 text-sm"
                        size="txtMontserratMedium14"
                      >
                        Et harum quidem rerum facilis est et expedita
                        distinctio. Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quod
                        maxime placeat facere possimus, omnis voluptas assumenda
                        est, omnis dolor repellendus. Temporibus autem quibusdam
                        et aut officiis debitis aut rerum necessitatibus saepe
                        eveniet ut et voluptates repudiandae sint et molestiae
                        non recusandae.
                      </Text>
                    </div>
                    <div className="absolute bg-gradient1  bottom-[0] h-[50px] inset-x-[0] mx-auto rounded-bl-md rounded-br-md w-full"></div>
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

export default FourPage;
