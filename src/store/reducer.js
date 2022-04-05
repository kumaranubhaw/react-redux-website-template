
import { combineReducers } from 'redux'

const pageReducer = (state = [], action) => {
    switch (action.type) {
        case "SELECTED_PAGE":
          return {
            ...state, 
            page: action.payload
          }
        default: return state
    }
}

const rootReducer = combineReducers({
  menu: pageReducer
});

export default rootReducer;