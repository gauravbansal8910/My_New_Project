const cloudinary = require('cloudinary').v2         // simply importing cloudinary library

exports.cloudnairyconnect= ()=>{        // need no parameters, will get all from .env file
    try {
        cloudinary.config({
            cloud_name : process.env.CLOUD_NAME,        // name of cloudinary cloud
            api_key : process.env.API_KEY,              // api key provided by cloudinary       // It tells Cloudinary which account is trying to perform operations (like uploading, deleting, or modifying media).
            api_secret : process.env.API_SECRET         // api secret provided by cloudinary    // A secret key used to verify the authenticity of API requests and ensure they come from an authorized source.
        })
        console.log("CD connected");

        
    } catch (error) {
        console.log("error connecting CD"+error)
    }
}