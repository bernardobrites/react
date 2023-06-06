const express = require('express')

module.exports=function(server){
    //Definir Url base para todas as rotas
    const router=express.Router()
    server.use('/api',router)
    //Rotas de Ciclo de Pagamneto
    const BillingCycle=require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router,'/billingCycles')
}

