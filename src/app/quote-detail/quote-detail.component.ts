import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  @Input() quote: Quote;
  
  @Output() toUpVote = new EventEmitter<boolean>();
  upVote(increase: boolean) {
    this.toUpVote.emit(increase)
  }

  @Output() toDownVote = new EventEmitter<boolean>();
  downVote(decrease: boolean) {
    this.toDownVote.emit(decrease)
  }

  @Output() toDelete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean) { 
    this.toDelete.emit(complete)
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
