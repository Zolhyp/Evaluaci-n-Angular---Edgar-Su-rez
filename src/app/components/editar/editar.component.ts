import { Component, OnInit } from '@angular/core';
import { TablaService} from '../../services/tabla.service';
import { Tabla } from '../../models/tabla';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [ TablaService ]
})
export class EditarComponent implements OnInit {
  public user:any;
  public id: any;
  public tabla:Tabla;
  public row: Tabla;
  public status: string;
  constructor(    
    public _tablaService: TablaService,
    public dialog: MatDialog
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
  }

  buscar():void{
    this._tablaService.readData(this.user.id).subscribe(
      response =>{      
        this.user=response;
      },
      error =>{
        console.log(error);
      }
    )    
  }

  onSubmit():void {
    this._tablaService.updateData(this.user).subscribe(
      response =>{
        console.log(response);
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
    
    alert("Se ha realizado la actualización");
  }

}
