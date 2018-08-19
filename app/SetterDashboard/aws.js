const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
var aws_upload = ((filePath) => {
//configuring the AWS environment
console.log(filePath);
AWS.config.update({
    
     });
var s3 = new AWS.S3();
console.log(filePath);
var params = {
  Bucket: "BUCKET_NAME",
  Body : fs.createReadStream(filePath),
  Key : +"1_"+path.basename(filePath)
};
console.log(params.Body);
console.log(params)
s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }
  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});
});
module.exports = aws_upload;