import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppStateService } from '../services/app-state.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule, RouterOutlet,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [AppStateService,LoadingService,AuthService]
})
export class NavbarComponent {
  title = 'emsi_angular-app';
  //public isLoading: boolean = false;

  actions: Array<any> = [
    {title: "Home", "route": "/admin/home",icon: "house"},
    {title: "Products", "route": "/admin/products",icon: "search"},
    {title: "New Product", "route": "/admin/newProduct",icon: "safe"}

  ];
  currentAction: any;
  constructor(private authService:AuthService,public appState: AppStateService,public loadingService: LoadingService,private router: Router) {
    /*this.loadingService.isLoading$.subscribe({
      next: (value) => {
        this.isLoading = value;
      }
    }
    )*/
  }
  setCurrentAction(action: any) {
    this.currentAction = action;
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }

  handleLogin() {
    this.router.navigateByUrl("/login")
  }
}
