import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const EyeIconSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.118 12.467a.987.987 0 0 1 0-.935C5.01 8.033 8.505 5 12 5s6.99 3.033 8.882 6.533a.987.987 0 0 1 0 .935C18.99 15.967 15.495 19 12 19s-6.99-3.033-8.882-6.533Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.121 9.879A3 3 0 1 1 9.88 14.12 3 3 0 0 1 14.12 9.88"
    />
  </Svg>
);
export default EyeIconSvg;
