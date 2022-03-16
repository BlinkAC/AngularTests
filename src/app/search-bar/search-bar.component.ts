import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm: string = "";
  showLogout:boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {
    const session = localStorage.getItem('sessionID')
    if(session){
      this.showLogout = true;
    }
  }

  search(){
    this.router.navigateByUrl("Buscar/"+this.searchTerm).then(nav => {
      console.log(nav); // true if navigation is successful
      console.log(this.searchTerm)
    }, err => {
      console.log(err) // when there's an error
    });
  }

 

}
//https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https:%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1067%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1067%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-03%252Fa572f190-5183-11e9-959e-6dddeb1452b8%26client%3Da1acac3e1b3290917d92%26signature%3Dc29d845baa74267c4b83e7e2c77eb6caf60ea568&client=amp-blogside-v2&signature=b2851162dfefb8eea4d3bc1d4303134493ba92d9