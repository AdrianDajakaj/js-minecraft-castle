player.onChat("c1", function () {
    buildCastleFoundation()
    buildWharf()
    buildRiver()
    buildBridge()
    buildTower([origin.x, origin.y, origin.z], [4, 4, 3])
    buildTower([origin.x + 28, origin.y, origin.z], [4, 4, 3])
    buildTower([origin.x, origin.y, origin.z + 21], [4, 4, 3])
    buildTower([origin.x + 28, origin.y, origin.z + 21], [4, 4, 3])
})


const origin = { x: player.position().getValue(Axis.X), y: player.position().getValue(Axis.Y), z: player.position().getValue(Axis.Z) };

const BLOCKS = {
    MOSSY_STONE_BRICKS: Block.MossyStoneBricks,
    STONE_BRICKS: Block.StoneBricks,
    OAK_PLANKS: Block.PlanksOak,
    GLASS_PANE: Block.GrayStainedGlassPane,
    IRON_BARS: Block.IronBars,
    WATER: Block.Water,
    STAIRS: Block.OakWoodStairs,
    AIR: Block.Air,
    FENCE: Block.PolishedTuffWall,
    WHARF: Block.PolishedTuffSlab,
    BRIDGE: Block.DarkOakWoodSlab,
    BRICK: Block.Bricks,
    COBBLE_WALL: Block.CobblestoneWall,
    CHISELED_BRICKS: Block.ChiseledStoneBricks
};

const foundationHeight = 1
const castleParameters = {
    tower1: {
        x_pos: [origin.x, origin.x+4],
        z_pos: [origin.z, origin.z+3]
    }
}

function buildTowerFoundation(start_pos: number[], dims: number[]){
    for(let j = 0; j <= foundationHeight; j++){
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

function buildTower(start_pos: number[], dims: number[]) {
    for (let j = foundationHeight + 1; j <= 10; j++){
        for (let i = 0; i <= dims[0]; i++) {
            if(i===0 || i === dims[0]){
                blocks.place(BLOCKS.COBBLE_WALL, world(start_pos[0] + i, start_pos[1]+j, start_pos[2]))
                blocks.place(BLOCKS.COBBLE_WALL, world(start_pos[0] + i, start_pos[1]+j, start_pos[2] + dims[1]))
            }
            else{
                if(i===2 && j>foundationHeight+3 && j < foundationHeight+6){
                    blocks.place(BLOCKS.GLASS_PANE, world(start_pos[0] + i, start_pos[1] + j, start_pos[2]))
                    blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + i, start_pos[1] + j, start_pos[2] + dims[1]))
                }
                else{
                    blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + i, start_pos[1]+j, start_pos[2]))
                    blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + i, start_pos[1]+j, start_pos[2] + dims[1]))
                }
            }
        }
        for (let i = 1; i <= dims[2]; i++) {
            blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0], start_pos[1]+j, start_pos[2] + i))
            blocks.place(BLOCKS.CHISELED_BRICKS, world(start_pos[0] + dims[0], start_pos[1]+j, start_pos[2] + i))
        }
    }
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
        BLOCKS.BRIDGE,
        world(origin.x + 17, origin.y, origin.z - 10),
        world(origin.x + 15, origin.y, origin.z - 3),
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