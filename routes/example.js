const exampleController = require('../controllers/exampleController')

module.exports = router =>{
	router.route('/')
		.get((req, res) => res.json({message:'Welcome to your example page'}))
		.post((req, res) => res.json({message:'Welcome to your example page'}))

	router.get('/all', exampleController.getEntries)

	router.put('/add', exampleController.storeEntry) //Send a put request to store an entry
	router.post('/update', exampleController.updateEntry) // Send a post request to update an entry
	router.delete('/delete', exampleController.deleteEntry) // Send a delete request to delete an entry

}