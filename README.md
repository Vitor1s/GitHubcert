# 🚀 Desenvolvendo Conhecimento Prático com Comandos Git

Este repositório documenta minha jornada de aprendizado com Git e GitHub, onde aplico na prática os comandos e conceitos fundamentais de versionamento de código.

## 🌐 Visualização Online

O projeto está disponível no GitHub Pages para visualizar as alterações em tempo real:
**[https://vitor1s.github.io/GitHubcert/](https://vitor1s.github.io/GitHubcert/)**

## 📋 Objetivos do Projeto

Este repositório foi criado com o propósito de:
- Praticar comandos básicos e avançados do Git
- Compreender o fluxo de trabalho com GitHub
- Documentar o processo de aprendizado
- Simular colaboração entre desenvolvedores
- Implementar boas práticas de versionamento

## Desafios Realizados

### 1.Criação da Conta GitHub
- Conta criada e configurada
- Perfil personalizado com informações relevantes

### 2.Criação e Configuração do Repositório
- Repositório criado com estrutura inicial
- Configuração do GitHub Pages para visualização
- Implementação de arquivos base (HTML, CSS, README)

**Comandos utilizados:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/vitor1s/GitHubcert.git
git push -u origin main
```

### 3.Colaboração e Múltiplas Máquinas
- Clonagem do projeto em diferentes ambientes
- Simulação de colaboração usando conta secundária
- Gerenciamento de conflitos e merge de alterações
- Sincronização entre repositórios locais e remoto

**Comandos de colaboração utilizados:**
```bash
git clone https://github.com/vitor1s/GitHubcert.git
git pull origin main
git push origin feature-branch
git merge feature-branch
git branch -d feature-branch
```

### 4.Documentação e README
- Criação de README.md detalhado
- Documentação do processo de aprendizado
- Registro dos comandos utilizados
- Estruturação de informações de forma clara

##  Comandos Git Principais Utilizados

### Configuração Inicial
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### Gestão de Commits
```bash
git status
git add arquivo.txt
git add .
git commit -m "Mensagem descritiva"
git log --oneline
git show commit-hash
```

### Trabalho com Branches
```bash
git branch
git branch nova-feature
git checkout nova-feature
git checkout -b outra-feature
git merge nome-da-branch
git branch -d nome-da-branch
```

### Sincronização com Repositório Remoto
```bash
git remote -v
git fetch origin
git pull origin main
git push origin main
git push --set-upstream origin nova-branch
```

### Comandos de Verificação e Histórico
```bash
git diff
git log --graph --oneline --all
git reflog
git reset --hard HEAD~1
git revert commit-hash
```

## Conhecimentos Adquiridos

- **Versionamento**: Controle eficiente de versões do código
- **Branching**: Criação e gerenciamento de ramificações
- **Merging**: Integração de alterações entre branches
- **Colaboração**: Trabalho em equipe usando Git/GitHub
- **GitHub Pages**: Deploy automático de projetos estáticos
- **Resolução de Conflitos**: Gerenciamento de conflitos de merge
- **Boas Práticas**: Commits semânticos e organização do repositório

##  Fluxo de Trabalho Aplicado

1. **Desenvolvimento Local**: Criação e edição de arquivos
2. **Staging**: Adição de alterações com `git add`
3. **Commit**: Confirmação das mudanças com mensagens descritivas
4. **Push**: Envio das alterações para o repositório remoto
5. **Deploy**: Atualização automática no GitHub Pages


> Este projeto representa minha evolução no aprendizado de Git e GitHub com a DIO e a professora Aline Antunes, servindo como referência para futuras consultas e demonstração prática dos conhecimentos adquiridos.