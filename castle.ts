player.onChat("c1", function () {
    buildCastleFoundation()
    buildFloor(0)
    buildFloor(7)
    buildFloor(13)
    buildStairs()
    buildWharf()
    buildRiver()
    buildBridge()
    buildTowers()
    buildWalls()
})


const origin = { x: player.position().getValue(Axis.X), y: player.position().getValue(Axis.Y), z: player.position().getValue(Axis.Z) };

const BLOCKS = {
    MOSSY_STONE_BRICKS: Block.MossyStoneBricks,
    STONE_BRICKS: Block.StoneBricks,
    OAK_PLANKS: Block.PlanksOak,
    GLASS_PANE: Block.CyanStainedGlassPane,
    IRON_BARS: Block.IronBars,
    WATER: Block.Water,
    AIR: Block.Air,
    FENCE: Block.PolishedTuffWall,
    WHARF: Block.PolishedTuffSlab,
    BRIDGE_SLAB: Block.DarkOakWoodSlab,
    BRICK: Block.Bricks,
    COBBLE_WALL: Block.CobblestoneWall,
    CHISELED_BRICKS: Block.ChiseledStoneBricks,
    BLACK_WALL: Block.BlackstoneWall,
    DARK_OAK: Block.PlanksDarkOak,
    RED_WOOL: Block.RedWool,
    STAIRS_SLAB: Block.QuartzSlab,
    STAIRS_BLOCK: Block.BlockOfQuartz,
    ROOF: Block.Bricks,
    DOORS: Block.CopperDoor,
    WALLS: Block.EndStoneBricks
};

const foundationHeight = 1

function buildWall(start_pos: number[], blocksNum: number, dir: string){
    for (let j = foundationHeight + 1; j <= 14; j++) {
        if (dir === "x") {
            for (let i = 0; i < blocksNum; i++) {
                if (blocksNum === 3 && i === 1 && (j > foundationHeight + 3 && j < foundationHeight + 11)){
                    blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0] + i, start_pos[1]+j, start_pos[2]))
                }
                else if (blocksNum === 16 && (i === 2 || i === 3 || i === 7 || i === 8 || i === 12 || i === 13) && (j > foundationHeight + 3 && j < foundationHeight + 11)) {
                    blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
                }
                else if (blocksNum === 23 && (i === 1 || i === 3 || i === 5 || i === 7 || i === 10 || i === 11 || i === 12 || i === 15 || i === 17 || i == 19 || i == 21) && (j > foundationHeight + 3 && j < foundationHeight + 11)) {
                    blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
                }
                else{
                    blocks.place(BLOCKS.WALLS, world(start_pos[0] + i, start_pos[1]+j, start_pos[2]))
                }
            }
        }
        else {
            for (let i = 0; i < blocksNum; i++) {
                if (blocksNum === 3 && i === 1 && (j > foundationHeight + 3 && j < foundationHeight + 11)) {
                    blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0], start_pos[1]+j, start_pos[2] + i))
                }
                else if (blocksNum === 16 && (i === 2 || i === 3 || i === 7 || i === 8 || i === 12 || i === 13) && (j > foundationHeight + 3 && j < foundationHeight + 11)) {
                    blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0], start_pos[1] + j, start_pos[2] + i))
                }
                else if (blocksNum === 23 && (i === 1 || i === 3 || i === 5 || i === 7 || i === 10 || i === 11 || i === 12 || i === 14 || i === 16 || i == 18 || i == 20) && (j > foundationHeight + 3 && j < foundationHeight + 11)) {
                    blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0], start_pos[1] + j, start_pos[2] + i))
                }
                else{
                    blocks.place(BLOCKS.WALLS, world(start_pos[0], start_pos[1]+j, start_pos[2] + i))
                }
            }
        }
    }
}

