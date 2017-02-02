import { Task } from './task';

export class Category {
  constructor(
    public id: number,
    public completed: boolean,
    public name: string,
    public description: string,
    public tasks: Task[]
  ) {}
}
