module.exports = {
get_shelf : (req, res) => { // method on the controller
    let {id} = req.params; // declaire a variable distructure for an object
    req
        .app
        .get('db')
        .get_shelf(id)
        .then(shelf => {
            // making a request to the db then use the method with a id paramter
            res
                .status(200)
                .send(shelf); //getting a respond with 200 ok and send a shelf in this case
        })
        .catch(err => console.log(err)); // catch getting a error message for any problems
},
}