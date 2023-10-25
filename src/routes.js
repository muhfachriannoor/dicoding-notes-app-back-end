const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNotedByIdHandler, 
    editNotedByIdHandler, 
    deleteNoteByIdHandler
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotedByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNotedByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;