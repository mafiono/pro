import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, List, ReactTable, Text } from "components";
import Header5 from "components/Header5";
import PWAOneGamecard from "components/PWAOneGamecard";
import PWAOneGamecard1 from "components/PWAOneGamecard1";
import PWAOneGamecard2 from "components/PWAOneGamecard2";
import PaymentsDepositItem from "components/PaymentsDepositItem";

type Table2RowType = {
  rowseven: string;
  roweight: string;
  rownine: string;
};

const Two1Page: React.FC = () => {
  const table2Data = React.useRef<Table2RowType[]>([
    { rowseven: "Player", roweight: "Points", rownine: "Prize" },
    { rowseven: "John Doe", roweight: "95000", rownine: "350 FS + € 100" },
    { rowseven: "John Doe", roweight: "92000", rownine: "150 FS + € 90" },
    { rowseven: "John Doe", roweight: "87000", rownine: "50 FS + € 80" },
    { rowseven: "John Doe", roweight: "80000", rownine: "€ 70" },
    { rowseven: "John Doe", roweight: "78000", rownine: "€ 60" },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper<Table2RowType>();
    return [
      table2ColumnHelper.accessor("rowseven", {
        cell: (info) => (
          <div className="flex flex-row gap-9 items-center justify-start p-[11px]">
            <Text
              className="ml-[5px] text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              #
            </Text>
            <Text
              className="mt-[3px] text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[236px] items-center justify-start min-w-[319px] p-3">
            <Text
              className="text-right text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              7
            </Text>
            <Text
              className="text-right text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              € 40
            </Text>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("roweight", {
        cell: (info) => (
          <Text
            className="sm:pr-5 pr-6 py-3 text-center text-sm text-white-A700"
            size="txtMontserratBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[235px] items-center justify-center min-w-[317px] p-3">
            <Text
              className="text-right text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              8
            </Text>
            <Text
              className="text-right text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              € 30
            </Text>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rownine", {
        cell: (info) => (
          <Text
            className="sm:px-5 px-[35px] py-3 text-center text-sm text-white-A700"
            size="txtMontserratBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[237px] items-center justify-center min-w-[308px] p-2.5">
            <Text
              className="my-[3px] text-right text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              9
            </Text>
            <Text
              className="my-[3px] text-right text-sm text-white-A700"
              size="txtMontserratBold14"
            >
              € 20
            </Text>
          </div>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-9 items-end justify-start mx-auto pb-1 pl-1 w-full">
        <div className="flex flex-col items-center pr-1 w-full">
          <Header5 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        </div>
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1100px] mb-[35px] md:px-5 w-full">
          <div className="h-[337px] relative rounded-md w-[86%] md:w-full">
            <Img
              className="h-[337px] m-auto object-cover rounded-md w-full"
              src="images/img_image98_337x944.png"
              alt="imageNinetyEight"
            />
            <div className="absolute bottom-[24%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-end justify-between mx-auto w-[92%]">
              <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                <div className="flex flex-col gap-px items-start justify-start w-auto">
                  <Text
                    className="text-right text-sm text-white-A700 w-auto"
                    size="txtMontserratMedium14WhiteA700"
                  >
                    Prize pool
                  </Text>
                  <Text
                    className="max-w-[300px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtMontserratBlack30"
                  >
                    €1000 + 350 Free Spins
                  </Text>
                </div>
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
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[69px] w-auto">
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
          <div className="flex flex-col gap-3 items-start justify-start max-w-[944px] w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
              size="txtMontserratBold32"
            >
              Battle of the Magicians
            </Text>
            <Text
              className="text-gray-500 text-sm w-auto"
              size="txtMontserratMedium14"
            >
              Prepare your strongest spells, teleport into the arena and beat
              the other sorcerers and sorceresses to get the crown jewels.{" "}
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start max-w-[944px] w-full">
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtMontserratBold16"
            >
              Prize Pool
            </Text>
            <div className="flex flex-col gap-[11px] items-start justify-start max-w-[944px] w-full">
              <List
                className="sm:flex-col flex-row gap-[11px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[944px] w-full"
                orientation="horizontal"
              >
                <div className="bg-blue_gray-800_06 flex flex-row items-center justify-between p-2.5 rounded-md w-[308px]">
                  <Img
                    className="h-5 w-6"
                    src="images/img_close_20x24.svg"
                    alt="close"
                  />
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-right text-sm text-yellow-800_01 w-auto"
                      size="txtMontserratBold14Yellow80001"
                    >
                      350 FS
                    </Text>
                    <Text
                      className="text-right text-sm text-yellow-800_01 w-auto"
                      size="txtMontserratBold14Yellow80001"
                    >
                      95000 Pts
                    </Text>
                    <Text
                      className="text-right text-sm text-yellow-800_01 w-auto"
                      size="txtMontserratBold14Yellow80001"
                    >
                      € 100
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-800_06 flex flex-row items-center justify-between p-2.5 rounded-md w-[306px]">
                  <Img
                    className="h-5 w-6"
                    src="images/img_settings_17.svg"
                    alt="settings"
                  />
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-gray-400_01 text-right text-sm w-auto"
                      size="txtMontserratBold14Gray40001"
                    >
                      150 FS
                    </Text>
                    <Text
                      className="text-gray-400_01 text-right text-sm w-auto"
                      size="txtMontserratBold14Gray40001"
                    >
                      35000 Pts
                    </Text>
                    <Text
                      className="text-gray-400_01 text-right text-sm w-auto"
                      size="txtMontserratBold14Gray40001"
                    >
                      € 90
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-800_06 flex flex-row items-center justify-between p-2.5 rounded-md w-[308px]">
                  <Img
                    className="h-5 w-6"
                    src="images/img_settings_18.svg"
                    alt="settings"
                  />
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-lime-800_01 text-right text-sm w-auto"
                      size="txtMontserratBold14Lime80001"
                    >
                      50 FS
                    </Text>
                    <Text
                      className="text-lime-800_01 text-right text-sm w-auto"
                      size="txtMontserratBold14Lime80001"
                    >
                      5000 Pts
                    </Text>
                    <Text
                      className="text-lime-800_01 text-right text-sm w-auto"
                      size="txtMontserratBold14Lime80001"
                    >
                      € 80
                    </Text>
                  </div>
                </div>
              </List>
              <List
                className="sm:flex-col flex-row gap-[11px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[944px] w-full"
                orientation="horizontal"
              >
                <div className="bg-blue_gray-900_01 flex flex-row h-[45px] md:h-auto items-center justify-between p-2.5 rounded-md w-[307px]">
                  <div className="flex flex-col h-6 md:h-auto items-center justify-center p-2.5 w-6">
                    <Text
                      className="text-right text-sm text-white-A700 w-auto"
                      size="txtMontserratBold14"
                    >
                      4
                    </Text>
                  </div>
                  <Text
                    className="text-right text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    € 70
                  </Text>
                </div>
                <div className="bg-blue_gray-900_01 flex flex-row h-[45px] md:h-auto items-center justify-between p-2.5 rounded-md w-[308px]">
                  <div className="flex flex-col h-6 md:h-auto items-center justify-center p-2.5 w-6">
                    <Text
                      className="text-right text-sm text-white-A700 w-auto"
                      size="txtMontserratBold14"
                    >
                      5
                    </Text>
                  </div>
                  <Text
                    className="text-right text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    € 60
                  </Text>
                </div>
                <div className="bg-blue_gray-900_01 flex flex-row h-[45px] md:h-auto items-center justify-between p-2.5 rounded-md w-[307px]">
                  <div className="flex flex-col h-6 md:h-auto items-center justify-center p-2.5 w-6">
                    <Text
                      className="text-right text-sm text-white-A700 w-auto"
                      size="txtMontserratBold14"
                    >
                      6
                    </Text>
                  </div>
                  <Text
                    className="text-right text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    € 50
                  </Text>
                </div>
              </List>
            </div>
            <Button
              className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-36"
              shape="round"
              color="blue_gray_900_01"
              size="md"
              variant="fill"
            >
              Show More
            </Button>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start max-w-[944px] w-full">
            <div className="overflow-auto w-full">
              <ReactTable
                columns={table2Columns}
                data={table2Data.current}
                rowClass={"odd:bg-blue_gray-800_06 even:bg-blue_gray-900_01"}
                headerClass=""
              />
            </div>
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtMontserratBold16"
            >
              Tournament Leaderboard
            </Text>
            <Button
              className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-36"
              shape="round"
              color="blue_gray_900_01"
              size="md"
              variant="fill"
            >
              Show More
            </Button>
          </div>
          <div className="flex flex-col gap-[13px] items-start justify-start max-w-[1100px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1100px] w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                Tournament Games
              </Text>
            </div>
            <List
              className="flex flex-col gap-[13px] w-[86%]"
              orientation="vertical"
            >
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <PWAOneGamecard
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                />
                <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_1.png"
                />
                <PWAOneGamecard
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                />
                <PWAOneGamecard2 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_5.png"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                />
              </div>
              <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <PWAOneGamecard
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten.png"
                />
                <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard1
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_1.png"
                />
                <PWAOneGamecard
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                />
                <PWAOneGamecard2 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                <PWAOneGamecard
                  className="md:h-[198px] h-[200px] relative rounded-md w-full"
                  userimage="images/img_notombofakhenaten_5.png"
                  iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                />
              </div>
            </List>
            <Button
              className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-36"
              shape="round"
              color="blue_gray_900_01"
              size="md"
              variant="fill"
            >
              Show More
            </Button>
          </div>
          <Text className="text-sm text-white-A700" size="txtMontserratBold14">
            <span className="text-white-A700 font-montserrat text-left text-base font-bold">
              <>
                Terms and Conditions
                <br />
              </>
            </span>
            <span className="text-gray-500 font-montserrat text-left font-medium">
              <>
                € 0.20 minimum bet requirement
                <br />1 valid entry per household.
                <br />
                This campaign is open for all players and available on all
                devices.
              </>
            </span>
          </Text>
          <Line className="bg-blue_gray-700 h-px w-[86%]" />
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
    </>
  );
};

export default Two1Page;