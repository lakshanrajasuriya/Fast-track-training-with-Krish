import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-largest-number',
  templateUrl: './largest-number.component.html',
  styleUrls: ['./largest-number.component.scss']
})
export class LargestNumberComponent implements OnInit {

  message: string = '';

  anagramForm = this.formBuilder.group({
    numbers: '',
    position: ''
  })

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    let numbers: number[] = this.anagramForm.value.numbers.split(",").map((number: any) => +number);
    let position = this.anagramForm.value.position;

    this.dataService.findLargeNumber({ numbers: numbers, position: position }).subscribe({
      next: (data: any) => {
        this.message = data + ' is the ' + position + ' largest number';
      },
      error: error => {
        console.log('Error: ', error)
      }
    })
  }

}
