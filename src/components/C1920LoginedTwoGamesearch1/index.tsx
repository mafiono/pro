import React from "react";

import { Img, Text } from "components";

type C1920LoginedTwoGamesearch1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "pirates2mutiny" | "pushgaming"
> &
  Partial<{ pirates2mutiny: string; pushgaming: string }>;

const C1920LoginedTwoGamesearch1: React.FC<C1920LoginedTwoGamesearch1Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-16 md:h-auto object-cover rounded-md w-16"
          src="images/img_notombofakhenaten_6.png"
          alt="notombofakhenat"
        />
        <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
          <Text
            className="text-white-A700 text-xs w-auto"
            size="txtMontserratBlack12"
          >
            {props?.pirates2mutiny}
          </Text>
          <Text
            className="text-[9px] text-white-A700 w-auto"
            size="txtMontserratRegular9"
          >
            {props?.pushgaming}
          </Text>
        </div>
      </div>
    </>
  );
};

C1920LoginedTwoGamesearch1.defaultProps = {
  pirates2mutiny: "Pirates 2 Mutiny",
  pushgaming: "PUSH GAMING",
};

export default C1920LoginedTwoGamesearch1;