function buildTowerFoundation(start_pos: number[], dims: number[]){
    for(let j = 0; j <= foundationHeight; j++){
        if(j===foundationHeight){
            blocks.fill(
                BLOCKS.DARK_OAK,
                world(start_pos[0]+1, start_pos[1]+j, start_pos[2]+1),
                world(start_pos[0]+dims[0]-1, start_pos[1]+j, start_pos[2]+dims[1]-1),
                FillOperation.Replace
            );
        }
        for (let i = 0; i <= dims[0]; i++) {
            blocks.place(BLOCKS.MOSSY_STONE_BRICKS, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
            blocks.place(BLOCKS.MOSSY_STONE_BRICKS, world(start_pos[0] + i, start_pos[1] + j, start_pos[2] + dims[1]))
        }
        for (let i = 0; i <= dims[2]; i++) {
            blocks.place(BLOCKS.MOSSY_STONE_BRICKS, world(start_pos[0], start_pos[1] + j, start_pos[2] + i))
            blocks.place(BLOCKS.MOSSY_STONE_BRICKS, world(start_pos[0] + dims[0], start_pos[1] + j, start_pos[2] + i))
        }

    }
}

function buildTower(start_pos: number[], dims: number[], tower_type: string[]) {
    for (let j = foundationHeight + 1; j <= 16; j++){
        for (let i = 0; i <= dims[0]; i++) {
            if(j===16){
                blocks.place(BLOCKS.BLACK_WALL, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
                blocks.place(BLOCKS.BLACK_WALL, world(start_pos[0] + i, start_pos[1] + j, start_pos[2] + dims[1]))
            }
            else{
                if(i===0 || i === dims[0]){
                    blocks.place(BLOCKS.COBBLE_WALL, world(start_pos[0] + i, start_pos[1]+j, start_pos[2]))
                    blocks.place(BLOCKS.COBBLE_WALL, world(start_pos[0] + i, start_pos[1]+j, start_pos[2] + dims[1]))
                }
                else{
                    if (i === 2 && ((j > foundationHeight + 3 && j < foundationHeight + 6) || (j > foundationHeight + 8 && j < foundationHeight + 11))){
                        if(tower_type[0] === "front"){
                            blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
                            blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + i, start_pos[1] + j, start_pos[2] + dims[1]))
                        }
                        else{
                            blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
                            blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0] + i, start_pos[1] + j, start_pos[2] + dims[1]))
                        }
                    }
                    else{
                        blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + i, start_pos[1]+j, start_pos[2]))
                        blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + i, start_pos[1]+j, start_pos[2] + dims[1]))
                    }
                }
            }
        }
        for (let i = 1; i <= dims[2]; i++) {
            if (j === 16) {
                blocks.place(BLOCKS.BLACK_WALL, world(start_pos[0], start_pos[1] + j, start_pos[2] + i))
                blocks.place(BLOCKS.BLACK_WALL, world(start_pos[0] + dims[0], start_pos[1] + j, start_pos[2] + i))
            }
            else{
                if (i === 2 && ((j > foundationHeight + 3 && j < foundationHeight + 6) || (j > foundationHeight + 8 && j < foundationHeight + 11))) {
                    if (tower_type[1] === "left") {
                        blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0], start_pos[1] + j, start_pos[2] + i))
                        blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + dims[0], start_pos[1] + j, start_pos[2] + i))
                    }
                    else {
                        blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0], start_pos[1] + j, start_pos[2] + i))
                        blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0] + dims[0], start_pos[1] + j, start_pos[2] + i))
                    }
                }
                else{
                    blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0], start_pos[1]+j, start_pos[2] + i))
                    blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + dims[0], start_pos[1]+j, start_pos[2] + i))
                }
            }
        }
    }
}

