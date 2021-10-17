let express = require('express');
let fs=require('fs');
app=express();


app.use('/post', express.urlencoded({extended:false}));


app.post("/post", function(req,res){
	fs.readFile("retete.json", function(err, d) {
		let p = JSON.parse(d);
		res.write('<body style="margin:0px;">');
		res.write('<div style="text-align:center;background:#333;min-height:200px;">');
		for(let i = 0; i < p.length; i++) {
			if(p[i]['titlu'].includes(req.body.nume))
				res.write('<a href="http://127.0.0.1:8080/reteta.html/?id='+p[i]['id']+'" style="color:#fff;" target="_blank">' + p[i].titlu +'</a><br>');
		}
		res.write('</div>');
		res.write('</body>');

		res.end();
	});
});

console.log("Server pornit")
app.listen(4000);
