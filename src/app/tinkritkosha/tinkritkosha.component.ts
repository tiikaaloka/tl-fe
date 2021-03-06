import { FormControl } from '@angular/forms';
import { TinkritService } from './tinkrit.service';
import { Component, OnInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-tinkritkosha',
  templateUrl: './tinkritkosha.component.html',
  styleUrls: ['./tinkritkosha.component.scss'],
  providers: [ TinkritService]
})
export class TinkritkoshaComponent implements OnInit {

  public dhAtus = [];
  public dhAtu: FormControl;
  public editDhAtu = {Nvul: null};
  constructor(private service: TinkritService, private ref: ChangeDetectorRef) {
    this.dhAtu = new FormControl('');
   }

  ngOnInit(): void {
    this.service.getData().subscribe(response => {
      console.log(response);
      this.dhAtus = response;
    });
    this.ref.detectChanges();
  }

  onFetch(): void {
    if (this.dhAtu.value !== '') {
      const edit = this.dhAtu.value.substring(0, this.dhAtu.value.indexOf('-'));
      this.service.fetchData(edit).subscribe( response => {
        this.editDhAtu = response[0];
        this.ref.markForCheck();
      });
    }
  }

}

export const salt = 'WHiXOz-A';
