import { addKeyword } from '@builderbot/bot'
import { ContactoFlow } from './Contacto.flow.js'
import { FlowInicio } from './Inicio.flow.js'
import { DesconocidoFlow } from './Desconocido.flow.js'
import { KEYWORDS_VALIDOS } from '../palabras_validas.js'

export const FAQFlow = addKeyword(['faq', 'pregunta', 'frecuente', 'consulta', 'ayuda', 'soporte', 'info'])
    .addAnswer('📌 *Preguntas Frecuentes*')
    .addAnswer(
    [
        '1️⃣ *¿Qué es la Fundación Underc0de?*',
        'Underc0de nace en el año 2011 como un grupo de informáticos que buscaban compartir conocimientos y resolver dudas mediante un canal virtual, un foro. ',

        '2️⃣ *¿Puedo participar sin experiencia?*',
        '¡Sí! Tenemos mentorías y espacios para todos los niveles.',

        '3️⃣ *¿Entregan certificados?*',
        'Sí, se entregan certificados por participación o prácticas.',

        '4️⃣ *¿Las actividades son virtuales o presenciales?*',
        'Tenemos ambas modalidades, dependerá de la modalidad específica de cada curso/capacitación/taller/encuentro',

        '5️⃣ *¿Cómo me postulo?*',
        'Completando este formulario: https://fundacion.underc0de.org/formulario'
    ])
    .addAnswer('¿Querés volver al menú o contactarte con nosotros?', {
        buttons: [
            { body: 'INICIO' },
            { body: 'CONTACTO' }
        ],
        capture: true
    })

    .addAction(async (ctx, { gotoFlow }) => {
        const msg = ctx.body?.toLowerCase()
        if (msg.includes('contact')) return gotoFlow(ContactoFlow)
        if (msg.includes('inici')) return gotoFlow(FlowInicio)
        if (!KEYWORDS_VALIDOS.includes(msg)) {
            return gotoFlow(DesconocidoFlow)
        }
    })

