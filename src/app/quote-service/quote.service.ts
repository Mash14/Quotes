import { Injectable } from '@angular/core';
import { Quotes } from '../quoteList';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  getQuotes() {
    return Quotes;
  }
  
  constructor() { }
}
