import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _getDataService: GetDataService) { }

  user: any ={
    email : '',
    password: ''
  }

  ngOnInit(): void {
  }

  onUserLogin(){
    this._getDataService.getToken(this.user).subscribe(res => {
      if(res){
        localStorage.setItem('token', res['token']);
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

}
