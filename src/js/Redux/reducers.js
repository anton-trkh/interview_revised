// The reducer for the Redux component
// since there is only one action, and the resulting reducer is 
// small there is no need for splitting up the reducer
//
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016

const initialState = {
    ActiveScr: 'L1',
    userID: ""
};

// the reducer will check the password/user id contained in the dispatched action
// if the they are a match the visible page will advance in order L1->L2->Apps
// if either does not match the visible screen will remain unchanged
export default function processLogin(state, action){
    if (typeof state == 'undefined'){
        return initialState;
    }
    switch(action.screen){
        case 'L1':
            if (action.password == 'makeithappen' && action.user == 'jeff@focus21.io'){
                return {ActiveScr: 'L2', userID: action.user};
            } else {
                return {ActiveScr: 'L1', userID: ""};
            }
        case 'L2':
            if (action.password == 'makeithappen'){
                return {ActiveScr: 'Apps', userID: ""};
            } else {
                return {ActiveScr: 'L2', userID: ""};
            }
        default:
            return state;
    }
};