import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items: any;
  editItems: any = {
    name: ''
  };

  constructor(private conexion: ConexionService) {

    this.conexion.getListaItem().subscribe(item => {
      this.items = item;
    });
   }

  ngOnInit() {
  }

  delete(item){
    this.conexion.deleteItem(item);
  }

  edit(item) {
    this.editItems = item;
  }

  updateItem() {
    this.conexion.updateItem(this.editItems);
  }

}
