import { getUsersLists } from '@/services/api';

export default {
    namespace: 'users',

    state: {
        userLists: []
    },

    effects: {
        *fetchUsers(_, { call, put }) {
          const response = yield call(getUsersLists);
          yield put({
            type: 'show',
            payload: response,
          });
        },
      },

      reducers: {
        show(state, { payload }) {
          return {
            ...state,
            ...payload,
          };
        },
      },
}