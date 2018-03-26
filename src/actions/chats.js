/* eslint no-underscore-dangle: 0 */
import * as types from '../constants/chats';
import callApi from '../utils/call-api';
import { redirect } from './services';

// FETCH MY CHATS
export function fetchMyChats() {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.myChats) {
      return Promise.resolve();
    }

    dispatch({
      type: types.FETCH_MY_CHATS_REQUEST,
    });

    return callApi('/chats/my', token)
      .then(json =>
        dispatch({
          type: types.FETCH_MY_CHATS_SUCCESS,
          payload: json,
        }))
      .catch(reason =>
        dispatch({
          type: types.FETCH_ALL_CHATS_FAILURE,
          payload: reason,
        }));
  };
}
// FETCH ALL CHATS
export function fetchAllChats() {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.allChats) {
      return Promise.resolve();
    }

    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST,
    });

    return callApi('/chats', token)
      .then(json =>
        dispatch({
          type: types.FETCH_ALL_CHATS_SUCCESS,
          payload: json,
        }))
      .catch(reason =>
        dispatch({
          type: types.FETCH_ALL_CHATS_FAILURE,
          payload: reason,
        }));
  };
}
// FETCH CHAT
export function fetchChat(chatId) {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.chat) {
      return Promise.resolve();
    }

    dispatch({
      type: types.FETCH_CHAT_REQUEST,
    });

    return callApi(`/chats/${chatId}`, token)
      .then((json) => {
        dispatch({
          type: types.FETCH_CHAT_SUCCESS,
          payload: json,
        });

        return json;
      })
      .catch((reason) => {
        dispatch({
          type: types.FETCH_CHAT_FAILURE,
          payload: reason,
        });

        dispatch(redirect('/chat'));
      });
  };
}

// SET ACTIVE CHAT
export function setActiveChat(chatId) {
  return dispatch =>
    dispatch(fetchChat(chatId)).then((json) => {
      if (!json) {
        dispatch(redirect('/chat'));

        return dispatch({
          type: types.UNSET_ACTIVE_CHAT,
        });
      }

      dispatch({
        type: types.SET_ACTIVE_CHAT,
        payload: json,
      });

      dispatch(redirect(`/chat/${json.chat._id}`));
      return Promise.resolve();
    });
}

// JOIN CHAT
export function joinChat(chatId) {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.joinChat) {
      return Promise.resolve();
    }

    dispatch({
      type: types.JOIN_CHAT_REQUEST,
      payload: { chatId },
    });

    return callApi(`./chats/${chatId}/join`, token)
      .then(({ chat }) => {
        dispatch({
          type: types.JOIN_CHAT_SUCCESS,
          payload: { chat },
        });

        dispatch(redirect(`/chat/${chat._id}`));

        return chat;
      })
      .catch(reason =>
        dispatch({
          type: types.JOIN_CHAT_FAILURE,
          payload: reason,
        }));
  };
}

// LEAVE CHAT
export function leaveChat(chatId) {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.leaveChat) {
      return Promise.resolve();
    }

    dispatch({
      type: types.LEAVE_CHAT_REQUEST,
      payload: { chatId },
    });

    return callApi(`./chats/${chatId}/leave`, token)
      .then(({ chat }) => {
        dispatch({
          type: types.LEAVE_CHAT_SUCCESS,
          payload: { chat },
        });

        dispatch({
          type: types.UNSET_ACTIVE_CHAT,
        });
        dispatch(redirect('/chat'));

        return chat;
      })
      .catch(reason =>
        dispatch({
          type: types.LEAVE_CHAT_FAILURE,
          payload: reason,
        }));
  };
}

// CREATE CHAT
export function createChat(title) {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.createChat) {
      return Promise.resolve();
    }

    dispatch({
      type: types.CREATE_CHAT_REQUEST,
      payload: { title },
    });

    return callApi('./chats', token, { method: 'POST' }, { data: { title } })
      .then(({ chat }) => {
        dispatch({
          type: types.CREATE_CHAT_SUCCESS,
          payload: { chat },
        });

        dispatch(redirect(`/chat/${chat._id}`));

        return chat;
      })
      .catch(reason =>
        dispatch({
          type: types.CREATE_CHAT_FAILURE,
          payload: reason,
        }));
  };
}

// DELETE CHAT
export function deleteChat(chatId) {
  return (dispatch, getState) => {
    const state = getState();
    const { isFetching } = state.services;
    const { token } = state.auth;

    if (isFetching.deleteChat) {
      return Promise.resolve();
    }

    dispatch({
      type: types.DELETE_CHAT_REQUEST,
      payload: { chatId },
    });

    return callApi(`/chats/${chatId}`, token, { method: 'DELETE' })
      .then((res) => {
        if (!res.success) throw new Error(res.message);
        dispatch({
          type: types.DELETE_CHAT_SUCCESS,
          payload: res,
        });

        dispatch({
          type: types.UNSET_ACTIVE_CHAT,
        });
        dispatch(redirect('/chat'));

        return res;
      })
      .catch(reason =>
        dispatch({
          type: types.DELETE_CHAT_FAILURE,
          payload: reason,
        }));
  };
}
