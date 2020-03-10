import { Component, Input, OnInit } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent extends BaseInputComponent implements OnInit {
  @Input() type: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.id = this.getId();
  }
}
