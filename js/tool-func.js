function timeFrameCount () {
    gameTime.framesCounter += 1;
}

function isKeyDown (keyCode) {
    if (keys[keyCode]) return true ; else return false;
}

function keyDownTrigger (keyCode) {
    for (let thePlayer of player) {
        if (thePlayer.hp < 1) continue;

        // Player Jump
        if (keyCode == thePlayer.controlling.jump.keyCode && thePlayer.body.touching.down && !isKeyDown(keyCode)) {	// Player Jump Detecting
            thePlayer.setVelocityY(thePlayer.jumpVelocity);
        }

        // Player shoot
        if (keyCode == thePlayer.controlling.shoot.keyCode && thePlayer.arrowsAmount > 0) {
            shootArrow(thePlayer);
        }

        // Player aim
        if (keyCode == thePlayer.controlling.aim.right.keyCode) thePlayer.aimingDirection = 0;
        if (keyCode == thePlayer.controlling.aim.righttop.keyCode) thePlayer.aimingDirection = -1 * Math.PI / 4;
        if (keyCode == thePlayer.controlling.aim.top.keyCode) thePlayer.aimingDirection = -1 * Math.PI / 2;
        if (keyCode == thePlayer.controlling.aim.lefttop.keyCode) thePlayer.aimingDirection = -3 * Math.PI / 4;
        if (keyCode == thePlayer.controlling.aim.left.keyCode) thePlayer.aimingDirection = Math.PI;
        if (keyCode == thePlayer.controlling.aim.rightbottom.keyCode) thePlayer.aimingDirection = Math.PI / 4;
        if (keyCode == thePlayer.controlling.aim.bottom.keyCode) thePlayer.aimingDirection = Math.PI / 2;
        if (keyCode == thePlayer.controlling.aim.leftbottom.keyCode) thePlayer.aimingDirection = 3 * Math.PI / 4;
    }
}
function keyUpTrigger (keyCode) {
    for (let thePlayer of player) {
        if (keyCode == thePlayer.controlling.up.keyCode) {
            thePlayer.arrowOnBodyCollecting.time = 0;
            thePlayer.arrowOnBodyCollecting.circle.clear();
            thePlayer.arrowOnBodyCollecting.done = false;
        }
    }
}
