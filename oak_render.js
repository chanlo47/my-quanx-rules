// 删除 bottom_section_list、ui.bottom_section、ui.live_section.float_info
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
if (url.includes("/api/oak/integration/render")) {
  delete obj.bottom_section_list;
  if (obj.ui) {
    delete obj.ui.bottom_section;
    delete obj.ui.live_section?.float_info;
  }
}
$done({ body: JSON.stringify(obj) });
