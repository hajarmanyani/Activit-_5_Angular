import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AppErrorsComponent } from './app-errors/app-errors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { appHttpInterceptor } from './services/app-http.interceptor';
import { HttpInterceptorFn } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,AppErrorsComponent,HttpClientModule, RouterOutlet,NavbarComponent,RouterModule,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useValue: appHttpInterceptor,
      multi: true,
    },
  ]
})
export class AppComponent {
  title="emsi_angular-app"
}
