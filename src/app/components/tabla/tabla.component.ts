import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tabla } from '../../models/tabla';
import { TablaService} from '../../services/tabla.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [ TablaService ]
})
export class TablaComponent implements OnInit {
  public filas: Tabla[];
  public identificador: string;
  public Editador:EditarComponent;
  @Output() childToParent=new EventEmitter<String>();
  
  constructor(
    private _tablaService: TablaService,
    public dialog: MatDialog
  ) {
    
  }

  sendToParent(identificador){
    this.childToParent.emit(identificador);
  }

  ngOnInit(): void {
    this._tablaService.readAllData().subscribe(
      response =>{
        console.log(response);        
        this.filas=response;
      },
      error =>{
        console.log(error);
      }
    )
  }

  eliminarTodo(){
    this._tablaService.deleteAllData().subscribe(
      response =>{
        console.log(response);        
        this.filas=response;
      },
      error =>{
        console.log(error);
      }
    )
  }

  eliminar(id:string){
    if (confirm('¿Estás seguro de eliminar el registro con ID: '+id)) {
      this._tablaService.deleteData(id).subscribe(
        response =>{
          console.log(response);
        },
        error =>{
          console.log(error);
        }
      )
      alert('Se ha borrado el registro con el ID: '+id);
      location.reload();
    }
  }

}