let body = $response.body;
let obj = JSON.parse(body);
obj.data.cards = obj.data.cards.filter(card => 
    !["天天领福利", "金融服务", "更多服务", "企业服务", "安全中心"].includes(card.title)
obj.data.cards = obj.data.cards.map(card => {
    if (card.tag === "wallet") {
        card.items = card.items.filter(item => item.title === "优惠券");
        if (card.card_type === 4) {
            card.bottom_items = card.bottom_items.filter(item => 
                ["省钱套餐", "出行里程"].includes(item.title));
        }
    }
    return card;
});
$done({body: JSON.stringify(obj)});
