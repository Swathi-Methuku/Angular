import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { UserModule } from './users/users.module';
import { ProductModule } from './products/products.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component'

var rules = [{path:'home',component:HomeComponent},
  {path:' ',component:HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    UserModule, ProductModule, RouterModule.forRoot(rules), RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
