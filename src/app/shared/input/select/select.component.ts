import { Component, Input, OnInit } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends BaseInputComponent implements OnInit {
  @Input() options: BasicOption[];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.id = this.getId();
  }
}

export interface BasicOption {
  label: string;
  value: string;
  id?: string;
}
