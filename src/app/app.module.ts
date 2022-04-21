import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.component';
import { HomeComponent } from './pages/home/home.component';
// import { PlansComponent } from './pages/plans/plans.component';
// import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent
  
    // HomeComponent,
    // SigninComponent,
    // RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
