
Inicio
  |
  v
AppComponent.ngOnInit()
  |
  v
getEmployeeList()
  |
  v
Mostrar lista de empleados
  |
  v
-----------------------------------------
|                                       |
| Botón "Agregar Empleado"              | Botón "Editar" en la tabla
|                                       |
v                                       v
openAddEditEmpForm()                    openEditForm(data)
  |                                       |
  v                                       v
Abrir EmpAddEditComponent en diálogo     Abrir EmpAddEditComponent en diálogo con datos
  |                                       |
  v                                       v
EmpAddEditComponent.ngOnInit()           EmpAddEditComponent.ngOnInit()
  |                                       |
  v                                       v
Inicializar empForm                      Inicializar empForm con datos
  |                                       |
  v                                       v
----------------------------------------- -----------------------------------------
|                                       |                                       |
| Rellenar formulario                   | Rellenar formulario                   |
|                                       |                                       |
v                                       v
Botón "Guardar"                         Botón "Guardar"
  |                                       |
  v                                       v
onFormSubmit()                          onFormSubmit()
  |                                       |
  v                                       v
empForm.valid?                          empForm.valid?
  |                                       |
  v                                       v
Sí                                      Sí
  |                                       |
  v                                       v
data existe?                            data existe?
  |                                       |
  v                                       v
No                                      Sí
  |                                       |
  v                                       v
addEmployee(empForm.value)              updateEmployee(data.id, empForm.value)
  |                                       |
  v                                       v
Suscripción exitosa?                    Suscripción exitosa?
  |                                       |
  v                                       v
Sí                                      Sí
  |                                       |
  v                                       v
openSnackBar('Employee added')          openSnackBar('Employee updated')
  |                                       |
  v                                       v
dialogRef.close(true)                   dialogRef.close(true)
  |                                       |
  v                                       v
getEmployeeList()                       getEmployeeList()
  |                                       |
  v                                       v
Actualizar lista de empleados           Actualizar lista de empleados
  |
  v
Fin



### Descripción del Diagrama de Flujo

1. **Inicio**: La aplicación se inicia y se llama a `ngOnInit()` en `AppComponent`.
2. **Obtener Lista de Empleados**: `getEmployeeList()` se llama para obtener y mostrar la lista de empleados.
3. **Agregar o Editar Empleado**:
   - **Agregar Empleado**:
     - Se hace clic en el botón "Agregar Empleado".
     - Se llama a `openAddEditEmpForm()`, que abre `EmpAddEditComponent` en un cuadro de diálogo.
     - `EmpAddEditComponent` inicializa `empForm`.
     - El usuario rellena el formulario y hace clic en "Guardar".
     - `onFormSubmit()` se llama y verifica si `empForm` es válido.
     - Como `data` no existe, se llama a `addEmployee(empForm.value)`.
     - Si la suscripción es exitosa, se muestra una notificación y se cierra el cuadro de diálogo.
     - Se llama a `getEmployeeList()` para actualizar la lista de empleados.
   - **Editar Empleado**:
     - Se hace clic en el botón "Editar" en la tabla.
     - Se llama a `openEditForm(data)`, que abre `EmpAddEditComponent` en un cuadro de diálogo con los datos del empleado.
     - `EmpAddEditComponent` inicializa `empForm` con los datos del empleado.
     - El usuario edita el formulario y hace clic en "Guardar".
     - `onFormSubmit()` se llama y verifica si `empForm` es válido.
     - Como `data` existe, se llama a `updateEmployee(data.id, empForm.value)`.
     - Si la suscripción es exitosa, se muestra una notificación y se cierra el cuadro de diálogo.
     - Se llama a `getEmployeeList()` para actualizar la lista de empleados.

4. **Fin**: La lista de empleados se actualiza y se muestra en la interfaz de usuario.

Este diagrama de flujo proporciona una visión clara del proceso de agregar y editar empleados en la aplicación.