import { Component, OnInit } from "@angular/core";
import { StandingsService } from "src/app/services/standings.service";
import { Standings } from "src/app/models/Standings";

@Component({
  selector: "app-tabla-posiciones",
  templateUrl: "./tabla-posiciones.component.html",
  styleUrls: ["./tabla-posiciones.component.css"]
})
export class TablaPosicionesComponent implements OnInit {
  standings: Standings[] = [];
  constructor(public standingService: StandingsService) {}

  ngOnInit() {
    this.standingService
      .getStandings()

      .subscribe(
        standings => {
          console.log(standings);
          this.standings = standings;
        },
        err => console.log(err)
      );
  }
}
