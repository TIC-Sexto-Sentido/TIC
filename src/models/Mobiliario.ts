import { Produto } from "./Produto";
import { Localizacao } from "./Localizacao"
class Mobiliario extends Produto {
  private tipo_mobiliario: string;

  constructor(
    nome_prod: string,
    cod_prod: number,
    tipo_prod: string,
    qtde: number,
    data_aquisicao: Date,
    localizacao: Localizacao,
    situacao: string,
    ativo: boolean,
    tipo_mobiliario: string
  ) {
    super(nome_prod, cod_prod, tipo_prod, qtde, data_aquisicao, localizacao, situacao, ativo);
    this.tipo_mobiliario = tipo_mobiliario;
  }

  public setTipoMobiliario(tipo_mobiliario: string): void {
    this.tipo_mobiliario = tipo_mobiliario;
  }

  public getTipoMobiliario(): string {
    return this.tipo_mobiliario;
  }
  public Create(mobiliario: Mobiliario): void {
    // Lógica para criar um novo produto e salvar no banco de dados (será implementado quando o bd existir)
  }

  public Read(): string {
    return super.Read() + `Tipo de mobiliário: ${this.tipo_mobiliario}\n`;
  }

  public Update(mobiliario: Mobiliario): string {
    super.Update(mobiliario);
    this.setTipoMobiliario(mobiliario.getTipoMobiliario());
    return "Mobiliário atualizado com sucesso!";
  }

  public Delete(id: number): string {
    super.Delete(id);
    return "Mobiliario excluído com sucesso!";
  }
}
export {Mobiliario}
