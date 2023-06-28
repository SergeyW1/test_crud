const postModel = require('../postgres/models/post')

class PostController {
    async createPost(req: any, res: any): Promise<string> {
        const model = await postModel.create(req.body)
        return res.json(model)
    }

    async getPosts(req: any, res: any): Promise<string> {
        const models = await postModel.findAll()
        return res.json(models)
    }
}

module.exports = new PostController()