import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
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
        const {carReducer: {watch_obj: {model, price, year}}} = getState();
        try {
            let car = {};
            if (model) {
                const newCar = await carService.update(id, {model});
                car = {...car, model, id}
            }
            if (price) {
                const newCar = await carService.update(id, {price});
                car = {...car, price, id}
            }
            if (year) {
                const newCar = await carService.update(id, {year});
                car = {...car, year, id};
            }
            dispatch(updateCar({...car}));


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
        handleInputChanges: (state, action) => {
            state.watch_obj = action.payload;
        },
        updateCar: (state, action) => {
            state.cars = state.cars.map(car => {
                if (car.id === action.payload.id) {
                    if (action.payload.model) {
                        car.model = action.payload.model;
                    }
                    if (action.payload.price) {
                        car.price = action.payload.price;
                    }
                    if (action.payload.year) {
                        car.year = action.payload.year;
                    }
                }
                return car;
            })
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

export const {addCar, deleteCar, handleInputChanges, updateCar} = carSlice.actions;
export default carReducer;
