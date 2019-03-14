import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { Match } from 'src/app/models/Match';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  matches: Match[] = [];
  constructor(public matchesService: MatchesService) { }

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
