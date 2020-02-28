import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private router: Router,
              private webApiService: WebApiService) { }
  usuarios: Usuario[];

  ngOnInit() {}

}
