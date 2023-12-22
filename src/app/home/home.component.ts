import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data: any[] = [];

  constructor(private apiService:ApiService) {};

  ngOnInit(): void {
    this.fillData()
  }

  fillData(){
     this.apiService.getProducts().subscribe( data => {
      this.data = data.products;
      //console.log("misdatos: " + this.data);
     });
  }

}
