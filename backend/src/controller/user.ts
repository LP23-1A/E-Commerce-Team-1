import { userModal } from "../model/user";
import bcrypt from "bcrypt";

export const SignUp = async (req: any, res: any) => {
    try {
        const { password, userName } = req.body;
        const saltRounds = 10;
                
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(hashedPassword);

        const response = await userModal.create({ password: hashedPassword, userName });
        console.log(response, "this is response");

        res.status(200).send({
            success: true,
            createdUser: response
        });
    } catch (error) {
        console.log("error at creating user", error);
        res.status(500).send({
            success: false,
            error
        });
    }
};
