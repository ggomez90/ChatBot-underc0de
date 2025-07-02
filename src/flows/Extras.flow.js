import { addKeyword } from '@builderbot/bot'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { BienvenidaFlow } from './Bienvenida.flow.js'

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
        const body = ctx.body?.toLowerCase()
        if (body.includes('faq')) return gotoFlow(FAQFlow)
        if (body.includes('persona')) return gotoFlow(ContactoFlow)
        if (body.includes('inicio')) return gotoFlow(BienvenidaFlow)
    })
