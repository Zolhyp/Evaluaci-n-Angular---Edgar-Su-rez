import { Component, OnInit } from '@angular/core';
import { TablaService} from '../../services/tabla.service';
import { Tabla } from '../../models/tabla';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  providers: [ TablaService ]
})
export class AgregarComponent implements OnInit {
  public user:any;
  public id: any;
  public tabla:Tabla;
  public status: string;
  constructor(
    private _tablaService: TablaService,
    private _router: Router
  ) {
    this.user={
      id:'',
      data:{             
        codigo: '',
        nombre: '',
        lugarNac: '',
        fechaNac: '',
        telefono: '',
        email: '',
        cargo: ''
      }
      
    }
  }
  	
  ngOnInit(): void {
    console.log(this.user)
  }

  onSubmit():void {
    this._tablaService.createData(this.user).subscribe(
      response =>{
        if(response.status == 'success'){
          this.status='success'
          this.tabla=response.tabla;
        }else
          this.status='error';
      },
      error =>{
        this.status='error'; 
      }
    )
    alert("Se ha realizado el segistro");
  }

}
