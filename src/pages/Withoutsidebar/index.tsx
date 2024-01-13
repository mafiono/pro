import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Header1 from "components/Header1";
import PWAOneGamecard from "components/PWAOneGamecard";
import PWAOneGamecard1 from "components/PWAOneGamecard1";
import PWAOneGamecard2 from "components/PWAOneGamecard2";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const WithoutsidebarPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[38px] w-full">
        <Header1 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="h-[416px] md:h-[461px] max-w-[1264px] mt-[45px] mx-auto md:px-5 relative w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="m-auto w-full"
            items={[...Array(10)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-center justify-start mx-2.5">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[400px] relative w-full">
                      <Img
                        className="h-[400px] m-auto object-cover rounded-md w-full"
                        src="images/img_winninghomepagebanner37.png"
                        alt="winninghomepage"
                      />
                      <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[6%] my-auto w-[31%]">
                        <div className="flex flex-col gap-4 items-center justify-center w-96 sm:w-full">
                          <Text
                            className="text-center text-white-A700 text-xl w-auto"
                            size="txtMontserratBold20"
                          >
                            It’s time to wear the crown!
                          </Text>
                          <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                            <div className="bg-teal-400 flex flex-col h-10 md:h-auto items-center justify-center md:px-10 sm:px-5 px-[42.5px] py-[11px] rounded w-auto">
                              <Text
                                className="text-center text-sm text-white-A700 w-auto"
                                size="txtMontserratBold14"
                              >
                                Sign up in seconds
                              </Text>
                            </div>
                            <Text
                              className="mt-[17px] text-center text-gray-500 text-sm w-auto"
                              size="txtMontserratMedium14"
                            >
                              Or join with
                            </Text>
                            <List
                              className="flex flex-col gap-5 items-start mt-[13px] w-auto"
                              orientation="vertical"
                            >
                              <div className="flex flex-row gap-5 items-start justify-start w-auto">
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
                                    src="images/img_clock.svg"
                                    alt="clock"
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
                                    src="images/img_info.svg"
                                    alt="info"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-row gap-5 items-start justify-start w-auto">
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
                                    src="images/img_forward.svg"
                                    alt="forward"
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
                                    src="images/img_eye.svg"
                                    alt="eye"
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
                                    alt="forward_One"
                                  />
                                </Button>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-1.5 bg-indigo-200 w-[30px] rounded-[3px]" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-1.5 bg-gray-900 w-1.5"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <div className="absolute flex flex-col gap-2.5 h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="h-[400px] relative w-full">
              <div className="absolute h-[400px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[400px] m-auto object-cover rounded-[5px] w-full"
                  src="images/img_cgbonusgamebackground.png"
                  alt="cgbonusgameback"
                />
                <Img
                  className="absolute h-[400px] inset-y-[0] my-auto object-cover right-[37%] rounded-[5px] w-1/5"
                  src="images/img_blazeofracharacterfull.png"
                  alt="blazeofracharac"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[376px] left-[35%] object-cover rounded-[5px] w-1/5"
                src="images/img_mage1.png"
                alt="mageOne"
              />
              <div className="absolute bg-gradient5  flex flex-col md:gap-10 gap-[188px] h-full inset-[0] items-center justify-center m-auto p-2.5 rounded-[5px] w-full">
                <Img
                  className="h-[34px] rounded-[5px] w-[34px]"
                  src="images/img_close.svg"
                  alt="close"
                />
                <div className="flex flex-col items-center justify-start mb-[37px] shadow-bs4">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                    size="txtMontserratBlack40"
                  >
                    BATTLE OF THE MAGICIANS
                  </Text>
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtMontserratBlack30"
                  >
                    €1000 TOURNAMENT
                  </Text>
                  <Text
                    className="mt-[15px] text-center text-lg text-white-A700"
                    size="txtMontserratBold18"
                  >
                    1 - 12 JULY 2022
                  </Text>
                </div>
              </div>
            </div>
            <PagerIndicator
              className="flex h-1.5 justify-center w-[129px]"
              count={10}
              activeCss="inline-block cursor-pointer h-1.5 bg-indigo-200 w-[30px] rounded-[3px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-gray-900 w-1.5"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block md:ml-[0] mx-[2.50px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[2.50px] sm:ml-[0]"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1264px] mt-[19px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-[624px] md:w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                Casino
              </Text>
              <Img
                className="h-[250px] sm:h-auto object-cover w-[624px] md:w-full"
                src="images/img_image63.png"
                alt="imageSixtyThree"
              />
              <Text
                className="leading-[20.00px] text-sm text-white-A700"
                size="txtMontserratBold14"
              >
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  <>
                    Casino Welcome Offer Title
                    <br />
                  </>
                </span>
                <span className="text-gray-500 font-montserrat text-left font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
              </Text>
              <Button
                className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-[624px]"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                Visit Casino
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-[624px] md:w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                Sport
              </Text>
              <div className="h-[250px] relative w-full">
                <Img
                  className="absolute h-[250px] inset-[0] justify-center m-auto object-cover rounded-[5px] w-full"
                  src="images/img_shutterstock735656077.png"
                  alt="shutterstock735"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto pt-2.5 px-2.5 rounded-[5px] w-[86%]"
                  style={{ backgroundImage: "url('images/img_group258.svg')" }}
                >
                  <Img
                    className="h-60 md:h-auto mr-[41px] object-cover rounded-[5px] w-[77%]"
                    src="images/img_afplayers1.png"
                    alt="afplayersOne"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[250px] inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
              </div>
              <Text
                className="leading-[20.00px] text-sm text-white-A700"
                size="txtMontserratBold14"
              >
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  <>
                    Casino Welcome Offer Title
                    <br />
                  </>
                </span>
                <span className="text-gray-500 font-montserrat text-left font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
              </Text>
              <Button
                className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-[624px]"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                Visit Sportbook
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-900_01 flex md:flex-col flex-row md:gap-10 gap-[174px] items-center justify-center max-w-[1264px] mt-4 mx-auto p-5 md:px-5 rounded-md w-full">
          <Text
            className="ml-11 md:ml-[0] text-base text-white-A700"
            size="txtMontserratBold16"
          >
            Get crypto in seconds
          </Text>
          <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-start mr-[97px] w-auto md:w-full">
            <div className="flex sm:flex-col flex-row gap-1 items-start justify-start w-auto sm:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[84px]"
                leftIcon={
                  <div className="h-6 mr-2 pl-[5px] pr-2 w-6 bg-yellow-900 rounded-[50%] py-[5px] flex justify-center items-center">
                    <Img
                      src="images/img_television_white_a700_13x9.svg"
                      alt="television"
                    />
                  </div>
                }
                shape="round"
                color="blue_gray_900"
                size="xs"
                variant="fill"
              >
                <div className="leading-[normal] text-[10px] text-left">
                  Bitcoin
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[111px]"
                leftIcon={
                  <div className="h-6 mr-2 pl-1 pr-[5px] w-6 bg-green-500 rounded-[50%] py-1 flex justify-center items-center">
                    <Img
                      src="images/img_settings_white_a700_15x14.svg"
                      alt="settings"
                    />
                  </div>
                }
                shape="round"
                color="blue_gray_900"
                size="xs"
                variant="fill"
              >
                <div className="leading-[normal] text-[10px] text-left">
                  Bitcoin Cash
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[89px]"
                leftIcon={
                  <Img
                    className="mr-2"
                    src="images/img_litecoinltclogo.svg"
                    alt="litecoin-ltc-logo"
                  />
                }
                shape="round"
                color="blue_gray_900"
                size="xs"
                variant="fill"
              >
                <div className="leading-[normal] text-[10px] text-left">
                  Litecoin
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[99px]"
                leftIcon={
                  <div className="h-6 mr-2 w-6 bg-blue_gray-50 rounded-[50%] py-1 px-[7px] flex justify-center items-center">
                    <Img
                      src="images/img_save_blue_gray_900_03.svg"
                      alt="save"
                    />
                  </div>
                }
                shape="round"
                color="blue_gray_900"
                size="xs"
                variant="fill"
              >
                <div className="leading-[normal] text-[10px] text-left">
                  Ethereum
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[97px]"
                leftIcon={
                  <Img
                    className="h-6 mr-2"
                    src="images/img_user_3.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="blue_gray_900"
                size="xs"
                variant="fill"
              >
                <div className="leading-[normal] text-[10px] text-left">
                  Dogecoin
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[81px]"
                leftIcon={
                  <Img
                    className="h-6 mr-2"
                    src="images/img_settings_teal_300.svg"
                    alt="settings"
                  />
                }
                shape="round"
                color="blue_gray_900"
                size="xs"
                variant="fill"
              >
                <div className="leading-[normal] text-[10px] text-left">
                  Tether
                </div>
              </Button>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[120px] text-center text-sm"
              shape="round"
              color="teal_400"
              size="md"
              variant="fill"
            >
              Buy crypto
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-9 w-full">
          <div className="bg-blue_gray-900_01 flex md:flex-col flex-row md:gap-10 gap-[153px] items-center justify-start md:px-10 sm:px-5 px-[327px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[39%] md:w-full">
              <div className="flex flex-col gap-8 items-start justify-center w-auto sm:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtMontserratBlack20"
                  >
                    Join the Winning Club
                  </Text>
                  <Text
                    className="leading-[20.00px] text-gray-500 text-sm"
                    size="txtMontserratMedium14"
                  >
                    <>
                      Unique missions, fun tournaments, exciting chases & more.
                      <br />
                      Every single day!
                      <br />
                      <br />
                      You can win up to
                    </>
                  </Text>
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtMontserratBlack20"
                  >
                    150 Free Spins Every Day!
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-[140px]"
                    shape="round"
                    color="teal_400"
                    size="md"
                    variant="fill"
                  >
                    Join
                  </Button>
                  <Button
                    className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-[140px]"
                    shape="round"
                    color="blue_gray_900"
                    size="md"
                    variant="fill"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <Img
              className="md:flex-1 h-[350px] sm:h-auto object-cover w-1/2 md:w-full"
              src="images/img_image53.png"
              alt="imageFiftyThree"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[13px] items-start justify-start max-w-[1264px] mt-9 mx-auto md:px-5 w-full">
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
        <div className="flex flex-col items-center justify-start max-w-[1264px] mt-9 mx-auto md:px-5 rounded-md w-full">
          <div className="bg-blue_gray-900_01 md:h-[209px] h-[344px] md:px-10 sm:px-5 px-[50px] py-10 relative rounded-md w-[1264px] md:w-full">
            <div className="flex flex-col gap-2.5 h-full items-start justify-start mx-auto w-auto">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                The Winning Online Casino Experience
              </Text>
              <Text
                className="leading-[20.00px] max-w-[1136px] md:max-w-full text-gray-500 text-sm"
                size="txtMontserratMedium14"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </Text>
            </div>
            <div className="absolute h-[339px] inset-[0] justify-center m-auto w-full">
              <div className="md:h-[209px] h-[334px] mb-[-125px] ml-auto mr-1 mt-auto w-[1%] z-[1]">
                <Line className="bg-blue_gray-800 h-[334px] m-auto rounded-sm w-[5px]" />
                <Line className="absolute bg-teal-400 h-7 inset-x-[0] mx-auto rounded-sm top-[5%] w-[5px]" />
              </div>
              <div className="h-[130px] md:h-[90px] mt-auto mx-auto w-full">
                <div className="absolute flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtMontserratBold16"
                  >
                    At vero eos et accusamus et iusto odio dignissimos
                  </Text>
                  <Text
                    className="leading-[20.00px] max-w-[1136px] md:max-w-full text-gray-500 text-sm"
                    size="txtMontserratMedium14"
                  >
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Temporibus autem quibusdam et aut officiis
                    debitis aut rerum necessitatibus saepe eveniet ut et
                    voluptates repudiandae sint et molestiae non recusandae.
                  </Text>
                </div>
                <div className="absolute bg-gradient1  bottom-[0] h-[50px] inset-x-[0] mx-auto rounded-bl-md rounded-br-md w-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[33px] items-start justify-start max-w-[1264px] mt-9 mx-auto md:px-5 w-full">
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
                established under the laws of Curacao. Dama N.V. is licensed and
                regulated by Antillephone N.V. (license no. 8048/JAZ2020-013).
                Dama N.V.’s registration number is 152125 and its registered
                address is Julianaplein 36, Willemstad, Curaçao. Friolion
                Limited is a subsidiary of Dama N.V., acting as an Agent on
                behalf of Dama N.V., registered in Cyprus with registered
                address Leandrou, 12A 3086, Limassol, Cyprus, and registration
                number ΗΕ 419102. All payments with Paysafe are made via Dama
                N.V. Winning © Copyright 2022.
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
    </>
  );
};

export default WithoutsidebarPage;
