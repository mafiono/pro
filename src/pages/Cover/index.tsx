import React from "react";

import { Img } from "components";

const CoverPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col items-center justify-start mx-auto p-64 md:px-10 sm:px-5 w-full">
        <Img
          className="h-[388px] md:h-auto mb-[60px] object-cover"
          src="images/img_logo.png"
          alt="logo"
        />
      </div>
    </>
  );
};

export default CoverPage;
