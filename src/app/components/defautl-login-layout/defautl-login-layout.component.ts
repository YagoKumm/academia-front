import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-defautl-login-layout',
  templateUrl: './defautl-login-layout.component.html',
  styleUrls: ['./defautl-login-layout.component.scss']
})
export class DefautlLoginLayoutComponent {

  @Input() title: string = "";
  @Input() primaryButtom: string = "";
  @Input() secondButtom: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}
