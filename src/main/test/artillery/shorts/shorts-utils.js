module.exports = {
    addMultipartFormData,
    saveShortId,
    saveBlobUrl,
    generateRandomUser
}


const fs = require('fs');
const FormData = require('form-data');

function addMultipartFormData(requestParams, context, ee, next) {
    const form = new FormData();
    form.append('files', fs.createReadStream("/scripts/data/teste.txt"));
    requestParams.body = form;
    return next();
}

function generateRandomUser(context, ee, next) {
    // Generate random user data
    const randomUserId = Math.random().toString(36).substring(2, 10);
    const randomUsername = Math.random().toString(36).substring(2, 10);
    const randomEmail = Math.random().toString(36).substring(2, 10) + '@example.com';
    const randomPwd = Math.random().toString(36).substring(2, 10);
    
    context.vars.userId = randomUserId;
    context.vars.displayName = randomUsername;
    context.vars.email = randomEmail;
    context.vars.pwd = randomPwd;
    
    return next();
  };

function saveShortId(requestParams, response, context, ee, next) {
    console.log(JSON.parse(response.body).shortId);
    context.shortId = response.blobUrl;
    return next();
}

function saveBlobUrl(requestParams, response, context, ee, next) {
    //console.log(response.body);
    var res = JSON.parse(response.body);
    context.vars.blobUrl = res.blobUrl;
    context.vars.shortId = res.shortId;
    return next();
}

