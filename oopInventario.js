class Item {
  constructor(nome, quantidade){
    this.nome = nome
    this.quantidade = quantidade
}
}

class Inventario {
  constructor() {
    this.itens = []
  }

  adicionarItem(item) {
    this.itens.push(item)
  }

  removerItem(nome) {
    this.itens = this.itens.filter(item => item.nome !== "nome")
  }

  listarItens() {
    return this.itens
  }

}

const inventario = new Inventario()
const item1 = new Item("Lápis", 10);
const item2 = new Item("Caderno", 5);

inventario.adicionarItem(item1);
inventario.adicionarItem(item2);

console.log(inventario.listarItens()); // Deve listar todos os itens

inventario.removerItem("Lápis");

console.log(inventario.listarItens()); // Deve listar apenas o Caderno



