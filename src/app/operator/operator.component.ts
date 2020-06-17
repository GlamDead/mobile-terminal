import { Component, OnInit } from '@angular/core';
import { OPERATORS } from './operators-list';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss'],
})
export class OperatorComponent implements OnInit {
  operators = OPERATORS;
  constructor() {}

  ngOnInit(): void {}
}
