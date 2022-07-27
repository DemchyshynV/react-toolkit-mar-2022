import {FC} from 'react';
import {CarForm, Cars} from '../../components';
import {Outlet} from 'react-router-dom';

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
