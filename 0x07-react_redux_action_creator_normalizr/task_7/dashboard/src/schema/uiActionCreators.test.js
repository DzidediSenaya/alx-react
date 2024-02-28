// In task_7/dashboard/src/actions/uiActionCreators.test.js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UI Action Creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN_SUCCESS action if API call succeeds', async () => {
    fetchMock.getOnce('/login-success.json', {
      status: 200,
      body: { user: { email: 'test@example.com', password: 'password123' } }
    });

    const expectedActions = [
      { type: 'LOGIN' },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});
    await store.dispatch(loginRequest('test@example.com', 'password123'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches LOGIN_FAILURE action if API call fails', async () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: 'LOGIN' },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});
    await store.dispatch(loginRequest('test@example.com', 'password123'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

