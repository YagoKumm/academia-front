import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefautlLoginLayoutComponent } from 'src/app/components/defautl-login-layout/defautl-login-layout.component';
import { LoginService } from 'src/app/services/login.service';

interface SignupForm{
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastr.success("Login feito com sucesso!"),
      error: () => this.toastr.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  navigate(){
    this.router.navigate(["/login"])
  }

}
