import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Antman'];
  public deletedHero?: string;

  borrarUltimoHeroe(): void{
    this.deletedHero = this.heroes.pop();
  }

}
