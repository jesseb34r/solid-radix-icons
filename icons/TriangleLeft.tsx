import { Component, splitProps } from "solid-js";

export const TriangleLeft: Component<{ width; height }> = (props) => {
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
      <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="currentColor" />
    </svg>
  );
};