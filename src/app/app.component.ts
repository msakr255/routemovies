import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sun2final';


  constructor(private spinner: NgxSpinnerService ) 
  {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  // showToastr()
  // {
  //   this.toastr.success('some meassage', 'title');
  // }


  }

