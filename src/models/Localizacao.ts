class Localizacao {
    private local: string;
  
    constructor(local: string) {
      this.local = local;
    }
  
    public getLocal(): string {
      return this.local;
    }
  
    public setLocal(local: string): void {
      this.local = local;
    }
    public Create(localizacao: Localizacao): void {
        // Lógica para criar um novo produto e salvar no banco de dados (será implementado quando o bd existir)
    }
  
    public Read(): string {
      return `Localização: ${this.local}\n`;
    }
  
    public Update(novaLocalizacao: Localizacao): string {
      this.local = novaLocalizacao.getLocal();
      return `Localização atualizada com sucesso!`;
    }
  
    public Delete(): string {
        this.local = ""
      return `Localização removida com sucesso!`;
    }
  }

  export {Localizacao}
  