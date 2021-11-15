import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarousalComponent } from './components/carousal/carousal.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carousal', component: CarousalComponent },
  { path: 'table', component: TableComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'input', component: InputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
