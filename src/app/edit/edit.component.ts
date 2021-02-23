import { EditService } from './edit.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [ EditService]
})
export class EditComponent implements OnInit {
  public textAreaForm: FormGroup;
  public verse: FormControl;
  public sarga: FormControl;
  public kanda: FormControl;
  public grantha: FormControl;
  public shlokaList = [];
  public sargaList = [];
  public kandaList = [];
  public granthaList = ['ramayana', 'bhagavata', 'mahabharata'];

  public RamkandaList = [];

  public jayaparvaList = [];

  public bhAgaskandhaList = [];

  constructor(private fb: FormBuilder, private editService: EditService) {
    this.textAreaForm = fb.group({
      shloka: '',
      kataka: '',
      bhUShaNa: '',
      dharmaakUtam: '',
      tanishlokii: '',
      shiromaNi: '',
      tilaka: '',
      anvitaarthaprakAshikaa: '',
      vchakravarti: '',
      sridhara: '',
      vijayadhvaja: '',
      vIrarAghavAchArya: '',
      nIlakaNTha: ''
    });
    this.verse = new FormControl('');
    this.sarga = new FormControl('');
    this.kanda = new FormControl('');
    this.grantha = new FormControl('ramayana');
    for (let i = 1; i < 151; i++) {
      this.shlokaList.push(i);
      this.sargaList.push(i);
    }
    for (let i = 1; i < 8; i++ ) {
      this.RamkandaList.push(i);
    }
    for (let i = 1; i < 19; i++ ) {
      this.jayaparvaList.push(i);
    }
    for (let i = 1; i < 13; i++ ) {
      this.bhAgaskandhaList.push(i);
    }
    this.kandaList = this.RamkandaList;
   }

  ngOnInit(): void {
  }

  onChange(grantha): void {
    switch (grantha) {
      case 'ramayana': this.kandaList = this.RamkandaList; break;
      case 'bhagavata': this.kandaList = this.bhAgaskandhaList; break;
      case 'mahabharata': this.kandaList = this.jayaparvaList; break;
    }
  }

  onSubmit(): void {
    if (this.grantha.value === 'ramayana') {
      const payload = {
        shloka: this.textAreaForm.get('shloka').value,
        grantha: this.grantha.value,
        num: this.kanda.value + '.' + this.sarga.value + '.' + this.verse.value,
        kataka: this.textAreaForm.get('kataka').value,
        bhUShaNa: this.textAreaForm.get('bhUShaNa').value,
        dharmaakUtam: this.textAreaForm.get('dharmaakUtam').value,
        tanishlokii: this.textAreaForm.get('tanishlokii').value,
        shiromaNi: this.textAreaForm.get('shiromaNi').value,
        tilaka: this.textAreaForm.get('tilaka').value
      };
    } else if (this.grantha.value === 'mahabharata') {
      const payload = {
        shloka: this.textAreaForm.get('shloka').value,
        grantha: this.grantha.value,
        num: this.kanda.value + '.' + this.sarga.value + '.' + this.verse.value,
        anvitaarthaprakAshikaa: this.textAreaForm.get('anvitaarthaprakAshikaa').value,
        vchakravarti: this.textAreaForm.get('vchakravarti').value,
        vijayadhvaja: this.textAreaForm.get('vijayadhvaja').value,
        vIrarAghavAchArya: this.textAreaForm.get('vIrarAghavAchArya').value,
        sridhara: this.textAreaForm.get('sridhara').value
      };
    } else if (this.grantha.value === 'bhagavata') {
      const payload = {
        shloka: this.textAreaForm.get('shloka').value,
        grantha: this.grantha.value,
        num: this.kanda.value + '.' + this.sarga.value + '.' + this.verse.value,
        nIlakaNTha: this.textAreaForm.get('nIlakaNTha').value
    };
    // this.EditService.addShloka(payload).subscribe(resp => console.log(resp);)
      this.editService.postShloka(payload).subscribe( resp => console.log(resp));
  }
}
}
