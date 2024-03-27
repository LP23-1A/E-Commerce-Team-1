export default function MiniNavbar() {
  return (
    <div className="flex items-center gap-10">
      <h1 className="font-semibold text-2xl text-[#0D0E43]">Ecommerce</h1>
      <div className="flex items-center gap-4">
        <select className="text-[#FB2E86]">
          <option value="">Нүүр</option>
        </select>
        <p>Ангилал</p>
      </div>
    </div>
  );
}
