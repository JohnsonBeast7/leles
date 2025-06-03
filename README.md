# projeto-trabalho

**Este projeto foi desenvolvido com o objetivo exclusivo de aprendizado.**

## 🔍 Descrição Geral

O sistema consiste em uma aplicação web simples para gerenciamento de usuários, permitindo visualização, adição e modificação de registros por meio de uma interface intuitiva e segura.

A tabela principal exibe as seguintes informações dos usuários:

- Nome de usuário  
- E-mail  
- Data de admissão  
- Data e hora do cadastro  
- Data e hora da última atualização  

## 🧱 Arquitetura

O projeto segue o padrão de arquitetura **MVC (Model-View-Controller)**, que organiza o código em três camadas principais:

- **Model**: representa a lógica de dados e acesso ao banco (MySQL).
- **View**: define o layout e apresentação dos dados ao usuário.
- **Controller**: faz a ponte entre o usuário (via View) e os dados (via Model).

### Fluxo básico:

1. O usuário interage com a interface (View).
2. O Controller processa a ação.
3. Se necessário, atualiza o Model.
4. O Controller envia os dados atualizados de volta à View.
5. A View exibe os dados atualizados ao usuário.

## 🖥️ Funcionalidades

Na página principal (`/home`), o usuário tem acesso a:

- Uma tabela de usuários (atualizada em tempo real).
- Um campo de filtro para busca por nome, e-mail ou status.
- Botões para:
  - **Cadastrar um administrador**.
  - **Efetuar login com um administrador existente**.

### 🧾 Cadastro e Login

- O sistema exige uma **Chave de Acesso** tanto para o cadastro quanto para o login.
- Apenas usuários com a chave correta podem acessar o painel administrativo.
- Existe uma exceção para o usuário **`superadmin`**, que pode realizar login sem a chave de acesso — bastando o nome de usuário e senha.  
  ⚠️ *Nota: esse comportamento é apenas para fins didáticos e **não é recomendado em ambientes de produção***.

## 🔐 Painel Administrativo (Dashboard)

Após o login, o administrador é redirecionado para o **Dashboard**, onde é possível:

- Adicionar novos registros na tabela de usuários.
- Editar dados existentes (nome, e-mail, data de admissão, etc).
- Inativar usuários (em vez de excluir definitivamente).

🗑 **Exclusão permanente de registros não está disponível**:  
A decisão de manter os registros inativos visa preservar o histórico completo das informações, garantindo integridade e rastreabilidade.

## ⚙️ Tecnologia e Recursos

- **PHP** (com estrutura MVC personalizada)
- **JavaScript (AJAX)** – atualização assíncrona da tabela, sem recarregamento da página.
- **MySQL** – banco de dados relacional.
- **Bootstrap** – layout responsivo e visualmente agradável.
- **SweetAlert2** – substituição dos alertas padrão do navegador.

## 🧪 Experiência de Uso

O sistema oferece uma interface limpa, com atualizações dinâmicas que tornam a navegação fluida. Ao realizar operações (como cadastro, login ou alteração de dados), o usuário é notificado com janelas modais estilizadas, tornando a experiência mais profissional.

## 💾 Versionamento

Todo o desenvolvimento está versionado no repositório:  
📁 `projeto-trabalho`