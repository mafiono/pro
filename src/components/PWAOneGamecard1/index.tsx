import React from "react";

import { Img, Text } from "components";

type PWAOneGamecard1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "pirates2mutiny" | "pushgaming"
> &
  Partial<{ userimage: string; pirates2mutiny: string; pushgaming: string }>;

const PWAOneGamecard1: React.FC<PWAOneGamecard1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-36 inset-x-[0] mx-auto object-cover rounded-md top-[0] w-36"
          alt="notombofakhenat"
          src={props?.userimage}
        />
        <div className="absolute bg-gradient  flex flex-col gap-2 h-full inset-[0] items-center justify-center m-auto p-[7px] rounded-md w-full">
          <Text
            className="mt-[150px] text-center text-white-A700 text-xs"
            size="txtMontserratBlack12"
          >
            {props?.pirates2mutiny}
          </Text>
          <Text
            className="text-[9px] text-center text-white-A700"
            size="txtMontserratRegular9"
          >
            {props?.pushgaming}
          </Text>
        </div>
      </div>
    </>
  );
};

PWAOneGamecard1.defaultProps = {
  userimage: "images/img_notombofakhenaten_144x144.png",
  pirates2mutiny: "Pirates 2 Mutiny",
  pushgaming: "PUSH GAMING",
};

export default PWAOneGamecard1;
