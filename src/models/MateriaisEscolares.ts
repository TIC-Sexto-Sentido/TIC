import { Produto } from "./Produto";
import { Localizacao } from "./Localizacao"
class MateriaisEscolares extends Produto {
    private tipo_materialEsc: string;
  
    constructor(
      nome_prod: string,
      cod_prod: number,
      tipo_prod: string,
      qtde: number,
      data_aquisicao: Date,
      localizacao: Localizacao,
      situacao: string,
      ativo: boolean,
      tipo_materialEsc: string
    ) {
      super(nome_prod, cod_prod, tipo_prod, qtde, data_aquisicao, localizacao, situacao, ativo);
      this.tipo_materialEsc = tipo_materialEsc;
    }
  
    public getTipoMaterialEsc(): string {
      return this.tipo_materialEsc;
    }
  
    public Read(): string {
      return super.Read() + `Tipo de material escolar: ${this.tipo_materialEsc}\n`;
    }
    public Create(novoMaterial: MateriaisEscolares): void {
        // Lógica para criar um novo produto e salvar no banco de dados (será implementado quando o bd existir)
    }
  
    public Update(novoMaterial: MateriaisEscolares): string {
      super.Update(novoMaterial);
      this.tipo_materialEsc = novoMaterial.getTipoMaterialEsc();
      return `Material escolar atualizado com sucesso!`;
    }
  
    public Delete(id: number): string {
      super.Delete(id);
      return `Material escolar removido com sucesso!`;
    }
  }
  export {MateriaisEscolares}
  