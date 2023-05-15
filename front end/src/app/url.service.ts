import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {


constructor(private http:HttpClient) { }
  
  generateShortUrl(userData:any){
    return this.http.post("http://localhost:8080/url/shortner",userData);
   }
 
}
