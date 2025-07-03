import { addKeyword } from '@builderbot/bot'
import { FlowInicio } from './Inicio.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const BienvenidaFlow = addKeyword(['hi', 'hello', 'hola', 'buen', 'buenos', 'buenas', 'dias', 'dia', 'días', 'día', 'tarde', 'tardes','noche', 'noches'])
    .addAnswer(`🙌 Hola, bienvenido a fundación underc0de*`)
    .addAnswer('Soy Zurdito, el Asistente virtual de la fundación!')
    .addAnswer('¿En que puedo servirte? Dame una pista o presiona "inicio" para un menú guiado', {
        buttons: [{ body: 'INICIO' }],
        capture: true
    })

    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.trim().toLowerCase()
        if (msg?.includes('inici')) return gotoFlow(FlowInicio)
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })