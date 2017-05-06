import request from 'superagent';

import * as types from 'constants/actionTypes/PostsActionTypes';

import { SERVER_API_URL } from 'constants/ServerApiUrl';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${SERVER_API_URL}/`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
      });
  };
}
