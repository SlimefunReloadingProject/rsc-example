function onUse(event, itemStack){
    var onUseItem = event.getItem();
    onUseItem.setItemCharge(onUseItem, 0);
}