import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'
import { TodotaskService } from '../../services/todotask.service.spec';
import { Todotask, ApiResponse} from '../../models/todotask';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-inventory',
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './todotask.component.html',
  styleUrl: './todotask.component.css',
})
export class TodoTaskComponent {

   currentPage = 1;
   itemsPerPage = 5;

   todoTask = {} as Todotask;
   todotasks: Todotask[] = [];


   constructor(private todoservice: TodotaskService){}

   ngOnInit(){
     this.getAll();
   }


   getAll(){
     this.todoservice.findAll().subscribe((apiResponse: ApiResponse) =>{

      if(apiResponse.isSuccess){

        this.todotasks = apiResponse.value.map(task => ({
          ...task,
          dueDate: task.dueDate ? new Date(task.dueDate) : null
        }));
        
      }else{
        console.log("Error findAll")
      }
     })
   }

   
   save(form: NgForm){
    console.log(this.todoTask);

    if(this.todoTask.id !== undefined){
      this.todoservice.update(this.todoTask).subscribe(() =>{
        this.cleanForm(form);
      })
    }else{
      this.todoservice.save(this.todoTask).subscribe(() =>{
        this.cleanForm(form);
      })
    }
 }

 edit(todoTask: Todotask) {
  this.todoTask = {
    ...todoTask,
    dueDate: todoTask.dueDate ? new Date(todoTask.dueDate) : null
  };
}

deleteTask(todoTask: Todotask){
  this.todoservice.delete(todoTask.id).subscribe(() =>{
    this.getAll();
  })
}

toggleStatus(todoTask: Todotask) {
  todoTask.status = !todoTask.status;
  this.todoservice.update(todoTask).subscribe(() =>{
    this.getAll();
  })
}

cleanForm(form: NgForm) {
  form.resetForm();
  this.todoTask = {} as Todotask;
  this.getAll();
}

  get dueDateStr(): string | null {
    return this.todoTask.dueDate
      ? this.todoTask.dueDate.toISOString().slice(0, 16)
      : null;
  }
  
  set dueDateStr(value: string | null) {
    this.todoTask.dueDate = value ? new Date(value) : null;
  }

}
