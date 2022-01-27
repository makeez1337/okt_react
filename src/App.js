import './App.css';
import {useReducer} from "react";


function App() {

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const reducer = (state, action) => {

        switch (action.type) {

            case 'inc1':
                return {...state, count1: state.count1 + 1};
            case 'dec1':
                return {...state, count1: state.count1 - 1};
            case 'reset1':
                return {...state, count1: action.payload};

            case 'inc2':
                return {...state, count2: state.count2 + 1};
            case 'dec2':
                return {...state, count2: state.count2 - 1};
            case 'reset2':
                return {...state, count2: action.payload};

            case 'inc3':
                return {...state, count3: state.count3 + 1};
            case 'dec3':
                return {...state, count3: state.count3 - 1};
            case 'reset3':
                return {...state, count3: action.payload};

            case 'ran5-100':
                return {...state, randomNum: getRndInteger(5, 100)};
            case 'ran1000-5000':
                return {...state, randomNum: getRndInteger(1000, 5000)};

            default:
                throw new Error('Something went wrong');
        }

    }

    const [state, dispatch] = useReducer(reducer, {
        count1: 25,
        count2: 50,
        count3: 75,
        randomNum: 0
    });


    return (

        <div>

            <div>
                <button onClick={() => dispatch({type: 'inc1'})}>Increment</button>
                <button onClick={() => dispatch({type: 'dec1'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset1', payload: 5})}>Reset</button>
            </div>
            <div>{state.count1}</div>

            <div style={{marginTop: '50px'}}>
                <button onClick={() => dispatch({type: 'inc2'})}>Increment</button>
                <button onClick={() => dispatch({type: 'dec2'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset2', payload: 25})}>Reset</button>
            </div>
            <div>{state.count2}</div>

            <div style={{marginTop: '50px'}}>
                <button onClick={() => dispatch({type: 'inc3'})}>Increment</button>
                <button onClick={() => dispatch({type: 'dec3'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset3', payload: 50})}>Reset</button>
            </div>
            <div>{state.count3}</div>

            <div style={{marginTop: '50px'}}>
                <button onClick={() => dispatch({type: 'ran5-100'})}>Random from 5-100</button>
                <button onClick={() => dispatch({type: 'ran1000-5000'})}>Random from 1000-5000</button>
            </div>
            <div>{state.randomNum}</div>

        </div>

    );
}

export default App;
