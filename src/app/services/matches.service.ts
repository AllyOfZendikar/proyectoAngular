import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/Match'

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http: HttpClient) {}
  
  getMatches(){
    const url = 'assets/Matches.json';
    return this.http.get<Match[]>(url);
  }
}
