export default function BreadCrumb() {
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ backgroundColor: "#F6F5FF", height: "100px" }}
    >
      <div className="w-8/12 h-[100px] flex items-center">
        <div className="flex flex-row gap-[10px]">
          <h4 className="text-base font-medium text-black">Home</h4>
          <div className="text-base font-medium" style={{ color: "#FB2E86" }}>
            .
          </div>
          <span className="text-base font-medium" style={{ color: "#FB2E86" }}>
            Shop Left Sidebar
          </span>
        </div>
      </div>
    </div>
  );
}
