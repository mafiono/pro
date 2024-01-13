import React from "react";

import { Button } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-7 items-center justify-between max-w-[1848px] w-full">
          <div className="header-row my-1.5">
            <div className="flex flex-row gap-[7px] items-center justify-start">
              <div className="flex flex-col items-center justify-start w-[15%]">
                <div className="h-[27px] w-full"></div>
              </div>
              <div className="h-2.5 w-[27%]"></div>
              <div className="h-7 w-7"></div>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold font-roboto sm:hidden leading-[normal] min-w-[120px] rounded-md text-center text-lg"
            shape="round"
            color="teal_400"
            size="md"
            variant="fill"
          >
            Download
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
