import { Component, splitProps } from "solid-js";

export const DotFilled: Component<{ width; height }> = (props) => {
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
        d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
};