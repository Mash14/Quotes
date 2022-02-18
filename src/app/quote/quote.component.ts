import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote';
import { AlertService } from '../alert-service/alert.service';
import { QuoteService } from '../quote-service/quote.service';
import { Quot } from '../quote-class/quot'
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
    quotes:Quote[] =[];
    quot:Quot;
    alertService:AlertService;
    
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
            let isComplete = confirm(`Are you sure you want to delete '${this.quotes[index].name}'?`)
        
          if (isComplete) {
            this.quotes.splice(index, 1);
            this.alertService.alertMe("The quote has been successefully deleted.")
          }
        }
      }
      
      constructor(quoteService:QuoteService, alertService:AlertService, private quoteRequest:QuoteRequestService) { 
        this.quotes = quoteService.getQuotes();
        this.alertService = alertService;
      }
    
      ngOnInit(): void {
            // Before
        // interface ApiResponse {
        //   author:string,
        //   quote:string,
        //   permalink:string,
        // }

        // this.http.get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json').subscribe(data=>{
        //   this.quot = new Quot(data.author, data.quote, data.permalink);
        // },err=>{
        //   this.quot = new Quot("Marc Benioff", "The only constant in technology is change", "https://freshservice.com/general/top-it-quotes-blog/")
        // });
        
            //After
        this.quoteRequest.quoteResponse();
        this.quot = this.quoteRequest.quote;
      }
}
    