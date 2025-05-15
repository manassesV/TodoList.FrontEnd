import { Routes } from '@angular/router';
import { TodoTaskComponent} from './pages/todotask/todotask.component';

export const routes: Routes = [
  {path: '', redirectTo: 'todotask', pathMatch: 'full'},
  //{path: '**', redirectTo: 'home'},
  {path: 'todotask', component: TodoTaskComponent},

];
