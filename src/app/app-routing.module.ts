import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';
import { LoginComponent } from './login/login.component';
import { FormComponent} from './form/form.component';
import { LoggedinGuard } from './loggedin.guard';
import { HomeComponent } from './home/home.component';
const routes: Routes = [

  {path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'adminview', component: AdminviewComponent, canActivate: [LoggedinGuard]},
  {path: 'form', component: FormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ FormComponent, LoginComponent, AdminviewComponent]
