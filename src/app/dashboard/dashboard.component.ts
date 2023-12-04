import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../services/app-state.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public appState: AppStateService) { }
  totalCheckedProducts(){
    let checkedProducts= this.appState.productsState.products.filter((p:any)=>p.checked==true).length;
    return checkedProducts;
  }
}
