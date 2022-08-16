import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
  @Input() person!: Person;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    console.log('~ person of detal', this.person);
  }
  gotoPeoplesList() {}
  savePersonDetails() {
    this.peopleService.save(this.person);
  }
}
