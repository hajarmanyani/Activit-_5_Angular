import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppErrorsComponent } from '../app-errors/app-errors.component';
@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [CommonModule,NavbarComponent,DashboardComponent,AppErrorsComponent, RouterOutlet],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

}
