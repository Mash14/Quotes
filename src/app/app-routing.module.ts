import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: '', component: QuoteComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
