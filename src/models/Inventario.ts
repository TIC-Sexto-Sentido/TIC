import { Produto } from "./Produto";
class Inventario {
    private produtos: Produto[] = [];
  
    public addProduto(produto: Produto): void {
      this.produtos.push(produto);
    }
  
    public removeProduto(codigo: number): void {
      this.produtos = this.produtos.filter((produto) => produto.getCodProd() !== codigo);
    }
  
    public getProdutos(): Produto[] {
      return this.produtos;
    }
  
    public Read(): string {
      let produtosString: string = '';
  
      this.produtos.forEach((produto) => {
        produtosString += produto.Read();
      });
  
      return produtosString;
    }
  }
  
  export { Inventario }
  