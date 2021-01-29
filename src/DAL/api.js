import axios from "axios";

const API_KEY = 'a3f1a737-1827-41ef-9c53-49394bbbe1b8';
const BASE_URL = 'https://social-network.samuraijs.com/api/1.0';

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY
    }
});


const getUsers = (page) => {
    return instance.get('/users?page=' + page);

}
const getMe = () => {
    return instance.get('/auth/me')
}

const getUserInfoById = (id) => {
    return instance.get('/profile/' + id);
}

const userAPI = {getUsers, getMe, getUserInfoById}

export default userAPI;
