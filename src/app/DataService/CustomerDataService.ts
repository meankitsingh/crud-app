import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/Models/Customer'
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';
@Injectable()
export class CustomerDataService {
  customers: Observable<Customer[]>;
  newcustomer: Customer;
  constructor(private http: HttpClient) {

  }

  getCustomer() {
    return this.http.get<Customer[]>(ROOT_URL + 'Customers');
  }
  AddCustomer(cust: Customer) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: cust.firstname, Lname: cust.lastname, Email: cust.email, gender: cust.gender
    }
    console.log(ROOT_URL);

    return this.http.post<Customer>(ROOT_URL + 'Customers', body, { headers });

  }

  ///
  EditCustomer(cust: Customer) {
    const params = new HttpParams().set('ID', cust.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: cust.firstname, Lname: cust.lastname, Email: cust.email, ID: cust.id
      , gender: cust.gender
    }
    return this.http.put<Customer>(ROOT_URL + 'Customers/' + cust.id, body, { headers, params })

  }
  DeleteCustomer(cust: Customer) {
    const params = new HttpParams().set('ID', cust.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: cust.firstname, Lname: cust.lastname, Email: cust.email, ID: cust.id
    }
    return this.http.delete<Customer>(ROOT_URL + '/Customers/' + cust.id)

  }


}




