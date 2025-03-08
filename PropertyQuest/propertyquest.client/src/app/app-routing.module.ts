import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: BuyComponent },
  { path: '', component: RentComponent },
  { path: '', component: SellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
