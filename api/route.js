import express from 'express';
const router = express.Router();
import Auto from '../auto.leads.json';


router.route('/').get((req, res) => {
   res.json(Auto);
});

router.route('/:id').get((req, res) => {

    res.json(Auto.find((item) => {
        return item.id == req.params.id;
    }));
});

router.route('/state/:id').get((req, res) => {
    var uppercaseId = req.params.id.toUpperCase();
    res.json(Auto.filter((item) => {
        return item.consumer.state == uppercaseId;
    }));
});

router.route('/vehicle/:id').get((req, res) => {
    var uppercaseId = req.params.id.toUpperCase();
    res.json(Auto.filter((item) => {
        return item.vehicle[0].make == uppercaseId || item.vehicle[0].make == req.params.id;
    }));
});

router.route('/coverage/:id').get((req, res) => {
    res.json(Auto.filter((item) => {
        return item.coverage.former_insurer == req.params.id;
    }));
});



export default router;