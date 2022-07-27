import {useLocation} from 'react-router-dom';


interface IState<T> {
    state: T
}

type LocationType<State> = ReturnType<typeof useLocation> & IState<State>

const useAppLocation = <State>(): LocationType<State> => useLocation() as any;

export {
    useAppLocation
}
