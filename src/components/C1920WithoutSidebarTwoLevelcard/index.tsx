import React from "react";

import { Img, Line, Text } from "components";

type C1920WithoutSidebarTwoLevelcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "settingsimage"
  | "vectorimage"
  | "vectoroneimage"
  | "mobileimage"
  | "vectortwoline"
  | "vectorfourimage"
  | "vectorthreeimage"
  | "vectorfiveline"
  | "vectorsixline"
  | "vectorsevenimage"
  | "vectoreightimage"
  | "vectornineimage"
  | "vectortenimage"
  | "vectorelevenline"
  | "settingsoneimage"
  | "settingstwoimage"
  | "settingsthreeimage"
  | "settingsfourimage"
  | "settingsfiveimage"
  | "vectortwelveline"
  | "vectorthirteenimage"
  | "vectorfourteenimage"
  | "vectorfifteenimage"
  | "vectorsixteenline"
  | "vectorseventeenline"
  | "vectoreighteenimage"
  | "vectornineteenimage"
  | "vectortwentyline"
  | "vectortwentyoneimage"
  | "userimage"
  | "levelcountertext"
  | "freespinstext"
  | "leveloneimage"
> &
  Partial<{
    settingsimage: string;
    vectorimage: string;
    vectoroneimage: string;
    mobileimage: string;
    vectortwoline: string;
    vectorfourimage: string;
    vectorthreeimage: string;
    vectorfiveline: string;
    vectorsixline: string;
    vectorsevenimage: string;
    vectoreightimage: string;
    vectornineimage: string;
    vectortenimage: string;
    vectorelevenline: string;
    settingsoneimage: string;
    settingstwoimage: string;
    settingsthreeimage: string;
    settingsfourimage: string;
    settingsfiveimage: string;
    vectortwelveline: string;
    vectorthirteenimage: string;
    vectorfourteenimage: string;
    vectorfifteenimage: string;
    vectorsixteenline: string;
    vectorseventeenline: string;
    vectoreighteenimage: string;
    vectornineteenimage: string;
    vectortwentyline: string;
    vectortwentyoneimage: string;
    userimage: string;
    levelcountertext: string;
    freespinstext: string;
    leveloneimage: string;
  }>;

