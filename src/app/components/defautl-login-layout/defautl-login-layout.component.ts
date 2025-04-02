import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defautl-login-layout',
  templateUrl: './defautl-login-layout.component.html',
  styleUrls: ['./defautl-login-layout.component.scss']
})
export class DefautlLoginLayoutComponent {

  @Input() title: string = "";
  @Input() primaryButtom: string = "";
  @Input() secondButtom: string = "";
}
