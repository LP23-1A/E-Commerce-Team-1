import Search from "@/Components/Icon/Search";
import texts from "../Components/utils/Texts";

export default function Filter({ data, setFilteredData }: any) {
  const handleSearch = (productName: string) => {
    const filtered = data.filter((item: { productName: string }) =>
      item.productName.toLowerCase().includes(productName.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleInputChange = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-4">
        {texts.map((data, ind) => (
          <div
            key={ind}
            className="flex items-center justify-around bg-white w-[145px] h-[40px] rounded-lg cursor-pointer"
          >
            {data.svg}
            {data.text}
            {data.more}
          </div>
        ))}
      </div>
      <div className="relative flex items-center">
        <div className="absolute pl-2">
          <Search />
        </div>
        <input
          type="search"
          className="w-[419px] h-[40px] p-4 rounded-lg bg-white pl-12 text-#8B8E95"
          placeholder="Бүтээгдэхүүний нэр, SKU, UPC."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
