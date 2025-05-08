let obj = JSON.parse($response.body);
if (obj.data.disorder_cards.top_banner_card.data?.[0]?.T === "yuentu_top_banner") {
    obj.data.disorder_cards.top_banner_card.data.shift();
}
$done({body: JSON.stringify(obj)});
