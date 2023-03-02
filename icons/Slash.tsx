import { Component, splitProps } from "solid-js";

export const Slash: Component<{ width; height }> = (props) => {
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
        d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
        fill="currentColor"
      />
    </svg>
  );
};