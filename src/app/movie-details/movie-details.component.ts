import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../movies.interface';
import { RequestToken } from '../requestToken.interface';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie$!: Observable<Movie>;
  colorTitle = "#00000";
  data!: string;
  movieID:number = 0;
  value:number = 0.5;
  public showRate = false;
  constructor(private route: ActivatedRoute, private service: MovieServiceService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      this.movieID = params['id'];
      const session = localStorage.getItem('sessionID')
      this.movie$ = this.service.movieDetails(this.movieID);
      
    })
  }

  goBack() {
    this.location.back();
  }

  startRate(){
    const session = localStorage.getItem('sessionID')
    if(session){
      this.showRate = true;
    }else{
      this.service.getTokenRequest().subscribe((params =>{
        this.data = params['request_token']
        console.log(this.data)
        window.open(`${environment.tmdbSite}${this.data}?redirect_to=http://localhost:4200/Detalles/${this.movieID}`, "_blank");
        localStorage.setItem('tokerino', this.data)
      }))
    }
  }

  submitRate(movieID: number, value: number){
    const sesison = localStorage.getItem('sessionID');
    this.service.rateMovie(movieID, sesison!, value);
    alert("Calficacion enviada con exito");
    this.value = 0.5;
    this.showRate = false
  }
}
