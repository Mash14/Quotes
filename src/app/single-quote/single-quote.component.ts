import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuoteService } from '../quote-service/quote.service';

@Component({
  selector: 'app-single-quote',
  templateUrl: './single-quote.component.html',
  styleUrls: ['./single-quote.component.css']
})
export class SingleQuoteComponent implements OnInit {

  quote?:Quote;

  
  votes:number = 0;

  likes() {
    this.votes++;
  }
  dislike() {
    this.votes--;
  }
  
  constructor(private route:ActivatedRoute, private service:QuoteService) { }

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get('id');
    this.quote = this.service.getQuote(id);
  }

}
