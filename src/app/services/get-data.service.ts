import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  
  getToken(userDetails){
    return this.http.post("https://reqres.in/api/login", userDetails);
  }

  getSittingLayoutData(){
    return this.http.get("./assets/part3_data.json");
  }

  getLineChartData(){
    return this.http.get("./assets/part2_data.json");
  }
}
