import reducer from '../Posts';
import * as types from 'constants/actionTypes/PostsActionTypes';

describe('Testing Posts reducer', () => {
  it('This test should return the initial state', () => {
    const initialState = {
      isFetching: false,
      error: false,
      entries: []
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_POSTS_REQUEST', () => {
    expect(
      reducer({}, {
        type: types.FETCH_POSTS_REQUEST,
      })
    ).toHaveProperty('isFetching', true);
  });
});
