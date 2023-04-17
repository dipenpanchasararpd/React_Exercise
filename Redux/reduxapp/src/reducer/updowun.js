const initialstate = 0
const changethenum = (state = initialstate, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        case "INCBYTWO": return state + 2;
        case "MULTI": return state * 2;
        default: return state;
    }
}

export default changethenum;