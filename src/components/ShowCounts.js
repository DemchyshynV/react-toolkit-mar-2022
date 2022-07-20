import {useSelector} from "react-redux";

const ShowCounts = () => {
    const {count1,users, isLoading, serverError} = useSelector(state => state.count1Reducer);
    const {count2} = useSelector(state => state.count2Reducer);

    return (
        <div>
            <h1>Count1: {count1}</h1>
            <h1>Count2: {count2}</h1>
            <hr/>
            {isLoading&& <h1>Loading</h1>}
            {serverError&& <h1>{serverError}</h1>}
            {JSON.stringify(users)}
        </div>
    );
};

export {ShowCounts};
