const {Router} = require('express')
const router = Router()
const postController = require('../controllers/postController')

router.post('/', postController.createPost)
router.get('/', postController.getPosts)
router.get('/:id', postController.getOnePost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)


module.exports = router