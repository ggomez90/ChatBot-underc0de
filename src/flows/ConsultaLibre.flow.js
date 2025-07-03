import { addKeyword } from '@builderbot/bot'
import { ContactoFlow } from './Contacto.flow.js'
import { FlowInicio } from './Inicio.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const ConsultaLibreFlow = addKeyword(['otra', 'no está', 'algo más', 'algo mas', 'no esta', 'otra cosa', 'otra duda', 'mas consultas',
    'diferente', 'distinto', 'no coincide', 'no me sirve', 'no es'])
    .addAnswer('¿Neceistas algo más? Te invito a presionar o escribir *inicio* para desplegar el menú principal.')
    .addAnswer('Si no he podido evacuar tu/s duda/s, puedes presionar o escribir *contacto* para comunicarte con nosotros.')
    .addAnswer('Podés volver al menú principal o hablar con una persona:', {
        buttons: [
            { body: 'INICIO' },
            { body: 'CONTACTO' }
        ]
    })

    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.toLowerCase()
        if (msg?.includes('contac')) return gotoFlow(ContactoFlow)
        if (msg?.includes('inici')) return gotoFlow(FlowInicio)
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })
