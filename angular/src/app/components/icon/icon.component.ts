import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild
} from '@angular/core';
import { iconList } from "@assets/icon-list/icon-list";
import { IconNames } from "@models/icon-list";

@Component({
  selector: 'app-icon[iconName]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements AfterViewInit {
  @Input() public iconName: IconNames;
  @Input() public classList: string;

  @ViewChild('iconContainer', { read: ElementRef }) private readonly iconContainer: ElementRef

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setProperty(this.iconContainer.nativeElement, 'innerHTML', iconList.get(IconNames.X_ICON));
  }
}
