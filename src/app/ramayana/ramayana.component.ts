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

  // public grantha = [];
  // public isEdited = false;
  // public shlokasEdited = [];
     public dhAtus = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.getData().subscribe( response => {
    //   response.forEach(resp => {
    //     this.grantha.push({
    //       num: resp.num,
    //       shloka: resp.shloka,
    //       tiika: resp.tiika
    //     });
    //   });
    // });
    this.dataService.getData().subscribe(response => {
      console.log(response);
      this.dhAtus = response;
    });

  }

  // onShlokaChange = (shloka, num)  => {
  //   this.shlokasEdited.push(num);
  //   this.isEdited = true;
  // }

  // onTiikaChange = (shloka, num) => {
  //   this.shlokasEdited.push(num);
  //   this.isEdited = true;
  // }

  // save = () => {
  //   const payload = [];
  //   this.shlokasEdited.forEach((shloka) => {
  //     payload.push(this.grantha.find(shloka));
  //   });
  //   this.data.save(payload);
  //   this.isEdited = false;
  // }
}
