import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
