/*
arglobe scan qcode success
MITM = api.arglobe.cn
 {"msg":"success_activation_code","errno":0}
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const device = '/device';

if (url.indexOf(device) != -1) {
	obj.msg = "success_activation_code";
	obj.errno = 0;
	body = JSON.stringify(obj);
}


$done({body});