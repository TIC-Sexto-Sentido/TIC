import { Produto } from "./Produto";
import { Localizacao } from "./Localizacao"
class Eletronicos extends Produto {
  private categoria: string;

  constructor(
    nome_prod: string,
    cod_prod: number,
    tipo_prod: string,
    qtde: number,
    data_aquisicao: Date,
    localizacao: Localizacao,
    situacao: string,
    ativo: boolean,
    categoria: string
  ) {
    super(nome_prod, cod_prod, tipo_prod, qtde, data_aquisicao, localizacao, situacao, ativo);
    this.categoria = categoria;
  }

  public getCategoria(): string {
    return this.categoria;
  }
  public Create(novoEletronico: Eletronicos): void {
    // Lógica para criar um novo produto e salvar no banco de dados (será implementado quando o bd existir)
  }
  public Read(): string {
    return super.Read() + `Categoria: ${this.categoria}\n`;
  }

  public Update(novoEletronico: Eletronicos): string {
    super.Update(novoEletronico);
    this.categoria = novoEletronico.getCategoria();
    return `Eletrônico atualizado com sucesso!`;
  }

  public Delete(id: number): string {
    super.Delete(id);
    return `Eletrônico removido com sucesso!`;
  }
}
 export {Eletronicos}
