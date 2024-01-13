import React from "react";

import { Img } from "components";

const PrelouderPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[920px] items-center justify-start w-full"
          style={{ backgroundImage: "url('images/img_prelouder.png')" }}
        >
          <div className="bg-gray-900_a2 flex flex-col items-center justify-start p-[410px] md:px-10 sm:px-5 w-full">
            <Img
              className="h-[100px] md:h-auto object-cover w-[100px]"
              src="images/img_animation200l1g9f7g1.png"
              alt="animation200l1g"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrelouderPage;
