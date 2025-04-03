import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // se definen las columnas que se mostrarán en la tabla
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  // se obtienen las referencias a los elementos de paginación y ordenamiento de la tabla
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // en el constructor se inyectan los servicios necesarios y la ventana modal
  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService,
    private _http: HttpClient  // Añadida esta linea como solucion en glitch
  ) { }


  // Añade esta propiedad al componente
  apiData: any = null;
  apiError: any = null;
  isLoading: boolean = false;

  // Añade este método
  testApiConnection() {
    this.isLoading = true;
    this.apiData = null;
    this.apiError = null;

    this._http.get('https://zippy-soft-heaven.glitch.me/employees')
      .subscribe({
        next: (data) => {
          console.log('API TEST - Data received:', data);
          this.apiData = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('API TEST - Error:', err);
          this.apiError = err;
          this.isLoading = false;
        }
      });
  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  // este metodo se encarga de abrir el formulario (sin argumento) para agregar un nuevo empleado
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  // este metodo se encarga de obtener la lista de empleados y lo muestra en la tabla
  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  // se abre el formulario de edición de empleado y la data del empleado seleccionado 
  // se pasa como argumento (se le pasa row que es el objeto del empleado seleccionado)
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
}
