let Service = require('node-windows').Service;
const path = require("path");

let pathFile = path.join(__dirname,'index.js');
//console.log(pathFile);
let svc = new Service({
	name: "Arm Service",
	script: pathFile
});

svc.on('install',function(){
	svc.start();
});

svc.install();