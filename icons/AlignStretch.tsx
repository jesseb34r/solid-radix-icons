import { Component, splitProps } from "solid-js";

export const AlignStretch: Component<{ width; height }> = (props) => {
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
        d="M1.04956 1.50002C1.04956 1.25149 1.25103 1.05002 1.49956 1.05002H13.4996C13.7481 1.05002 13.9496 1.25149 13.9496 1.50002C13.9496 1.74855 13.7481 1.95002 13.4996 1.95002L1.49956 1.95002C1.25103 1.95002 1.04956 1.74855 1.04956 1.50002ZM1.04966 13.5C1.04966 13.2515 1.25113 13.05 1.49966 13.05H13.4997C13.7482 13.05 13.9497 13.2515 13.9497 13.5C13.9497 13.7485 13.7482 13.95 13.4997 13.95L1.49966 13.95C1.25113 13.95 1.04966 13.7485 1.04966 13.5ZM6 11V3.99999H9V11H6ZM5 3.74999C5 3.33578 5.33579 2.99999 5.75 2.99999H9.25C9.66421 2.99999 10 3.33578 10 3.74999V11.25C10 11.6642 9.66421 12 9.25 12H5.75C5.33579 12 5 11.6642 5 11.25V3.74999Z"
        fill="currentColor"
      />
    </svg>
  );
};