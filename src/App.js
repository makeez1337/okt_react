import './App.css';
import {useReducer} from "react";

import Cat from "./components/Cat";
import Dog from "./components/Dog";
import {formReducer} from "./reducers/formReducer";

function App() {


    const initialValues = {
        dogs: [],
        cats: [],
        dog: '',
        cat: ''
    }

    const [state, dispatch] = useReducer(formReducer, initialValues);

    const handleTextChanges = (e) => {
        dispatch({
            type: 'handle input text',
            field: e.target.name,
            payload: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (

        <div>

            <div className={'wrap'}>

                <form onSubmit={onSubmit}>
                    <label>
                        Add Cat:
                        <input name={'cat'} value={state.cat} onChange={handleTextChanges}/>
                    </label>
                    <button onClick={() => dispatch({type: 'addCat'})}>Add</button>

                    <label>
                        Add Dog:
                        <input name={'dog'} value={state.dog} onChange={handleTextChanges}/>
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
