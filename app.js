"use strict";

let express = require("express")
let app = express()

app.listen(3000, ()=>{
	console.log('server running at port 3000') 
})

// let a = this
let doA = ()=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(123)
		},200)
	})
}

let doB = ()=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(456)
		},1000)
	})
}


app.get('/', async(req, res)=>{
	this['data1'] = await doA()
	this['data2'] = await doB()
	res.send(this)
})

