import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefautlLoginLayoutComponent } from 'src/app/components/defautl-login-layout/defautl-login-layout.component';
import { LoginService } from 'src/app/services/login.service';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    LoginService
  ]
})
export class LoginComponent {

  loginForm!: FormGroup<LoginForm>

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        this.toastr.success("Login feito com sucesso!"),
        this.router.navigate(["/user"])
      },
      error: () => {
        this.toastr.error("Erro inesperado! Tente novamente mais tarde")
      }
    });
  }

  navigate(){
    this.router.navigate(["/signup"])
  }
}
