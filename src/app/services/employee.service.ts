import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {


  private apiUrl = 'https://zippy-soft-heaven.glitch.me/employees';

  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/${id}`);
  }
  // constructor(private _http: HttpClient) {}

  // addEmployee(data: any): Observable<any> {
  //   return this._http.post('http://localhost:3000/employees', data);
  // }

  // updateEmployee(id: number, data: any): Observable<any> {
  //   return this._http.put(`http://localhost:3000/employees/${id}`, data);
  // }

  // getEmployeeList(): Observable<any> {
  //   return this._http.get('http://localhost:3000/employees');
  // }

  // deleteEmployee(id: number): Observable<any> {
  //   return this._http.delete(`http://localhost:3000/employees/${id}`);
  // }
}


// este servicio se encarga de realizar las peticiones HTTP a la API REST