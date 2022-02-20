import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoggedinGuard } from './loggedin.guard';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FormComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [LoggedinGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
