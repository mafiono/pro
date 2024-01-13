import React from "react";

import { Button, Img, Text } from "components";

type Header2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header2: React.FC<Header2Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-6 md:ml-[0] ml-[11px] md:mt-0 my-[17px] w-6"
          src="images/img_megaphone.svg"
          alt="megaphone"
        />
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1050px] md:ml-[0] ml-[11px] mr-[152px] md:mt-0 my-2.5 w-full">
          <Img
            className="sm:flex-1 h-10 md:h-auto object-cover w-[94px] sm:w-full"
            src="images/img_logo.png"
            alt="logo"
          />
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-start justify-start w-auto sm:w-full">
            <Button
              className="flex h-10 items-center justify-center w-10"
              shape="round"
              color="gray_900"
              size="sm"
              variant="fill"
            >
              <Img className="h-6" src="images/img_search.svg" alt="search" />
            </Button>
            <div className="bg-gray-900 flex flex-row gap-[9px] items-center justify-center pl-2.5 rounded w-3/5 sm:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtMontserratMedium14WhiteA700"
                >
                  1.0234567 BTC
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Button
                className="cursor-pointer font-bold font-montserrat h-10 leading-[normal] min-w-[76px] text-center text-sm"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                Wallet
              </Button>
            </div>
            <Button
              className="flex h-10 items-center justify-center w-10"
              shape="round"
              color="gray_900"
              size="sm"
              variant="fill"
            >
              <Img className="h-6" src="images/img_lock.svg" alt="lock" />
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
                src="images/img_iconheaderbell.svg"
                alt="iconheaderbell"
              />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
