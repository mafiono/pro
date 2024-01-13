import React from "react";

import { Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[21px] items-center justify-center w-[78%] md:w-full">
          <div className="flex flex-col items-center justify-start w-auto md:w-full">
            <Text
              className="md:text-5xl text-[80px] text-white-A700 uppercase w-auto"
              size="txtMontserratBlack80"
            >
              push it to the limit
            </Text>
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 uppercase w-auto"
              size="txtMontserratBlack50"
            >
              €5000 push gaming tournament
            </Text>
          </div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-auto"
            size="txtMontserratBlack32"
          >
            13-25 august 2022
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
