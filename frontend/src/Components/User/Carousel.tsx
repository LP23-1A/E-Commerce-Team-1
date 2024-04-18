import { useEffect, useState } from "react";
import Page1 from "./Promotions/Page1";
import Page2 from "./Promotions/Page2";
import Page3 from "./Promotions/Page3";

export default function Carousel() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const switchToNextPage = () => {    
      setCurrentPage(currentPage === 3 ? 1 : currentPage + 1);    
  };

  // useEffect(() => {
  //     const timer = setTimeout(switchToNextPage, 1000);
  //     return () => clearTimeout(timer);
  // }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 nextPage={nextPage} previousPage={previousPage} />;
        break;
      case 2:
        return <Page2 nextPage={nextPage} previousPage={previousPage} />;
        break;
      case 3:
        return <Page3 nextPage={nextPage} previousPage={previousPage} />;
        break;
      default:
        return <Page1 nextPage={nextPage} previousPage={previousPage} />;
    }
  };

  return (
    <div className="flex flex-col relative">
      <div
        className="w-full h-[764px] flex items-center justify-center"
        style={{ backgroundColor: "#F2F0FF" }}
      >        
        {renderPage()}
      </div>
    </div>
  );
}
