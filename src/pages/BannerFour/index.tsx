import React from "react";

import { Text } from "components";
import Footer2 from "components/Footer2";

const BannerFourPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-montserrat h-[632px] items-center justify-end mx-auto pt-[369px] w-full"
        style={{ backgroundImage: "url('images/img_image96_152x304.png')" }}
      >
        <Footer2 className="flex gap-[22px] h-[263px] md:h-auto items-center justify-center md:px-5 shadow-bs3 w-full" />
      </div>
    </>
  );
};

export default BannerFourPage;
