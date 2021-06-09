import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-letter-repitition',
  templateUrl: './letter-repitition.component.html',
  styleUrls: ['./letter-repitition.component.scss']
})
export class LetterRepititionComponent implements OnInit {
  letters = [];
  message: string = '';

  anagramForm = this.formBuilder.group({
    sentance: ''
  })

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.anagramForm.value.text)

    let sentance = this.anagramForm.value.sentance;

    this.message = 'fetching data..';

    this.dataService.letterOccurance({ sentance }).subscribe({
      next: (data: any) => {
        this.letters = data;
        this.message = '';
      },
      error: error => {
        console.log('Error: ', error)
        this.message = '';
      }
    }
    )
  }

  clearText(): void {
    this.letters = []; // To clear table
    this.message = '';
  }
}
