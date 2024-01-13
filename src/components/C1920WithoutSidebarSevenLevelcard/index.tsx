import React from "react";

import { Img, Line, Text } from "components";

type C1920WithoutSidebarSevenLevelcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "vectorimage"
  | "checkmarkimage"
  | "checkmarkoneimage"
  | "mobileimage"
  | "lineone"
  | "vectortwoimage"
  | "vectorthreeimage"
  | "linetwo"
  | "linethree"
  | "vectorsiximage"
  | "vectorsevenimage"
  | "vectoreightimage"
  | "vectornineimage"
  | "linefour"
  | "settings"
  | "levelone"
  | "settingsoneimage"
  | "clockimage"
  | "clockoneimage"
  | "settingstwoimage"
  | "linefive"
  | "vectortwelveimage"
  | "vectorthirteenimage"
  | "vectorfourteenimage"
  | "linesix"
  | "lineseven"
  | "vectorseventeenimage"
  | "vectoreighteenimage"
  | "lineeight"
  | "vectortwentyimage"
  | "userimage"
  | "levelcountertext"
  | "freespinstext"
> &
  Partial<{
    vectorimage: string;
    checkmarkimage: string;
    checkmarkoneimage: string;
    mobileimage: string;
    lineone: string;
    vectortwoimage: string;
    vectorthreeimage: string;
    linetwo: string;
    linethree: string;
    vectorsiximage: string;
    vectorsevenimage: string;
    vectoreightimage: string;
    vectornineimage: string;
    linefour: string;
    settings: string;
    levelone: string;
    settingsoneimage: string;
    clockimage: string;
    clockoneimage: string;
    settingstwoimage: string;
    linefive: string;
    vectortwelveimage: string;
    vectorthirteenimage: string;
    vectorfourteenimage: string;
    linesix: string;
    lineseven: string;
    vectorseventeenimage: string;
    vectoreighteenimage: string;
    lineeight: string;
    vectortwentyimage: string;
    userimage: string;
    levelcountertext: string;
    freespinstext: string;
  }>;

