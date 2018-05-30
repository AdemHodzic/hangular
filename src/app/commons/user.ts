export class User {
  name: string;
  highscore: number;
  tries: number;

  constructor(name: string, highscore?: number, tries?: number) {
    this.name = name;
    this.highscore = highscore;
    this.tries = tries;
  }
}
