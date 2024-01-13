import React from "react";

import { Button, Img, Text } from "components";

type PWAOneTopbarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "megaphoneimage" | "loginbuttontext" | "registerbutton"
> &
  Partial<{
    megaphoneimage: string;
    loginbuttontext: string;
    registerbutton: string;
  }>;

const PWAOneTopbar: React.FC<PWAOneTopbarProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[11px] items-center justify-between w-[90%]">
          <Img
            className="h-6 w-6"
            alt="megaphone_One"
            src={props?.megaphoneimage}
          />
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1666px] w-full">
            <Img
              className="h-10 md:h-auto object-cover w-[94px]"
              src="images/img_logo.png"
              alt="logo"
            />
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <div className="flex flex-col h-10 md:h-auto items-center justify-center px-3.5 py-[11px] rounded w-auto">
                <Text
                  className="text-center text-sm text-white-A700 w-auto"
                  size="txtMontserratBold14"
                >
                  {props?.loginbuttontext}
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold font-montserrat h-10 leading-[normal] min-w-[90px] text-center text-sm"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                {props?.registerbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PWAOneTopbar.defaultProps = {
  megaphoneimage: "images/img_megaphone_gray_500.svg",
  loginbuttontext: "Log In",
  registerbutton: "Register",
};

export default PWAOneTopbar;
