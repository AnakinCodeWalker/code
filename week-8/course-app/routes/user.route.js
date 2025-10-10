import express from 'express'

import {Router} from 'express'

import loginHandler from '../controllers/login.controller'
import signupHandler from '../controllers/signup.controller'

const login = Router.get('/login',loginHandler)

const signup =Router.post('/signup',signupHandler)

export{login,signup}

