import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [{path:'',component:LoginpageComponent},{path:'navbar',component:NavbarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
