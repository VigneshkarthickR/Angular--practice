import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
 
  wordsCount(data:any){
    return data.length
  }


  

  
}
