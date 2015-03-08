$("#save").click(function(){

    localStorage.nameInput = $('#nameInput').val();
    localStorage.colorInput = $('#colorInput').val();
    localStorage.GUID = generateUUID();
    if(localStorage.nameInput.length != 0 && localStorage.colorInput.length != 0){
	    $('#result').text( 
	    	"Hello " + localStorage.nameInput + ", " +
	    	"your session GUID is " + localStorage.GUID);
	    $('body').css('background-color', localStorage.colorInput);
	}
});

/* Source: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript */
function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

