import { Produto } from "./Produto";
import { Localizacao } from "./Localizacao"
class Brinquedos extends Produto {
    private faixaEtaria: number;
  
    constructor(
      nome_prod: string,
      cod_prod: number,
      tipo_prod: string,
      qtde: number,
      data_aquisicao: Date,
      localizacao: Localizacao,
      situacao: string,
      ativo: boolean,
      faixaEtaria: number
    ) {
      super(nome_prod, cod_prod, tipo_prod, qtde, data_aquisicao, localizacao, situacao, ativo);
      this.faixaEtaria = faixaEtaria;
    }
  
    public setFaixaEtaria(faixaEtaria: number): void {
      if(faixaEtaria > 0)  
        this.faixaEtaria = faixaEtaria;
    }
  
    public getFaixaEtaria(): number {
      return this.faixaEtaria;
    }
    public Create(brinquedo: Brinquedos): void {
        // Lógica para criar um novo produto e salvar no banco de dados (será implementado quando o bd existir)
    }
    public Read(): string {
      return super.Read() + `Faixa etária recomendada: ${this.faixaEtaria} anos\n`;
    }
  
    public Update(brinquedo: Brinquedos): string {
      super.Update(brinquedo);
      this.faixaEtaria = brinquedo.faixaEtaria
      return "Brinquedo atualizado com sucesso!";
    }
  
    public Delete(id: number): string {
      super.Delete(id);
      return "Brinquedo excluído com sucesso!";
    }
  }

  export {Brinquedos}
  