import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { Match } from 'src/app/models/Match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  matches: Match[] = [];

  constructor(public matchesService: MatchesService){}

  ngOnInit(){
    this.matchesService.getMatches()
    .subscribe(
      matches => {console.log(matches);
        this.matches = matches;
      },
      err => console.log(err)

    )
  }
}
