import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useSelector} from "react-redux";

const MainLayout = () => {
    const {errors} = useSelector(state => state.auth);
    return (
        <div>
            <Header/>
            {errors&&<h3>{JSON.stringify(errors)}</h3>}
            <Outlet/>
        </div>
    );
};

export {MainLayout};
