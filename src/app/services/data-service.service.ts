import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  response: any;
  base =""; 
  constructor(private httpClient: HttpClient) { 
  }
  
  // async getData(){
  //   this.httpClient.get(environment.apiUrl).subscribe(data=>{
  //     this.response = data;
  //     return this.response;
  //   })
  // }

  async getData(){
    this.response = this.httpClient.get(environment.apiUrl).toPromise();
      return this.response;
    }
  
async updateData(){
  let data;
  data ={
    'id': 2,
    'title' : "i"
  }
  let baseUrl = `${environment.apiDataUrl}/Train/update/1`;
 return this.httpClient.put(baseUrl, data).toPromise(); 
}
}
