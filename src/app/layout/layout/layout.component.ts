import { Component, OnInit } from '@angular/core';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [TopNavigationComponent, RouterOutlet]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('🔥', 'tets');

  }

}
