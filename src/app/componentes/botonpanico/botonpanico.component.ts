import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-botonpanico',
  templateUrl: './botonpanico.component.html',
  styleUrls: ['./botonpanico.component.css']
})
export class BotonpanicoComponent implements OnInit {

  enviado = false;
  constructor(private router: Router) { }

  cerrar() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

  ngOnInit(): void {
  }

}
