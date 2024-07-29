import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from "../actions/users.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "../../layout/pages/users/user.service";

@Injectable()
export class UsersEffect {

       constructor(private actionsObs: Actions, private userService: UserService) { }
       loadUsersObs = createEffect(() =>
              this.actionsObs.pipe(
                     ofType(loadUsers),
                     mergeMap(() => this.userService.getUsers().pipe(map((data) => loadUsersSuccess(data), catchError((e) => of(loadUsersFailure(e))))))
              ))
}