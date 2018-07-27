import { observable, computed, action } from "mobx";
import io from 'socket.io-client'
import { axiosInstance } from '../api/'

const GROUP_ID = '6vf77z4hd5';
const TOKEN = 'rtASDLastuev77';

const socket = io("https://lab.lectrum.io", {
    path: "/redux/ws"
});


class UserStore {

    constructor() {
        socket.emit("join", GROUP_ID);
        socket.on("connect", () => {
            this.connected = true;
        })
        socket.on("disconnect", () => {
            this.connected = false;
        })

    }
    @observable user = {}

    @observable connected = false;

    @observable token = null

    @computed get requestHeaders() {
        return {
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.token,
            }
        }
    }

    @computed get isAllowed() {
        return this.token !== null
    }

    @action loginAttempt = (payload) => {
        return axiosInstance.post('https://lab.lectrum.io/redux/api/user/login', payload)
    }
    @action registerUser = (payload) => {
        if (!this.connected) return;
        return axiosInstance.post(`https://lab.lectrum.io/redux/api/user/6vf77z4hd5`,
            {
                ...payload, invite: TOKEN
            })
    }

    @action setToken = token => {
        //use cookie 
        this.token = token;
    }


}
const userStore = new UserStore();

export default userStore;