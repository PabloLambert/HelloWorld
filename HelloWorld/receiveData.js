exports.handler = function(event, context, callback) {
    
    console.log("mis datos son:");
    callback(null, {"message": "Successfully executed"});
}