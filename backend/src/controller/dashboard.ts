import { Response, Request } from "express";
import { userModal } from "../model/user";
import { OrderModel } from "../model/order";
import { ProductModel } from "../model/Product";

const dashboard = async (req: Request, res: Response) => {
  try {
    const userCount = await userModal.find().countDocuments();
    const orderCount = await OrderModel.find().countDocuments();
    const incomeData = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          amountPaid: {
            $sum: "$amountPaid",
          },
        },
      },
    ]);
    const productInfo = await ProductModel.find();

    return res.status(201).send({
      success: true,
      data: { userCount, orderCount, incomeData, productInfo },
    });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export { dashboard };
