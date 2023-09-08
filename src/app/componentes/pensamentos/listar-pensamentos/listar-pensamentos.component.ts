import { Component } from '@angular/core';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent {
  listaPensamento: Pensamento[] = [];
}
