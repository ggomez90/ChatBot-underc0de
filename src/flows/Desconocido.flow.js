import { addKeyword } from '@builderbot/bot'
import { FlowInicio } from './Inicio.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const DesconocidoFlow = addKeyword('')
  .addAnswer('❌ Lo siento, no entiendo lo que escribiste.')
  .addAnswer('Podés escribir *inicio* para volver al menú principal.', {capture: true})

  .addAction(async (ctx, { gotoFlow }) => {
    const msg = ctx.body?.trim().toLowerCase()
    if (msg.includes('inici')) return gotoFlow(FlowInicio)
    if (!KEYWORDS_VALIDOS.includes(msg)) {
        return gotoFlow(DesconocidoFlow)
    }  
  })