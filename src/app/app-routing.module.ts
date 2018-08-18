import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'countries', component: CountryListComponent }
  ];

  const appRouter = RouterModule.forRoot(routes);
  

  @NgModule({
    imports: [appRouter]
})
export class AppRoutingModule { }