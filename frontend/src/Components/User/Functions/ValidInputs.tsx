import toast from "react-hot-toast";

const USEREMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const USER_PASSWORD_REGEX = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

function ValidEmail(email: any) {
  return USEREMAIL_REGEX.test(email);
}

function ValidPassWord(password: any) {
  return USER_PASSWORD_REGEX.test(password);
}

export const authenticateInputs = (email: any, password: any) => {
  if (email == "" || password == "") {
    toast("🗿 the provided forms must be filled");
    return;
  }

  if (!ValidEmail(email)) {
    toast.error("Email must include some symbols and numbers");
    return;
  }
  if (!ValidPassWord(password)) {
    toast(
      "💀 PassWord has to have one digit and one alphabetical character and is between 8 - 32 long"
    );
    return;
  }

  toast("🌒 To The Next section");
};