function buildGate(start_pos: number[], dims: number[]) {
    for (let j = foundationHeight + 1; j <= 15; j++) {
        for (let i = 0; i <= dims[0]; i++) {
            if (j === 15) {
                blocks.place(BLOCKS.BLACK_WALL, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
                blocks.place(BLOCKS.BLACK_WALL, world(start_pos[0] + i, start_pos[1] + j, start_pos[2] + dims[1]))
            }
            else {
                if (i === 0 || i === dims[0]) {
                    blocks.place(BLOCKS.COBBLE_WALL, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
                    blocks.place(BLOCKS.COBBLE_WALL, world(start_pos[0] + i, start_pos[1] + j, start_pos[2] + dims[1]))
                }
                else {
                    blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
                    blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + i, start_pos[1] + j, start_pos[2] + dims[1]))
                }
            }
        }
        for (let i = 1; i <= dims[2]; i++) {
            if (j === 15) {
                blocks.place(BLOCKS.BLACK_WALL, world(start_pos[0], start_pos[1] + j, start_pos[2] + i))
                blocks.place(BLOCKS.BLACK_WALL, world(start_pos[0] + dims[0], start_pos[1] + j, start_pos[2] + i))
            }
            else {
                blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0], start_pos[1] + j, start_pos[2] + i))
                blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + dims[0], start_pos[1] + j, start_pos[2] + i))
            }
        }
    }
    blocks.fill(
        BLOCKS.AIR,
        world(start_pos[0] + 3, start_pos[1] + foundationHeight + 1, start_pos[2]),
        world(start_pos[0] + 5, start_pos[1] + foundationHeight + 5, start_pos[2]),
        FillOperation.Replace
    );
    blocks.fill(
        BLOCKS.GLASS_PANE,
        world(start_pos[0] + 3, start_pos[1] + foundationHeight + 7, start_pos[2]),
        world(start_pos[0] + 5, start_pos[1] + foundationHeight + 10, start_pos[2]),
        FillOperation.Replace
    );
    blocks.place(BLOCKS.DOORS, world(start_pos[0] + 4, start_pos[1] + foundationHeight + 1, start_pos[2] + 6))

}

function buildFoundation(block: Block, start_pos: number[], blocksNum: number, dir: string){
    if(dir === "x"){
        for (let i = 0; i < blocksNum; i++){
            blocks.place(block, world(start_pos[0] + i, start_pos[1], start_pos[2]))
        }
    }
    else{
        for (let i = 0; i < blocksNum; i++) {
            blocks.place(block, world(start_pos[0], start_pos[1], start_pos[2] + i))
        }
    }
}

function buildFloor(level: number){
    let firstBlock = BLOCKS.DARK_OAK
    let secondBlock = BLOCKS.RED_WOOL
    if(level===13){
        firstBlock = BLOCKS.ROOF
    }
    blocks.fill(
        firstBlock,
        world(origin.x + 3, origin.y + foundationHeight + level, origin.z + 5),
        world(origin.x + 4, origin.y + foundationHeight + level, origin.z + 20),
        FillOperation.Replace
    );

    blocks.fill(
        firstBlock,
        world(origin.x + 5, origin.y + foundationHeight + level, origin.z + 3),
        world(origin.x + 6, origin.y + foundationHeight + level, origin.z + 22),
        FillOperation.Replace
    );

    blocks.fill(
        firstBlock,
        world(origin.x + 7, origin.y + foundationHeight + level, origin.z + 2),
        world(origin.x + 9, origin.y + foundationHeight + level, origin.z + 22),
        FillOperation.Replace
    );

    blocks.fill(
        firstBlock,
        world(origin.x + 10, origin.y + foundationHeight + level, origin.z + 1),
        world(origin.x + 11, origin.y + foundationHeight + level, origin.z + 22),
        FillOperation.Replace
    );

    blocks.fill(
        firstBlock,
        world(origin.x + 12, origin.y + foundationHeight + level, origin.z + 5),
        world(origin.x + 14, origin.y + foundationHeight + level, origin.z + 22),
        FillOperation.Replace
    );
    if(level===13){
        blocks.fill(
            firstBlock,
            world(origin.x + 15, origin.y + foundationHeight + level, origin.z + 5),
            world(origin.x + 17, origin.y + foundationHeight + level, origin.z + 22),
            FillOperation.Replace
        );
    }else{
        blocks.fill(
            secondBlock,
            world(origin.x + 15, origin.y + foundationHeight + level, origin.z + 5),
            world(origin.x + 17, origin.y + foundationHeight + level, origin.z + 22),
            FillOperation.Replace
        );
    }

    blocks.fill(
        firstBlock,
        world(origin.x + 18, origin.y + foundationHeight + level, origin.z + 5),
        world(origin.x + 20, origin.y + foundationHeight + level, origin.z + 22),
        FillOperation.Replace
    );

    blocks.fill(
        firstBlock,
        world(origin.x + 21, origin.y + foundationHeight + level, origin.z + 1),
        world(origin.x + 22, origin.y + foundationHeight + level, origin.z + 22),
        FillOperation.Replace
    );

    blocks.fill(
        firstBlock,
        world(origin.x + 23, origin.y + foundationHeight + level, origin.z + 2),
        world(origin.x + 25, origin.y + foundationHeight + level, origin.z + 22),
        FillOperation.Replace
    );

    blocks.fill(
        firstBlock,
        world(origin.x + 26, origin.y + foundationHeight + level, origin.z + 3),
        world(origin.x + 27, origin.y + foundationHeight + level, origin.z + 22),
        FillOperation.Replace
    );

    blocks.fill(
        firstBlock,
        world(origin.x + 28, origin.y + foundationHeight + level, origin.z + 5),
        world(origin.x + 29, origin.y + foundationHeight + level, origin.z + 20),
        FillOperation.Replace
    );

}

