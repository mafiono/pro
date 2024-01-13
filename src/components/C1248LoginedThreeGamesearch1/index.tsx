import React from "react";

import { Img, Text } from "components";

type C1248LoginedThreeGamesearch1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titletext" | "subtitletext"
> &
  Partial<{ titletext: string; subtitletext: string }>;

const C1248LoginedThreeGamesearch1: React.FC<
  C1248LoginedThreeGamesearch1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-16 md:h-auto object-cover rounded-md w-16"
          src="images/img_notombofakhenaten_6.png"
          alt="notombofakhenat_One"
        />
        <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
          <Text
            className="text-white-A700 text-xs w-auto"
            size="txtMontserratBlack12"
          >
            {props?.titletext}
          </Text>
          <Text
            className="text-[9px] text-white-A700 w-auto"
            size="txtMontserratRegular9"
          >
            {props?.subtitletext}
          </Text>
        </div>
      </div>
    </>
  );
};

C1248LoginedThreeGamesearch1.defaultProps = {
  titletext: "Pirates 2 Mutiny",
  subtitletext: "PUSH GAMING",
};

export default C1248LoginedThreeGamesearch1;
