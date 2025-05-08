// 删除 monthly_card_entrance、personal_center_style_v2_vo、icon_set*
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
if (url.includes("/api/philo/personal/hub")) {
  delete obj.monthly_card_entrance;
  delete obj.personal_center_style_v2_vo;
  delete obj.icon_set;
}
$done({ body: JSON.stringify(obj) });
