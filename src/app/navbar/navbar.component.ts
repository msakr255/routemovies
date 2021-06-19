import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  term:any='';

  islogin:boolean = false;
  constructor( private _AuthService:AuthService ) { 


    _AuthService.currentUser.subscribe(()=>{


      if(_AuthService.currentUser.getValue() != null)
      {
        this.islogin = true;
      }
      else
      {
        this.islogin = false;
      }
    })
  }

  isLogOut()
  {
    this._AuthService.logout();
  }

 
  ngOnInit(): void {
  }

}
