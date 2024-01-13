import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";
import Header3 from "components/Header3";
import PaymentsDepositItem from "components/PaymentsDepositItem";

type TableRowType = {
  method: string;
  type: string;
  fee: string;
  processingtime: string;
  limit: string;
  action: string;
};

const PaymentsDepositPage: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    {
      method: "Maestro",
      type: "Credit Card",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "VISA",
      type: "Credit Card",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "MasterCard",
      type: "Credit Card",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "QIWI",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "Yandex",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "Skrill",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "PaysafeCard",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "Neteller",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "Trustly",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "Trustly",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "Zimpler",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "Skrill Rapid",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
    {
      method: "Neosurf",
      type: "E-wallet",
      fee: "Free",
      processingtime: "Instant",
      limit: "Min. €20/Max. €4,000",
      action: "Deposit",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("method", {
        cell: (info) => (
          <div className="flex flex-row gap-4 items-center justify-start pr-1 py-1">
            <div className="bg-white-A700 flex flex-col items-center justify-end mb-[11px] p-[5px] rounded-md w-[28%]">
              <Img
                className="h-5 md:h-auto object-cover w-3/4"
                src="images/img_maestro.png"
                alt="maestro"
              />
            </div>
            <Text
              className="text-sm text-white-A700 tracking-[0.14px]"
              size="txtRobotoBold14"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[240px] pb-3 text-gray-500 text-xs tracking-[0.12px] uppercase"
            size="txtMontserratMedium12"
          >
            method
          </Text>
        ),
      }),
      tableColumnHelper.accessor("type", {
        cell: (info) => (
          <Text
            className="pb-[22px] pt-[11px] text-sm text-white-A700 tracking-[0.14px]"
            size="txtRobotoBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[160px] pb-3 text-gray-500 text-xs tracking-[0.12px] uppercase"
            size="txtMontserratMedium12"
          >
            type
          </Text>
        ),
      }),
      tableColumnHelper.accessor("fee", {
        cell: (info) => (
          <Text
            className="pb-[22px] pt-[11px] text-sm text-white-A700 tracking-[0.14px]"
            size="txtRobotoBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[80px] pb-3 text-gray-500 text-xs tracking-[0.12px] uppercase"
            size="txtMontserratMedium12"
          >
            fee
          </Text>
        ),
      }),
      tableColumnHelper.accessor("processingtime", {
        cell: (info) => (
          <Text
            className="pb-[22px] pt-[11px] text-sm text-white-A700 tracking-[0.14px]"
            size="txtRobotoBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[160px] pb-3 text-gray-500 text-xs tracking-[0.12px] uppercase"
            size="txtMontserratMedium12"
          >
            processing time
          </Text>
        ),
      }),
      tableColumnHelper.accessor("limit", {
        cell: (info) => (
          <Text
            className="pb-[21px] pt-3 text-sm text-white-A700 tracking-[0.14px]"
            size="txtRobotoBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[201px] pb-3 text-gray-500 text-xs tracking-[0.12px] uppercase"
            size="txtMontserratMedium12"
          >
            limit
          </Text>
        ),
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row font-montserrat items-center justify-evenly pb-[11px]">
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[102px] text-center text-sm"
              shape="round"
              color="teal_400"
              size="md"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[102px] pb-3 text-center text-gray-500 text-xs tracking-[0.12px] uppercase"
            size="txtMontserratMedium12"
          >
            action
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-3.5 items-center justify-start mx-auto pb-7 w-full">
        <Header3 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col font-roboto gap-9 items-start justify-start max-w-[945px] mx-auto md:px-5 w-full">
          <div className="bg-gradient2  flex md:flex-col flex-row gap-[15px] items-center justify-between rounded-[12px] w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-[53%] md:w-full">
              <div className="h-[236px] relative w-[76%] sm:w-full">
                <div className="absolute flex flex-col gap-[21px] justify-start right-[0] top-[3%] w-[90%]">
                  <div className="flex flex-col gap-10 justify-start md:ml-[0] ml-[30px] w-[92%] md:w-full">
                    <Img
                      className="h-2 md:ml-[0] ml-[113px] w-2"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                      <Text
                        className="text-sm text-white-A700 uppercase w-auto"
                        size="txtRobotoRomanMedium14"
                      >
                        Bonus of the Month
                      </Text>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                        size="txtRobotoRomanBlack40"
                      >
                        <>
                          $100 Bonus Plus
                          <br />
                          10 Free Spins
                        </>
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
                <Img
                  className="absolute h-[236px] inset-y-[0] left-[0] my-auto w-[94%]"
                  src="images/img_star1.svg"
                  alt="starOne"
                />
              </div>
              <Img
                className="h-8 sm:ml-[0] ml-[5px] sm:mt-0 mt-[29px] w-8"
                src="images/img_vector.svg"
                alt="vector_One"
              />
              <Img
                className="h-[53px] md:h-auto sm:ml-[0] ml-[31px] sm:mt-0 mt-[171px] object-cover w-[53px]"
                src="images/img_litecoin2.png"
                alt="litecoinTwo"
              />
            </div>
            <div className="flex h-[236px] sm:h-[368px] justify-end relative w-[46%] md:w-full">
              <Img
                className="h-[19px] mb-[21px] ml-[23px] mt-auto w-[19px]"
                src="images/img_vector.svg"
                alt="vector_Two"
              />
              <div className="absolute h-[236px] sm:h-[368px] inset-[0] justify-center m-auto w-full">
                <div className="flex sm:flex-col flex-row gap-3.5 h-full items-start justify-between m-auto w-full">
                  <Img
                    className="h-[118px] md:h-auto sm:mt-0 mt-[52px] object-cover w-[118px]"
                    src="images/img_etherium3.png"
                    alt="etheriumThree"
                  />
                  <div className="h-[236px] relative w-[70%] sm:w-full">
                    <div className="absolute h-[236px] inset-y-[0] my-auto right-[0] w-[89%]">
                      <div className="flex flex-row h-full items-center justify-between ml-auto mr-[21px] mt-[19px] w-[65%]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_save.svg"
                          alt="save"
                        />
                        <Img
                          className="h-[38px] w-[38px]"
                          src="images/img_user_orange_50.svg"
                          alt="user_One"
                        />
                      </div>
                      <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
                        <div className="flex h-[236px] md:h-[358px] justify-end relative w-full">
                          <Img
                            className="h-[358px] ml-auto mt-auto object-cover w-[358px]"
                            src="images/img_saly11.png"
                            alt="salyEleven"
                          />
                          <Img
                            className="absolute bottom-[11%] h-40 object-cover right-[0] w-40"
                            src="images/img_safe1.png"
                            alt="safeOne"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[11%] h-[84px] left-[0] object-cover w-[84px]"
                      src="images/img_bitcoin1.png"
                      alt="bitcoinOne"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[133px] left-[14%] object-cover top-[0] w-[48%]"
                  src="images/img_bitcoin2.png"
                  alt="bitcoinTwo"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-montserrat gap-4 items-start justify-start w-auto md:w-full">
            <div className="bg-gray-900 flex flex-col items-center justify-start max-w-[944px] p-1 rounded-md w-full">
              <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-bold h-10 leading-[normal] min-w-[134px] text-center text-xs"
                  shape="round"
                  color="teal_400"
                  size="md"
                  variant="fill"
                >
                  Deposit Methods
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold h-10 leading-[normal] min-w-[98px] text-center text-white-A700 text-xs"
                  onClick={() => navigate("/paymentswithrawals")}
                  shape="round"
                  size="md"
                >
                  Withrawals
                </Button>
              </div>
            </div>
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtMontserratBold16"
            >
              Make deposits quick, secure, and without any fee.
            </Text>
          </div>
          <div className="overflow-auto font-montserrat w-full">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={"border-b border-gray-900_7e"}
              headerClass=""
            />
          </div>
          <div className="flex flex-col font-montserrat items-center justify-start rounded-md w-full">
            <div className="bg-blue_gray-900_01 md:h-[266px] h-[344px] md:px-10 sm:px-5 px-[50px] py-10 relative rounded-md w-[945px] md:w-full">
              <div className="flex flex-col gap-2.5 h-full items-start justify-start max-w-[817px] mx-auto w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  The Winning Online Casino Experience
                </Text>
                <Text
                  className="leading-[20.00px] max-w-[817px] md:max-w-full text-gray-500 text-sm"
                  size="txtMontserratMedium14"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </Text>
              </div>
              <div className="absolute h-[339px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[266px] h-[334px] mb-[-68px] ml-auto mr-1 mt-auto w-[1%] z-[1]">
                  <Line className="bg-blue_gray-800 h-[334px] m-auto rounded-sm w-[5px]" />
                  <Line className="absolute bg-teal-400 h-7 inset-x-[0] mx-auto rounded-sm top-[5%] w-[5px]" />
                </div>
                <div className="h-[73px] mt-auto mx-auto w-full">
                  <div className="absolute flex flex-col gap-2.5 h-full inset-[0] items-start justify-start m-auto max-w-[817px] w-full">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtMontserratBold16"
                    >
                      At vero eos et accusamus et iusto odio dignissimos
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[817px] md:max-w-full text-gray-500 text-sm"
                      size="txtMontserratMedium14"
                    >
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est, omnis dolor
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
                    alt="user_Two"
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

export default PaymentsDepositPage;
