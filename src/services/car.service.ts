import {AxiosRes, axiosService} from './axios.service';

import {ICar} from '../interfaces';
import {urls} from '../constants';

export const carService = {
    getAll: (): AxiosRes<ICar[]> => axiosService.get(urls.cars),
    create: (car: ICar): AxiosRes<ICar> => axiosService.post(urls.cars, car),
    getById: (id: number): AxiosRes<ICar> => axiosService.get(`${urls.cars}/${id}`)
}
