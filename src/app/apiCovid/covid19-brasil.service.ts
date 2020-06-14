import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19BrasilService {

 private linkApiBrasil = "https://covid19-brazil-api.now.sh/api/report/v1/brazil"
 constructor(public http:HttpClient) { }
public getCovidBrasil(){
 let covidBrasil = this.linkApiBrasil
 return this.http.get(covidBrasil);
}
}
