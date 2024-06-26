import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: ['mudouValor'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() {}

  incrementa() {
    this.valor++;
    this.mudouValor.emit({
      novoValor: this.valor,
    });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({
      novoValor: this.valor,
    });
  }

  ngOnInit(): void {}
}
