import dotenv from 'dotenv';
dotenv.config();
//import { join } from 'path'
//import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot'

import { BienvenidaFlow } from './flows/Bienvenida.flow.js'
import { InstitucionalFlow } from './flows/Institucional.flow.js';
import { FAQFlow } from './flows/FAQ.flow.js'
import { FlowInicio } from './flows/Inicio.flow.js'
import { ContactoFlow } from './flows/Contacto.flow.js'
import { DesconocidoFlow } from './flows/Desconocido.flow.js';
import { NovedadesFlow } from './flows/Novedades.flow.js';
import { ForoFlow } from './flows/Foro.flow.js';
import { EventosFlow } from './flows/Eventos.flow.js';
import { DonacionesFlow } from './flows/Donaciones.flow.js';
import { CursosFlow } from './flows/Cursos.flow.js';
import { PracticaProfesionalFlow } from './flows/Practicas.flow.js';
import { MentoriaFlow } from './flows/Mentoria.Flow.js';
import { ConsultaLibreFlow } from './flows/ConsultaLibre.flow.js'
import { SaludoFlow} from './flows/Saludo.flow.js'

//import { pruebaFlow } from './flows/prueba.flow.js'

import { createBot, createProvider, createFlow} from '@builderbot/bot'
import { MemoryDB as Database } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'

const PORT = process.env.PORT ?? 3008

const main = async () => {
    const adapterFlow = createFlow([BienvenidaFlow, InstitucionalFlow, FAQFlow, FlowInicio, ContactoFlow, DesconocidoFlow, NovedadesFlow, ForoFlow,
                                    EventosFlow, DonacionesFlow, CursosFlow, PracticaProfesionalFlow, MentoriaFlow, ConsultaLibreFlow, SaludoFlow])
    const adapterProvider = createProvider(Provider, {
        jwtToken: process.env.JWT_TOKEN,
        numberId: process.env.NUMBER_ID,
        verifyToken: process.env.VERIFY_TOKEN,
        version: 'v22.0'
    })
    const adapterDB = new Database()

    const { handleCtx, httpServer } = await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB
    })


    adapterProvider.server.post(
        '/v1/messages',
        handleCtx(async (bot, req, res) => {
            const { number, message, urlMedia } = req.body
            await bot.sendMessage(number, message, { media: urlMedia ?? null })
            return res.end('sended')
        })
    )

    adapterProvider.server.post(
        '/v1/register',
        handleCtx(async (bot, req, res) => {
            const { number, name } = req.body
            await bot.dispatch('REGISTER_FLOW', { from: number, name })
            return res.end('trigger')
        })
    )

    adapterProvider.server.post(
        '/v1/samples',
        handleCtx(async (bot, req, res) => {
            const { number, name } = req.body
            await bot.dispatch('SAMPLES', { from: number, name })
            return res.end('trigger')
        })
    )

    adapterProvider.server.post(
        '/v1/blacklist',
        handleCtx(async (bot, req, res) => {
            const { number, intent } = req.body
            if (intent === 'remove') bot.blacklist.remove(number)
            if (intent === 'add') bot.blacklist.add(number)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ status: 'ok', number, intent }))
        })
    )


    adapterProvider.server.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = process.env.VERIFY_TOKEN

    const mode = req.query['hub.mode']
    const token = req.query['hub.verify_token']
    const challenge = req.query['hub.challenge']

    if (mode && token && mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED')
        res.status(200).send(challenge)
    } else {
        res.sendStatus(403)
    }
})


    httpServer(+PORT)
}

main()
