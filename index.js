import Express from 'express'
import books from './books.js'

const app = Express()

/* Http Method
 GET    obtener recursos
 POST   crear un recurso
 DELETE borrar un recurso
 PUT    actualizar recurso

 API RestFULL
 Tabla Books (books)
 GET /books         obtengo TODOS los books
 GET /books/{id}    obtengo el book id = {id}
 POST /books        crea un libro
    body <= toda la data del libro
 DELETE /books/{id}   borra el book id = {id}
 PUT /books/{id}    Actualiza el book id = {id}
    body <= toda la data del libro

 (no)  GET /books?id={id} obtengo el book id = {id}


*/



app.get('/books', (request, response) => {
    response.json({
        status: 200,
        data: books,
        error:false,
        message: "Success"
    })
})

app.get('/books/:id', (request, response) => {
    const { id } = request.params
    const book = books.find(book => book.id == id)

    if (book) {
        response.json({
            status: 200,
            data: book,
            error:false,
            message: "Success"
        })
    } else {
        response.status(404).json({
            status: 404,
            data: null,
            error:true,
            message: "Book not found"
        })
    }
})

app.delete('/books/:id', (request, response) => {
    response.send('Delete book')
})

app.put('/books/:id', (request, response) => {

    response.send('Update book')
})


app.listen(3000,()=>{
    console.log('Running in port 3000')
})