const C1920WithoutSidebarTwoLevelcard: React.FC<
  C1920WithoutSidebarTwoLevelcardProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-900_03 md:h-[222px] sm:h-[276px] h-[304px] p-3 relative rounded-[5px] w-[304px]">
          <div className="md:h-[222px] sm:h-[276px] h-[277px] m-auto w-[276px]">
            <div className="md:h-[222px] sm:h-[276px] h-[277px] m-auto w-[276px]">
              <div className="flex flex-col h-full items-center justify-start m-auto w-[276px]">
                <div className="flex flex-col md:gap-10 gap-[94px] items-center justify-start w-[276px] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex relative w-[33%]">
                      <div className="md:h-[50px] h-[89px] my-auto w-[91%]">
                        <div className="absolute flex flex-col left-[0] top-[0] w-[37%]">
                          <div className="md:h-[15px] h-[30px] mx-auto w-[30px]">
                            <div className="absolute md:h-[15px] h-[30px] inset-y-[0] left-[0] my-auto w-4/5">
                              <div className="absolute h-6 md:h-[15px] inset-x-[0] mx-auto top-[0] w-6">
                                {!!props?.settingsimage ? (
                                  <Img
                                    className="absolute bottom-[0] h-[15px] left-[0]"
                                    alt="settings"
                                    src={props?.settingsimage}
                                  />
                                ) : null}
                                {!!props?.vectorimage ? (
                                  <Img
                                    className="absolute h-3 right-[0] top-[0]"
                                    alt="vector"
                                    src={props?.vectorimage}
                                  />
                                ) : null}
                              </div>
                              {!!props?.vectoroneimage ? (
                                <Img
                                  className="absolute bottom-[0] h-3 right-[8%]"
                                  alt="vector_One"
                                  src={props?.vectoroneimage}
                                />
                              ) : null}
                            </div>
                            {!!props?.mobileimage ? (
                              <Img
                                className="absolute h-[15px] right-[0] top-[20%]"
                                alt="mobile"
                                src={props?.mobileimage}
                              />
                            ) : null}
                          </div>
                          {!!props?.vectortwoline ? (
                            <Line className="bg-gray-700 h-[54px] ml-1.5 mt-[-4.33px] w-px z-[1]" />
                          ) : null}
                        </div>
                        <div className="absolute flex flex-col items-center justify-start left-[5%] top-[37%] w-[7%]">
                          {!!props?.vectorfourimage ? (
                            <Img
                              className="h-1 w-1"
                              alt="vector_Three"
                              src={props?.vectorfourimage}
                            />
                          ) : null}
                          {!!props?.vectorthreeimage ? (
                            <Img
                              className="h-[7px]"
                              alt="vector_Four"
                              src={props?.vectorthreeimage}
                            />
                          ) : null}
                        </div>
                        {!!props?.vectorfiveline ? (
                          <Line className="absolute bg-gray-700 bottom-[0] h-[18px] left-[5%] w-[5px]" />
                        ) : null}
                        {!!props?.vectorsixline ? (
                          <Line className="absolute bg-gray-700 h-px right-[0] top-[7%] w-[69%]" />
                        ) : null}
                      </div>
                      <div className="flex flex-col justify-start ml-[undefinedpx] mr-auto w-[52%] z-[1]">
                        {!!props?.vectorsevenimage ? (
                          <Img
                            className="h-px"
                            alt="vector_Seven"
                            src={props?.vectorsevenimage}
                          />
                        ) : null}
                        <div className="flex flex-row items-center justify-start md:ml-[0] ml-[11px] mt-0.5 w-[28%] md:w-full">
                          {!!props?.vectoreightimage ? (
                            <Img
                              className="h-1 w-1"
                              alt="vector_Eight"
                              src={props?.vectoreightimage}
                            />
                          ) : null}
                          {!!props?.vectornineimage ? (
                            <Img
                              className="h-[5px]"
                              alt="vector_Nine"
                              src={props?.vectornineimage}
                            />
                          ) : null}
                        </div>
                      </div>
                      {!!props?.vectortenimage ? (
                        <Img
                          className="h-[5px] ml-[-9.19px] mt-1 z-[1]"
                          alt="vector_Ten"
                          src={props?.vectortenimage}
                        />
                      ) : null}
                      {!!props?.vectorelevenline ? (
                        <Line className="bg-gray-700 h-[47px] ml-[undefinedpx] my-auto w-px z-[1]" />
                      ) : null}
                    </div>
                    {!!props?.settingsoneimage ? (
                      <Img
                        className="h-[91px]"
                        alt="settings_One"
                        src={props?.settingsoneimage}
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="h-[91px] relative rotate-[90deg] w-[33%]">
                      <div className="flex flex-row items-start justify-evenly mb-[undefinedpx] mt-auto w-[11%] z-[1]">
                        {!!props?.vectorseventeenline ? (
                          <Line className="bg-gray-700 h-[47px] w-px" />
                        ) : null}
                        <div className="flex flex-col items-center justify-start mt-[21px] w-[56%]">
                          {!!props?.vectoreighteenimage ? (
                            <Img
                              className="h-[7px]"
                              alt="vector_Eighteen"
                              src={props?.vectoreighteenimage}
                            />
                          ) : null}
                          {!!props?.vectornineteenimage ? (
                            <Img
                              className="h-1 w-1"
                              alt="vector_Nineteen"
                              src={props?.vectornineteenimage}
                            />
                          ) : null}
                        </div>
                      </div>
                      {!!props?.vectortwentyline ? (
                        <Line className="bg-gray-700 h-[18px] mb-[-9.18px] ml-1 w-[5px] z-[1]" />
                      ) : null}
                      {!!props?.vectortwentyoneimage ? (
                        <Img
                          className="h-px mb-[undefinedpx] mt-auto mx-auto z-[1]"
                          alt="vector_TwentyOne"
                          src={props?.vectortwentyoneimage}
                        />
                      ) : null}
                      <div className="md:h-14 h-[82px] mt-auto mx-auto w-full">
                        <div className="absolute bottom-[0] flex left-[0] w-[90%]">
                          <div className="md:h-[15px] h-[30px] my-auto w-[30px]">
                            <div className="absolute bottom-[0] h-6 md:h-[15px] inset-x-[0] mx-auto w-full">
                              <div className="absolute h-6 md:h-[15px] inset-y-[0] left-[0] my-auto w-6">
                                {!!props?.settingstwoimage ? (
                                  <Img
                                    className="absolute bottom-[0] h-3 right-[0]"
                                    alt="settings_Two"
                                    src={props?.settingstwoimage}
                                  />
                                ) : null}
                                {!!props?.settingsthreeimage ? (
                                  <Img
                                    className="absolute h-[15px] left-[0] top-[0]"
                                    alt="settings_Three"
                                    src={props?.settingsthreeimage}
                                  />
                                ) : null}
                              </div>
                              {!!props?.settingsfourimage ? (
                                <Img
                                  className="absolute h-[15px] right-[0] top-[8%]"
                                  alt="settings_Four"
                                  src={props?.settingsfourimage}
                                />
                              ) : null}
                            </div>
                            {!!props?.settingsfiveimage ? (
                              <Img
                                className="absolute h-3 left-[20%] top-[0]"
                                alt="settings_Five"
                                src={props?.settingsfiveimage}
                              />
                            ) : null}
                          </div>
                          {!!props?.vectortwelveline ? (
                            <Line className="bg-gray-700 h-px mb-1.5 ml-[-4.34px] mt-auto w-[68%] z-[1]" />
                          ) : null}
                        </div>
                        <div className="absolute bottom-[5%] flex flex-row items-center justify-center left-[37%] w-[15%]">
                          {!!props?.vectorthirteenimage ? (
                            <Img
                              className="h-1 w-1"
                              alt="vector_Thirteen"
                              src={props?.vectorthirteenimage}
                            />
                          ) : null}
                          {!!props?.vectorfourteenimage ? (
                            <Img
                              className="h-[5px]"
                              alt="vector_Fourteen"
                              src={props?.vectorfourteenimage}
                            />
                          ) : null}
                        </div>
                        {!!props?.vectorfifteenimage ? (
                          <Img
                            className="absolute bottom-[5%] h-[5px] right-[0]"
                            alt="vector_Fifteen"
                            src={props?.vectorfifteenimage}
                          />
                        ) : null}
                        {!!props?.vectorsixteenline ? (
                          <Line className="absolute bg-gray-700 h-14 left-[7%] top-[0] w-px" />
                        ) : null}
                      </div>
                    </div>
                    {!!props?.userimage ? (
                      <Img
                        className="h-[89px]"
                        alt="user"
                        src={props?.userimage}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[13%] flex flex-col gap-1 inset-x-[0] items-center justify-start mx-auto w-[181px]">
                <Text
                  className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                  size="txtMontserratBold24"
                >
                  {props?.levelcountertext}
                </Text>
                <Text
                  className="text-center text-sm text-yellow-700 w-auto"
                  size="txtMontserratMedium14Yellow700"
                >
                  {props?.freespinstext}
                </Text>
              </div>
            </div>
            <Img
              className="absolute backdrop-opacity-[0.5] blur-[50.00px] bottom-[26%] h-[103px] inset-x-[0] mx-auto w-[86%]"
              src="images/img_star1_1.svg"
              alt="starOne"
            />
          </div>
          <Img
            className="absolute h-[134px] inset-x-[0] mx-auto top-[18%]"
            alt="levelOne"
            src={props?.leveloneimage}
          />
        </div>
      </div>
    </>
  );
};

C1920WithoutSidebarTwoLevelcard.defaultProps = {
  levelcountertext: "Level 1",
  freespinstext: "125 Free Spins",
  leveloneimage: "images/img_level1.svg",
};

export default C1920WithoutSidebarTwoLevelcard;
