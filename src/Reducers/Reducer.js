import { USER_DATA, USER, SET_FORM_VALUES} from "../Actions/Action";

const initialState = {
    data: { name: '' },
    user: [],
    values: {
        weight: '',
        height: '',
        date: ''
    },
    Removevalues:''
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            console.log(action.payload)
            return {
                ...state,
                data: action.payload,
            }
        case USER:
            const user = [...state.user, action.payload];
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('id', JSON.stringify(action.payload.id));
            console.log(user)
            return {
                ...state,
                user,
            }
        case SET_FORM_VALUES:
            console.log(action.payload)
            return {
                ...state,
                values: action.payload
            }
        default:
            return state;
    }
}
export default Reducer;