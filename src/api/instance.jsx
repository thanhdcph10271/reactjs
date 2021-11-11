import axios from "axios";
const instance = axios.create({
    baseURL:"https://618d586afe09aa00174406d4.mockapi.io"
});
export default instance;