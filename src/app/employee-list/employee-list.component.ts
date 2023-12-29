import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: any = {}; //Para armazenar os dados de um novo funcionário

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getEmployee().subscribe((data: any) => {
        this.employees = data._embedded.employeeList;
      }
    );
  }

  addEmployee(){
    this.employeeService.createEmployee(this.newEmployee).subscribe(() =>{
      this.getEmployee(); //Recarregar a lista de funcionários àpos a adição
      this.newEmployee = {}; //Limpar os dados do novo funcionário
    })
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employees).subscribe(() => {
      this.getEmployee(); //Recarregar a lista de funcionários àpos a atualização
    })
  }

  deleteEmployee(employeeId: number){
    this.employeeService.deleteEmployee(employeeId).subscribe(() => {
      this.getEmployee(); //Recarregar a lista de funcionários àpos a exclusão
    })
  }
}

