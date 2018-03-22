import * as types from '../constants/users';
import callApi from '../utils/call-api';

// eslint-disable-next-line
export function editUser({ username, firstName, lastName }) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: types.EDIT_USER_REQUEST,
    });

    return callApi(
      '/users/me',
      token,
      { method: 'POST' },
      {
        data: { username, firstName, lastName },
      },
    )
      .then(json => json)
      .then(json =>
        dispatch({
          type: types.EDIT_USER_SUCCESS,
          payload: json,
        }))
      .catch(reason =>
        dispatch({
          type: types.EDIT_USER_FAILURE,
          payload: reason,
        }));
  };
}
