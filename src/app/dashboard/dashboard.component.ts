import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchTerm;
  cards = [];
  defaultImage = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';

  constructor(private _dataService : DataService) { }

  ngOnInit(): void {
    this._dataService.getImages().subscribe((data)=>{
      this.cards = data.data;
    })


  }

  
}
