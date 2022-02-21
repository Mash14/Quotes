import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { QuoteComponent } from './quote/quote.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleQuoteComponent } from './single-quote/single-quote.component';

const routes: Routes = [
  { path: '', component: QuoteComponent},
  { path: 'about', component: AboutComponent},
  { path: ':id', component: SingleQuoteComponent},
  { path: 'quotes', redirectTo: '', pathMatch:'full'},
  { path: '**', component: NotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
