import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quot } from '../quote-class/quot';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  
  quote:Quot;
  constructor(private http:HttpClient) { 
    this.quote = new Quot('','','');
  }
  quoteResponse() {
    interface ApiResponse {
      author:string,
      quote:string,
      permalink:string,
    }
    let promise = new Promise((resolve,reject)=> {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.quote.author = response.author,
        this.quote.quote = response.quote,
        this.quote.permalink = response.permalink,
        
        resolve(response)
      },error=>{
        this.quote.author = 'Marc Benioff',
        this.quote.quote = 'The only constant in technology is change',
        this.quote.permalink = 'https://freshservice.com/general/top-it-quotes-blog/'
        reject(error)
      })
    })
    return promise;
  }
}
