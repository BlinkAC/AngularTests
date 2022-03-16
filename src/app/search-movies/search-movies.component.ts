import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from '../movies.interface';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  movie$: Movie[] = [];

  constructor(private service: MovieServiceService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['searchTerm'])
      this.getSearchedMovies(params['searchTerm'])
    })
  }


  getSearchedMovies(query: string) {
  
      this.service.searchMovie(query, 1).pipe(take(1)).subscribe((res: any) => {
        const { page, results } = res;
        this.movie$ = [...this.movie$, ...results];
      })
      this.movie$=[];
  }
}
