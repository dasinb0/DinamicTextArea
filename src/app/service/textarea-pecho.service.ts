import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextareaPechoService {

  constructor(private http: HttpClient) { }

  getDataForChansey() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/chansey');
  }

  getDataForJigglyPuff() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
  }

  getDataFromSpecies(speciesUrl: string) {
    return this.http.get(speciesUrl);
  }
}
