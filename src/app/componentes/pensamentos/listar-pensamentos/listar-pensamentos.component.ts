import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent {
  listaPensamento = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },

    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti excepturi quas nobis neque, libero quam saepe cupiditate repellendus quasi, laboriosam dolores error nesciunt perspiciatis sunt? Similique corporis debitis beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni accusantium repudiandae laudantium, dignissimos excepturi eum ipsa quae assumenda doloribus dolorum distinctio ipsam deleniti nemo minus nihil? Nemo obcaecati dicta earum!',
      autoria: 'Lorem',
      modelo: 'modelo2',
    },
  ];
}
