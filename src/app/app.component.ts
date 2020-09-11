import { Component, OnInit } from '@angular/core';
import { GetDataService } from './services/get-data.service'
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UITask';
  goldData: Array<any> = [];
  silverData: Array<any> = [];
  bronzeData: Array<any> = [];

  constructor(private _getDataService: GetDataService) { }

  ngOnInit() {
    this._getDataService.getData().subscribe(res => {

      if (res) {
        this.goldData = res['result'].layouts.filter(data => {
          return (data.name.toLowerCase()) == 'gold' && data.price == "100.00"
        });

        let gStart = parseInt(this.goldData[0]?.slots[0].y_cord);
        let gEnd = parseInt(this.goldData[0]?.slots[this.goldData[0]?.slots.length - 1].y_cord);
        for(let i = gStart-1; i<= gEnd; i++){
          if(this.goldData[0]?.slots[i].y_cord != i){
            this.goldData[0]?.slots.splice(i, 0, {y_cord: i+1, empty: true})
          }
        }

        this.silverData = res['result'].layouts.filter(data => {
          return (data.name.toLowerCase()) == 'silver' && data.price == "60.00"
        });

        let sStart = parseInt(this.silverData[0]?.slots[0].y_cord);
        let sEnd = parseInt(this.silverData[0]?.slots[this.silverData[0]?.slots.length - 1].y_cord);
        for(let i = sStart-1; i<= sEnd; i++){
          if(this.silverData[0]?.slots[i].y_cord != i){
            this.silverData[0]?.slots.splice(i, 0, {y_cord: i+1, empty: true})
          }
        }

        this.bronzeData = res['result'].layouts.filter(data => {
          return (data.name.toLowerCase()) == 'bronze' && data.price == "40.00"
        });

        let bStart = parseInt(this.bronzeData[0]?.slots[0].y_cord);
        let bEnd = parseInt(this.bronzeData[0]?.slots[this.bronzeData[0]?.slots.length - 1].y_cord);
        for(let i = bStart-1; i<= bEnd; i++){
          if(this.bronzeData[0]?.slots[i].y_cord != i){
            this.bronzeData[0]?.slots.splice(i, 0, {y_cord: i+1, empty: true})
          }
        }
      }

    }); 
  }
}
