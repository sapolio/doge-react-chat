import * as types from '../constants/users';
import callApi from '../utils/call-api';

export function editUser({userName, firstName, lastName}) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: types.EDIT_USER_REQUEST
    })

    return callApi('./user/me', token, {method: 'POST'}, {data: {
      userName, firstName, lastName
    }})
    .then(json => (
      dispatch({
        type: types.EDIT_USER_SUCCESS,
        payload: json
      })
    ))
    .catch(reason => dispatch({
      type: types.EDIT_USER_FAILURE,
      payload: reason
    }))    
  }
}
