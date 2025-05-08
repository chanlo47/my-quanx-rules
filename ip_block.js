// 拦截 http://<IPv4>/d 请求，返回 200 空白
let url = $request.url;
if (/^http:\/\/(\d{1,3}\.){3}\d{1,3}\/d$/.test(url)) {
  $done({ response: { status: 200, body: "" } });
} else {
  $done({});
}
