import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';
import { PageOneComponent } from './Components/page-one/page-one.component';
import { PageTwoComponent } from './Components/page-two/page-two.component';

const routes: Routes = [

  { path: 'Login', component: LoginComponent },
  {
    path: 'Main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'PageOne' ,pathMatch: 'full'},
      { path: 'PageOne', component: PageOneComponent },
      { path: 'PageTwo', component: PageTwoComponent },
    ]
  },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
