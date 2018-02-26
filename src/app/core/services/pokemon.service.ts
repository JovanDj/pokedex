import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PokemonService {

  url: string = environment.url + '/pokemon';

  constructor(private http: HttpClient) {
  }

  getPokemon(limit: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('limit', limit);

    return this.http.get(this.url, {params: params});
  }

}
