import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: (page=1) => axiosService.get(urls.cars, {params:{page}}),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}
