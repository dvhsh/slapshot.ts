# Unofficial ["Slapshot: Rebound"](https://slapshot.gg) API Wrapper

This API wrapper is written in TypeScript using [axios](https://axios-http.com).
It wraps the Slapshot: Rebound Public API, which is documented [here](https://oddshot.notion.site/Slapshot-Public-API-7df0c5c0e67246aa941d9c7143e458db).

## Table of Contents

- [Installation](#installation)
- [Example Usage](#example-usage)
- [Interfaces](#interfaces)
  - [API Options](#api-options)
- [Enums](#enums)
  - [API](#api)
  - [Game](#game)
  - [Cosmetics](#cosmetics)
- [Methods](#methods)
  - [Matchmaking](#matchmaking)
  - [Game](#game)
  - [Lobby](#lobby)
  - [Player](#player)
  - [Shop / Cosmetics](#shop--cosmetics)
- [Types](#types)

## Installation

```bash
npm install slapshot.ts
```

## Example Usage

```ts
import Slapshot from 'slapshot.ts';

const slapshot = new Slapshot({ key: 'your api key' });

async function main(): Promise<void> {
  const game = await slapshot.getGame('game id');
  console.log(game);
}

main();
```

## Interfaces

### API Options

```ts
interface Options {
  key   : string; // API key provided by Slapshot Rebound
  env ? : string; // API environment, defaults to 'api'. Can be 'staging'.
}
```

## Enums

Enums provide predefined lists of values used throughout the API. They help standardize inputs and outputs across the methods.

### API

```ts
// Get all available API environments
Slapshot.environments;
```

#### Example Usage

```ts
const environments = Slapshot.environments;
console.log(environments); // ['api', 'staging']
```

### Game

- **Game Modes:** A list of all game modes available in Slapshot.

```ts
Slapshot.gameModes;
```

#### Example Usage

```ts
const gameModes = Slapshot.gameModes;
console.log(gameModes); // ['hockey', 'dodgepuck', 'tag']
```

- **Regions:** Available regions for matchmaking.

```ts
Slapshot.regions;
```

#### Example Usage

```ts
const regions = Slapshot.regions;
console.log(regions); // ['eu-west', 'na-east', 'na-central', 'na-west', 'oce-east']
```

- **Arenas:** A list of all arenas available in the game.

```ts
Slapshot.arenas;
```

#### Example Usage

```ts
const arenas = Slapshot.arenas;
console.log(arenas); // ['Slapstadium', 'Slapville', 'Colosseum', ...]
```

- **Game End Reasons:** Reasons why a game may end.

```ts
Slapshot.endReasons;
```

#### Example Usage

```ts
const endReasons = Slapshot.endReasons;
console.log(endReasons); // ['EndOfRegulation', 'Overtime', 'MercyRule', ...]
```

### Cosmetics

- **Cosmetic Types:** Different types of cosmetics (e.g., skins, accessories).

```ts
Slapshot.cosmeticTypes;
```

#### Example Usage

```ts
const cosmeticTypes = Slapshot.cosmeticTypes;
console.log(cosmeticTypes); // {'Hat', 'Gloves', 'Stick', ...}
```

- **Cosmetic Rarities:** The rarity levels for cosmetics.

```ts
Slapshot.cosmeticRarities;
```

#### Example Usage

```ts
const cosmeticRarities = Slapshot.cosmeticRarities;
console.log(cosmeticRarities); // {'Common', 'Rare', 'Epic', 'Legendary'}
```

## Methods

This section covers the different API methods available through this wrapper.

### Matchmaking

```ts
// Get the current matchmaking queue
await getMatchmakingQueue(regions?: string[]): Promise<any>;
```

#### Parameters:
- `regions`: An optional array of region strings (e.g., `['na-west', 'eu-west']`).

#### Example Usage

```ts
const matchmakingQueue = await slapshot.getMatchmakingQueue(['na-west']);
console.log(matchmakingQueue);
```

### Game

```ts
// Get game details by ID
await getGame(gameId: string): Promise<any>;
```

#### Parameters:
- `gameId`: The unique identifier for the game.

#### Example Usage

```ts
const game = await slapshot.getGame('game-id');
console.log(game);
```

### Lobby

```ts
// Get a lobby by ID
await getLobby(lobbyId: string): Promise<any>;
```

#### Example Usage

```ts
const lobby = await slapshot.getLobby('lobby-id');
console.log(lobby);
```

```ts
// Get all matches in a lobby
await getLobbyMatches(lobbyId: string): Promise<any>;
```

#### Example Usage

```ts
const matches = await slapshot.getLobbyMatches('lobby-id');
console.log(matches);
```

```ts
// Create a new lobby
await createLobby(lobbyCreationRequest: LobbyCreationRequest): Promise<any>;
```

#### Example Usage

```ts
const lobbyCreationRequest = {
  name: 'New Lobby',
  password: 'secret',
};
const newLobby = await slapshot.createLobby(lobbyCreationRequest);
console.log(newLobby);
```

### Player

```ts
// Get a player's outfit by player ID
await getPlayerOutfit(playerId: string): Promise<any>;
```

#### Example Usage

```ts
const outfit = await slapshot.getPlayerOutfit('player-id');
console.log(outfit);
```

```ts
// Get a Slapshot player ID from a Steam ID
await steamIDtoSlapshotID(steamId: string): Promise<any>;
```

#### Example Usage

```ts
const slapshotID = await slapshot.steamIDtoSlapshotID('steam-id');
console.log(slapshotID);
```

### Shop / Cosmetics

```ts
// Get the current shop
await getShop(): Promise<any>;
```

#### Example Usage

```ts
const shop = await slapshot.getShop();
console.log(shop);
```
