import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeMoviesComponent } from './home-movies/home-movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { NowMoviesComponent } from './now-movies/now-movies.component';
import { HttpClientModule } from  '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

const appRoutes: Routes = [
  { path:'', component: HomeMoviesComponent},
  { path:'Perfil', component: PopularMoviesComponent},
  { path:'En cines', component: NowMoviesComponent},
  {path: 'Detalles/:id', component: MovieDetailsComponent},
  {path: 'Buscar/:searchTerm', component: SearchMoviesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeMoviesComponent,
    PopularMoviesComponent,
    NowMoviesComponent,
    MovieListComponent,
    MovieDetailsComponent,
    SearchMoviesComponent,
    SearchBarComponent,
    MainBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
