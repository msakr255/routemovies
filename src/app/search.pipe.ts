import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any,klma:any): any {
    // if(klma==undefined || klma=="")
    // {
    //   return movies ;
    // }

    return movies.filter((movies:any)=>{ 


    if(movies.title)
    {

      return movies.title.toUpperCase().includes(klma.toUpperCase())

    }

  
    
    else
    {
      return movies.name.toUpperCase().includes(klma.toUpperCase());

    }



    });
  }

}
