
import { addKeyword } from '@builderbot/bot'

export const FlowInicio = addKeyword(['hola', 'inicio', 'empezar', 'menu'])
    .addAnswer('¡Hola! Soy el asistente virtual de la fundación. ¿En qué puedo ayudarte hoy?', {
        buttons: [
            { body: '1️⃣ Práctica solidaria' },
            { body: '2️⃣ Práctica profesional' },
            { body: '3️⃣ Colaborar como voluntario/a' },
            { body: '4️⃣ Otra consulta' }
        ]
    })
    .addAction(async () => {})
