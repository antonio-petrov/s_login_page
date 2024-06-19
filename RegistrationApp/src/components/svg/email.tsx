import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const EmailIconSvg = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.636 5.045h14.727c.904 0 1.637.733 1.637 1.637v10.636c0 .904-.733 1.636-1.636 1.636H4.636A1.635 1.635 0 0 1 3 17.318V6.682c0-.904.733-1.637 1.636-1.637Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.119 6.075 7.694 5.503a2 2 0 0 0 2.325.002l7.738-5.519"
    />
  </Svg>
);
export default EmailIconSvg;
