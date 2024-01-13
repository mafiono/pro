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
import C1920WithoutSidebarFiveMenu from "components/C1920WithoutSidebarFiveMenu";
import C1920WithoutSidebarFiveProvidercard from "components/C1920WithoutSidebarFiveProvidercard";
import Header2 from "components/Header2";
import PWAOneGamecard from "components/PWAOneGamecard";
import PWAOneGamecard1 from "components/PWAOneGamecard1";
import PWAOneGamecard2 from "components/PWAOneGamecard2";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const Withoutsidebar1Page: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-[21px] items-center justify-start mx-auto pb-[143px] w-full">
        <Header2 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-start justify-start max-w-[945px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
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
              className="w-full"
              items={[...Array(10)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col items-start justify-start mx-2.5">
                    <div className="overflow-auto overflow-x-auto w-full">
                      <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                        <Img
                          className="md:flex-1 h-[350px] sm:h-auto object-cover w-[700px] md:w-full"
                          src="images/img_image62.png"
                          alt="imageSixtyTwo"
                        />
                        <Img
                          className="md:flex-1 h-[350px] sm:h-auto object-cover w-[700px] md:w-full"
                          src="images/img_image63_350x700.png"
                          alt="imageSixtyThree"
                        />
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
          <C1920WithoutSidebarFiveMenu
            className="bg-gray-900 flex p-1 relative rounded-md w-[944px] md:w-full"
            lobby="Lobby"
            iteminlineTwo="Slots"
          />
          <div className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[944px] w-full">
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
            <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                userimage="images/img_notombofakhenaten.png"
                priceOne="EUR 8.000.000"
              />
              <PWAOneGamecard2
                className="md:h-[198px] h-[200px] relative rounded-md w-full"
                userimage="images/img_notombofakhenaten_144x144.png"
              />
              <PWAOneGamecard1
                className="md:h-[198px] h-[200px] relative rounded-md w-full"
                userimage="images/img_notombofakhenaten_1.png"
              />
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                priceOne="EUR 8.000.000"
              />
              <PWAOneGamecard1
                className="md:h-[198px] h-[200px] relative rounded-md w-full"
                userimage="images/img_notombofakhenaten.png"
              />
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                userimage="images/img_notombofakhenaten_5.png"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                priceOne="EUR 8.000.000"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[944px] w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                Popular
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
                    alt="arrowdown_Two"
                  />
                </Button>
                <Button
                  className="flex h-[35px] items-center justify-center rounded-[3px] w-[35px]"
                  shape="round"
                  color="blue_gray_900_01"
                  size="md"
                  variant="fill"
                >
                  <Img src="images/img_arrowleft.svg" alt="arrowleft_One" />
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
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[16%] md:w-full"
                userimage="images/img_notombofakhenaten.png"
                priceOne="EUR 8.000.000"
              />
              <List
                className="sm:flex-col flex-row gap-4 grid grid-cols-2 w-[33%] md:w-full"
                orientation="horizontal"
              >
                <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_1.png"
                />
              </List>
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[16%] md:w-full"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                priceOne="EUR 8.000.000"
              />
              <PWAOneGamecard2 className="md:h-[198px] h-[200px] relative rounded-md w-[16%] md:w-full" />
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[16%] md:w-full"
                userimage="images/img_notombofakhenaten_5.png"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                priceOne="EUR 8.000.000"
              />
            </div>
          </div>
          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-5 rounded-md w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[822px] w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                Get crypto in seconds
              </Text>
              <div className="flex flex-row gap-[25px] items-center justify-center w-auto">
                <Img
                  className="h-[15px]"
                  src="images/img_settings_white_a700.svg"
                  alt="settings"
                />
                <Img
                  className="h-[15px] w-[25px]"
                  src="images/img_user_yellow_800.svg"
                  alt="user"
                />
                <Img
                  className="h-[15px] w-[39px]"
                  src="images/img_settings_white_a700_25x63.svg"
                  alt="settings_One"
                />
                <Img
                  className="h-[15px] w-[33px]"
                  src="images/img_settings_white_a700_25x52.svg"
                  alt="settings_Two"
                />
                <Img
                  className="h-[15px] w-[62px]"
                  src="images/img_settings_white_a700_25x98.svg"
                  alt="settings_Three"
                />
              </div>
              <Button
                className="cursor-pointer font-bold h-[39px] leading-[normal] min-w-[111px] text-center text-sm"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                Buy Crypto
              </Button>
            </div>
          </div>
          <List
            className="flex flex-col gap-6 items-start max-w-[944px] w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-[13px] items-start justify-start max-w-[944px] my-0 w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[944px] w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  Slots
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
                      alt="arrowdown"
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_1.png"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_3.png"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_5.png"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[13px] items-start justify-start max-w-[944px] my-0 w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[944px] w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  Live Casino
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
                      alt="arrowdown"
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_1.png"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_4.png"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_5.png"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[13px] items-start justify-start max-w-[944px] my-0 w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[944px] w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  Bonus Buy
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
                      alt="arrowdown"
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_1.png"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_3.png"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_4.png"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_5.png"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[13px] items-start justify-start max-w-[944px] my-0 w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[944px] w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  Jackpot
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
                      alt="arrowdown"
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_1.png"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_3.png"
                />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[13px] items-start justify-start max-w-[944px] my-0 w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[944px] w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  Table Games
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
                      alt="arrowdown"
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_1.png"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                />
                <PWAOneGamecard
                  className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_5.png"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                  priceOne="EUR 8.000.000"
                />
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-[13px] items-start justify-start max-w-[944px] w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[944px] w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                Game Providers
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
                    alt="arrowdown_Three"
                  />
                </Button>
                <Button
                  className="flex h-[35px] items-center justify-center rounded-[3px] w-[35px]"
                  shape="round"
                  color="blue_gray_900_01"
                  size="md"
                  variant="fill"
                >
                  <Img src="images/img_arrowleft.svg" alt="arrowleft_Two" />
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
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              {new Array(6).fill({}).map((props, index) => (
                <React.Fragment
                  key={`C1920WithoutSidebarFiveProvidercard${index}`}
                >
                  <C1920WithoutSidebarFiveProvidercard
                    className="bg-blue_gray-900_01 flex flex-col h-36 items-center justify-end p-[11px] rounded-md w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
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

export default Withoutsidebar1Page;
