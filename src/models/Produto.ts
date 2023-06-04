import { Localizacao } from "./Localizacao"
class Produto {
  protected nome_prod: string;
  protected cod_prod: number;
  protected tipo_prod: string;
  protected qtde: number;
  protected data_aquisicao: Date;
  protected localizacao: Localizacao;
  protected situacao: string;
  protected ativo: boolean;

  constructor(
    nome_prod: string,
    cod_prod: number,
    tipo_prod: string,
    qtde: number,
    data_aquisicao: Date,
    localizacao: Localizacao,
    situacao: string,
    ativo: boolean
  ) {
    this.nome_prod = nome_prod;
    this.cod_prod = cod_prod;
    this.tipo_prod = tipo_prod;
    this.qtde = qtde;
    this.data_aquisicao = data_aquisicao;
    this.localizacao = localizacao;
    this.situacao = situacao;
    this.ativo = ativo;
    // não usei os setters aqui pois ele reclava que não estava sendo inicializado
  }

  public Create(produto: Produto): void {
    // Lógica para criar um novo produto e salvar no banco de dados (será implementado quando o bd existir)
  }

  public Read(): string {
    // Lógica para ler os dados do produto
    return `Produto: ${this.nome_prod}, Código: ${this.cod_prod}, Tipo: ${this.tipo_prod}, Quantidade: ${this.qtde}`;
  }

  public Update(produto: Produto): void {
    if (this.cod_prod === produto.cod_prod) {
     this.nome_prod = produto.nome_prod;
        this.tipo_prod = produto.tipo_prod;
        this.qtde = produto.qtde;
        this.data_aquisicao = produto.data_aquisicao;
        this.localizacao = produto.localizacao;
        this.situacao = produto.situacao;
        this.ativo = produto.ativo;
    }
  }

public Delete(id: number): void {
  // Lógica para excluir um produto
  if (this.cod_prod === id) {
    this.ativo = false;
  }
}

  public getNomeProd(): string {
    return this.nome_prod;
  }

  public setNomeProd(nome_prod: string): void {
    this.nome_prod = nome_prod;
  }

  public getCodProd(): number {
    return this.cod_prod;
  }

  public setCodProd(cod_prod: number): void {
    if(cod_prod > 0)
      this.cod_prod = cod_prod;
  }

  public getTipoProd(): string {
    return this.tipo_prod;
  }

  public setTipoProd(tipo_prod: string): void {
    this.tipo_prod = tipo_prod;
  }

  public getQtde(): number {
    return this.qtde;
  }

  public setQtde(qtde: number): void {
    if(qtde > 0)
      this.qtde = qtde;
  }

  public getDataAquisicao(): Date {
    return this.data_aquisicao;
  }

  public setDataAquisicao(data_aquisicao: Date): void {
    this.data_aquisicao = data_aquisicao;
  }

  public getLocalizacao(): Localizacao {
    return this.localizacao;
  }

  public setLocalizacao(localizacao: Localizacao): void {
    this.localizacao = localizacao;
  }

  public getSituacao(): string {
    return this.situacao;
  }

  public setSituacao(situacao: string): void {
    this.situacao = situacao;
  }

  public isAtivo(): boolean {
    return this.ativo;
  }

  public setAtivo(): void {
    this.ativo = true;
  }
}

export {Produto}
