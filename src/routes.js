const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const WorkstationController = require('./controllers/WorkstationController')
const MeetingController = require('./controllers/MeetingController')
const LoginController = require('./controllers/LoginController')



//Login route
routes.post('/api/login', LoginController.store) 



//CRUD USERS
routes.get('/api/users', UserController.index)  //Listar todos users
routes.get('/api/users/:_id', UserController.details)  //Listar infos de um user 
routes.post('/api/user/register', UserController.create) // Criar user
routes.put('/api/user/edit', UserController.update) // Editar user
routes.delete('/api/users/:_id', UserController.delete) // Deletar user



//CRUD WORKSTATION
routes.get('/api/workstations', WorkstationController.index)  //Listar todas workstations
routes.get('/api/workstation/:_id', WorkstationController.details)  //Listar infos de uma workstation
routes.post('/api/workstation/register', WorkstationController.create) // Criar workstations
routes.put('/api/workstation/edit', WorkstationController.update) // Editar workstation
routes.delete('/api/workstation/:_id', WorkstationController.delete) // Deletar workstation


//CRUD MEETINGS
routes.get('/api/meetings', MeetingController.index)  //Listar todas meetings
routes.get('/api/meeting/:_id', MeetingController.details)  //Listar infos de uma meeting
routes.post('/api/meeting/register', MeetingController.create) // Criar meeting THIS
routes.put('/api/meeting/edit', MeetingController.update) // Editar meeting
routes.delete('/api/meeting/:_id', MeetingController.delete) // Deletar meeting





module.exports = routes