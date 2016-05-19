// This contains the action creator function for the redux components
// There is effectively only one type of action (SUBMIT)
// The action contains the currently selected user ID, password, and the page identifier
// from which the action was issued
//
// Author: Anton Terekhovskyy
// Date: Apr. 28, 2016
const SUBMIT = 'SUBMIT'

export default function submitID(uid, pass, active){
    return {
        type: SUBMIT,
        screen: active,
        user: uid,
        password: pass
    };
}