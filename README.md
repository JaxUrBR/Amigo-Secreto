Link para o Site do projeto (deploy feito utilizando a ferramenta "Vercel")



Funcionamento do código:

IDs e Classes:

O campo de texto é selecionado pelo ID amigo (document.getElementById('amigo')).

A lista de nomes é selecionada pelo ID listaAmigos (document.getElementById('listaAmigos')).

O resultado do sorteio é exibido no elemento com ID resultado (document.getElementById('resultado')).

Funções:

A função adicionarAmigo é chamada ao clicar no botão "Adicionar" (onclick="adicionarAmigo()" no HTML).

A função sortearAmigo é chamada ao clicar no botão "Sortear amigo" (onclick="sortearAmigo()" no HTML).

Atualização da Lista:

A função atualizarLista cria elementos para cada nome no array nomes e os adiciona à lista visível (listaAmigos).

Exibição do Resultado:

O resultado do sorteio é exibido no elemento resultado, com o nome sorteado destacado em negrito.

Validação:

Se o campo de texto estiver vazio ao tentar adicionar um nome, um alerta é exibido.

Se não houver nomes na lista ao tentar sortear, um alerta é exibido.
