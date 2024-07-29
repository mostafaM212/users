import { createReducer, on, props } from '@ngrx/store';
import { loadUsersSuccess, updateUsers } from "../actions/users.action";
import { User } from '../../layout/pages/users/User';

export interface UsersStore {
       data: User[],
       page: number;
       per_page: number,
       total: number,

}
export const initialState: UsersStore = {
       data: [],
       page: 1,
       per_page: 6,
       total: 6,
}
export const usersReducer = createReducer(initialState, on(loadUsersSuccess, (state, props) => {
       console.log('🔥reducer', props);

       return {
              ...state, data: props.data,
              page: props.page,
              per_page: props.per_page,
              total: props.total,
       }
}), on(updateUsers, ((state, props) => {

       return {
              ...state, ...props.data
       }
})))