import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { User } from './User';
import { Response } from './response';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  backendUrl = environment.backendUrl
  http = inject(HttpClient)
  spinner = inject(NgxSpinnerService)
  page: WritableSignal<number> = signal<number>(1)
  getUsers() {
    this.spinner.show()
    let query = new HttpParams().append('page', this.page())
    return this.http.get<Response<User[]>>(this.backendUrl, { params: query }).pipe(finalize(() => {
      this.spinner.hide()
    }))
  }

  getUser(id: string) {

    return this.http.get(this.backendUrl + id)
  }

}
