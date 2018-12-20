function GetRequest(num) {
	var url = location.search; //获取url中"?"符后的字串
	var return_strs;
	if(url.indexOf("?") != -1) { //判断是否有参数
		var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
		strs = str.split("="); //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
		if(num == null) {
			return_strs =strs[1].split("&")[0];;
		
		} else {
			return_strs = strs[num].split("&")[0];
		}
		return return_strs;
	}
}