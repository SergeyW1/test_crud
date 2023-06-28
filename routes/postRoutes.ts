const {Router} = require('express')
const router = Router()
const postController = require('../controllers/postController')

router.post('/', postController.createPost)
router.get('/', postController.getPosts)

module.exports = router