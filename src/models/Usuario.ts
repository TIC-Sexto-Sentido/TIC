class Usuario {
    private id: number
    private nome: string;
    private email: string;
    private senha: string;
    private cargo: string;
  
    constructor(id: number,nome: string, email: string, senha: string, cargo: string) {
      this.id = id
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.cargo = cargo;
    }
  
    public Create(usuario: Usuario): void {
      // Lógica para criar o usuário e salvar no banco de dados (será implementado quando o bd existir)
    }
  
    public Update(usuario: Usuario): string {
        if(usuario.id == this.id){
            this.nome = usuario.nome;
            this.email = usuario.email;
            this.senha = usuario.senha;
            this.cargo = usuario.cargo;
        }
        
      return "Usuário atualizado com sucesso!";
    }
  }
  export {Usuario}
  