const C1920WithoutSidebarSevenLevelcard: React.FC<
  C1920WithoutSidebarSevenLevelcardProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-900_01 flex flex-col gap-2 h-[304px] items-center justify-end p-3 rounded-[5px] w-[304px]">
          <div className="flex flex-col relative w-[99%]">
            <div className="flex flex-col items-center justify-start mx-auto w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex relative w-[33%]">
                  <div className="md:h-[50px] h-[89px] my-auto w-[91%]">
                    <div className="absolute flex flex-col left-[0] top-[0] w-[37%]">
                      <div className="md:h-[15px] h-[30px] mx-auto w-[30px]">
                        <div className="absolute md:h-[15px] h-[30px] inset-y-[0] left-[0] my-auto w-4/5">
                          <div className="absolute h-6 md:h-[15px] inset-x-[0] mx-auto top-[0] w-6">
                            {!!props?.vectorimage ? (
                              <Img
                                className="absolute bottom-[0] h-[15px] left-[0]"
                                alt="vector"
                                src={props?.vectorimage}
                              />
                            ) : null}
                            {!!props?.checkmarkimage ? (
                              <Img
                                className="absolute h-3 right-[0] top-[0]"
                                alt="checkmark"
                                src={props?.checkmarkimage}
                              />
                            ) : null}
                          </div>
                          {!!props?.checkmarkoneimage ? (
                            <Img
                              className="absolute bottom-[0] h-3 right-[8%]"
                              alt="checkmark_One"
                              src={props?.checkmarkoneimage}
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
                      {!!props?.lineone ? (
                        <Line className="bg-blue_gray-900 h-[54px] ml-1.5 mt-[-4.33px] w-px z-[1]" />
                      ) : null}
                    </div>
                    <div className="absolute flex flex-col items-center justify-start left-[5%] top-[37%] w-[7%]">
                      {!!props?.vectortwoimage ? (
                        <Img
                          className="h-1 w-1"
                          alt="vector_Two"
                          src={props?.vectortwoimage}
                        />
                      ) : null}
                      {!!props?.vectorthreeimage ? (
                        <Img
                          className="h-[7px]"
                          alt="vector_Three"
                          src={props?.vectorthreeimage}
                        />
                      ) : null}
                    </div>
                    {!!props?.linetwo ? (
                      <Line className="absolute bg-blue_gray-900 bottom-[0] h-[18px] left-[5%] w-[5px]" />
                    ) : null}
                    {!!props?.linethree ? (
                      <Line className="absolute bg-blue_gray-900 h-px right-[0] top-[7%] w-[69%]" />
                    ) : null}
                  </div>
                  <div className="flex flex-col justify-start ml-[undefinedpx] mr-auto w-[52%] z-[1]">
                    {!!props?.vectorsiximage ? (
                      <Img
                        className="h-px"
                        alt="vector_Six"
                        src={props?.vectorsiximage}
                      />
                    ) : null}
                    <div className="flex flex-row items-center justify-start md:ml-[0] ml-[11px] mt-0.5 w-[28%] md:w-full">
                      {!!props?.vectorsevenimage ? (
                        <Img
                          className="h-1 w-1"
                          alt="vector_Seven"
                          src={props?.vectorsevenimage}
                        />
                      ) : null}
                      {!!props?.vectoreightimage ? (
                        <Img
                          className="h-[5px]"
                          alt="vector_Eight"
                          src={props?.vectoreightimage}
                        />
                      ) : null}
                    </div>
                  </div>
                  {!!props?.vectornineimage ? (
                    <Img
                      className="h-[5px] ml-[-9.19px] mt-1 z-[1]"
                      alt="vector_Nine"
                      src={props?.vectornineimage}
                    />
                  ) : null}
                  {!!props?.linefour ? (
                    <Line className="bg-blue_gray-900 h-[47px] ml-[undefinedpx] my-auto w-px z-[1]" />
                  ) : null}
                </div>
                {!!props?.settings ? (
                  <Img
                    className="h-[91px]"
                    alt="settings"
                    src={props?.settings}
                  />
                ) : null}
              </div>
            </div>
            <Img
              className="h-[134px] mt-[-48.56px] mx-auto z-[1]"
              alt="levelOne"
              src={props?.levelone}
            />
          </div>
          <div className="h-[91px] relative w-[99%]">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="h-[91px] relative rotate-[90deg] w-[33%]">
                  <div className="flex flex-row items-start justify-evenly mb-[undefinedpx] mt-auto w-[11%] z-[1]">
                    {!!props?.lineseven ? (
                      <Line className="bg-blue_gray-900 h-[47px] w-px" />
                    ) : null}
                    <div className="flex flex-col items-center justify-start mt-[21px] w-[56%]">
                      {!!props?.vectorseventeenimage ? (
                        <Img
                          className="h-[7px]"
                          alt="vector_Seventeen"
                          src={props?.vectorseventeenimage}
                        />
                      ) : null}
                      {!!props?.vectoreighteenimage ? (
                        <Img
                          className="h-1 w-1"
                          alt="vector_Eighteen"
                          src={props?.vectoreighteenimage}
                        />
                      ) : null}
                    </div>
                  </div>
                  {!!props?.lineeight ? (
                    <Line className="bg-blue_gray-900 h-[18px] mb-[-9.18px] ml-1 w-[5px] z-[1]" />
                  ) : null}
                  {!!props?.vectortwentyimage ? (
                    <Img
                      className="h-px mb-[undefinedpx] mt-auto mx-auto z-[1]"
                      alt="vector_Twenty"
                      src={props?.vectortwentyimage}
                    />
                  ) : null}
                  <div className="md:h-14 h-[82px] mt-auto mx-auto w-full">
                    <div className="absolute bottom-[0] flex left-[0] w-[90%]">
                      <div className="md:h-[15px] h-[30px] my-auto w-[30px]">
                        <div className="absolute bottom-[0] h-6 md:h-[15px] inset-x-[0] mx-auto w-full">
                          <div className="absolute h-6 md:h-[15px] inset-y-[0] left-[0] my-auto w-6">
                            {!!props?.settingsoneimage ? (
                              <Img
                                className="absolute bottom-[0] h-3 right-[0]"
                                alt="settings_One"
                                src={props?.settingsoneimage}
                              />
                            ) : null}
                            {!!props?.clockimage ? (
                              <Img
                                className="absolute h-[15px] left-[0] top-[0]"
                                alt="clock"
                                src={props?.clockimage}
                              />
                            ) : null}
                          </div>
                          {!!props?.clockoneimage ? (
                            <Img
                              className="absolute h-[15px] right-[0] top-[8%]"
                              alt="clock_One"
                              src={props?.clockoneimage}
                            />
                          ) : null}
                        </div>
                        {!!props?.settingstwoimage ? (
                          <Img
                            className="absolute h-3 left-[20%] top-[0]"
                            alt="settings_Two"
                            src={props?.settingstwoimage}
                          />
                        ) : null}
                      </div>
                      {!!props?.linefive ? (
                        <Line className="bg-blue_gray-900 h-px mb-1.5 ml-[-4.34px] mt-auto w-[68%] z-[1]" />
                      ) : null}
                    </div>
                    <div className="absolute bottom-[5%] flex flex-row items-center justify-center left-[37%] w-[15%]">
                      {!!props?.vectortwelveimage ? (
                        <Img
                          className="h-1 w-1"
                          alt="vector_Twelve"
                          src={props?.vectortwelveimage}
                        />
                      ) : null}
                      {!!props?.vectorthirteenimage ? (
                        <Img
                          className="h-[5px]"
                          alt="vector_Thirteen"
                          src={props?.vectorthirteenimage}
                        />
                      ) : null}
                    </div>
                    {!!props?.vectorfourteenimage ? (
                      <Img
                        className="absolute bottom-[5%] h-[5px] right-[0]"
                        alt="vector_Fourteen"
                        src={props?.vectorfourteenimage}
                      />
                    ) : null}
                    {!!props?.linesix ? (
                      <Line className="absolute bg-blue_gray-900 h-14 left-[7%] top-[0] w-px" />
                    ) : null}
                  </div>
                </div>
                {!!props?.userimage ? (
                  <Img className="h-[89px]" alt="user" src={props?.userimage} />
                ) : null}
              </div>
            </div>
            <div className="absolute flex flex-col gap-1 inset-x-[0] items-center justify-start mx-auto top-[0] w-[181px]">
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
        </div>
      </div>
    </>
  );
};

C1920WithoutSidebarSevenLevelcard.defaultProps = {
  levelone: "images/img_level1.svg",
  levelcountertext: "Level 1",
  freespinstext: "125 Free Spins",
};

export default C1920WithoutSidebarSevenLevelcard;
