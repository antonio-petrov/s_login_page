import { SVGProps } from 'react';
const LockIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 10V7V7C8 4.791 9.791 3 12 3V3C14.209 3 16 4.791 16 7V7V10'
      stroke='#828282'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12 14V17'
      stroke='#828282'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M17 21H7C5.895 21 5 20.105 5 19V12C5 10.895 5.895 10 7 10H17C18.105 10 19 10.895 19 12V19C19 20.105 18.105 21 17 21Z'
      stroke='#828282'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);
export default LockIconSvg;
