# Castle Builder in Minecraft Education Edition

A modular castle construction script for Minecraft Education Edition written in Makecode JavaScript, incorporating educational programming concepts.

## Castle Structure Preview
*Example castle structure*

## Features
- 🏰 Complete castle complex with multiple architectural elements
- 🧱 Uses 5+ different block types for varied construction
- 🪟 Automated window placement with stained glass panes
- 🌉 Functional drawbridge and water moat system
- 🏗️ Multi-level structure with accessible staircases
- 🏰 Four defensive towers with decorative battlements
- 🧭 Smart position detection based on player location

## Installation & Usage
### Access Makecode:
1. Open **Minecraft Education Edition**
2. Start a new world with **Code Builder** enabled (Press `C`)
3. Select **"New Project"** in Makecode

### Import Code:
1. Copy the entire code from `castle.ts`
2. Paste into the Makecode editor
3. Click **"Run"** to load the script into your world

### Build the Castle:
1. In-game chat, type:
   ```
   /c1
   ```
   to execute the construction

## Key Functions
### Core Construction Functions
- `buildCastleFoundation()` - Creates base foundation with mossy stone bricks
- `buildFloor(level)` - Constructs castle floors at different heights
- `buildStairs()` - Creates interconnected staircases between levels
- `buildRiver()` & `buildBridge()` - Generates water moat and crossing

### Structural Components
- `buildTower(position, dimensions)` - Builds defensive towers with windows
- `buildWalls()` - Constructs perimeter walls with strategic window placement
- `buildGate()` - Creates main entrance with iron door

### Advanced Features
- Position-aware building (uses player's current location as origin)
- Conditional window placement algorithm
- Multi-material decorative elements
- Terrain modification for moat creation

## Block Types Used
- **Mossy Stone Bricks** (Foundation)
- **Stone Bricks** (Walls)
- **Cyan Stained Glass** (Windows)
- **Dark Oak Wood** (Floors)
- **Polished Tuff** (Wharf)
- **Iron Bars** (Decoration)
- **Cobblestone Walls** (Structural)
- **Blackstone** (Battlements)
- **Copper Doors** (Entrance)
- **Red Wool** (Floor accents)
- **Quartz** (Stairs)
- **Bricks** (Roof)
- **Water** (Moat)
- **Dark Oak Slabs** (Bridge)
- **End Stone Bricks** (Decorative walls)

## Castle Features
- **Multi-level Design:** 3 accessible floors with distinct layouts
- **Defensive Systems:** 4 corner towers + gate tower with viewing windows
- **Moat System:** Water trench surrounding castle complex
- **Functional Bridge:** Wooden drawbridge crossing the moat
- **Architectural Details:** Decorative battlements, varied wall textures

## How to Use
1. Stand where you want the castle center
2. Open chat and type `/c1`
3. Watch construction sequence:
   - Foundation → Walls → Towers → Floors → Moat → Bridge

## Customization Tips
- Modify `BLOCKS` constant to change materials
- Adjust origin offset for different positioning
- Change `foundationHeight` value for elevation
- Modify window patterns in `buildWall` function

## Possible Improvements
- Add interior furnishings
- Implement redstone-activated bridge
- Create dungeon levels
- Add treasure rooms
- Implement defensive arrow systems

## Educational Applications
- Learn coordinate systems
- Practice geometric construction
- Understand looping patterns
- Explore architectural design
- Study conditional programming

> **Note:** Requires Minecraft Education Edition v1.18.45+ with Code Builder support. World must allow script execution.

