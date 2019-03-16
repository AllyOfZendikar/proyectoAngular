import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { TeamsService } from "src/app/services/teams.service";
import { Team } from "src/app/models/Teams";

@Component({
  selector: "app-informacion-equipos",
  templateUrl: "./informacion-equipos.component.html",
  styleUrls: ["./informacion-equipos.component.css"]
})
export class InformacionEquiposComponent implements OnInit {
  parametro: string;
  //teams: Team[] = [];
  teams = [
    {
      "id": "1",
      "nameShow": "WIL",
      "fullName": "Wilstermann",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/15156.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/15156.jpg?size=240x&4",
      "ciudad": "Cochabamba",
      "entrenador": "Miguel Ángel Potugal",
      "añoFundacion": "1949",
      "pais": "Bolivia",
      "presidente": "Grover Vargas",
      "estadio": "Felix Capriles"
    },
    {
      "id": "2",
      "nameShow": "BOL",
      "fullName": "Bolívar",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/11369.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/11369.jpg?size=240x&4",
      "ciudad": "La Paz",
      "entrenador": "César Vigevani",
      "añoFundacion": "1925",
      "pais": "Bolivia",
      "presidente": "Guido Loayza",
      "estadio": "Hernando Siles"
    },
    {
      "id": "3",
      "nameShow": "THS",
      "fullName": "The Strongest",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/11372.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/11372.jpg?size=240x&4",
      "ciudad": "La Paz",
      "entrenador": "Pablo Escobar",
      "añoFundacion": "1908",
      "pais": "Bolivia",
      "presidente": "Cesar Salinas",
      "estadio": "Hernando Siles"
    },
    {
      "id": "4",
      "nameShow": "SPB",
      "fullName": "Sport Boys",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/15158.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/15158.jpg?size=240x&4",
      "ciudad": "Santa Cruz",
      "entrenador": "Christian Lovrincevich",
      "añoFundacion": "1954",
      "pais": "Bolivia",
      "presidente": "Carlos Romero",
      "estadio": "Samuel Vaca Gúzman"
    },
    {
      "id": "5",
      "nameShow": "ORI",
      "fullName": "Oriente Petrolero",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/1879.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/1879.jpg?size=240x&4",
      "ciudad": "Santa Cruz",
      "entrenador": "Mauricio Soria",
      "añoFundacion": "1955",
      "pais": "Bolivia",
      "presidente": "Jose Ernesto Alvarez",
      "estadio": "Ramón Tahuichi Aguilera"
    },
    {
      "id": "6",
      "nameShow": "RPT",
      "fullName": "Real Potosí",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/2116.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/2116.jpg?size=240x&4",
      "ciudad": "Potosí",
      "entrenador": "Fernando Ochoaizpur",
      "añoFundacion": "1941",
      "pais": "Bolivia",
      "presidente": "Calixto Santos",
      "estadio": "Victor Agustín Ugarte"
    },
    {
      "id": "7",
      "nameShow": "SJO",
      "fullName": "San José",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/2231.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/2231.jpg?size=240x&4",
      "ciudad": "Oruro",
      "entrenador": "Néstor Clausen",
      "añoFundacion": "1942",
      "pais":"Bolivia",
      "presidente": "Wilson Martinez",
      "estadio": "Jesús Bermudez"
    },
    {
      "id": "8",
      "nameShow": "BLO",
      "fullName": "Blooming",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/11368.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/11368.jpg?size=240x&4",
      "ciudad": "Santa Cruz",
      "entrenador": "Erwin Sanchez",
      "añoFundacion": "1946",
      "pais":"Bolivia",
      "presidente": "Juan Alfredo",
      "estadio": "Ramón Tahuichi Aguilera"
    },
    {
      "id": "9",
      "nameShow": "NAL",
      "fullName": "Nacional Potosí",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/4371.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/4371.jpg?size=240x&4",
      "ciudad": "Potosí",
      "entrenador": "Alberto Illanes",
      "añoFundacion": "1942",
      "pais":"Bolivia",
      "presidente": "Wilfredo Condori",
      "estadio": "Victor Agustín Ugarte"
    },
    {
      "id": "10",
      "nameShow": "GUA",
      "fullName": "Guabirá",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/1261.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/1261.jpg?size=240x&4",
      "ciudad": "Santa Cruz",
      "entrenador": "Eduardo Espinel",
      "añoFundacion": "1962",
      "pais":"Bolivia",
      "presidente": "Rafael Paz",
      "estadio": "Gilberto Parada"
    },
    {
      "id": "11",
      "nameShow": "AUR",
      "fullName": "Aurora",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/6317.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/6317.jpg?size=240x&4",
      "ciudad":"Cochabamba",
      "entrenador": "Marcos Ferrufino",
      "añoFundacion": "1935",
      "pais": "Bolivia",
      "presidente": "Jaime Cornejo",
      "estadio": "Felix Capriles"
    },
    {
      "id": "12",
      "nameShow": "DES",
      "fullName": "Destroyers",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/60995.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/60995.jpg?size=240x&4",
      "ciudad": "Santa Cruz",
      "entrenador": "Evandro Guimares",
      "añoFundacion": "1948",
      "pais":"Bolivia",
      "presidente": "Pedro Rivero",
      "estadio":"Ramón Tahuichi Aguilera"
    },
    {
      "id": "13",
      "nameShow": "RYP",
      "fullName": "Royal Pari",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/79080.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/79080.jpg?size=240x&4",
      "ciudad":"Santa Cruz",
      "entrenador": "Roberto Mosquera",
      "añoFundacion": "2002",
      "pais":"Bolivia",
      "presidente": "Mario Chávez",
      "estadio": "Ramón Tahuichi Aguilera"
    },
    {
      "id": "14",
      "nameShow": "CAR",
      "fullName": "Always Ready",
      "shield": "https://thumb.resfu.com/img_data/escudos/medium/62958.jpg?size=40x&4",
      "shieldBig": "https://thumb.resfu.com/img_data/escudos/medium/62958.jpg?size=240x&4",
      "ciudad":"La Paz",
      "entrenador": "Julio Baldiviezo",
      "añoFundacion": "1933",
      "pais":"Bolivia",
      "presidente": "Marco Antelo",
      "estadio": "Municipal Evo Morales"
    }
  ];
  
