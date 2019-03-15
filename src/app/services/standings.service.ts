import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Standigs } from '../models/Standings';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private http: HttpClient) { }

  getStandings(){
    const url = "assets/posiciones.json";
    return this.http.get<Standigs[]>(url);
  }
}
