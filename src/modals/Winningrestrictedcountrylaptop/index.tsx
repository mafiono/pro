import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const WinningrestrictedcountrylaptopModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[56%]"
      overlayClassName="bg-blue_gray-900_02 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-blue_gray-900_01 flex flex-col gap-[50px] items-center justify-start max-w-[690px] mb-[377px] p-[50px] md:px-5 rounded-[10px] w-full">
          <Img
            className="h-[60px] md:h-auto object-cover w-[141px] sm:w-full"
            src="images/img_logo.png"
            alt="winninglogo"
          />
          <Text
            className="text-center text-lg text-white-A700"
            size="txtMontserratExtraBold18"
          >
            <span className="md:text-[38px] sm:text-4xl text-white-A700 font-montserrat text-[40px] font-bold">
              <>
                This IP country is restricted.
                <br />
              </>
            </span>
            <span className="text-white-A700 font-montserrat font-medium">
              <>
                <br />
              </>
            </span>
            <span className="text-gray-500 font-montserrat font-normal">
              <>
                Currently, we do not offer our services in this country.
                <br />
                <br />
                If you are on vacation, feel free to use a{" "}
              </>
            </span>
            <span className="text-gray-500 font-montserrat font-bold">VPN</span>
            <span className="text-gray-500 font-montserrat font-normal">
              <>
                {" "}
                to connect to your home country and you will be able to play
                normally.
                <br />
                <br />
                For more information, contact our support team.
              </>
            </span>
          </Text>
          <Button
            className="cursor-pointer font-bold leading-[normal] min-w-[200px] rounded-[3px] text-center text-sm"
            shape="round"
            color="teal_400"
            size="md"
            variant="fill"
          >
            Contact support
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default WinningrestrictedcountrylaptopModal;
