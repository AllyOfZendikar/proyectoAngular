import { Component, OnInit } from '@angular/core';
import { TeamsService} from 'src/app/services/teams.service';
import { Team } from 'src/app/models/Teams';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  teams: Team[] = [];
  constructor(public teamService: TeamsService) { }

  ngOnInit() {
    this.teamService
      .getTeams()

      .subscribe(
        teams => {
          console.log(teams);
          this.teams = teams;
        },
        err => console.log(err)
      );
  }

}
