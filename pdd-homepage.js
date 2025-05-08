const url = $request.url;
if (!$response.body) $done({});
try {
    let obj = JSON.parse($response.body);
    
    const cleanTabs = (tabs) => {
        return tabs?.filter(i => /(chat_list|index|personal)/.test(i?.link)) || [];
    };

    if (url.includes("/api/alexa/homepage/hub") && obj?.result) {
        // 底部标签栏处理
        obj.result.bottom_tabs = cleanTabs(obj.result.bottom_tabs);
        obj.result.buffer_bottom_tabs = cleanTabs(obj.result.buffer_bottom_tabs);
        
        // 删除多余模块
        const deleteKeys = [
            'result.dy_module.irregular_banner_dy',
            'result.search_bar_hot_query',
            'result.top_skin'
        ];
        deleteKeys.forEach(path => {
            const keys = path.split('.');
            keys.reduce((acc, key, index) => {
                if (index === keys.length - 1 && acc[key]) {
                    delete acc[key];
                }
                return acc[key];
            }, obj);
        });
    }
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    console.log(`PDD处理错误: ${e}`);
    $done({});
}
