import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {
  @Input() public isChecked = false;
  @Input() public readonly id = uuidv4();

  @Output() private readonly stateChanged$ = new EventEmitter<boolean>();

  public onStateUpdate(): void {
    this.isChecked = !this.isChecked;
    this.stateChanged$.emit(this.isChecked);
  }
}
