module.exports = (app) =>{

let entries = [];
app.locals.entries = entries;

app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});

app.get('/new-entry', (req, res) => {
    res.render('new-entry', { title: 'New entry'});
});

app.post('/new-entry', (req, res) => {
    if(!req.body.title || !req.body.body){
        res.send(400).send('Must have a title and a content');
    }
    
    let newEntry = {
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    }

    entries.push(newEntry);
    res.redirect('/');
});

}