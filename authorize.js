const authorize = (req,res,next) =>{
    const {user} = req.query
    if(user==='john'){
        req.user = {name:'john',id:'3'}
        next()
    }
    else{
        console.log("Unauthorize")
        next()
    }
    // console.log("Authorize")
    // next()
}

module.exports = authorize