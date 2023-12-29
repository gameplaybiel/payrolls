import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get(this.apiUrl + '/employees');
  }

  createEmployee(employee: any): Observable<any>{
    return this.http.post(this.apiUrl + '/employees', employee);
  }

  updateEmployee(employee: any): Observable<any>{
    const url = `${this.apiUrl}/employees/${employee.id}`;
    return this.http.put(url, employee);
  }

  deleteEmployee(employeeId: number): Observable<any>{
    const url = `${this.apiUrl}/employees/${employeeId}`;
    return this.http.delete(url);
  }
}
