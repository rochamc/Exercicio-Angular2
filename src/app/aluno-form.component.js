"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var aluno_1 = require("./aluno");
var AlunoFormComponent = (function () {
    function AlunoFormComponent() {
        //Cursos
        this.cursos = [
            'Infra-estrutura Computacional',
            'Engenharia de Software',
            'Conceitos de Projeto das Interfaces Homem-computador',
            'Sistemas de Informação e Data Warehouse',
            'Engenharia de Requisitos',
            'Qualidade de Software',
            'Análise e Projeto Orientados a Objetos',
            'Processos de Software',
            'Validação de Sistemas de Software',
            'Tecnologias de Implementação de Sistemas de Software',
            'Arquitetura de Software',
            'Aplicações Corporativas',
            'Gerência de Projetos de Desenvolvimento e Aquisição de Software',
            'Projeto Integrado'
        ];
        //Fim dos cursos
        this.model = new aluno_1.Aluno(18, 'Teste', this.cursos[0], 'teste@teste.com.br');
        this.submitted = false;
    }
    AlunoFormComponent.prototype.onSubmit = function (form) {
        this.submitted = true;
        console.log(form.value);
        console.log('Nome do aluno: ' + form.value.nome);
        console.log('Curso do aluno: ' + form.value.curso);
        console.log('Email do aluno:' + form.value.email);
    };
    Object.defineProperty(AlunoFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    AlunoFormComponent.prototype.newAluno = function () {
        this.model = new aluno_1.Aluno(42, '', '', '');
    };
    AlunoFormComponent.prototype.skyDog = function () {
        var aln = new aluno_1.Aluno(42, 'Teste', 'Arquitetura de Software', 'teste@gmail.com');
        console.log('nome do aluno: ' + aln.nome); // "My hero is called SkyDog"
        return aln;
    };
    return AlunoFormComponent;
}());
AlunoFormComponent = __decorate([
    core_1.Component({
        selector: 'aluno-form',
        templateUrl: './aluno-form.component.html'
    })
], AlunoFormComponent);
exports.AlunoFormComponent = AlunoFormComponent;
//# sourceMappingURL=aluno-form.component.js.map