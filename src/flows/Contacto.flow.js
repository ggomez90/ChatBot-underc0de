import { addKeyword } from '@builderbot/bot'
import { FlowInicio } from './Inicio.flow.js'

export const ContactoFlow = addKeyword(['hablar con una persona', 'contacto', 'comunicarme'])
    .addAnswer('Podés escribirnos directamente a contacto@underc0de.org o al WhatsApp +54 9 11 1234-5678.')
    .addAnswer('¿Querés volver al menú principal?', {
        buttons: [
            { body: 'Volver al inicio' }
        ]
    })
    .addAction(async (ctx, { gotoFlow }) => {
        return gotoFlow(FlowInicio)
    })
