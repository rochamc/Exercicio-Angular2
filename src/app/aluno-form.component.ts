import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Aluno }    from './aluno';

@Component({
  selector: 'aluno-form',
  templateUrl: './aluno-form.component.html'
})
export class AlunoFormComponent {

//Cursos
  cursos = [
	 'Infra-estrutura Computacional'
	,'Engenharia de Software'
	,'Conceitos de Projeto das Interfaces Homem-computador'
	,'Sistemas de Informação e Data Warehouse'
	,'Engenharia de Requisitos'
	,'Qualidade de Software'
	,'Análise e Projeto Orientados a Objetos'
	,'Processos de Software'
	,'Validação de Sistemas de Software'
	,'Tecnologias de Implementação de Sistemas de Software'
	,'Arquitetura de Software'
	,'Aplicações Corporativas'
	,'Gerência de Projetos de Desenvolvimento e Aquisição de Software'
	,'Projeto Integrado'
  ]
//Fim dos cursos

  model = new Aluno(18, 'Teste', this.cursos[0], 'teste@teste.com.br');

  submitted = false;

  onSubmit(form: NgForm) { 
    this.submitted = true; 
    console.log(form.value);
    console.log('Nome do aluno: ' +form.value.nome);
    console.log('Curso do aluno: ' +form.value.curso);
    console.log('Email do aluno:' + form.value.email);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newAluno() {
    this.model = new Aluno(42, '', '', '');
  }

  skyDog(): Aluno {
    let aln =  new Aluno(42, 'Teste',
                           'Arquitetura de Software',
                           'teste@gmail.com');
    console.log('nome do aluno: ' + aln.nome); // "My hero is called SkyDog"
    return aln;
  }

}
