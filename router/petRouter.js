import { Router } from "express"
import { PrismaClient } from '@prisma/client'

const petRouter = Router()
const prisma = new PrismaClient()


petRouter.get('/pets', async (request, response) => {
    const data = await prisma.pet.findMany()
    response.json({
        status: 200,
        data: data,
        error:false,
        message: "Success"
    })
})

petRouter.get('/pets/:id', async (request, response) => {
    const { id } = request.params
    const pet = await prisma.pet.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (pet) {
        response.json({
            status: 200,
            data: pet,
            error:false,
            message: "Success"
        })
    } else {
        response.status(404).json({
            status: 404,
            data: null,
            error:true,
            message: "pet not found"
        })
    }
})

petRouter.post('/pets', async (request, response) => {
    const { name, age, type, race } = request.body
    const pet = await prisma.pet.create({
        data: {
            name,
            age,
            type,
            race
        }
    })
    response.json({
        status: 200,
        data: pet,
        error:false,
        message: "Success"
    })
})

petRouter.delete('/pets/:id', (request, response) => {
    response.send('Delete pet')
})

petRouter.put('/pets/:id', (request, response) => {

    response.send('Update pet')
})

export default petRouter