function buildStairs(){
    let i = 1
    let j = foundationHeight+1
    while(j < 5){
        blocks.fill(
            BLOCKS.STAIRS_SLAB,
            world(origin.x + 15, origin.y + j, origin.z + 14+i),
            world(origin.x + 17, origin.y + j, origin.z + 14+i),
            FillOperation.Replace
        );
        blocks.fill(
            BLOCKS.AIR,
            world(origin.x + 15, origin.y + foundationHeight + 7, origin.z + 14 + i),
            world(origin.x + 17, origin.y + foundationHeight+ 7, origin.z + 14 + i),
            FillOperation.Replace
        );
        i = i+1
        blocks.fill(
            BLOCKS.STAIRS_BLOCK,
            world(origin.x + 15, origin.y + j, origin.z + 14 + i),
            world(origin.x + 17, origin.y + j, origin.z + 14 + i),
            FillOperation.Replace
        );
        blocks.fill(
            BLOCKS.AIR,
            world(origin.x + 15, origin.y + foundationHeight + 7, origin.z + 14 + i),
            world(origin.x + 17, origin.y + foundationHeight + 7, origin.z + 14 + i),
            FillOperation.Replace
        );
        i = i+1
        j = j+1
    }
    blocks.fill(
        BLOCKS.STAIRS_BLOCK,
        world(origin.x + 15, origin.y + 4, origin.z + 21),
        world(origin.x + 17, origin.y + 4, origin.z + 22),
        FillOperation.Replace
    );
    blocks.fill(
        BLOCKS.AIR,
        world(origin.x + 15, origin.y + foundationHeight + 7, origin.z + 21),
        world(origin.x + 17, origin.y + foundationHeight + 7, origin.z + 22),
        FillOperation.Replace
    );
    j = 5 
    i = 1
    while (j < 9) {
        blocks.fill(
            BLOCKS.AIR,
            world(origin.x + 17 + i, origin.y + foundationHeight + 7, origin.z + 20),
            world(origin.x + 17 + i, origin.y + foundationHeight + 7, origin.z + 22),
            FillOperation.Replace
        );
        blocks.fill(
            BLOCKS.STAIRS_SLAB,
            world(origin.x + 17 + i, origin.y + j, origin.z + 20),
            world(origin.x + 17 + i, origin.y + j, origin.z + 22),
            FillOperation.Replace
        );
        blocks.fill(
            BLOCKS.AIR,
            world(origin.x + 15 - i, origin.y + foundationHeight + 7, origin.z + 20),
            world(origin.x + 15 - i, origin.y + foundationHeight + 7, origin.z + 22),
            FillOperation.Replace
        );
        blocks.fill(
            BLOCKS.STAIRS_SLAB,
            world(origin.x + 15 - i, origin.y + j, origin.z + 20),
            world(origin.x + 15 - i, origin.y + j, origin.z + 22),
            FillOperation.Replace
        );
        i = i + 1
        blocks.fill(
            BLOCKS.AIR,
            world(origin.x + 17 + i, origin.y + foundationHeight + 7, origin.z + 20),
            world(origin.x + 17 + i, origin.y + foundationHeight + 7, origin.z + 22),
            FillOperation.Replace
        );
        blocks.fill(
            BLOCKS.STAIRS_BLOCK,
            world(origin.x + 17 + i, origin.y + j, origin.z + 20),
            world(origin.x + 17 + i, origin.y + j, origin.z + 22),
            FillOperation.Replace
        );
        blocks.fill(
            BLOCKS.AIR,
            world(origin.x + 15 - i, origin.y + foundationHeight + 7, origin.z + 20),
            world(origin.x + 15 - i, origin.y + foundationHeight + 7, origin.z + 22),
            FillOperation.Replace
        );
        blocks.fill(
            BLOCKS.STAIRS_BLOCK,
            world(origin.x + 15 - i, origin.y + j, origin.z + 20),
            world(origin.x + 15 - i, origin.y + j, origin.z + 22),
            FillOperation.Replace
        );
        i = i + 1
        j = j + 1
    }
}

