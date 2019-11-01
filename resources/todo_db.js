/**
 * 
 * @typedef {Object} TODO
 * @property {String} title - Title of the TODO.
 * @property {String} description - Description of your TODO.
 */

/**
 * @param {TODO} data
 */
async function insertToDo(data) {
    return new Promise(function(resolve, reject) {
        global.conn.collection("todo").insertOne(data, (error, resp) => {
            if (error) {
                reject({ "status": "error", "data": error })
            }




        })
    })


}


/**
 * @param {String} title - The title of the TODO being deleted
 */
async function deleteToDo(title) {
    return new Promise(function(resolve, reject) {
        global.conn.collection("todo").deleteOne({ 'title': title }, (error, resp) => {
            if (error) {
                reject({
                    "status": "error",
                    "data": {
                        'error': error,
                        "info": "title needed"
                    }
                })
            }

        })
    })


}


async function getAllToDos() {

    return new Promise(function(resolve, reject) {

        global.conn.collection("todo").find({}).limit(100).toArray(function(err, result) {
            if (err) throw err;

            resolve({
                "status": "success",
                "data": result
            })

        })

    })
}

module.exports = {
    getAllToDos,
    deleteToDo,
    insertToDo
}