import { addKeyword } from '@builderbot/bot'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'
import { InstitucionalFlow } from './Institucional.flow.js'
import { NovedadesFlow } from './Novedades.flow.js'
import { ContactoFlow } from './Contacto.flow.js'
import { ForoFlow} from './Foro.flow.js'
import { EventosFlow } from './Eventos.flow.js'
import { DonacionesFlow } from './Donaciones.flow.js'
import { CursosFlow } from './Cursos.flow.js'
import { PracticaProfesionalFlow } from './Practicas.flow.js'
import { MentoriaFlow } from './Mentoria.Flow.js'

export const FlowInicio = addKeyword(['inicio', 'empezar', 'menu', 'iniciar', 'comenzar', 'menú', 'arrancar',
    'principar', 'entablar', 'carta', 'lista', 'opcion', 'opción', 'opciones'])
    .addAnswer('Te mostraré mi menú interactivo para conocer tu interés.')
    .addAnswer('Sobre la fundación', {
        buttons: [
            { body: 'NOSOTROS' },
            { body: 'NOVEDADES' },
            { body: 'CONTACTO' }
        ]
    })
    .addAnswer('Nuestra comunidad', {
        buttons: [
            { body: 'FORO' },
            { body: 'EVENTOS' },
            { body: 'DONACIONES' }
        ]
    })
    .addAnswer('Estudiantes y/o entusiastas', {
        buttons: [
            { body: 'CURSOS' },
            { body: 'PASANTIAS' },
            { body: 'MENTOR' }
        ],
        capture: true
    })

    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.trim().toLowerCase()

        if (msg?.includes('nosotros')) return gotoFlow(InstitucionalFlow)
        else if (msg?.includes('novedad')) return gotoFlow(NovedadesFlow)
        else if (msg?.includes('contact')) return gotoFlow(ContactoFlow)
        else if (msg?.includes('foro')) return gotoFlow(ForoFlow)
        else if (msg?.includes('evento')) return gotoFlow(EventosFlow)
        else if (msg?.includes('dona')) return gotoFlow(DonacionesFlow)
        else if (msg?.includes('curso')) return gotoFlow(CursosFlow)
        else if (msg?.includes('pasantias')) return gotoFlow(PracticaProfesionalFlow)
        else if (msg?.includes('mentor')) return gotoFlow(MentoriaFlow)

        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })

