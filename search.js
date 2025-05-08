// 删除 expansion 字段
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
if (url.includes("/search")) {
  delete obj.expansion;
}
$done({ body: JSON.stringify(obj) });
