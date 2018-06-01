import { AsyncValidatorFn, ValidationErrors } from "@angular/forms/src/directives/validators";
import { AbstractControl } from "@angular/forms/src/model";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { UserService } from "src/app/services/user.service";
import { User } from './user';


export class AsyncUserValidator {

  private  users: User[];
  constructor(private service: UserService) {
    this.users = this.service.getAllUsers();
  }


   userExists(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise( (resolve, reject) => {
      const name = control.value;
      if (this.checkUser(name)) {
        resolve(null);
      }
      resolve({'userDoesntExists': true});
    });
  }

  private  checkUser(name: string) {
    for (const user of this.users) {
      if (user.name === name) {
        return true;
      }
    }
    return false;
  }
}

