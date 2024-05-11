function tick(info) {
    var machine = info.machine();
    var location = info.block().getLocation();
    machine.removeCharge(location, 100);
}

function onPlace(event) {
    var player = event.getPlayer();
    sendMessage(player, "方块被放置");
}

function onBreak(event, itemStack, drops) {
    var player = event.getPlayer();
    sendMessage(player, "方块被破坏");
}