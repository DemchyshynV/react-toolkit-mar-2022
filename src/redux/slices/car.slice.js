import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue, dispatch, getState}) => {
        try {
            // dispatch(setCarForUpdate())
            // const state = getState();
            // console.log(state);
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue})=>{
        try {
            const {data} = await carService.create({car:car, id:34});
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const del = createAsyncThunk(
    'carSlice/delete',
    async ({id}, {rejectWithValue})=>{
        try {
            await carService.deleteById(id)
            return id
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue}) => {
        try {
        const {data} = await carService.updateById(id, car);
        return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.cars = action.payload
            })
            .addCase(updateById.fulfilled, (state, action) => {
                    const currentCar = state.cars.find(value => value.id === action.payload.id);
                    Object.assign(currentCar, action.payload);
                    state.carForUpdate = null
                }
            )
            .addCase(del.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car=>car.id === action.payload);
                state.cars.splice(index, 1)
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected'){
                    state.errors = action.payload
                }else {
                    state.errors = null
                }
            })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    setCarForUpdate,
    updateById,
    create,
    del
}

export {
    carReducer,
    carActions
}
