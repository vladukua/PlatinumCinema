/*function test() {
	document.getElementById("window").style.display="block";
}*/
/*
function show(state){

		document.getElementById('window').style.display = state;			
		document.getElementById('wrap').style.display = state; 			
}*/
var modularpattern = (function() {
    // your module code goes here
    if (document.getElementById("window") != null) {
	    document.getElementById("window").onclick = function (e) {
	    	e.target.style.backgroundColor="red";
			if(e.target.tagName == "LI"){
				e.target.style.backgroundColor="red";
			}
		}
	}
	else {
		console.log("bad");
	}

    return {
        show:function(state) {
			document.getElementById('window').style.display = state;			
			document.getElementById('wrap').style.display = state; 	
        },
        logshow:function(state) {
			document.getElementById('log-window').style.display = state;			
			document.getElementById('log-wrap').style.display = state; 	
        }
    }   
}());
