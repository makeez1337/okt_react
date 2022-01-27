const formReducer = (state, action) => {

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

export {formReducer}