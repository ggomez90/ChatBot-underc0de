import { addKeyword } from '@builderbot/bot'

<<<<<<< HEAD
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
=======
export const PracticaProfesionalFlow = addKeyword(['práctica', 'prácticas','carrera','practica','practicas','profesional'])
    .addAnswer('Eres estudiante y buscas una practica profesional?')
    .addAnswer('Excelente consulta, tenemos diferentes opciones:')
    .addAnswer('Indicame de que carrera vienes para poder guiarte:',
        {
            buttons: [
                { body: 'Analista en sistemas'},
                { body: 'Programacion' },
                { body: 'Carrera de grado informática y/o software' }
>>>>>>> main
            ]
        }
    )