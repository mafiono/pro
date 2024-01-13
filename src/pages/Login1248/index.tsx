import React from "react";

import { Button, Img, Input, Text } from "components";

const Login1248Page: React.FC = () => {
  return (
    <>
      <div className="flex font-montserrat h-[1080px] justify-end mx-auto relative w-full">
        <Img
          className="h-[2894px] mt-auto mx-auto object-cover w-full"
          src="images/img_image70.png"
          alt="imageSeventy"
        />
        <div className="absolute bg-blue_gray-900_a2_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[232px] md:px-10 sm:px-5 w-full">
          <div className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[784px] my-8 md:px-5 rounded-md shadow-bs5 w-full">
            <div className="bg-gray-900 flex flex-col relative rounded-bl-md rounded-tl-md w-[41%] md:w-full">
              <div className="flex flex-col mt-[-NaNpx] mx-auto w-full z-[1]">
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Img
                      className="h-[84px] md:h-auto mt-[9px] object-cover"
                      src="images/img_image78.png"
                      alt="imageSeventyEight"
                    />
                    <Img
                      className="h-40 md:h-auto object-cover"
                      src="images/img_image75.png"
                      alt="imageSeventyFive"
                    />
                  </div>
                </div>
                <Img
                  className="h-28 mt-[-43.9px] object-cover w-[23%] z-[1]"
                  src="images/img_image77.png"
                  alt="imageSeventySeven"
                />
              </div>
              <Img
                className="h-[141px] mb-auto ml-auto mt-[-33px] object-cover w-[34%] z-[1]"
                src="images/img_image79.png"
                alt="imageSeventyNine"
              />
              <Img
                className="h-[105px] mb-auto ml-[29px] mt-[-15.43px] object-cover w-[105px] z-[1]"
                src="images/img_image80.png"
                alt="imageEighty"
              />
              <Img
                className="h-[483px] mt-[-NaNpx] mx-auto object-cover w-full z-[1]"
                src="images/img_character41.png"
                alt="characterFortyOne"
              />
              <Img
                className="h-[41px] mt-[-NaNpx] mx-auto object-cover z-[1]"
                src="images/img_logo.png"
                alt="logo"
              />
            </div>
            <div className="bg-blue_gray-800_02 flex sm:flex-1 flex-col gap-4 h-[551px] md:h-auto items-center justify-center pb-2 pt-4 rounded-br-md rounded-tr-md w-[464px] sm:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_icon_general_crosssmall_white_a700.svg"
                alt="icongeneralcros"
              />
              <div className="flex flex-col gap-[15px] items-center justify-start w-[61%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[280px]">
                  <a
                    href="javascript:"
                    className="text-center text-sm text-white-A700 w-auto"
                  >
                    <Text size="txtMontserratBold14">Log In</Text>
                  </a>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                  <Input
                    name="inputs"
                    placeholder="Email"
                    className="leading-[normal] md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-center text-xs w-full"
                    wrapClassName="rounded w-full"
                    type="email"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Input
                    name="inputs_One"
                    placeholder="Pasword"
                    className="leading-[normal] md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-center text-xs w-full"
                    wrapClassName="rounded w-full"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Text
                    className="text-center text-white-A700 text-xs underline w-auto"
                    size="txtMontserratRegular12"
                  >
                    Forget Password?
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold h-10 leading-[normal] text-center text-sm w-[280px]"
                  shape="round"
                  color="teal_400"
                  size="md"
                  variant="fill"
                >
                  Log In
                </Button>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-[66%] md:w-full">
                <div className="flex flex-col gap-3 items-center justify-center w-auto">
                  <Text
                    className="text-center text-gray-500 text-sm w-auto"
                    size="txtMontserratMedium14"
                  >
                    Or join with
                  </Text>
                  <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
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
                    </div>
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
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
                <div className="flex flex-col gap-1 items-center justify-center w-auto">
                  <Text
                    className="text-center text-gray-500 text-sm w-auto"
                    size="txtMontserratMedium14"
                  >
                    Not Have Account?
                  </Text>
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center md:px-10 sm:px-5 px-[42.5px] py-[11px] rounded w-auto">
                    <Text
                      className="text-center text-sm text-white-A700 w-auto"
                      size="txtMontserratBold14"
                    >
                      Registration
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login1248Page;
