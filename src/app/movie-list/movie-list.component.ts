import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, take } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { environment } from 'src/environments/environment';
import { Movie } from '../movies.interface';
import { APIResponse } from '../response.interface';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],

})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieServiceService, private route: ActivatedRoute, private router: Router) { }

  popularMovies: Movie[] = [];
  nowMovies: Movie[] = [];
  colorTitle = "#ffffff"
  colorSubtitle = "#ffffff"
  ngOnInit(): void {
    //this.getMovies();
    this.forkTest();
  }

  forkTest() {
    const fork = forkJoin({

      popular: ajax.getJSON<APIResponse>(`${environment.baseUrl}movie/popular?api_key=b846df5ed3d8fc810355515f7af6df6b`),
      nowPlaying: ajax.getJSON<APIResponse>(`${environment.baseUrl}movie/now_playing?api_key=b846df5ed3d8fc810355515f7af6df6b`)
    });

    fork.subscribe(res => {

    });
    //fork is an observable
    //We subscribe  the observable
    //Everything inside the {} is the observer
    fork.subscribe({
      //what we do with data if succes
      next: (res) => {
        this.popularMovies = [...this.popularMovies, ...res.popular.results];
        this.nowMovies = [...this.nowMovies, ...res.nowPlaying.results];
      },
      //what we do if error
      error: err => console.log(err),

      //what we do when complete
      complete: () => { }
    })
  }

  // private getMovies(): void {
  //   this.movieService.getPopular().pipe(take(1))
  //     .subscribe((res: any) => {
  //       console.log(res)
  //       const { page, results } = res;
  //       this.movies = [...this.movies, ...results]

  //     })
  // }

  bobo() {
    this.router.navigate(['/Populares']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }



}
