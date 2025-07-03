import { addKeyword } from '@builderbot/bot'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'
import { FlowInicio } from './Inicio.flow.js'
import { FAQFlow } from './FAQ.flow.js'
import { ContactoFlow } from './Contacto.flow.js'

export const PracticaProfesionalFlow = addKeyword(['práctica', 'prácticas','carrera','practica','practicas','profesional', 'pasantía', 'pasantia',
    'pasante', 'aprendiz', 'solidaria', 'experiencia', 'ejercicio', 'ejercitar', 'pasante', 'practicante'])
    .addAnswer('🧑‍🎓 Realiza tus prácticas con nosotros')
    .addAnswer('Si eres estudiante de una escuela secundaria técnica, instituto terciario o universidad y necesitas realizar pasantías, prácticas profesionales o prácticas solidarias, te invitamos a unirte a nuestra fundación.')
    .addAnswer('Ofrecemos una oportunidad única para que desarrolles tus habilidades y adquieras experiencia práctica en un entorno real de trabajo.')
    .addAnswer('Solo necesitas enviar el permiso correspondiente emitido por tu institución educativa al siguiente correo electrónico: pasantias@underc0de.org.')
    .addAnswer('Para más información, visita la seccion de Pasantías de nuestra web: https://fundacion.underc0de.org/pasantias-practicas-solidarias/')
    .addAnswer('¿Te puedo ayudar en algo más?', {
        buttons: [
            { body: 'FAQ' },
            { body: 'CONTACTO' },
            { body: 'INICIO' }
        ],
        capture: true
    })

    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.toLowerCase()
        if (msg.includes('faq')) return gotoFlow(FAQFlow)
        if (msg.includes('contact')) return gotoFlow(ContactoFlow)
        if (msg.includes('inici')) return gotoFlow(FlowInicio)
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })