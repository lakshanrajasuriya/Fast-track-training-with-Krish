import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {
  message: string = '';

  anagramForm = this.formBuilder.group({
    text1: '',
    text2: ''
  })

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    let text1 = this.anagramForm.value.text1;
    let text2 = this.anagramForm.value.text2;

    this.message = 'fetching data..';

    this.dataService.checkAnagram({ text1, text2 }).subscribe({
      next: (data: any) => {
        this.message = data;
      },
      error: error => {
        console.log('Error: ', error)
      }
    }
    )
  }

  clearText(): void {
    this.message = '';
  }
}
