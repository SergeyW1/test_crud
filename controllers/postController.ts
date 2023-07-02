const postModel = require('../postgres/models/post')

class PostController {
    async createPost(req: any, res: any): Promise<string> {
        // const model = await postModel.create(req.body)
        const info = {
            title: req.body.title,
            content: req.body.content
        }
        const model = await postModel.create(info)
        return res.json(model)
    }

    async getPosts(req: any, res: any): Promise<string> {
        const models = await postModel.findAll()
        return res.json(models)
    }

    async getOnePost(req: any, res: any): Promise<string> {
        const id = req.params.id
        const model = await postModel.findOne({
            where: {
                id: id
            }
        })
        return res.json(model)
    }

    async updatePost(req: any, res: any): Promise<string> {
        const id = req.params.id
        const model = await postModel.update(req.body, {
            where: {
                id: id
            }
        })
        return res.json(model)
    }

    async deletePost(req: any, res: any): Promise<string> {
        const id = req.params.id
        const model = await postModel.destroy({
            where: {
                id: id
            }
        })
        return res.json(model)
    }
}

module.exports = new PostController()