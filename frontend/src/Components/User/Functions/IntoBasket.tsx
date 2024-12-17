// import { useContext } from "react";
// import { CartContexForProduct } from "../CartContext";
// const { productData, setProductData } = useContext(CartContexForProduct);

// export const AddingToBasket: any = (comingId: string) => {
//   const repeatedProduct = productData.findIndex(
//     (el: any) => el._id === comingId
//   );

//   if (repeatedProduct) {
//     setProductData(
//       productData.map((el: any) =>
//         el._id === comingId ? { ...el, count: el.quantity + 1 } : el
//       )
//     );
//   } else {
//     setProductData([...productData, { comingId, count: 1 }]);
//   }
// };
