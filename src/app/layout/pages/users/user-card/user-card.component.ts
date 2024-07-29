import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { User } from '../User';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule]
})
export class UserCardComponent implements OnInit {

  user = input<User>()

  ngOnInit() {
  }

}
