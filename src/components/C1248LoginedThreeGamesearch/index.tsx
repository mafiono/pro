import React from "react";

import { Img, Text } from "components";

type C1248LoginedThreeGamesearchProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "pirates2mutiny" | "pushgaming"
> &
  Partial<{ userimage: string; pirates2mutiny: string; pushgaming: string }>;

const C1248LoginedThreeGamesearch: React.FC<
  C1248LoginedThreeGamesearchProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-16 md:h-auto object-cover rounded-md w-16"
          alt="notombofakhenat"
          src={props?.userimage}
        />
        <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
          <Text
            className="text-white-A700 text-xs w-auto"
            size="txtMontserratBlack12"
          >
            {props?.pirates2mutiny}
          </Text>
          {!!props?.pushgaming ? (
            <Text
              className="text-[9px] text-white-A700 w-auto"
              size="txtMontserratRegular9"
            >
              {props?.pushgaming}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

C1248LoginedThreeGamesearch.defaultProps = {
  userimage: "images/img_notombofakhenaten_64x64.png",
  pirates2mutiny: "Pirates 2 Mutiny",
};

export default C1248LoginedThreeGamesearch;
