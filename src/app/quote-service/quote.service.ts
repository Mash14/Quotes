import { Injectable } from '@angular/core';
import { Quotes } from '../quoteList';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  getQuotes() {
    return Quotes;
  };

  getQuote(id:number) {
    for(let quote of Quotes) {
      if (quote.id == id) {
        return quote;
      }
    }
    
  };
  
  constructor() { }
}
