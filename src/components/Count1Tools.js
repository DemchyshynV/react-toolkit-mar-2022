import {useDispatch} from "react-redux";
import {count1Actions} from "../redux";

const Count1Tools = () => {
    const dispatch = useDispatch();
    console.log(count1Actions.inc());
    return (
        <div>
            <button onClick={()=>dispatch(count1Actions.inc())}>inc</button>
            <button onClick={()=>dispatch(count1Actions.dec())}>dec</button>
            <button onClick={()=>dispatch(count1Actions.reset())}>reset</button>
            <button onClick={()=>dispatch(count1Actions.getUsers())}>users</button>
        </div>
    );
};

export {Count1Tools};
