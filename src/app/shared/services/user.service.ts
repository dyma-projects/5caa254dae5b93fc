import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }

  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  addUser(user: string): void {

    console.log(this.users);
    
    const users = this.users.value.slice();
    users.push(user);
    this.users.next(users);

  }

}
