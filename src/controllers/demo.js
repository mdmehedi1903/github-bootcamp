exports.demo = (req,res)=> {
    let name = req.params.name;
    res.status(200).send(name)
}