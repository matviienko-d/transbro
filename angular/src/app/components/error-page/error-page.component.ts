import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IconNames } from '@models/icon-list';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent implements OnInit {
  public iconNames = IconNames;

  constructor() {}

  ngOnInit(): void {}
}
