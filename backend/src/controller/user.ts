import { userModal } from "../model/user";
import bcrypt from "bcrypt";

export const SignUp = async (req: any, res: any) => {
    try {
        const { ...userData } = req.body;
        // const saltRounds = 10;

        // const hashedPassword = await bcrypt.hash(password, saltRounds);
        // console.log(hashedPassword);

        const response = await userModal.create({ ...userData });
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

export const getAllUsers = async (req: any, res: any) => {
    try {
        const allUsers = await userModal.find()
        return res.status(200).send({
            PositiveResult: true,
            allUsers
        })
    } catch (error) {
        console.log("error at fetchin AllUser", error);
        res.status(500).send({
            success: false,
            error
        });
    }
};

export const updateUser = async (req: any, res: any) => {
    try {
        const id = req.params.id

        const desiredUser = await userModal.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).send(({
            PositiveResult: true,
            Here: desiredUser
        }));

    } catch (error) {
        console.log("error at updating user", error);
        res.status(500).send({
            success: false,
            error
        });
    }
};

export const deleteUser = async (req: any, res: any) => {
    try {
        const id = req.params.id

        await userModal.findByIdAndDelete(id)

        res.status(200).send(({
            PositiveResult: true,
            Here: 'The user is deleted successfully'
        }));

    } catch (error) {
        console.log("error at deleting user", error);
        res.status(500).send({
            success: false,
            error
        });
    }
};

export const signIn = async (req: any, res: any) => {
    try {

    } catch (error) {
        console.log("error at signing in", error);
        res.status(500).send({
            success: false,
            error
        });
    }
};



