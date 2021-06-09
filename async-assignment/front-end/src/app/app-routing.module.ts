import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramComponent } from './anagram/anagram.component';
import { LargestNumberComponent } from './largest-number/largest-number.component';
import { LetterRepititionComponent } from './letter-repitition/letter-repitition.component';

const routes: Routes = [
  { path: 'anagram', component: AnagramComponent },
  { path: 'largest-number', component: LargestNumberComponent },
  { path: 'letter-repitition', component: LetterRepititionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
