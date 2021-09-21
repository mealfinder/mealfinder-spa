export class Meal {
  constructor(
    public id?: string,
    public name?: string,
    public category?: string,
    public area?: string,
    public instructions?: string,
    public thumb?: string,
    public youtube?: string,
    public source?: string,
  ) { }
  
  static fromJson(jsonData: any): Meal {
    return Object.assign(new Meal(), jsonData);
  }
}