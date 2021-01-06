import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ramayana',
  templateUrl: './ramayana.component.html',
  styleUrls: ['./ramayana.component.scss'],
  providers: [ DataService]
})
export class RamayanaComponent implements OnInit {

  public data: DataService;

  public grantha = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe( response => {
      response.forEach(resp => {
        this.grantha.push({
          num: resp.num,
          shloka: resp.shloka,
          tiika: resp.tiika
        });
      });
    });
    console.log(this.grantha);
  }
}
