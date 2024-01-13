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
import C1920WithoutSidebarSixItem from "components/C1920WithoutSidebarSixItem";
import Header1 from "components/Header1";
import PWAOneGamecard from "components/PWAOneGamecard";
import PWAOneGamecard1 from "components/PWAOneGamecard1";
import PWAOneGamecard2 from "components/PWAOneGamecard2";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const WithoutsidebarSix1Page: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const c1920WithoutSidebarSixItemPropList = [
    {},
    { icon: "images/img_iconprovider4theplayer.png" },
    { icon: "images/img_iconprovideramatic.svg" },
    { icon: "images/img_iconprovideravatarux.svg" },
    { icon: "images/img_iconproviderbaddingo.svg" },
    { icon: "images/img_settings_black_900.svg" },
    { icon: "images/img_iconproviderbbgames.svg" },
  ];

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-[21px] items-center justify-start mx-auto pb-[133px] w-full">
        <Header1 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-start justify-start max-w-[1264px] mx-auto md:px-5 w-full">
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
                  <div className="flex flex-col items-start justify-start mx-2.5 overflow-auto">
                    <div className="overflow-x-auto w-full">
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
          <C1920WithoutSidebarFiveMenu className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1264px] p-1 rounded-md w-full" />
          <div className="md:h-[1634px] h-[296px] relative w-full">
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[95%]">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtMontserratBold16"
                  >
                    New Games
                  </Text>
                  <Button
                    className="flex h-[35px] items-center justify-center md:ml-[0] ml-[969px] rounded-[3px] w-[35px]"
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
                    className="flex h-[35px] items-center justify-center md:ml-[0] ml-[5px] rounded-[3px] w-[35px]"
                    shape="round"
                    color="blue_gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_arrowleft.svg" alt="arrowleft" />
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[50px] md:ml-[0] ml-[5px] rounded-[3px] text-center text-sm"
                    shape="round"
                    color="blue_gray_900_01"
                    size="sm"
                    variant="fill"
                  >
                    All
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between rounded-[5px] w-full">
                    <div className="h-[197px] relative rounded-[5px] w-[13%] md:w-full">
                      <div className="bg-gray-400_01 h-[196px] m-auto rounded-[5px] w-full"></div>
                      <div className="absolute h-[197px] inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[197px] m-auto object-cover rounded-[5px] w-full"
                          src="images/img_notombofakhenaten_197x150.png"
                          alt="notombofakhenat"
                        />
                        <Text
                          className="absolute bg-red-500 h-5 justify-center left-[6%] px-1 py-0.5 rounded-[5px] text-center text-white-A700 text-xs top-[5%] w-10"
                          size="txtMontserratExtraBold12"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                    <div className="h-[197px] relative rounded-[5px] w-[13%] md:w-full">
                      <div className="h-[197px] m-auto w-full">
                        <Img
                          className="h-[197px] m-auto object-cover rounded-[5px] w-full"
                          src="images/img_ygpirates2mutiny.png"
                          alt="ygpirates2mutin"
                        />
                        <div className="absolute bg-red-500 flex flex-col items-center justify-start left-[5%] p-0.5 rounded-[5px] top-[6%]">
                          <Text
                            className="text-center text-white-A700 text-xs"
                            size="txtMontserratExtraBold12"
                          >
                            New
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bg-blue_gray-900_ab border border-blue_gray-700_ab border-solid flex flex-col gap-[31px] h-full inset-[0] items-center justify-center m-auto p-[9px] rounded-[5px] w-full">
                        <Text
                          className="mt-[3px] text-center text-white-A700 text-xs"
                          size="txtMontserratBold12"
                        >
                          Pirates 2 Mutiny
                        </Text>
                        <div className="flex flex-col gap-[35px] items-center justify-start w-3/5 md:w-full">
                          <div className="flex flex-col gap-[11px] items-center justify-start rounded-[5px] w-full">
                            <Button
                              className="flex h-[55px] items-center justify-center rounded-[27px] w-[55px]"
                              color="teal_400"
                              size="lg"
                              variant="fill"
                            >
                              <Img
                                src="images/img_overflowmenu.svg"
                                alt="overflowmenu"
                              />
                            </Button>
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtMontserratBold12"
                            >
                              Play For Fun
                            </Text>
                          </div>
                          <Text
                            className="text-[10px] text-center text-white-A700"
                            size="txtMontserratMedium10"
                          >
                            PUSH GAMING
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-400_01 flex md:flex-1 flex-col items-center justify-start rounded-[5px] w-[13%] md:w-full">
                      <div className="h-[197px] relative w-full">
                        <Img
                          className="h-[197px] m-auto object-cover rounded-[5px] w-full"
                          src="images/img_tkcrystalquestarcanetower.png"
                          alt="tkcrystalquesta"
                        />
                        <div className="absolute flex flex-row items-center justify-start left-[7%] top-[5%] w-[44%]">
                          <Button
                            className="flex h-5 items-center justify-center rounded-[5px] w-5"
                            shape="round"
                            color="yellow_900"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              src="images/img_television_white_a700_20x20.svg"
                              alt="television"
                            />
                          </Button>
                          <Text
                            className="bg-red-500 h-5 justify-center ml-[5px] px-1 py-0.5 rounded-[5px] text-center text-white-A700 text-xs w-10"
                            size="txtMontserratExtraBold12"
                          >
                            New
                          </Text>
                        </div>
                      </div>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-2.5 grid grid-cols-2 w-[26%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-400_01 flex flex-col items-center justify-start sm:ml-[0] rounded-[5px] w-full">
                        <div className="h-[197px] relative w-full">
                          <Img
                            className="h-[197px] m-auto object-cover rounded-[5px] w-full"
                            src="images/img_rejinglebellspowerreels.png"
                            alt="rejinglebellspo"
                          />
                          <Text
                            className="absolute bg-red-500 h-5 justify-center left-[6%] px-1 py-0.5 rounded-[5px] text-center text-white-A700 text-xs top-[5%] w-10"
                            size="txtMontserratExtraBold12"
                          >
                            New
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-400_01 flex flex-col items-center justify-start sm:ml-[0] rounded-[5px] w-full">
                        <div className="h-[197px] relative w-full">
                          <Img
                            className="h-[197px] m-auto object-cover rounded-[5px] w-full"
                            src="images/img_nerichesofmi.png"
                            alt="nerichesofmi"
                          />
                          <Text
                            className="absolute bg-red-500 h-5 justify-center left-[6%] px-1 py-0.5 rounded-[5px] text-center text-white-A700 text-xs top-[5%] w-10"
                            size="txtMontserratExtraBold12"
                          >
                            New
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="bg-gray-400_01 flex md:flex-1 flex-col items-center justify-start rounded-[5px] w-[13%] md:w-full">
                      <div className="h-[197px] relative w-full">
                        <Img
                          className="h-[197px] m-auto object-cover rounded-[5px] w-full"
                          src="images/img_mralchemyfortunes.png"
                          alt="mralchemyfortun"
                        />
                        <div className="absolute flex flex-row items-center justify-start left-[7%] top-[5%] w-[44%]">
                          <Button
                            className="flex h-5 items-center justify-center rounded-[5px] w-5"
                            shape="round"
                            color="yellow_900"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              src="images/img_television_white_a700_20x20.svg"
                              alt="television_One"
                            />
                          </Button>
                          <Text
                            className="bg-red-500 h-5 justify-center ml-[5px] px-1 py-0.5 rounded-[5px] text-center text-white-A700 text-xs w-10"
                            size="txtMontserratExtraBold12"
                          >
                            New
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-[197px] relative rounded-[5px] w-[13%] md:w-full">
                      <div className="bg-gray-400_01 h-[196px] m-auto rounded-[5px] w-full"></div>
                      <div className="absolute h-[197px] inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[197px] m-auto object-cover rounded-[5px] w-full"
                          src="images/img_notombofakhenaten_197x150.png"
                          alt="notombofakhenat_One"
                        />
                        <div className="absolute flex flex-row items-center justify-start left-[7%] top-[5%] w-[44%]">
                          <Button
                            className="flex h-5 items-center justify-center rounded-[5px] w-5"
                            shape="round"
                            color="yellow_900"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              src="images/img_television_white_a700_20x20.svg"
                              alt="television_Two"
                            />
                          </Button>
                          <div className="bg-red-500 flex flex-col items-center justify-start ml-[5px] p-0.5 rounded-[5px]">
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtMontserratExtraBold12"
                            >
                              New
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[197px] relative rounded-[5px] w-[7%] md:w-full">
                      <div className="bg-gray-400_01 h-[196px] m-auto rounded-[5px] w-full"></div>
                      <div className="absolute h-[197px] inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[197px] m-auto object-cover rounded-[5px] w-full"
                          src="images/img_playngotaleso.png"
                          alt="playngotaleso"
                        />
                        <div className="absolute flex flex-row items-center justify-evenly right-[6%] top-[5%] w-[82%]">
                          <Button
                            className="flex h-5 items-center justify-center rounded-[5px] w-5"
                            shape="round"
                            color="yellow_900"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              src="images/img_television_white_a700_20x20.svg"
                              alt="television_Three"
                            />
                          </Button>
                          <Text
                            className="bg-red-500 h-5 justify-center px-1 py-0.5 rounded-[5px] text-center text-white-A700 text-xs w-10"
                            size="txtMontserratExtraBold12"
                          >
                            New
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-900 flex flex-row h-full inset-y-[0] items-start justify-start my-auto pl-0.5 pr-1.5 py-2 right-[0] rounded-md w-auto">
              <List
                className="flex flex-col items-start w-auto"
                orientation="vertical"
              >
                {c1920WithoutSidebarSixItemPropList.map((props, index) => (
                  <React.Fragment key={`C1920WithoutSidebarSixItem${index}`}>
                    <C1920WithoutSidebarSixItem
                      className="bg-gray-900 flex flex-col items-start justify-start my-0 p-2 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <div className="h-[265px] relative w-[3%]">
                <Line className="bg-blue_gray-800_01 h-[265px] m-auto rounded-sm w-[5px]" />
                <Line className="absolute bg-teal-400 h-[45px] inset-x-[0] mx-auto rounded-sm top-[0] w-[5px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
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
              <PWAOneGamecard2 className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full" />
              <PWAOneGamecard
                className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                priceOne="EUR 8.000.000"
              />
              <PWAOneGamecard1
                className="md:h-[198px] h-[200px] relative rounded-md w-[12%] md:w-full"
                userimage="images/img_notombofakhenaten_3.png"
              />
              <List
                className="sm:flex-col flex-row gap-4 grid grid-cols-2 w-1/4 md:w-full"
                orientation="horizontal"
              >
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
              </List>
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
          <List
            className="flex flex-col gap-6 items-center w-auto"
            orientation="vertical"
          >
            <div className="flex flex-col gap-[13px] items-start justify-start my-0 w-auto md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
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
            <div className="flex flex-col gap-[13px] items-start justify-start my-0 w-auto md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
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
            <div className="flex flex-col gap-[13px] items-start justify-start my-0 w-auto md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
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
            <div className="flex flex-col gap-[13px] items-start justify-start my-0 w-auto md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
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
            <div className="flex flex-col gap-[13px] items-start justify-start my-0 w-auto md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
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
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
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
          </List>
          <div className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
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
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              {new Array(8).fill({}).map((props, index) => (
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
                    alt="television_Four"
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

export default WithoutsidebarSix1Page;
