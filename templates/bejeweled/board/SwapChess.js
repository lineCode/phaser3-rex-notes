var SwapChess = function (chess1, chess2, completeCallback, scope) {
    var rexChess1 = chess1.rexChess,
        rexChess2 = chess2.rexChess;
    rexChess1.setTileZ('$' + rexChess1.$uid);
    rexChess2.setTileZ('$' + rexChess2.$uid);

    var tileXYZ1 = rexChess1.tileXYZ;
    var tileX1 = tileXYZ1.x,
        tileY1 = tileXYZ1.y;
    var tileXYZ2 = rexChess2.tileXYZ;
    var tileX2 = tileXYZ2.x,
        tileY2 = tileXYZ2.y;
    chess1.moveTo.once('complete', completeCallback, scope);
    chess1.moveTo.moveTo(tileX2, tileY2);
    chess2.moveTo.moveTo(tileX1, tileY1);

    rexChess1.setTileZ(this.chessTileZ);
    rexChess2.setTileZ(this.chessTileZ);

    return this;
};
export default SwapChess;