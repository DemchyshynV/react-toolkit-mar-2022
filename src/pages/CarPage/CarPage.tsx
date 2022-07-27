import {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {CarForm, Cars} from '../../components';

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <Outlet/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};
