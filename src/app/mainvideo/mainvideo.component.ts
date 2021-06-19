import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mainvideo',
  templateUrl: './mainvideo.component.html',
  styleUrls: ['./mainvideo.component.scss']
})
export class MainvideoComponent implements OnInit {

  constructor(private _Router:Router) { }

  getPageregister()
  {
    this._Router.navigate(['/register']);
  }
  getPagelogin()
  {
    this._Router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
