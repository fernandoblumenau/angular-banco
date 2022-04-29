import { Component, Output, EventEmitter } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent  {

  @Output() aoTransferir = new EventEmitter<any>();

  valor:number;
  destino:number;
  constructor() { }


  transferir(){
    console.log("transferencia solicitada");
    console.log("valor:", this.valor);
    console.log("Destino:", this.destino);

    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();

  }

  limparCampos(){
    this.valor=0;
    this.destino=0;
  }


}
