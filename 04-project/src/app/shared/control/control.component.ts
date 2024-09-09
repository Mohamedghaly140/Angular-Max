import {
  input,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'control',
  // },
})
export class ControlComponent {
  @HostBinding('class') className = 'control';

  title = input.required<string>();
}
