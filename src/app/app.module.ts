import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AlunoFormComponent } from './aluno-form.component';
import { AlunoService } from './aluno.service';

import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AlunoFormComponent,
    AlunoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