function buildCastleFoundation(){
    buildTowerFoundation([origin.x, origin.y, origin.z], [4, 4, 3])
    buildTowerFoundation([origin.x + 28, origin.y, origin.z], [4, 4, 3])
    buildTowerFoundation([origin.x, origin.y, origin.z+21], [4, 4, 3])
    buildTowerFoundation([origin.x + 28, origin.y, origin.z + 21], [4, 4, 3])
    buildTowerFoundation([origin.x + 12, origin.y, origin.z -2], [8, 6, 5])
    for(let j = 0; j<=foundationHeight; j++){
        buildFoundation(BLOCKS.MOSSY_STONE_BRICKS, [origin.x + 5, origin.y+j, origin.z + 2], 2, "x")
        buildFoundation(BLOCKS.MOSSY_STONE_BRICKS, [origin.x + 7, origin.y+j, origin.z + 1], 3, "x")
        buildFoundation(BLOCKS.MOSSY_STONE_BRICKS, [origin.x + 10, origin.y+j, origin.z], 2, "x")
        buildFoundation(BLOCKS.MOSSY_STONE_BRICKS, [origin.x + 21, origin.y+j, origin.z], 2, "x")
        buildFoundation(BLOCKS.MOSSY_STONE_BRICKS, [origin.x + 23, origin.y+j, origin.z + 1], 3, "x")
        buildFoundation(BLOCKS.MOSSY_STONE_BRICKS, [origin.x + 26, origin.y+j, origin.z + 2], 2, "x")
        buildFoundation(BLOCKS.MOSSY_STONE_BRICKS, [origin.x + 5, origin.y+j, origin.z + 23], 23, "x")
        buildFoundation(BLOCKS.MOSSY_STONE_BRICKS, [origin.x + 2, origin.y+j, origin.z + 5], 16, "z")
        buildFoundation(BLOCKS.MOSSY_STONE_BRICKS, [origin.x + 30, origin.y+j, origin.z + 5], 16, "z")
    }
}

