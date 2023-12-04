import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-app-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-errors.component.html',
  styleUrl: './app-errors.component.css'
})
export class AppErrorsComponent {
  constructor(public appState: AppStateService) { }

}
