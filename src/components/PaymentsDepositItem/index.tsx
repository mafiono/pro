import React from "react";

import { Img, Text } from "components";

type PaymentsDepositItemProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "languagetext"
> &
  Partial<{ languagetext: string }>;

const PaymentsDepositItem: React.FC<PaymentsDepositItemProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3.5 items-center justify-start ml-[7px] w-auto">
          <div className="flex flex-col h-6 items-center justify-start w-6">
            <div className="flex flex-col items-center justify-start my-[3px] w-[92%] md:w-full">
              <Img
                className="h-[15px] md:h-auto object-cover w-full"
                src="images/img_image43.png"
                alt="imageFortyThree"
              />
            </div>
          </div>
          <Text
            className="capitalize text-sm text-white-A700 w-auto"
            size="txtMontserratRomanRegular14"
          >
            {props?.languagetext}
          </Text>
        </div>
        <Img
          className="h-6 w-6"
          src="images/img_arrowdown.svg"
          alt="arrowdown_One"
        />
      </div>
    </>
  );
};

PaymentsDepositItem.defaultProps = { languagetext: "English" };

export default PaymentsDepositItem;
