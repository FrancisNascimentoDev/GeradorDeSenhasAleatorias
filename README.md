# Gerador de Senha Aleatória com Alternância de Tema

## Descrição do Projeto

Este projeto tem como objetivo a criação de um **Gerador de Senha Aleatória** com a possibilidade de alternar entre **tema claro** e **tema escuro**. O usuário pode personalizar a senha gerada escolhendo diferentes opções de caracteres (números, símbolos, maiúsculas, minúsculas, etc.) e também pode visualizar a senha gerada com o nível de complexidade.

## Funcionalidades

- **Geração de Senha Aleatória**: O usuário pode personalizar a senha escolhendo várias opções como comprimento, inclusão de números, caracteres especiais, letras maiúsculas e minúsculas.
- **Alternância de Tema Claro e Escuro**: Alterna entre os temas claro e escuro com um botão flutuante localizado no canto superior direito.
- **Exibição de Senha Gerada**: A senha gerada é exibida em um campo de texto, junto com seu nível de complexidade.
- **Imagem de Fundo Personalizável**: O fundo do **container** é uma imagem, que pode ser personalizada com o arquivo desejado.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página e formulários.
- **CSS**: Estilização e design da página, incluindo a alternância de temas e o layout da imagem de fundo.
- **JavaScript**: Lógica para a geração da senha e alternância de temas.

## Estrutura do Projeto

A estrutura do diretório é a seguinte:
```
/gerador-senha 
├── index.html # Arquivo HTML com a estrutura do gerador de senha 
├── style.css # Arquivo CSS com a estilização 
├── script.js # Arquivo JavaScript para lógica de geração de senhas e alternância de tema 
```


### Descrição dos arquivos

- **index.html**: Arquivo principal que contém a estrutura da página com os formulários e botões.
- **style.css**: Arquivo de estilo para o layout e personalização visual.
- **script.js**: Arquivo responsável pela lógica de geração de senha, manipulação de eventos e alternância de temas.

## Funcionalidades do Código

### Geração de Senha Aleatória

A geração da senha depende das opções selecionadas pelo usuário. As opções incluem:

- **Comprimento da Senha**: O usuário pode definir o comprimento da senha (de 6 a 20 caracteres).
- **Incluir Números**: Ativar ou desativar a inclusão de números.
- **Incluir Caracteres Especiais**: Permite incluir caracteres especiais como `@`, `#`, `&`, etc.
- **Incluir Letras Maiúsculas**: Permite incluir letras maiúsculas.
- **Incluir Letras Minúsculas**: Permite incluir letras minúsculas.
- **Excluir Caracteres Ambíguos**: Exclui caracteres que podem ser facilmente confundidos (como "l", "1", "I", "O").
- **Símbolos Personalizados**: O usuário pode adicionar símbolos personalizados na senha gerada.

A função `generatePassword()` no arquivo **script.js** é responsável por processar essas preferências e gerar a senha de acordo.

### Alternância de Tema Claro e Escuro

O projeto oferece a alternância de tema entre **claro** e **escuro** através de um botão flutuante no canto superior direito. A alternância é implementada pela função `toggleTheme()`, que adiciona ou remove a classe `dark` do elemento `body`, alterando o estilo da página.

### Exibição da Senha Gerada

A senha gerada é exibida em um campo de texto, permitindo ao usuário copiá-la facilmente. Também é mostrado um indicador do nível de complexidade da senha.


## Como Rodar o Projeto

### Passos para Execução Local:

1. **Clone o repositório ou baixe os arquivos**:
    - Se estiver usando Git, clone o repositório:
      ```bash
      git clone https://seu-repositorio-url.git
      ```
    - Ou baixe os arquivos diretamente como um arquivo ZIP e extraia em uma pasta.

2. **Abra o arquivo `index.html` em um navegador**:
    - Clique duas vezes no arquivo `index.html` para abrir em seu navegador de preferência.

## Modificar Lógica de Geração de Senha

Caso queira adicionar ou remover opções de personalização na geração de senha, altere a função `generatePassword()`
no arquivo `script.js`.

## Alterar Layout e Design

O layout e design podem ser ajustados editando o arquivo `style.css`. As cores, fontes, tamanhos, bordas, etc., podem ser facilmente modificados para se adequar às suas preferências.

## Conclusão

Este projeto oferece uma maneira simples e eficiente de gerar senhas aleatórias, com opções de personalização e a capacidade 
de alternar entre os temas claro e escuro. Ele foi construído utilizando tecnologias web fundamentais, como **HTML**, **CSS** e **JavaScript**, 
tornando-o acessível e fácil de modificar conforme suas necessidades.

Se desejar adicionar novas funcionalidades ou melhorar a interface, fique à vontade para editar o código conforme preferir!


