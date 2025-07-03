import { addKeyword } from '@builderbot/bot'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { BienvenidaFlow } from './Bienvenida.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const StaffEventosCursosFlow = addKeyword(['staff', 'unirme', 'equipo', 'eventos', 'cursos', 'talleres', 'evento', 'taller'])
    .addAnswer('📌 Si querés unirte al staff, ¡escribinos!')
    .addAnswer('Para eventos y cursos, podés seguir nuestras redes o visitar: https://fundacion.underc0de.org/eventos')
    .addAnswer('¿Querés saber algo más?', {
        buttons: [
            { body: 'FAQ' },
            { body: 'Hablar con una persona' },
            { body: 'Volver al inicio' }
        ],
        capture: true
    })

    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.toLowerCase()
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
        if (msg.includes('faq')) return gotoFlow(FAQFlow)
        if (msg.includes('persona')) return gotoFlow(ContactoFlow)
        if (msg.includes('inicio')) return gotoFlow(BienvenidaFlow)
    })
