import React from "react";

import { Img } from "components";

const Banner1265x250Page: React.FC = () => {
  return (
    <>
      <div className="h-[250px] mx-auto relative w-full">
        <div className="bg-gradient9  h-[250px] my-auto md:px-5 rounded-[5px] w-1/2"></div>
        <div className="absolute bottom-[0] md:h-[358px] h-[408px] inset-x-[0] mx-auto pb-[33px] md:px-5 w-full">
          <div className="md:h-[358px] h-[375px] mx-auto w-full">
            <Img
              className="absolute h-[250px] inset-x-[0] mx-auto object-cover top-[0] w-full"
              src="images/img_shutterstock735656077_250x1265.png"
              alt="shutterstock735"
            />
            <div className="absolute md:h-[358px] h-[375px] inset-[0] justify-center m-auto pb-[7px] w-[48%] md:w-full">
              <Img
                className="absolute h-[250px] inset-x-[0] mx-auto object-cover top-[0]"
                src="images/img_group70.png"
                alt="groupSeventy"
              />
              <Img
                className="absolute h-[358px] inset-[0] justify-center m-auto object-cover w-[67%]"
                src="images/img_afplayers1_358x393.png"
                alt="afplayersOne"
              />
            </div>
          </div>
          <div className="absolute bg-gradient3  h-[250px] inset-x-[0] mx-auto rounded-[5px] top-[0] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Banner1265x250Page;
