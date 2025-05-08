let obj = JSON.parse($response.body);
obj.data.order_cards.nav_list_card.data = obj.data.order_cards.nav_list_card.data.filter(nav => 
    ["dache_anycar", "driverservice", "bike", "carmate"].includes(nav.nav_id));
obj.data.disorder_cards.bottom_nav_list.data = obj.data.disorder_cards.bottom_nav_list.data.filter(nav => 
    ["v6x_home", "home_page", "user_center"].includes(nav.id));
$done({body: JSON.stringify(obj)});
