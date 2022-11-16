const http=require("http");
const fs=require("fs");
const args=require("minimist")(process.argv.slice(2));

let hoc="";
let prc="";
let rec="";
fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    hoc=home;
});

fs.readFile("project.html",(err,project)=>{
    if(err){
        throw err;
    }
    prc=project;
});

fs.readFile("registration.html",(err,registration)=>{
    if(err){
        throw err;
    }
    rec=registration;
});

http
 .createServer((request,response)=>{
    let url=request.url;
    response.writeHeader(200,{"Content-Type":"text/html"});
    switch(url){
        case "/project":
            response.write(prc);
            response.end();
            break;
        case "/registration":
            response.write(rec);
            response.end();
            break;
        default:
             response.write(hoc);
             response.end();
             break;
    }
 })
 .listen(args["port"]);