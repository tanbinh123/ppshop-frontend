import {Injectable} from '@angular/core';
import {Product} from '../product/model/product.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../user/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private BASE_URL = environment.SERVER_URL;

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    const url = `${this.BASE_URL}/product`;
    return this.httpClient.get<Product[]>(url);
  }

  login(user: User): Observable<any> {
    const url = `${this.BASE_URL}/user/login`;
    const username = user.username;
    const password = user.password;
    return this.httpClient.post<any>(url, {username, password});
  }

  signUp(user: User): Observable<User> {
    const url = `${this.BASE_URL}/user/signup`;
    const username = user.username;
    const password = user.password;
    return this.httpClient.post<User>(url, {username, password});
  }

}
