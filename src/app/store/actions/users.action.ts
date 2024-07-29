import { createAction, props } from "@ngrx/store";
import { User } from "../../layout/pages/users/User";


export const loadUsers = createAction('[Users] load Users')
export const loadUsersSuccess = createAction('[Users] load Users successful', props<{ data: any[], per_page: number, page: number, total: number }>())
export const loadUsersFailure = createAction('[Users] load Users failure', props<{ error: string[] }>())

export const updateUsers = createAction('[Userss] update Users', props<{ data: any[] }>())