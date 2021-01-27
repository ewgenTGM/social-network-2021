import * as axios from "axios";

const API_KEY = 'a3f1a737-1827-41ef-9c53-49394bbbe1b8';

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0';

export const getUsers = (page) => {
    return axios.get(BASE_URL + '/users?page=' + page, {
        withCredentials: true
    });

}
export const getMe = () => {
    return axios.get(BASE_URL + '/auth/me', {
        withCredentials: true
    })
}