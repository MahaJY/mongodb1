const express =require('express')
const router = express.Router()
const employeecontroller = require('../controllers/empcontroller');
router.get('/',employeecontroller.getallemployees)
router.get('/agefilter',employeecontroller.getemployees)
router.get('/:employeeid',employeecontroller.show)
router.post('/register',employeecontroller.register)
router.put('/update',employeecontroller.update)
router.delete('/delete',employeecontroller.delete1)
module.exports = router
