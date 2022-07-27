import {FC, useEffect, useState} from 'react';

import {ICar} from '../../interfaces';
import {carService} from '../../services';
import {Car} from '../Car/Car';

const Cars: FC = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};
