const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/api/alexa/homepage/hub")) {
  if (obj?.result) {
    if (obj?.result?.bottom_tabs?.length > 0) {
      obj.result.bottom_tabs = obj.result.bottom_tabs.filter((i) => /(?:chat_list|index|personal)/.test(i?.link));
    }
    if (obj?.result?.buffer_bottom_tabs?.length > 0) {
      obj.result.buffer_bottom_tabs = obj.result.buffer_bottom_tabs.filter((i) => /(?:chat_list|index|personal)/.test(i?.link));
    }
    if (obj?.result?.dy_module?.irregular_banner_dy) {
      delete obj.result.dy_module.irregular_banner_dy;
    }
    if (obj?.result?.search_bar_hot_query) {
      delete obj.result.search_bar_hot_query;
    }
    if (obj?.result?.top_skin) {
      delete obj.result.top_skin;
    }
  }
}

$done({ body: JSON.stringify(obj) });
