import React from "react";

import { Button, Img, Text } from "components";

type Header5Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header5: React.FC<Header5Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-6 md:ml-[0] ml-[11px] md:mt-0 my-[17px] w-6"
          src="images/img_megaphone.svg"
          alt="megaphone"
        />
        <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1050px] md:ml-[0] ml-[11px] mr-[152px] md:mt-0 my-2.5 w-full">
          <Img
            className="h-10 md:h-auto object-cover w-[94px]"
            src="images/img_logo.png"
            alt="logo"
          />
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
            <div className="flex flex-col h-[39px] md:h-auto items-center justify-center px-3.5 py-[11px] rounded w-auto">
              <Text
                className="text-center text-sm text-white-A700 w-auto"
                size="txtMontserratBold14"
              >
                Log In
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold font-montserrat h-[39px] leading-[normal] min-w-[90px] text-center text-sm"
              shape="round"
              color="teal_400"
              size="md"
              variant="fill"
            >
              Register
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header5.defaultProps = {};

export default Header5;
