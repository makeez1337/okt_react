const formReducer = (state, action) => {

    switch (action.type) {

        case 'handle input text':
            return {
                ...state,
                [action.field]: action.payload
            }

        case 'addCat':
            return state.cat ? {...state, cats: state.cats.concat(state.cat),cat:''} : state;

        case 'addDog':
            return state.dog ? {...state, dogs: state.dogs.concat(state.dog),dog:''} : state

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

export {formReducer}