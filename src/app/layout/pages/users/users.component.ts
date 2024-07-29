import { Component, computed, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';
import { User } from './User';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../../store/actions/users.action';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [
    UserCardComponent,
    CommonModule,
    MatIconModule,
    FormsModule,
    NgxPaginationModule

  ]
})
export class UsersComponent implements OnInit {
  userService = inject(UserService)
  store = inject(Store)

  spinner = inject(NgxSpinnerService)
  users = signal<User[]>([])
  search = signal<string>('')
  searchedUsers = computed<User[]>(() => {
    let filteredUsers: User[] = []
    this.users().forEach(User => {
      if (User.id + '' == this.search() && this.search().length) {
        filteredUsers.push(User)
      }
    })
    return filteredUsers
  })

  p: WritableSignal<number> = this.userService.page;
  total: number = 0
  pageSize: number = 6
  constructor() {
  }

  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.store.select('users')
      .subscribe((data: any) => {
        console.log('🔥data ', data);

        this.users.set(data.data)
        this.pageSize = data.per_page;
        this.total = data.total
      })
  }
  pageChanged(e: any) {
    this.p.set(e)
    this.store.dispatch(loadUsers())
  }

}
