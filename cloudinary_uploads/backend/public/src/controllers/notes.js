// /*

// multer add a body , file or files object to the request object 
// */

// const req ={
//     body ,
//     file ,
//     files

// // body contains value of the text fields from the input forms 
// // Both file or files contains the files uplaoded via forms 
// }

// // dont forget this in your form 

// // enctype="multipart/form-data">
// import multer from "multer"

// const upload  = multer("folder path")

// upload.single('filename')  // -- avaiale in file
// req.file

// upload.array('image',6)  // -multiple files

//  const uplaodedIamge = req.files

//  uplaodedIamge.forEach(file => {
//   console.log(file.filename)
// })


// upload.fields([{name : 'avatar' , maxCount : 1},{
//     name : 'Image' , maxCount : 3
// }])  
// // - takes array of object
//  // fields  , maxcount
// req.files 


/*
import multer  from "multer"

const uploader  = multer({dest : 'uploads/'})

isme extension preserve nhi hoga 
random name genrate hoga 
filename collision
*/

import multer from "multer";

export const  storage = multer.diskStorage({
    destination:function(req,file,cb){
cb(null,'./temp')
        
    },

    filename: function (req , file,cb) {
        const uniqueSuffix = Date.now()
        cb(null, `${uniqueSuffix}-${file.originalname}`)
    }
    // req.file.fieldname
}) 
//  request object and file uploaded by user 
//  cb mai first parameter  error and second wala destination folder
// //  cb mai first parameter  error and second wala fieldname+random number taki error na aaye.