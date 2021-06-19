import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string = '';
// username:string='';

  loginForm = new FormGroup({

    email:new FormControl(null ,
      [Validators.email , Validators.required]),
    password:new FormControl(null ,
      [Validators.required , Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
    
    
    })

  constructor(private _AuthService:AuthService , private _Router:Router , private toastr:ToastrService ) {}



  showToastr()
  {
    this.toastr.success('success login', 'welcome' , {

      timeOut:1000,
      
      
    });
  }

  showToastr1()
  {
    this.toastr.error( 'user name or password is incorrect' ,' login error', {

      timeOut:1500,
      
    }) .portal;
  }
 
  submitloginForm(loginForm:FormGroup)
  {

    this._AuthService.login(loginForm.value).subscribe((response)=>{

     

      if(response.message == 'success')
      {
        localStorage.setItem('userToken' , response.token);
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['/home'])
        this.showToastr();


      }
      else
      {
         this.error = response.message
         this.showToastr1();
      }
  
    })
  }

  ngOnInit(): void {
  }

}
