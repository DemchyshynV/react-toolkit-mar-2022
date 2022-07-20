import {useDispatch} from "react-redux";
import {count2Actions} from "../redux";

const Count2Tools = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(count2Actions.inc(2))}>inc</button>
            <button onClick={() => dispatch(count2Actions.dec(3))}>dec</button>
            <button onClick={() => dispatch(count2Actions.reset(5))}>reset</button>
        </div>
    );
};

export {Count2Tools};
