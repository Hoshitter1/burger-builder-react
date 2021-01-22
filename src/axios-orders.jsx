import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-6612c-default-rtdb.firebaseio.com/",
});

export default instance;