  copiaEquipo: {
    id: string;
    nameShow: string;
    fullName: string;
    shield: string;
    shieldBig: string;
    ciudad: string;
    entrenador: string;
    añoFundacion: string;
    pais: string;
    presidente: string;
    estadio: string;
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamsService: TeamsService
  ) {}

  ngOnInit() {
    //Aun no se porque se esta llenando
    // this.teamsService.getTeams().subscribe(
    //   teams => {
    //     console.log(teams);
    //     this.teams = teams;
    //   },
    //   err => console.log(err)
    // );
    
    this.route.params.forEach((params: Params) => {
      this.parametro = params['id'];
      console.log(this.parametro);
      console.log(params);
     });    
    
     if(this.parametro){
     for(let i=0; i<this.teams.length; i++){        
      if(this.teams[i].id === this.parametro){
        this.copiaEquipo.id = this.teams[i].id;
        this.copiaEquipo.nameShow = this.teams[i].nameShow;
        this.copiaEquipo.shieldBig = this.teams[i].shieldBig;
        this.copiaEquipo.añoFundacion = this.teams[i].añoFundacion;
        this.copiaEquipo.ciudad = this.teams[i].ciudad;
        this.copiaEquipo.entrenador = this.teams[i].entrenador;
        this.copiaEquipo.estadio = this.teams[i].estadio;
        this.copiaEquipo.fullName = this.teams[i].fullName;
        this.copiaEquipo.presidente = this.teams[i].presidente;
        this.copiaEquipo.pais = this.teams[i].pais;
        this.copiaEquipo.shield = this.teams[i].shield;
        
      }
      break;
    }
    }
  }
   
  busqueda(){
    
  }
}

