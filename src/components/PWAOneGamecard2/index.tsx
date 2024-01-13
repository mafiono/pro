import React from "react";

import { Button, Img, Text } from "components";

type PWAOneGamecard2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "playforfuntext" | "pirates2mutinytext" | "pushgamingtext"
> &
  Partial<{
    userimage: string;
    playforfuntext: string;
    pirates2mutinytext: string;
    pushgamingtext: string;
  }>;

const PWAOneGamecard2: React.FC<PWAOneGamecard2Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-36 inset-x-[0] mx-auto object-cover rounded-md top-[0] w-36"
          alt="notombofakhenat_Four"
          src={props?.userimage}
        />
        <div className="absolute bg-blue_gray-900_a2 border border-blue_gray-700_a2 border-solid flex flex-col h-full inset-[0] justify-center m-auto p-1 rounded-md w-full">
          <Img
            className="h-6 ml-28 md:ml-[0] w-6"
            src="images/img_icongamecardheartoff.svg"
            alt="icongamecardhea_Three"
          />
          <div className="flex flex-col gap-[13px] items-center justify-start ml-7 md:ml-[0] mt-4 w-[59%] md:w-full">
            <Button
              className="flex h-[55px] items-center justify-center rounded-[27px] w-[55px]"
              color="teal_400"
              size="lg"
              variant="fill"
            >
              <Img src="images/img_overflowmenu.svg" alt="overflowmenu" />
            </Button>
            <Text
              className="text-center text-white-A700 text-xs"
              size="txtMontserratBold12"
            >
              {props?.playforfuntext}
            </Text>
          </div>
          <Text
            className="mt-[30px] mx-auto text-center text-white-A700 text-xs"
            size="txtMontserratBlack12"
          >
            {props?.pirates2mutinytext}
          </Text>
          <Text
            className="mb-[3px] md:ml-[0] ml-[34px] mt-2 text-[9px] text-center text-white-A700"
            size="txtMontserratRegular9"
          >
            {props?.pushgamingtext}
          </Text>
        </div>
      </div>
    </>
  );
};

PWAOneGamecard2.defaultProps = {
  userimage: "images/img_notombofakhenaten.png",
  playforfuntext: "Play For Fun",
  pirates2mutinytext: "Pirates 2 Mutiny",
  pushgamingtext: "PUSH GAMING",
};

export default PWAOneGamecard2;