function buildWharf(){
    buildFoundation(BLOCKS.WHARF, [origin.x + 9, origin.y, origin.z - 10], 6, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 4, origin.y, origin.z - 9], 6, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x, origin.y, origin.z - 8], 5, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 3, origin.y, origin.z - 7], 4, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 5, origin.y, origin.z - 6], 3, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 6, origin.y, origin.z - 5], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 7, origin.y, origin.z - 4], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 8, origin.y, origin.z - 3], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 8, origin.y, origin.z - 2], 2, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x - 9, origin.y, origin.z - 1], 4, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x - 10, origin.y, origin.z + 2], 5, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x - 11, origin.y, origin.z + 6], 14, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x - 10, origin.y, origin.z + 19], 5, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x - 9, origin.y, origin.z + 23], 4, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x - 8, origin.y, origin.z + 26], 2, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x - 8, origin.y, origin.z + 28], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 7, origin.y, origin.z + 29], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 6, origin.y, origin.z + 30], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 5, origin.y, origin.z + 31], 3, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x - 3, origin.y, origin.z + 32], 4, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x, origin.y, origin.z + 33], 5, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 4, origin.y, origin.z + 34], 6, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 9, origin.y, origin.z + 35], 15, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 23, origin.y, origin.z + 34], 6, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 28, origin.y, origin.z + 33], 5, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 32, origin.y, origin.z + 32], 4, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 35, origin.y, origin.z + 31], 3, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 37, origin.y, origin.z + 30], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 38, origin.y, origin.z + 29], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 39, origin.y, origin.z + 28], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 40, origin.y, origin.z + 26], 2, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x + 41, origin.y, origin.z + 23], 4, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x + 42, origin.y, origin.z + 19], 5, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x + 43, origin.y, origin.z + 6], 14, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x + 42, origin.y, origin.z + 2], 5, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x + 41, origin.y, origin.z - 1], 4, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x + 40, origin.y, origin.z - 2], 2, "z")
    buildFoundation(BLOCKS.WHARF, [origin.x + 39, origin.y, origin.z - 3], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 38, origin.y, origin.z - 4], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 37, origin.y, origin.z - 5], 2, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 35, origin.y, origin.z - 6], 3, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 32, origin.y, origin.z - 7], 4, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 28, origin.y, origin.z - 8], 5, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 23, origin.y, origin.z - 9], 6, "x")
    buildFoundation(BLOCKS.WHARF, [origin.x + 18, origin.y, origin.z - 10], 6, "x")
}

function buildBridge(){
    blocks.fill(
        BLOCKS.BRIDGE_SLAB,
        world(origin.x + 17, origin.y, origin.z - 10),
        world(origin.x + 15, origin.y, origin.z - 6),
        FillOperation.Replace
    );
    blocks.fill(
        BLOCKS.DARK_OAK,
        world(origin.x + 17, origin.y, origin.z - 5),
        world(origin.x + 15, origin.y, origin.z - 5),
        FillOperation.Replace
    );
    blocks.fill(
        BLOCKS.BRIDGE_SLAB,
        world(origin.x + 17, origin.y+1, origin.z - 4),
        world(origin.x + 15, origin.y+1, origin.z - 4),
        FillOperation.Replace
    );
    blocks.fill(
        BLOCKS.DARK_OAK,
        world(origin.x + 17, origin.y+1, origin.z - 3),
        world(origin.x + 15, origin.y+1, origin.z - 3),
        FillOperation.Replace
    );
}

