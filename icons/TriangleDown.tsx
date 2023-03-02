import { Component, splitProps } from "solid-js";

export const TriangleDown: Component<{ width; height }> = (props) => {
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
      <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor" />
    </svg>
  );
};