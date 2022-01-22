
// Dados
const proffys = [
    {name:"Diego Fernades",
    avatar:"https://avatars.githubusercontent.com/u/2254731?v=4",
    whatsapp:"89878785485" ,
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi veniam quisquam, accusamus dolorum" ,
    subject:"Chemistry",
    cost:"20",
    weekday:[0],
    time_from:[456],
    time_to:[1220]
 },
    {name:"Mayk",
    avatar:"https://avatars.githubusercontent.com/u/2254731?v=4",
    whatsapp:"89878785485" ,
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi veniam quisquam, accusamus dolorum" ,
    subject:"Chemistry",
    cost:"20",
    weekday:[1],
    time_from:[456],
    time_to:[1220]
 }
]

const subjects = [
    "Arts",
    "Biology",
    "Science",
    "Education",
    "Physical",
    "Geography",
    "History",
    "Math",
    "Português",
    "Chemistry",
                      
]

const weekdays = [
        "Sunday" ,
        "Monday" ,
        "Tuesday" ,
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday", 
]

// Funcionalidades 
function pageLanding(req, res){
    return res.render("index.html")
}
function pageStudy (req, res) {
    const filters = req.query
    return res.render ("study.html", { proffys, filters ,subjects, weekdays })
}
function pageGiveClasses(req, res) {
return res.render("give-classes.html")
}
// Servidor 
const express = require('express')
const server = express()

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true, 
} )

// Inicio e configuração do servidor
server
// Configurar arquivos estáticos (css, scripts, imagens )
.use(express.static("public"))

// Rotas da aplicação 
.get("/", pageLanding)
.get ("/study", pageStudy)
.get ("/give-classes", pageGiveClasses)
// start do servidor 
.listen(5500)