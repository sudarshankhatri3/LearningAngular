import { Component,signal } from '@angular/core';
import { Footer } from '../footer/footer';
import {RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isOpenMenu=signal<boolean>(false);


  toggle(){
    this.isOpenMenu.update(value=>!value);
  }
}
