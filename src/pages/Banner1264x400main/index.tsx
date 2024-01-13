import React from "react";

import { Img } from "components";

const Banner1264x400mainPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[400px] sm:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                src="images/img_winninghomepagebanner37.png"
                alt="winninghomepage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner1264x400mainPage;
