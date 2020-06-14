import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

 // private linkApi ="https://api.covid19api.com/summary"
 private linkApi = "https://covid19-brazil-api.now.sh/api/report/v1"
 constructor(public http:HttpClient) { }
public getCovid(){
 let covid = this.linkApi
 return this.http.get(covid)
}

}
