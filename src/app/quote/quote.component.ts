import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
    quotes:Quote[] =[
        new Quote(1, "That which does not kill us makes us stronger", "Friedrich Nietzshe", "Mash", new Date(2021,5,12)),
        new Quote(2, "We must not allow other people's limited perceptions to define us", "Virginia Satir", "Mash", new Date(2020,7,11)),
        new Quote(3, "Do what you can, with what you have, where you are", "Theodore Roosevelt", "Mash", new Date(2020,3,24)),
        new Quote(4, "Be yourself; everyone else is already taken", "Oscar Wilde", "Mash", new Date(2020,12,25)),
        new Quote(5, "This above all: to thine own self be true", "William Shakespeare", "Mash", new Date(2018,1,2)),
      ];
    
      addNewQuote(quote: any) {
        let quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)
      }
    
      toggleDetails(index: any) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
      }
    
      deleteQuote(toDelete: any, index: any) {
        if(toDelete) {
            let isComplete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
        
          if (isComplete) {
            this.quotes.splice(index, 1);
          }
        }
      }
      
      constructor() { }
    
      ngOnInit(): void {
      }
    
    }
    