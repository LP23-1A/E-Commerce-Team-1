import ContactMethod from "./ContactMethod";
import HeadingBar from "./HeadingBar";

export default function NavbarClient() {
  return (
    <div
      className="w-full h-[44px] flex items-center justify-center"
      style={{ background: "#7E33E0" }}
    >
      <div
        className="w-8/12 h-full flex justify-between"
        style={{ color: "#F1F1F1" }}
      >
        <ContactMethod />
        <HeadingBar />
      </div>
    </div>
  );
}
