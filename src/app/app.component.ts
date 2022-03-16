import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieServiceService } from './service/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showProfile:boolean = false;
  
  constructor(private service: MovieServiceService){}

  ngOnInit(): void {
    
    const myToken = localStorage.getItem('tokerino');
    const session = localStorage.getItem('sessionID');
    if(myToken){
      if(session){
        console.log("Session already exists");
        this.showProfile=true;
      }else{
        this.showProfile=false;
        this.setSessiondID(myToken!);
      }
    }else{
      console.log("no esta");
    }
    


  }
  title = 'moviesAngular';

  setSessiondID(tokerino: string){
    this.service.getSessionID(tokerino)

  }

}
