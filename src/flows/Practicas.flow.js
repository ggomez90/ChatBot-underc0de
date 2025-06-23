import { addKeyword } from '@builderbot/bot'

export const PracticaProfesionalFlow = addKeyword([
    'Quiero hacer una práctica profesional',
    '¿Aceptan estudiantes para prácticas profesionales?',
    'Busco una práctica para mi carrera',
    "¿Que carreras aceptan?",
    "¿Como postular?",
    "Virtual/Presencial",
    "Otra consulta",

])
    .addAnswer('¡Hola! Soy el asistente virtual de Fundación Underc0de. ¿Cuál es tu consulta sobre prácticas profesionales?')
    .addAnswer(
        '1) ¿Qué carreras aceptan?\n2) ¿Cómo postular?\n3) ¿Virtual/Presencial?\n4) Otra consulta',
        {
            buttons: [
                { body: '¿Qué carreras aceptan?' },
                { body: '¿Cómo postular?' },
                { body: 'Virtual/Presencial' },
                { body: 'Otra consulta' },
                { body: 'Salir' },
            ]
        }
    )