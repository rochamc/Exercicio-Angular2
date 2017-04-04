import { Component } from '@angular/core';
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Aluno } from './aluno';

@Component({
  selector: 'aluno-lista',
  templateUrl: './aluno-lista.component.html'
})

@Injectable()
export class AlunoService {

public alunos: Aluno[];

private alunoUrl = 'assets/alunos.json';
  constructor (private http: Http) {}
  getAlunos(): Aluno[] {
    var a = this.http.get(this.alunoUrl)
                    .map(res => res.json())
    a.subscribe( res => this.alunos = res);
    return this.alunos;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}