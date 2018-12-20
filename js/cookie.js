function set_get_cookie(url,cookie_name,href) {
    var instance = axios.create({
        baseURL:url
    });
    instance.get().then(function (res)
    {
        var err = res.data.errcode;
        if (err == undefined) {
            console.log(res.data);
            document.cookie = cookie_name+"="+JSON.stringify(res.data);
            if(href!=""){
            	location.href=href;
            }
        }
        else{
            console.log(res.data.errmsg);
        }
    }).catch(function (reason) {
        console.log(reason);
    })
}
function get_cookie(cookie_name){
	var aCookie = document.cookie.split("; ");
	for (var i=0; i < aCookie.length; i++)
	{
	var aCrumb = aCookie[i].split("=");
		if (cookie_name == aCrumb[0]){
			console.log(aCrumb[1]);
			return unescape(aCrumb[1]);
		}
		
	}
	return null;
}