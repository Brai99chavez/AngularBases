import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public heroName: string = "spiderman"
  public nombre: string = "peter parker";
  public edad: number = 45;
  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.nombre} - ${this.edad} `
  }

  changeHero(): void{
    this.heroName = 'Spiderman'

  }

  changeAge(): void{
    this.edad = 20
  }

}
