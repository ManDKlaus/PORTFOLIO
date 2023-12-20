// reducer.js
import { CHANGE_MODE, CHANGE_CONNECTION, CHANGE_DASHBOARD, SHOW_LANDING } from './actions';

const initialState = {
    lightMode: false,
    connect: false,
    dashboard: false,
    showLanding: true,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODE:
            return { ...state, lightMode: action.payload };
        case CHANGE_CONNECTION:
            return { ...state, connect: !state.connect };
        case CHANGE_DASHBOARD:
            return { ...state, dashboard: !state.dashboard };
        case SHOW_LANDING:
            return { ...state, showLanding: !state.showLanding };
        default:
            return state;
    }
};

export default rootReducer;