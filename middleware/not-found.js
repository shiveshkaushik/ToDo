const notFound = (req,res) =>{
    res.status(404).send('Route not available')
};

module.exports = notFound;