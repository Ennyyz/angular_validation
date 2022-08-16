import { Injectable } from '@angular/core';
import { Person } from './person';

const PEOPLE : Person[] = [
  {id: 1, name: 'Kobayashi', height: 177, weight: 65},
  {id: 2, name: 'Vu Xuan Dung', height: 165, weight: 62},
  {id: 3, name: 'Tran Ngoc Thang', height: 173, weight: 68},
];

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }
  // getAll() : Person[] {
  //   return [
  //     {name: 'Kobayashi', height: 177, weight: 65},
  //     {name: 'Vu Xuan Dung', height: 165, weight: 62},
  //     {name: 'Tran Ngoc Thang', height: 173, weight: 68},
  //   ];
  // }


  getAll() : Person[] {
    return PEOPLE.map(p => this.clone(p));
  }
  get(id: number) : Person {
    return this.clone(PEOPLE.find(p => p.id === id));
  }
  save(person: Person){
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);

  }

  private clone(object: any){
    return JSON.parse(JSON.stringify(object));
  }
}
