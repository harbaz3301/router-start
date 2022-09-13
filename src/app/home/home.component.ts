import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private authser: AuthService) { }

  ngOnInit() {
  }
  loadserver(id: number){
    this.router.navigate(['/servers', id],{queryParams:{allowedit: '1'}, fragment: 'loading' } );
  }
  onLogin(){
    this.authser.login();
  }
  onLogout(){
    this.authser.logout();
  }
}
