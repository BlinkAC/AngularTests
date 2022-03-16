import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Movie } from '../movies.interface';
import { UserProfile } from '../profile.interface';
import { RateResponse } from '../rateResponse.interface';
import { RequestToken } from '../requestToken.interface';
import { SessionRespose } from '../sessionResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  searchMovie(query: String ="", page:number=1){
    return this.http.get<Movie[]>(`${environment.baseUrl}search/movie?api_key=b846df5ed3d8fc810355515f7af6df6b&query=${query}`)
  }
  getPopular(){
    return this.http.get<Movie[]>(`${environment.baseUrl}movie/popular?api_key=b846df5ed3d8fc810355515f7af6df6b&language=en-US`)
  }
  movieDetails(id: number){
    return this.http.get<Movie>(`${environment.baseUrl}movie/${id}?api_key=b846df5ed3d8fc810355515f7af6df6b`)
  }

  getTokenRequest(){
    return this.http.get<RequestToken>(`${environment.baseUrl}authentication/token/new?api_key=b846df5ed3d8fc810355515f7af6df6b`)
  }

  getSessionID(tokerino: string){
    return this.http.post<SessionRespose>(`${environment.baseUrl}authentication/session/new?api_key=b846df5ed3d8fc810355515f7af6df6b`,
    {request_token : tokerino}).subscribe((params)=>{
      localStorage.setItem('sessionID', params['session_id'])
    })
  }

  rateMovie(movie_id: number, sessionID: string, rating: number ){
    return this.http.post<RateResponse>(`${environment.baseUrl}movie/${movie_id}/rating?api_key=b846df5ed3d8fc810355515f7af6df6b&session_id=${sessionID}`,
    {value: rating}).subscribe((params)=> {
      console.log(params['status_code'])
    })
  }

  getUserInfo(sessionID: string){
    return this.http.get<UserProfile>(`${environment.baseUrl}account?api_key=b846df5ed3d8fc810355515f7af6df6b&session_id=${sessionID}`)
  }

}
