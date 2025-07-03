import { addKeyword } from '@builderbot/bot'

import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const pruebaFlow = addKeyword(['hola', 'buenas', 'hi'])
    .addAnswer('🙌 Hola! Escribí "inicio" para continuar.', { capture: true })
    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.toLowerCase()
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })
