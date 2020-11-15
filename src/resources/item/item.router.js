import { Router } from 'express';
import { get } from 'lodash';

const router = Router();

const controller = (req, res) => {
    res.send({ 'message': 'jello!!'}); 
}

router.route('/api')
      .get(controller) // this is get may
      .post(controller); // for CREAT

router.route('/api/:id')
      .put(controller) // for update
      .delete(controller) //for delete
      get(controller); // read -> for get one


// routes not needing individual id
router.route('/')
      .get() // Read -> for many
      .post(); // Create 


// routes were individual id is needed
router.route('/:id')
      .get() // Read -> for one
      .put() // Update
      .delete() // delete

//C R U D 


export default router;
