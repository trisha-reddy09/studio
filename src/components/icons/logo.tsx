import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 25"
      width="100"
      height="25"
      {...props}
    >
      <text
        x="0"
        y="20"
        fontFamily="'PT Sans', sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        WAYN
      </text>
    </svg>
  );
}
