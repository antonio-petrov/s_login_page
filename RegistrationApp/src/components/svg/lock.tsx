import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const LockIconSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 10V7v0a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v3M12 14v3"
    />
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 21H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default LockIconSvg;
