import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen=signal<boolean>(false);


  toggle(){
    this.isMenuOpen.update(value=>!value);
  }
}
