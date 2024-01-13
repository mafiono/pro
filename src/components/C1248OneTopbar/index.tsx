import React from "react";

import { Button, Img, Text } from "components";

type C1248OneTopbarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "loginbuttontext" | "registerbuttontext"
> &
  Partial<{ loginbuttontext: string; registerbuttontext: string }>;

const C1248OneTopbar: React.FC<C1248OneTopbarProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[11px] items-center justify-between w-[92%]">
          <Img
            className="h-6 w-6"
            src="images/img_megaphone.svg"
            alt="megaphone_One"
          />
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1090px] w-full">
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
                  {props?.loginbuttontext}
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold font-montserrat h-[39px] leading-[normal] min-w-[90px] text-center text-sm"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                {props?.registerbuttontext}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C1248OneTopbar.defaultProps = {
  loginbuttontext: "Log In",
  registerbuttontext: "Register",
};

export default C1248OneTopbar;
