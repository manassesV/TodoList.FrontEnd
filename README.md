# Frontend

Este projeto foi gerado usando o [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.9.

---

## Configuração da URL da API

No arquivo do serviço `TodotaskService`, atualize a URL da API conforme o ambiente:

```typescript
export class TodotaskService {
  private readonly url: string = 'https://localhost:7219/api/v1/todotask';
}
```

---

## Servidor de desenvolvimento

Para iniciar o servidor local de desenvolvimento, execute:

```bash
ng serve
```

Abra o navegador e acesse [http://localhost:4200/](http://localhost:4200/). O aplicativo será recarregado automaticamente sempre que você modificar qualquer arquivo de código-fonte.

---

## Scaffold de código

O Angular CLI inclui ferramentas para scaffolding de código. Para gerar um novo componente, execute:

```bash
ng generate component nome-do-componente
```

Para listar todos os schematics disponíveis (como componentes, diretivas ou pipes), execute:

```bash
ng generate --help
```

---

## Build

Para compilar o projeto, execute:

```bash
ng build
```

Os artefatos da build serão armazenados na pasta `dist/`. Por padrão, a build de produção otimiza a aplicação para performance e velocidade.

---

## Testes unitários

Para executar testes unitários com o [Karma](https://karma-runner.github.io), use:

```bash
ng test
```

---

## Testes end-to-end (e2e)

Para executar testes end-to-end, use:

```bash
ng e2e
```

Note que o Angular CLI não inclui um framework de testes e2e por padrão, então você pode escolher o que melhor se adequa ao seu projeto.

---

## Recursos adicionais

Para mais informações sobre o Angular CLI, incluindo referência completa de comandos, consulte a página oficial: [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
