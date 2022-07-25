import axios, {AxiosResponse} from 'axios';
import {IUser} from '../interfaces/user.interface';


type AxiosRes<T> = Promise<AxiosResponse<T>>
export const userService = {
    getAll: ():AxiosRes<IUser[]> => axios.get('https://jsonplaceholder.typicode.com/users'),
    getById: (id: number):AxiosRes<IUser> => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}
