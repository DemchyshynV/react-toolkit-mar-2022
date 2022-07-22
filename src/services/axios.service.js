import axios from "axios";

import {baseURL} from "../constants";
import {authService} from "./auth.service";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    const access = authService.getAccessToken();

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

let isRefreshing = false
axiosService.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authService.getRefreshToken();

        if (error.response?.status === 401 && error.config && !isRefreshing && refresh) {
            isRefreshing = true
            try {
                const {data} = await authService.refresh(refresh);
                authService.setTokens(data)
            } catch (e) {
                authService.deleteTokens()
                return history.replace('/login?ExpSession=true')
            }
            isRefreshing = false
            return axiosService(error.config)
        }
        return Promise.reject(error)

    }
)

export {
    axiosService,
    history
}
