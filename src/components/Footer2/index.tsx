import React from "react";

import { Text } from "components";

type Footer2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer2: React.FC<Footer2Props> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[21px] items-center justify-center w-[83%] md:w-full">
          <div className="flex flex-col items-center justify-start w-auto md:w-full">
            <Text
              className="md:text-5xl text-[70px] text-white-A700 uppercase w-auto"
              size="txtMontserratBlack70"
            >
              Battle of the magicians
            </Text>
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 uppercase w-auto"
              size="txtMontserratBlack50"
            >
              €1000 Toutnament
            </Text>
          </div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-auto"
            size="txtMontserratBlack32"
          >
            1-12 july 2022
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer2.defaultProps = {};

export default Footer2;
