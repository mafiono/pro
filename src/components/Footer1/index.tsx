import React from "react";

import { Text } from "components";

type Footer1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer1: React.FC<Footer1Props> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <Text
            className="md:text-5xl text-[80px] text-white-A700 uppercase w-auto"
            size="txtMontserratBlack80"
          >
            The winning club
          </Text>
          <Text
            className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 uppercase w-auto"
            size="txtMontserratBlack50"
          >
            the crown is waiting for you
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
