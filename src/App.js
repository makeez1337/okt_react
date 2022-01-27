import './App.css';
import {useReducer} from "react";

import Cat from "./components/Cat";
import Dog from "./components/Dog";

function App() {

    const initialValues = {
        dogs: [],
        cats: [],
        dog: '',
        cat: ''
    }

    const reducer = (state, action) => {

        switch (action.type) {

            case 'handle input text':
                return {
                    ...state,
                    [action.field]: action.payload
                }

            case 'addCat':
                if (state.cat) {
                    return {
                        ...state,
                        cats: state.cats.concat(state.cat)
                    }
                }
                return state;

            case 'addDog':
                if (state.dog) {
                    return {
                        ...state,
                        dogs: state.dogs.concat(state.dog)
                    }
                }
                return state;

            case 'removeCat':
                let catsArr = [...state.cats]
                const splicedCatsArr = catsArr.splice(action.index, 1);
                return {
                    ...state, cats: catsArr
                }

            case 'removeDog':
                let dogsArr = [...state.dogs];
                const slicedDogsArr = dogsArr.splice(action.index, 1);
                return {
                    ...state, dogs: dogsArr
                }

            default:
                return state;

        }

    }

    const [state, dispatch] = useReducer(reducer, initialValues);

    const handleTextChanges = (e) => {
        dispatch({
            type: 'handle input text',
            field: e.target.name,
            payload: e.target.value
        })
    }


    return (

        <div>

            <div className={'wrap'}>

                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Add Cat:
                        <input name={'cat'} value={state.cat} onChange={(e) => handleTextChanges(e)}/>
                    </label>
                    <button onClick={() => dispatch({type: 'addCat'})}>Add</button>

                    <label>
                        Add Dog:
                        <input name={'dog'} value={state.dog} onChange={(e) => handleTextChanges(e)}/>
                    </label>
                    <button onClick={() => dispatch({type: 'addDog'})}>Add</button>
                </form>
            </div>
            <hr/>

            <div className={'cats_and_dogs_wrap'}>
                <div className={'cats'}>
                    {
                        state.cats.length !== 0 && state.cats.map((value, index) => <Cat key={index}
                                                                                         cat={{value, index}}
                                                                                         removeCat={dispatch}/>)
                    }
                </div>

                <div className={'dogs'}>
                    {
                        state.dogs.length !== 0 && state.dogs.map((value, index) => <Dog key={index}
                                                                                         dog={{value, index}}
                                                                                         removeDog={dispatch}/>)
                    }
                </div>
            </div>


        </div>

    );
}

export default App;
