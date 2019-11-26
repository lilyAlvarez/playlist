import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs=[];
  constructor(){
    this.songs = [{
      title:'la plaga',
      artist:'enrique guzman',
      url: 'http://spotify.com'
    },{
      title:'la bamba',
      artist:'richie valents',
      url: 'http://spotify.com'
    }]
  }

  ngOnInit() {
  }

}
