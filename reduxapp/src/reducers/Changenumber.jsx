
const initialstate = 0
const Changenumber = (state = initialstate, action) => {
  switch (action.type) {
    case "INCREMENT":
        return state + 1;
    case "DECREMENT":
        if (state >0) {
            return state - 1;                  
        }
    default:
        return state;
  }
}

export default Changenumber
