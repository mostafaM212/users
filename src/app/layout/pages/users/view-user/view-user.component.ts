import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../User';
import { finalize, Subject, takeUntil, tap } from 'rxjs';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerService } from 'ngx-spinner';
import { GoToDirective } from '../../../../directives/go-to.directive';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, GoToDirective],
})
export class ViewUserComponent implements OnInit {
  _unsubscribe = new Subject<boolean>()
  id: string = ''
  spinner = inject(NgxSpinnerService)
  userService = inject(UserService)
  activatedRoute = inject(ActivatedRoute)
  user = signal<User | null>(null)

  constructor() {
    this.id = this.activatedRoute.snapshot.params['id']
  }
  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.spinner.show()
    this.userService.getUser(this.id)
      .pipe(tap((data: any) => {
        this.user.set(data.data)
      }), takeUntil(this._unsubscribe), finalize(() => {
        this.spinner.hide()
      })).subscribe()
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._unsubscribe.next(true);
    this._unsubscribe.complete()
  }
}
