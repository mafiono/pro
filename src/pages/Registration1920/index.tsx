import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

const inputsThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Registration1920Page: React.FC = () => {
  return (
    <>
      <div className="flex font-montserrat h-[1080px] justify-end mx-auto relative w-full">
        <Img
          className="h-[2648px] mt-auto mx-auto object-cover w-full"
          src="images/img_image69.png"
          alt="imageSixtyNine"
        />
        <div className="absolute bg-blue_gray-900_a2_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-60 md:px-10 sm:px-5 w-full">
          <div className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 rounded-md shadow-bs5 w-[55%] md:w-full">
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
                className="h-[141px] ml-auto mt-[-33px] object-cover w-[34%] z-[1]"
                src="images/img_image79.png"
                alt="imageSeventyNine"
              />
              <Img
                className="h-[105px] ml-[29px] mt-[-15.43px] object-cover w-[105px] z-[1]"
                src="images/img_image80.png"
                alt="imageEighty"
              />
              <Img
                className="h-[507px] mt-[-NaNpx] mx-auto object-cover w-full z-[1]"
                src="images/img_character41.png"
                alt="characterFortyOne"
              />
              <Img
                className="h-[59px] mt-[-NaNpx] mx-auto object-cover z-[1]"
                src="images/img_logo.png"
                alt="logo"
              />
            </div>
            <div className="bg-blue_gray-800_02 flex flex-col gap-4 h-[600px] md:h-auto items-center justify-center pb-2 pt-4 rounded-br-md rounded-tr-md w-[464px] sm:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_icon_general_crosssmall_white_a700.svg"
                alt="icongeneralcros"
              />
              <div className="flex flex-col gap-[15px] items-center justify-start w-[61%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[280px]">
                  <Text
                    className="text-center text-sm text-white-A700 w-auto"
                    size="txtMontserratBold14"
                  >
                    Registration
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
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
                    placeholder="Username"
                    className="leading-[normal] md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-center text-xs w-full"
                    wrapClassName="rounded w-full"
                    type="text"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Input
                    name="inputs_Two"
                    placeholder="Pasword"
                    className="leading-[normal] p-0 placeholder:text-gray-500 text-center text-xs w-full"
                    wrapClassName="flex md:h-auto rounded w-[280px]"
                    suffix={
                      <Img
                        className="h-[18px] ml-[35px] my-auto"
                        src="images/img_icon_sidebar_eyeon.svg"
                        alt="icon/sidebar/eye_on"
                      />
                    }
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <SelectBox
                    className="h-10 leading-[normal] text-center text-xs w-full"
                    placeholderClassName="text-gray-500"
                    indicator={
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="inputs_Three"
                    options={inputsThreeOptionsList}
                    isSearchable={false}
                    placeholder="Currency"
                    shape="round"
                    color="gray_900"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <div className="flex flex-row gap-2.5 items-start justify-start w-[282px]">
                  <div className="border border-solid border-white-A700 h-[17px] rounded w-[17px]"></div>
                  <Text
                    className="text-[10px] text-gray-500"
                    size="txtMontserratMedium10Gray500"
                  >
                    <span className="text-gray-500 font-montserrat text-left font-medium">
                      <>
                        By clicking Register, you are indicating that you have
                        read and acknowledge the <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-montserrat text-left font-bold">
                      Terms & Conditions
                    </span>
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold h-10 leading-[normal] text-center text-sm w-[280px]"
                  shape="round"
                  color="teal_400"
                  size="md"
                  variant="fill"
                >
                  Registration
                </Button>
              </div>
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
                <div className="flex flex-col gap-1 items-center justify-center w-auto">
                  <Text
                    className="text-center text-gray-500 text-sm w-auto"
                    size="txtMontserratMedium14"
                  >
                    Allready a member?
                  </Text>
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center md:px-10 sm:px-5 px-[42.5px] py-[11px] rounded w-auto">
                    <a
                      href="javascript:"
                      className="text-center text-sm text-white-A700 w-auto"
                    >
                      <Text size="txtMontserratBold14">Log In</Text>
                    </a>
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

export default Registration1920Page;
