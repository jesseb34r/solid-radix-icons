import { Component, splitProps } from "solid-js";

export const JustifyStretch: Component<{ width; height }> = (props) => {
  const [local, others] = splitProps(props, ["width", "height"]);

  return (
    <svg
      style={{ width: local.width, height: local.height }}
      {...others}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5 1.04956C13.7485 1.04956 13.95 1.25103 13.95 1.49956L13.95 13.4996C13.95 13.7481 13.7485 13.9496 13.5 13.9496C13.2514 13.9496 13.05 13.7481 13.05 13.4996L13.05 1.49956C13.05 1.25103 13.2514 1.04956 13.5 1.04956ZM1.49995 1.04966C1.74848 1.04966 1.94995 1.25113 1.94995 1.49966L1.94995 13.4997C1.94995 13.7482 1.74848 13.9497 1.49995 13.9497C1.25142 13.9497 1.04995 13.7482 1.04995 13.4997L1.04995 1.49966C1.04995 1.25113 1.25142 1.04966 1.49995 1.04966ZM3.99997 6L11 6L11 9L3.99997 9L3.99997 6ZM11.25 5C11.6642 5 12 5.33579 12 5.75L12 9.25C12 9.66421 11.6642 10 11.25 10L3.74997 10C3.33576 10 2.99997 9.66421 2.99997 9.25L2.99997 5.75C2.99998 5.33579 3.33576 5 3.74998 5L11.25 5Z"
        fill="currentColor"
      />
    </svg>
  );
};