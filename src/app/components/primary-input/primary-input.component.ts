import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

type inputType = "text" | "email" | "password"

@Component({
  selector: 'app-primary-input',
  templateUrl: './primary-input.component.html',
  styleUrls: ['./primary-input.component.scss']
})
export class PrimaryInputComponent {

  @Input() type: inputType = "text";
  @Input() formName!: FormControl;
  @Input() placeholder: string = "";
  @Input() label: string = "";
}
