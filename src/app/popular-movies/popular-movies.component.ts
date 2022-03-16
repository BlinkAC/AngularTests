import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfile } from '../profile.interface';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  constructor(private router: Router, private service: MovieServiceService) { }

  show1: boolean = false;
  show2: boolean = true;
  profile!: Observable<UserProfile>;
  ngOnInit(): void {
    this.checkSession()
    

  }

  checkSession() {
    const session = localStorage.getItem('sessionID');
    if (session) {
      this.retrieveUserData(session);
      console.log("Si hay sessions");
     this.show1 = true;
     this.show2 = false;
    } else {
      console.log("No hay nada");
    }
  }

  logout() {
    this.router.navigateByUrl("");
    localStorage.removeItem('sessionID')
  }

  retrieveUserData(sessionID: string){
    this.service.getUserInfo(sessionID).subscribe((params)=>
    {
      console.log(params)
    } )
  }
}
