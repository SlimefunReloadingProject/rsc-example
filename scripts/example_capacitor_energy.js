function tick(info) {
    var capacitor = info.machine();
    // nothing to do
}

function onPlace(event) {
    var player = event.getPlayer();
    sendMessage(player, "方块被放置");
}

function onBreak(event, itemStack, drops) {
    var player = event.getPlayer();
    sendMessage(player, "方块被破坏");
}