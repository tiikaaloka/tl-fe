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

  constructor(private fb: FormBuilder, private editService: EditService) {
    this.textAreaForm = fb.group({
      shloka: '',
      tiika: ''
    });
    this.verse = new FormControl('');
    this.sarga = new FormControl('');
    this.kanda = new FormControl('');
    this.grantha = new FormControl('');
    for (let i = 0; i < 151; i++) {
      this.shlokaList.push(i);
      this.sargaList.push(i);
      this.kandaList.push(i);
    }
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const payload = {
      shloka: this.textAreaForm.get('shloka').value ,
      tiika: this.textAreaForm.get('tiika').value,
      grantha: this.grantha.value,
      num: this.kanda.value + '.' + this.sarga.value + '.' + this.verse.value
    };
    // this.EditService.addShloka(payload).subscribe(resp => console.log(resp);)
    this.editService.postShloka(payload).subscribe( resp => console.log(resp));
  }
}
