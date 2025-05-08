let obj = JSON.parse($response.body);
obj.data.scene_list = obj.data.scene_list.filter(scene => scene.text !== "优惠商城");
obj.data.show_data.forEach(item => {
    if (item.scene_ids) item.scene_ids = item.scene_ids.filter(id => id !== "scene_coupon_mall");
});
$done({body: JSON.stringify(obj)});
