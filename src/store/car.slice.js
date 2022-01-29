import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../services";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars;

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            const deletedCar = await carService.delete(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const updateCarThunk = createAsyncThunk(
    'carSlice,updateCarThunk',
    async ({id}, {dispatch, getState}) => {
        console.log(id);
        const {carReducer:{watch_obj:{model,price,year}}} = getState();
        try {
            if (model) {
                const newCar = await carService.update(id, {model});
                return newCar;
            }
            if (price) {
                const newCar = await carService.update(id,{price});
                return newCar;
            }
            if (year) {
                const newCar = await carService.update(id,{year});
                return newCar;
            }
        } catch (e) {

        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null,
        watch_obj: {}
    },
    reducers: {
        addCar: (state, action) => {
            if (action.payload.data.model && action.payload.data.price && action.payload.data.year) {
                state.cars.push(action.payload.data);
            }
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        handleInputChanges: (state,action) => {
            state.watch_obj = action.payload;
        },
        updateCar: (state,action) => {

        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            state.cars = action.payload;

        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [deleteCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar,handleInputChanges} = carSlice.actions;
export default carReducer;
