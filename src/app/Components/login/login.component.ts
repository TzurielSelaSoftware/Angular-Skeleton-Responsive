import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { LoginArgs } from 'src/Args/login-args';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginArgs:LoginArgs = {password:"",userName:""};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login():void{
    console.log(this.loginArgs.userName);
    console.log(this.loginArgs.password);
    this.router.navigateByUrl('\Main');
  }
}
