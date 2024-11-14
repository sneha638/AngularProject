import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // This ensures the service is available throughout the app
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Method to fetch data from a static JSON file
  getData(): Observable<any> {
    return this.http.get('assets/data.json');  // Path to the static JSON file
  }
}
