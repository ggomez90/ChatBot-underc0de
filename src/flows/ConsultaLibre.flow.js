import { addKeyword } from '@builderbot/bot'
import { ContactoFlow } from './Contacto.flow.js'
import { FlowInicio } from './Inicio.flow.js'

export const ConsultaLibreFlow = addKeyword(['otra consulta', 'no está', 'algo más'])
    .addAnswer('Uy, no estoy seguro de cómo responder a eso.')
    .addAnswer('Podés volver al menú principal o hablar con una persona:', {
        buttons: [
            { body: 'Volver al inicio' },
            { body: 'Hablar con una persona' }
        ]
    })
    .addAction(async (ctx, { gotoFlow }) => {
        if (ctx.body?.toLowerCase().includes('persona')) return gotoFlow(ContactoFlow)
        return gotoFlow(FlowInicio)
    })
