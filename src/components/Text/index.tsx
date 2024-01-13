import React from "react";

const sizeClasses = {
  txtMontserratRegular9: "font-montserrat font-normal",
  txtMontserratBold16: "font-bold font-montserrat",
  txtMontserratMedium20: "font-medium font-montserrat",
  txtMontserratBold14Gray40001: "font-bold font-montserrat",
  txtMontserratBlack16WhiteA700a2: "font-black font-montserrat",
  txtMontserratBold14: "font-bold font-montserrat",
  txtMontserratMedium10Gray500: "font-medium font-montserrat",
  txtMontserratBlack28: "font-black font-montserrat",
  txtMontserratBold12: "font-bold font-montserrat",
  txtMontserratBold14Lime80001: "font-bold font-montserrat",
  txtMontserratMedium14Yellow700: "font-medium font-montserrat",
  txtMontserratBlack24: "font-black font-montserrat",
  txtMontserratMedium16WhiteA700: "font-medium font-montserrat",
  txtRobotoRegular9: "font-normal font-roboto",
  txtMontserratMedium16WhiteA700a2: "font-medium font-montserrat",
  txtMontserratBlack20: "font-black font-montserrat",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtMontserratRomanRegular12: "font-montserrat font-normal",
  txtMontserratBold18: "font-bold font-montserrat",
  txtMontserratExtraBold12: "font-extrabold font-montserrat",
  txtMontserratBlack16Teal400: "font-black font-montserrat",
  txtMontserratBlack30: "font-black font-montserrat",
  txtMontserratExtraBold18: "font-extrabold font-montserrat",
  txtMontserratBlack70: "font-black font-montserrat",
  txtMontserratBold24: "font-bold font-montserrat",
  txtMontserratRegular12Gray500: "font-montserrat font-normal",
  txtMontserratBold20: "font-bold font-montserrat",
  txtMontserratBlack32: "font-black font-montserrat",
  txtMontserratBold14Yellow80001: "font-bold font-montserrat",
  txtMontserratBlack40: "font-black font-montserrat",
  txtRobotoRegular36: "font-normal font-roboto",
  txtMontserratExtraBold400: "font-extrabold font-montserrat",
  txtMontserratBlack80: "font-black font-montserrat",
  txtMontserratBold30: "font-bold font-montserrat",
  txtMontserratMedium14WhiteA700: "font-medium font-montserrat",
  txtRobotoRomanMedium14: "font-medium font-roboto",
  txtMontserratMedium14Black900: "font-medium font-montserrat",
  txtMontserratBold32: "font-bold font-montserrat",
  txtMontserratRegular20: "font-montserrat font-normal",
  txtMontserratBlack42: "font-black font-montserrat",
  txtRobotoBlack64: "font-black font-roboto",
  txtRobotoRomanBlack40: "font-black font-roboto",
  txtMontserratBlack50: "font-black font-montserrat",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMontserratBlack52: "font-black font-montserrat",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtMontserratBold40: "font-bold font-montserrat",
  txtMontserratMedium10: "font-medium font-montserrat",
  txtMontserratBlack8: "font-black font-montserrat",
  txtMontserratMedium12: "font-medium font-montserrat",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratBlack14: "font-black font-montserrat",
  txtRobotoBlack16: "font-black font-roboto",
  txtMontserratBlack16: "font-black font-montserrat",
  txtMontserratBlack12: "font-black font-montserrat",
  txtMontserratExtraLight12: "font-montserrat font-thin",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtMontserratLight12: "font-light font-montserrat",
  txtRobotoBold14: "font-bold font-roboto",
  txtRobotoLight12: "font-light font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
