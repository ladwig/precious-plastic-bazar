
$(".col-12 ul").text(function () {
    return $(this).text().replace("Pickup", "Domestic or pickup ");
});

$(".delivery-title").text(function () {
    return $(this).text().replace("Delivery method", "Shipping method ");
});


$(".col-12 ul").text(function () {
    return $(this).text().replace("Shipping", "International");
});
