export class User {
  name: string;
  password: string;
  highscore = 0;
  tries = 0;

  constructor(name: string, password: string, highscore = 0, tries = 0) {
    this.name = name;
    this.password = password;
    this.highscore = highscore;
    this.tries = tries;
  }
}
