import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs';
import { Todotask, ApiResponse } from '../models/todotask'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TodotaskService{
   
   private readonly url: string = 'https://localhost:7219/api/v1/todotask';

   // injetando o HttpClient
   constructor(private httpClient: HttpClient){}

   //Headers
   httpOptions ={
    headers: new HttpHeaders({'Content-Type': 'application/json' })
   }

   //getAll
   findAll(): Observable<ApiResponse>{
      return this.httpClient.get<ApiResponse>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
   }

   findById(id: number): Observable<Todotask>{
     return this.httpClient.get<Todotask>(this.url + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
   }

   save(todotask: Todotask): Observable<Todotask>{
      return this.httpClient.post<Todotask>(this.url, JSON.stringify(todotask), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
   }

   update(todotask: Todotask):Observable<Todotask>{
     return this.httpClient.put<Todotask>(this.url + '/' + todotask.id, JSON.stringify(todotask), this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.handleError)
     )
   }

   delete(id: number): Observable<Todotask>{
    return this.httpClient.delete<Todotask>(this.url + '/' + id)
       .pipe(
         retry(2),
         catchError(this.handleError)
       )
  }


   handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
   }

}
