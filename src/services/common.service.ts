import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
 
  public wordsCount(data:string){
    return data.length
  }

  public getUsers(){
   const data= this._http.get("https://jsonplaceholder.typicode.com/users")
   return data
  }

 
}