function buildRiver(){
    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 22, origin.y-1, origin.z - 9),
        world(origin.x + 10, origin.y-3, origin.z - 4),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 9, origin.y - 1, origin.z - 8),
        world(origin.x + 5, origin.y - 3, origin.z - 2),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 4, origin.y-1, origin.z - 7),
        world(origin.x + 1, origin.y-3, origin.z - 2),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x, origin.y-1, origin.z - 6),
        world(origin.x - 2, origin.y-3, origin.z - 2),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x - 3, origin.y-1, origin.z - 5),
        world(origin.x - 4, origin.y-3, origin.z + 30),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x - 5, origin.y-1, origin.z - 4),
        world(origin.x - 5, origin.y-3, origin.z + 29),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x - 6, origin.y-1, origin.z - 3),
        world(origin.x - 6, origin.y-3, origin.z + 28),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x - 7, origin.y-1, origin.z - 2),
        world(origin.x - 7, origin.y-3, origin.z + 27),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x - 8, origin.y-1, origin.z),
        world(origin.x - 8, origin.y-3, origin.z + 25),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x - 9, origin.y-1, origin.z + 3),
        world(origin.x - 9, origin.y-3, origin.z + 22),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x - 10, origin.y-1, origin.z + 7),
        world(origin.x - 10, origin.y-3, origin.z + 18),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x, origin.y-1, origin.z + 27),
        world(origin.x - 2, origin.y-3, origin.z + 31),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 4, origin.y-1, origin.z + 27),
        world(origin.x + 1, origin.y-3, origin.z + 32),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 9, origin.y-1, origin.z + 27),
        world(origin.x + 5, origin.y-3, origin.z + 33),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 22, origin.y-1, origin.z + 27),
        world(origin.x + 10, origin.y-3, origin.z + 34),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 23, origin.y-1, origin.z + 27),
        world(origin.x + 27, origin.y-3, origin.z + 33),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 28, origin.y-1, origin.z + 27),
        world(origin.x + 31, origin.y-3, origin.z + 32),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 32, origin.y-1, origin.z + 27),
        world(origin.x + 34, origin.y-3, origin.z + 31),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 35, origin.y-1, origin.z - 5),
        world(origin.x + 36, origin.y-3, origin.z + 30),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 37, origin.y-1, origin.z - 4),
        world(origin.x + 37, origin.y-3, origin.z + 29),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 38, origin.y-1, origin.z - 3),
        world(origin.x + 38, origin.y-3, origin.z + 28),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 39, origin.y-1, origin.z - 2),
        world(origin.x + 39, origin.y-3, origin.z + 27),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 40, origin.y-1, origin.z),
        world(origin.x + 40, origin.y-3, origin.z + 25),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 41, origin.y-1, origin.z + 3),
        world(origin.x + 41, origin.y-3, origin.z + 22),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 42, origin.y-1, origin.z + 7),
        world(origin.x + 42, origin.y-3, origin.z + 18),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x, origin.y-1, origin.z - 6),
        world(origin.x - 2, origin.y-3, origin.z - 2),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 34, origin.y-1, origin.z - 6),
        world(origin.x + 32, origin.y-3, origin.z - 2),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 31, origin.y-1, origin.z - 7),
        world(origin.x + 28, origin.y-3, origin.z - 2),
        FillOperation.Replace
    );

    blocks.fill(
        BLOCKS.WATER,
        world(origin.x + 27, origin.y-1, origin.z - 8),
        world(origin.x + 23, origin.y-3, origin.z - 2),
        FillOperation.Replace
    );
}

function buildWalls(){
    buildWall([origin.x + 5, origin.y, origin.z + 2], 2, "x")
    buildWall([origin.x + 7, origin.y, origin.z + 1], 3, "x")
    buildWall([origin.x + 10, origin.y, origin.z], 2, "x")
    buildWall([origin.x + 21, origin.y, origin.z], 2, "x")
    buildWall([origin.x + 23, origin.y, origin.z + 1], 3, "x")
    buildWall([origin.x + 26, origin.y, origin.z + 2], 2, "x")
    buildWall([origin.x + 5, origin.y, origin.z + 23], 23, "x")
    buildWall([origin.x + 2, origin.y, origin.z + 5], 16, "z")
    buildWall([origin.x + 30, origin.y, origin.z + 5], 16, "z")
}

function buildTowers(){
    buildTower([origin.x, origin.y, origin.z], [4, 4, 3], ["front", "left"])
    buildTower([origin.x + 28, origin.y, origin.z], [4, 4, 3], ["front", "right"])
    buildTower([origin.x, origin.y, origin.z + 21], [4, 4, 3], ["back", "left"])
    buildTower([origin.x + 28, origin.y, origin.z + 21], [4, 4, 3], ["back", "right"])
    buildGate([origin.x + 12, origin.y, origin.z - 2], [8, 6, 5])
}