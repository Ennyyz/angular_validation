import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peoples: Person[] = [];
  selectedPerson!: Person;

  constructor(private peopleService: PeopleService) {
    this.peoples = peopleService.getAll();
  }

  ngOnInit(): void {
    console.log('selectedPerson', this.selectedPerson);

    this.peoples = [
      {id: 1, name: 'Kobayashi', height: 177, weight: 65},
      {id: 2,name: 'Vu Xuan Dung', height: 165, weight: 62},
      {id: 3,name: 'Tran Ngoc Thang', height: 173, weight: 68},
    ]
  }

  selectPerson(person: Person){
    console.log('person', person);

    this.selectedPerson = person;
  }

}
