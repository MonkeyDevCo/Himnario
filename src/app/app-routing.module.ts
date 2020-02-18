import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliticsComponent } from './politics/politics.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{ path: 'politics', component: PoliticsComponent },
	{ path: 'faq', component: FaqComponent },
    { path: '**',  redirectTo: '/home' },
    { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
