const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    articles = [
        {
            title: 'Test Article',
            createAt: new Date(),
            description: 'Test Description'
        },
        {
            title: 'Test Article 2',
            createAt: new Date(),
            description: 'Test Description 2'
        }
    ]
    res.render('articles/index', { articles: articles }); 
})

app.listen(3000)