import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient:HttpClient) { }

  searchSong(songName){
    const API_KEY='e81163ca8ec6cc7092804182843121ef';
    const API_URL=`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${songName}&api_key=${API_KEY}&format=json`
    return this.httpClient.get(API_URL).toPromise();
  }
 /* return [{
      title:'la plaga',
      artist:'enrique guzman',
      url: 'http://spotify.com'
    },{
      title:'la bamba',
      artist:'richie valents',
      url: 'http://spotify.com'
    }]
  }*/
}
