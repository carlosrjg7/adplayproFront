import * as userAPI from "../api/userAPI";

export const login = async (req) => {
  try {
    const { email, password } = req;
    const data = await userAPI.login(email, password);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.response.data.msg;
    throw errorMessage;
  }
};
