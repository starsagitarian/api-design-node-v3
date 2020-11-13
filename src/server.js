import express from 'express' ;
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();
const router = express.Router();

app.use('/api', router);

router.get('/me', (req, res) => {
    res.send({ Me: "testing subrouting"});
}); 

const port = 3000;

app.disable('x-powered-by');

app.use(cors()) ;
app.use(json()) ;
app.use(urlencoded({ extended: true })) ;
app.use(morgan('dev')) ;

const log = (req, res, next) => {
    console.log('logging');
    next();
};

app.get('/Data', log, (req, res) => {
    console.log(req.body);
    res.send({ Message: "Baiju's Server", 
               Greeting: "Welcome!!"}) ;
});

app.put('/Data', (req, res) => {

});

app.delete('/Data', (req, res) => {

}); 

app.post('/Data', (req, res) => {
    //req.body = { message: "sent successfully", 
     //            greeting: "hello there"};
    console.log(req.body);
    res.send(req.body);
});


// doing with app.get is called a controller 

/*app.get('/', (req, res) => {
    res.send({ Message: 'hello!!' }) ;
}) ;

app.post('/', (req, res) => {
    console.log(req.body);
    res.send({ Message: 'Thats OK!' }) ;
})
*/
export const start = () => {
    app.listen(port, () => {
        console.log('Server is listening at http://localhost:3000');
    }) ;
};
 