import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';

/*interface Track{
  track: Array <{
    artist: string,
    name: string,
    url: string
  }>
}*/

interface Response{
  results:{
    trackmatches: {
      track:[]
    }
    //trackmatches: Track
  }
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  newSong='';
  song=[];

  public songs=[];
  //songService: SongService;
  constructor(private songService: SongService){
    //this.songService=songService
  }

  ngOnInit() {
    //console.log(this.songService.getSongs());
    //this.songs=this.songService.getSongs();
    //this.songs=this.searchSong();
  }

  searchSong(){
    console.log(this.newSong);
    this.songService.searchSong(this.newSong)
      .then((response:Response) => {
        console.log('response');
        console.log(response);
        this.songs=response.results.trackmatches.track;
      })
      .catch(error =>{
        console.log(error)
      }); 
  }
}
