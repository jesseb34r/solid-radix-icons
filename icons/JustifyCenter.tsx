import { Component, splitProps } from "solid-js";

export const JustifyCenter: Component<{ width; height }> = (props) => {
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
        d="M7.94998 5.99994L11 5.99994L11 8.99994L7.94998 8.99994L7.94998 5.99994ZM7.94998 4.99994L7.94998 1.49913C7.94998 1.25061 7.74851 1.04913 7.49998 1.04913C7.25145 1.04913 7.04998 1.2506 7.04998 1.49913L7.04998 4.99994L3.75 4.99994C3.33579 4.99994 3 5.33572 3 5.74994L3 9.24994C3 9.66415 3.33579 9.99994 3.75 9.99994L7.04998 9.99994L7.04998 13.4991C7.04998 13.7477 7.25145 13.9491 7.49998 13.9491C7.7485 13.9491 7.94998 13.7477 7.94998 13.4991L7.94998 9.99994L11.25 9.99994C11.6642 9.99994 12 9.66415 12 9.24994L12 5.74994C12 5.33573 11.6642 4.99994 11.25 4.99994L7.94998 4.99994ZM7.04998 8.99994L4 8.99994L4 5.99994L7.04998 5.99994L7.04998 8.99994Z"
        fill="currentColor"
      />
    </svg>
  );
};