import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const GoogleLogoSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#FBBB00"
      d="m6.99 13.878-.627 2.339-2.29.048A8.96 8.96 0 0 1 3 12c0-1.492.363-2.9 1.006-4.139l2.04.374.893 2.026A5.35 5.35 0 0 0 6.649 12c.001.66.12 1.294.34 1.878Z"
    />
    <Path
      fill="#518EF8"
      d="M20.843 10.319a9.016 9.016 0 0 1-.04 3.56 8.998 8.998 0 0 1-3.169 5.14v-.001l-2.568-.131-.364-2.269a5.365 5.365 0 0 0 2.308-2.739h-4.812v-3.56h8.645Z"
    />
    <Path
      fill="#28B446"
      d="M17.634 19.018A8.962 8.962 0 0 1 12 21a8.999 8.999 0 0 1-7.927-4.735l2.916-2.387a5.351 5.351 0 0 0 7.714 2.74l2.93 2.4Z"
    />
    <Path
      fill="#F14336"
      d="m17.745 5.072-2.916 2.387a5.353 5.353 0 0 0-7.89 2.802l-2.932-2.4A8.998 8.998 0 0 1 12 3c2.184 0 4.186.778 5.745 2.072Z"
    />
  </Svg>
);
export default GoogleLogoSvg;
