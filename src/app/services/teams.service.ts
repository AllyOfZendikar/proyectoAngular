import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Team } from '../models/Teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }
  
  getTeams(){
    const url = "assets/Equipos.json";
    return this.http.get<Team[]>(url);
  }
}