let obj = JSON.parse($response.body);
obj.data.order_components = obj.data.order_components.filter(comp => comp.name !== "passenger_common_casper");
$done({body: JSON.stringify(obj)});
