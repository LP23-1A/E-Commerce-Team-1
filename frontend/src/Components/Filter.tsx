import Search from "@/Components/Icon/Search";

export default function Filter({ handleSortByPrice }: any) {
  const handlePriceChange = (e: { target: { value: any } }) => {
    const Option = e.target.value;
    handleSortByPrice(Option);
  };

  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-4">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handlePriceChange}
        >
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div className="relative flex items-center">
        <div className="absolute pl-2">
          <Search />
        </div>
        <input
          type="search"
          className="w-[419px] h-[40px] p-4 rounded-lg bg-white pl-12 text-#8B8E95"
          placeholder="Product name, SKU, UPC."
        />
      </div>
    </div>
  );
}
