function tick(info) {
    if (working) {
        if (randintC(1, 100) === 100){
            setWorking(false);
        }
    }
}

function onPlace(event) {
    var player = event.getPlayer();
    sendMessage(player, "方块被放置");
}

function onBreak(event, itemStack, drops) {
    var player = event.getPlayer();
    sendMessage(player, "方块被破坏");
}
