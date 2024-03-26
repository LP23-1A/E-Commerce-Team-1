import { CartIcon, HeartIcon, UserIcon } from "./Icon/index";

export default function HeadingBar() {
  return (
    <div className="flex flex-row gap-[29px]">
      <button className="flex flex-row items-center gap-2">
        <h5
          className="text-base font-weight font-semibold"
          style={{ color: "#F1F1F1" }}
        >
          Log in
        </h5>
        <UserIcon />
      </button>
      <button className="flex flex-row items-center gap-2">
        <h5
          className="text-base font-weight font-semibold"
          style={{ color: "#F1F1F1" }}
        >
          Store
        </h5>
        <HeartIcon />
      </button>
      <button className="flex items-center">
        <CartIcon />
      </button>
    </div>
  );
}
