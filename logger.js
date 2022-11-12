const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    // either terminate it by writing
    // res.send("Testing dskfjaskdfasld")
    // or do
    next() // It will pass to next function
}

module.exports = logger;
