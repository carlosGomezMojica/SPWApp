import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn:'root'
})
export class AuthService {
  constructor(private http: HttpClient, private cookies:CookieService) {}

  login(credential:any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/dev/auth/login', credential);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }
}
