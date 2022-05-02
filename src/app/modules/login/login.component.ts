import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  codigoUsuario!: string;
  password!: string;

  constructor(private authService:AuthService, private router:Router) { }

  login() {
    const credential = {codigoUsuario:this.codigoUsuario,password: this.password};
    this.authService.login(credential).subscribe(data => {
      this.authService.setToken(data.body.token.access_token);
      this.router.navigateByUrl('/usuario');
    })
  }

}
