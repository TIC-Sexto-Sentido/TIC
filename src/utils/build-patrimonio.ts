import { Patrimonio, PatrimonioDB } from "../models";
import { LocalizacaoService, TipoPatrimonioService } from "../services";

class BuildPatrimonio{
    private TipoPatrimonioService = TipoPatrimonioService;
    private LocalizacaoService = LocalizacaoService;

    public async buildPatrimonio(patrimonioDB: PatrimonioDB): Promise<Patrimonio>{
        try{
            let patrimonio = patrimonioDB as unknown as Patrimonio

            const tipo = await new this.TipoPatrimonioService()
                .getTipoPatrimonio(patrimonioDB.tipo_patrimonio)
            const local = await new this.LocalizacaoService()
                .getLocalizacao(patrimonioDB.localizacao)
                
            tipo? patrimonio.tipo_patrimonio = tipo : null
            local? patrimonio.localizacao = local : null

            return patrimonio

        } catch (error){
            console.log(error)

            throw new Error(`503: serviço indisponivel`);
        }
    }


}
export {BuildPatrimonio}