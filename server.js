const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000 

const rappers = {
    '21 savage':{
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'Chance the Rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': ' Illinois, US'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
     },
        
} 


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req,res)=>{
    const rapperName = req.params.rapperName.toLowerCase()
    if (rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['dylan'])
    }
    
    //res.json(rappers)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better
    go catch it`)
})