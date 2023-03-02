import { Component, splitProps } from "solid-js";

export const LinkBreak1: Component<{ width; height }> = (props) => {
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
        d="M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L13.3536 2.35355ZM2.03735 8.46678C2.17398 9.12619 2.66918 9.67103 3.33886 9.89338L2.57833 10.6539C1.80843 10.2534 1.23784 9.53693 1.05815 8.66967C0.999538 8.38681 0.999604 8.06004 0.999703 7.56313L0.999711 7.50001L0.999703 7.43689C0.999604 6.93998 0.999538 6.61321 1.05815 6.33035C1.29846 5.17053 2.2379 4.28039 3.4182 4.055C3.70687 3.99988 4.04134 3.99993 4.56402 4.00001L4.62471 4.00001H5.49971C5.77585 4.00001 5.99971 4.22387 5.99971 4.50001C5.99971 4.77615 5.77585 5.00001 5.49971 5.00001H4.62471C4.02084 5.00001 3.78907 5.00225 3.60577 5.03725C2.80262 5.19062 2.19157 5.78895 2.03735 6.53324C2.00233 6.70225 1.99971 6.91752 1.99971 7.50001C1.99971 8.08251 2.00233 8.29778 2.03735 8.46678ZM12.9621 6.53324C12.8255 5.87397 12.3304 5.32922 11.661 5.10679L12.4215 4.34631C13.1912 4.74686 13.7616 5.46323 13.9413 6.33035C13.9999 6.61321 13.9998 6.93998 13.9997 7.43688L13.9997 7.50001L13.9997 7.56314C13.9998 8.06005 13.9999 8.38681 13.9413 8.66967C13.701 9.8295 12.7615 10.7196 11.5812 10.945C11.2925 11.0001 10.9581 11.0001 10.4354 11L10.3747 11H9.49971C9.22357 11 8.99971 10.7762 8.99971 10.5C8.99971 10.2239 9.22357 10 9.49971 10H10.3747C10.9786 10 11.2104 9.99777 11.3937 9.96277C12.1968 9.8094 12.8079 9.21108 12.9621 8.46678C12.9971 8.29778 12.9997 8.08251 12.9997 7.50001C12.9997 6.91752 12.9971 6.70225 12.9621 6.53324Z"
        fill="currentColor"
      />
    </svg>
  );
};