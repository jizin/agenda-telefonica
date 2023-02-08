function addContatos() {
    const nomeContato = document.getElementById("nome-contato").value;
    const numeroTelefone = document.getElementById("numero-telefone").value;

    const contatos = document.getElementById("contatos");
    const linha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    colunaNome.textContent = nomeContato;

    const colunaNumero = document.createElement("td");
    colunaNumero.textContent = numeroTelefone;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaNumero);

    contatos.appendChild(linha);

    document.getElementById("nome-contato").value = "";
    document.getElementById("numero-telefone").value = "";
}
