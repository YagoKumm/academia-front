import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DefautlLoginLayoutComponent } from './components/defautl-login-layout/defautl-login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';


@NgModule({
  declarations: [
    AppComponent,
    DefautlLoginLayoutComponent,
    LoginComponent,
    PrimaryInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
