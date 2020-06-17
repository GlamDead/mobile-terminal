import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('keyframes', [
      transition(':enter', [
        animate(
          '4s',
          keyframes([
            style({ transform: 'rotateY(180deg)' }),
            style({ transform: 'rotateY(0deg)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
