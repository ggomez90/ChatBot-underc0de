import { addKeyword } from '@builderbot/bot'
import { BienvenidaFlow } from './Bienvenida.flow.js';

export const FlowInicio = addKeyword(['inicio', 'empezar', 'menu', 'iniciar', 'comenzar', 'menú', 'arrancar'])
    .addAnswer('Te mostraré mi menú interactivo para conocer tu interés.')
    .addAnswer('Sobre la fundación', {
        buttons: [
            { body: '1️⃣ NOSOTROS' },
            { body: '2️⃣ NOVEDADES' },
            { body: '3️⃣ CONTACTO' }
        ]
    })
    .addAnswer('Nuestra comunidad', {
        buttons: [
            { body: '4️⃣ FORO' },
            { body: '5️⃣ EVENTOS' },
            { body: '6️⃣ DONACIONES' }
        ]
    })
    .addAnswer('Estudiantes y/o entusiastas', {
        buttons: [
            { body: '7️⃣ CURSOS' },
            { body: '8️⃣ PASANTIAS' },
            { body: '9️⃣ MENTOR' }
        ],
        capture: true
    })

    .addAction(async (ctx, { gotoFlow, endFlow }) => {
        const msg = ctx.body?.trim().toLowerCase()
        console.log('Respuesta BIENVENIDA FLOW:', msg)

        if (msg === 'hola') {
            return gotoFlow(BienvenidaFlow)
        }
        return endFlow()
    })

    /*.addAction(async (ctx, { gotoFlow, endFlow }) => {
        const msg = ctx.body?.trim().toLowerCase()

        if (msg.includes('nosotros')) {
            // return gotoFlow(NosotrosFlow)
        } else if (msg.includes('cursos')) {
            // return gotoFlow(CursosFlow)
        }

        return endFlow()
    })*/

