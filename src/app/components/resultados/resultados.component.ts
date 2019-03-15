import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { StandingsService} from 'src/app/services/standings.service';
import { Match } from 'src/app/models/Match';
import { Standigs } from 'src/app/models/Standings';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  matches: Match[] = [];
  standings: Standigs[] = [];

  constructor(public matchesService: MatchesService, standingsService: StandingsService) { }

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

