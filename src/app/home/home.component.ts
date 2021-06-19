import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pages:number[]=[];
  word:string='';
  trendingMovies:any[] = []; 
  trendingTv:any[] = []; 
  trendingPepole:any[] = []; 
totalPage:number=0;

  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'

  constructor(private _MoviesService:MoviesService ) 
  { 
   
    _MoviesService.getTrending('movie',1).subscribe((data)=>{

      this.trendingMovies = data.results.slice(0,10);
      
      this.totalPage =data.total_pages-980;
      for(let i =1 ; i <= this.totalPage ; i++)
           {
        this.pages.push(i);
          }
     
    });

    _MoviesService.getTrending('tv ',1).subscribe((data)=>{


      this.trendingTv = data.results.slice(0,10);

    });

    _MoviesService.getTrending('person' , 1).subscribe((data)=>{


      this.trendingPepole = data.results.slice(0,10);

    });
  }

  getPage(x:any)
  {

    let countpage = x;
   
  
    
   this._MoviesService.getTrending('movie',countpage).subscribe((data)=>{

      this.trendingMovies = data.results.slice(0,10);
      

    });

    this._MoviesService.getTrending('tv ',countpage).subscribe((data)=>{


      this.trendingTv = data.results.slice(0,10);

    });

    this._MoviesService.getTrending('person' , countpage).subscribe((data)=>{


      this.trendingPepole = data.results.slice(0,10);

    });
  }

  
  ngOnInit(): void {
  }

}


