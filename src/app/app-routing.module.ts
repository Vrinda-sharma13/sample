import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
  {path:'register', component: RegisterComponent,pathMatch:'full'},
  {path:'signup', component: SignupComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
