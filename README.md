# Saucer Game

Simple 2D arcade game where you pilot a starship, avoid or shoot flying saucers and collect points.

## Quick start

1. Open the saucer-game folder:
   - Project config: [saucer-game/package.json](saucer-game/package.json)
   - Webpack config: [saucer-game/webpack.config.js](saucer-game/webpack.config.js)

2. Install dependencies and build:
```sh
npm install
npm run build
```

3. Run the dev server for hot reloading:
```sh
npm run dev-server
```

4. Open the generated app:
   - Production/dev output: open `saucer-game/dist/index.html`
   - Source HTML: [saucer-game/src/index.html](saucer-game/src/index.html) (edit here; build outputs to `dist/`)

## Gameplay

- Use Arrow Up / Arrow Down to move the starship vertically.
- Press Space to fire a shot.
- Destroying a saucer awards points; collisions subtract points.

## Main code locations

- Game logic: [`Game`](saucer-game/src/scripts/game.js) — [saucer-game/src/scripts/game.js](saucer-game/src/scripts/game.js)  
- Main entry: [saucer-game/src/scripts/main.js](saucer-game/src/scripts/main.js)  
- Player: [`Starship`](saucer-game/src/scripts/starship.js) — [saucer-game/src/scripts/starship.js](saucer-game/src/scripts/starship.js)  
- Enemy: [`Saucer`](saucer-game/src/scripts/saucer.js) — [saucer-game/src/scripts/saucer.js](saucer-game/src/scripts/saucer.js)  
- Projectile: [`Shoot`](saucer-game/src/scripts/shoot.js) — [saucer-game/src/scripts/shoot.js](saucer-game/src/scripts/shoot.js)  
- Input: [`KeyManager`](saucer-game/src/scripts/keyManager.js) — [saucer-game/src/scripts/keyManager.js](saucer-game/src/scripts/keyManager.js)  
- Base mobile class: [`Mobile`](saucer-game/src/scripts/mobile.js) — [saucer-game/src/scripts/mobile.js](saucer-game/src/scripts/mobile.js)  
- Styles: [saucer-game/src/style/style.css](saucer-game/src/style/style.css)  
- Images: [saucer-game/src/images](saucer-game/src/images) and [saucer-game/src/scripts/assets/images](saucer-game/src/scripts/assets/images)

## Screenshots

    
![Game Screenshot](saucer-game/docs/screenshot.png)


## Notes

- Edit code in `saucer-game/src/`, then run `npm run build` to update `saucer-game/dist/`.
- See starter README