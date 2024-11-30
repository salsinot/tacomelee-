namespace SpriteKind {
    export const muro = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnRandomTile(PLAYER1, assets.tile`myTile1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.LoopingInBackground)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PLAYER1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 f 5 5 f f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 f 5 5 5 f . . . 
        . . . . f 5 5 f f f 5 5 f . . . 
        . . . . . f 5 5 f 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f . . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 f 5 5 f f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 f 5 5 5 f . . . 
        . . . . f 5 5 f f f 5 5 f . . . 
        . . . . . f 5 5 f 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f . . . . . f . . . . 
        `],
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    sprites.destroy(PLAYER1)
    sprites.destroy(calaca)
    tiles.setCurrentTilemap(tilemap`nivel8`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffff5555555fffffffffffffffffffffff555ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffff5555fff555555555fff555fffffffff555555555fffffffffff555fffffff555ffffffff
        fffff555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555fffff55555fff555555555fff555fffffffff555555555fffffff5555555fffffff555ffffffff
        fffff555555555555555fffffffffffffffffffffffffffffffffffffff5555555ffffffffffff5555fffff5555ffff555555555fff555fffffffff555f55555fffffff5555555fffffff555ffffffff
        fffff555555555555555555ffffffffff555ffffffffffffffffffffff555555555fffffffffff5555ffff55555ffff555fffffffff555fffffffff555fffffffffffff5555555fffffff555ffffffff
        ffffffffffff55555555555fffffffff5555ffffffffffffffffffffff5555555555ffffffffff55555ff555555ffff555fffffffff555fffffffff555fffffffffffff555fffffffffff555ffffffff
        ffffffffffff555fff55555fffffffff55555fffffff5555fffffffff55555ff55555fffffffff55555f5555555ffff55555555ffff555fffffffff555555555fffffff555fffffffffff555ffffffff
        ffffffffffff555fffffffffffffffff55555ffffff55555fffffffff5555ffff55555ffffffff5555555555555ffff55555555ffff555fffffffff555555555fffffff5555555fffffff555ffffffff
        ffffffffffff555fffffffffffffffff55555fffff555555ffffffff5555ffffff5555ffffffff555555555f555ffff55555555ffff555fffffffff555555555fffffff5555555fffffff555ffffffff
        ffffffffffff555fffffffffffffffff55555fffff5555ffffffffff5555ffffff55555fffffff55555555ff555ffff555fffffffff555fffffffff555fffffffffffff5555555fffffff555ffffffff
        ffffffffffff555ffffffffffffffff555555ffff55555ffffffffff5555fffffff5555fffffff555f5555ff555f55f555fffffffff555fffffffff5555ffffffffffff555fffffffffff555ffffffff
        ffffffffffff555ffffffffffffffff5555555fff5555fffffffffff555ffffffff5555fffffff555fffffff555555555555555ffff555555555fff5555ffffffffffff555fffffffffff555ffffffff
        ffffffffffff555fffffffffffffff55555555fff5555fffffffffff5555ffffffff555fffffff555ffffff5555555555555555ffff555555555fff5555ffffffffffff555f5555fffffffffffffffff
        ffffffffffff555fffffffffffffff5555f555fff555ffffffffffff5555ffffffff555fffffff555fffff55555555555555555ffff555555555ffff555ffffffffffff55555555fffffffffffffffff
        ffffffffffff555ffffffffffffff5555ff5555ff5555fffffffffff5555fffffff5555fffffff555ffff5555555fff555555fffffffffffffffffff55555555fffffff55555555fffffffffffffffff
        ffffffffffff555ffffffffffffff5555ff5555ff5555ffffffffffff555fffffff5555fffffff555fff5555555ffffff5555fffffffffffffffffff55555555fffffff555555fffffffffffffffffff
        ffffffffffff555fffffffffffff55555fff555fff5555fffffffffff555ffffff55555fffffffffffff5555555ffffff5555fffffffffffffffffff55555555ffffffffffffffffffffffffffffffff
        fffffffffff5555ffffffffffff555555555555fff55555ffffffffff5555fff555555fffffffffffff5555f555fffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff5555fffffffffff55555f55555555ff55555555555ffff555555555555ffffffffffffff5555fffffffffff5555ffff555555ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff555ffffffffffff5555ff55555555fff5555555555ffff555555555555ffffffffffffff5555fffffffffff555555555555555ffffffffffffffffffffffffffffffffffffff555ffffff
        ffffffffff5555ffffffffffff5555fffffff555fffff55555555fffff555555555ffffffffffffffff555ffffffffffff5555555555555555fffffffffffffffffffffffffffffffffffff555ffffff
        ffffffffff5555fffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff555555555f555555ffffffffffffffffffffffffffffffffffff555ffffff
        ffffffffff555fffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff55555fffffff55555ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff555fffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff5555ffffffff555555fffffffffffffffffffffffffffffffffffffffffff
        ffffffffff555fffffffffff555fffffffffffffffffffffffff555555555555555555555555555ffff555fffffffffffff555fffffffffff5555fffffffffffffffffffffffffffffffffffffffffff
        ffffffffff555fffffffffff555ffffffffffffffffff5555555555555555555555555555555555ffff555fffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555ffff555ffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff55555555555ffffffffffffffffffffff555ffff5555fffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffff555ffff5555ffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffff555fffff555fffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555fffff555ffffffffffffffffffffffff55555ffffffffffffffffffffff55555555ffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555fffff555fffffffffffffffffffffff555555fffffffffffffffffffff5555555555fffffffffffff
        fffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffff555fffff555ffffffffffffffffffffff555555fffffffffffffffffffff555555555555ffffffffffff
        fffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffff555fffff5555ffffffffffffffffffff555555ffffffffffffffffffffff55555ff55555ffffffffffff
        fffffffffffffffffffffffffffffffffffffffff555fffffffff555ffffffffffffffffffff555fffff5555fffffffffffffffffff555555fffffffffffffffffffffff5555ffff55555fffffffffff
        fffffffffffffffffffffffffffffffffffffffff555fffffffff555fffffffffff555ffffff555fffff55555ffffffffffffffff5555555ffffffffffffffffffffffff555ffffff5555fffffffffff
        fffffffffffffffffffffffffffffffffffffffff555fffffffff555fffffffffff555ffffff555ffffff5555fffffffffffffff555555ffffffffffffffffffffffffff555fffffff5555555555ffff
        fffffffffffffffffffffffffffffffffffffffff555fffffffff555fffffffffff555ffffff555ffffff5555ffffffffffffff555555fffffffffffffffffffffffffff5555ffffff55555555555fff
        fffffffffffffffffffffffffffffffffffffffff555fffffffff555fffffffffff555ffffff555fffffff5555ffffffffffff555555ffffffffffffffffffffffffffff5555ffffff55555555555fff
        fffffffffffffffffffffffffffffffffffffffff555fffffffff555fffffffffff555fffff5555fffffff5555fffffffffff555555fffffffffff5555555555555555555555ffffff55555ff5555fff
        fffffffffffffffffffffffffffffffffffffffff555fffffffff555fffffffffff555fffff5555ffffffff5555fffffffff555555ffffffffff55555555555555555555555fffffff555fffff5555ff
        fffffffffffffffffffffffffffffffffffffffff555fffffffff555fffffffffff555fffff555fffffffff555555ffffff555555ffffffff555555555555555555555555fffffffffffffffff5555ff
        fffffffffffffffffffffffffffffffffffffffff555fffffffff555fffffffffff555fffff555ffffffffff555555fff5555555fffffff55555555555555555555555555fffffffffffffffff5555ff
        fffffffffffffffffffffffffffffffffffffffff5555ffffffff555fffffffffff555fffff555fffffffffff55555ff555555fffffffff55555555555555555555555555fffffff555ffffffff555ff
        fffffffffffffffffffffffffffffffffffffffff5555ffffffff555fffffffffff555fffff555fffffffffff55555f555555fffffffff5555555555555555555fff55555fffffff555ffffffff555ff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffff555fffffffffff555fffff555fffffffffffff555555555fffffffff555555555555555555fffff55555fffffff555fffffff5555ff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffff555fffffffffff555fffff555fffffffffffff5555555fffffffffff5555fffffffffffffffffffff5555fffffffffffffff55555ff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555fffffffffffff555555fffffffffff5555ffffffffffffffffffffff5555555555fffffff555555fff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555fffffffffffff55555ffffffffffff5555ffffffffffffff555ffffff555555555fffffff55555ffff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555fffffffffffff5555fffffffffffff5555fff555ffffffff555ffffff5555555555ffffff5555fffff
        ffffffffffffffffffffffffffffffffffffffffff555fffff55555555555555555555555ff555ffffffffffffffffffffffffffffff555ffff555ffffffff555fffffff5555555555fffff555ffffff
        ffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555ffffffffffffffffffffffffffffff555ffff555ffffffff555fffffff55555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555ffffffffffffffffffffffffffffff555ffff555ffffffff555fffffff55555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff5555555555ffffffffffffffffff5555555fffffffffffffffffffffffffffffff555ffff555ffffffff555ffffffff5555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffff555ffffffffffffffffffffffffff5555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffff555ffffffffffffffffffffffffff5555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffff55555555555ffffff555fffffffffffffffffffffffffffffff555ffffffffffffffffffffffffff5555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffff55555555555ffffff555fffffffffffffffffffffffffffffff555ffffffffffffffffffffffffff5555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffff55555555555fffff5555fffffffffffffffffffffffffffffff555ffffffffffffffffffffffffff5555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffff555fffffffffffffffffffffffff55555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffff555ffffffff55555ffffffffffff55555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffff555ffffffff55555fffffffffff555555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffff55555555ffffffffffffffffffffffffffff5555fffffff55555fffffffffff555555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffff555555555fffffffffffffffffffffffffff55555fffffffffffffffffffff5555555555555555555fffffff
        fffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffff55555fffffffffffffffffff55555555555555555555fffffff
        ffffffffffffffffffffffffffffffffffffff5555555fffffffffffffff555555555555555ff555555fffffffffffffffffffffffffff5555555fffffffffffffff555555555555555555555fffffff
        ffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555fff55555fffffffffffffffffffffffffff5555555555555555555555555555555555555555555fffffff
        ffffffffffffffffffffffffffffffff555555555f55555555555555555555555555555ffffffff55555ffffffffffffffffffffffffffff5555555555555555555555555555555555555555ffffffff
        ffffffffffffffffffffffffffffff5555555555ff555555555555555555555fffffffffffffffff555555ffffffffffffffffffffffffff5555555555555555555555555555555555555555ffffffff
        fffffffffffffffffffffffffff55555555555fffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffff5555fffffffffffff55555555555555555555555fffffffff
        fffffffffffffffffffffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffff55555ffffffffffff5555555555555555555555fffffffffff
        fffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffffff555555ffffffffffff55555555555555555555555fffffffffff
        ffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffff555555ffffffffffff5555555555555555555555ffffffffffff
        ffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffff555555fffffffffffff5555555555555555555555fffffffffffff
        ffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffff555555ffffffffffffff5555555555555555555555fffffffffffff
        ffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffff555555fffffffffffffff555555555555555555555ffffffffffffff
        ffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffff55555fffffffffffffffff5555555555555555555ffffffffffffffff
        ffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffff55555f555fffffffffffff5555555555555555555ffffffffffffffff
        ffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffff555fffffffff55555ff555fffffffffffff555555555555555555fffffffffffffffff
        ffffffffffffffffffff555ffffffffffffffffff555fffffffffffffffffff5555fffffffffffffffffffffff5555ffffffff55555ff555fffffffff555f55555555555555555ffffffffffffffffff
        ffffffffffffffffffff555ffffffffffffffffff5555ffffffffffffffffff5555fffffffffffffffffffffff5555ffffffff55555ffffff555fffff555f55555555555555555ffffffffffffffffff
        ffffffffffffffffffff555ffffffffffffffffff5555fffffffffffffffffff555ffffffffffffffffffffffff555fffffffff55555fffff555f555f555f55555555555555555ffffffffffffffffff
        ffffffffffffffffffff555fffffffffffffffffff555fffffffffffffffffff555ffffffffffffffffffffffff555ffffffffff555555fff555f555fffff5555555555555555fffffffffffffffffff
        ffffffffffffffffffff555fffffffffffffffffff5555ffffffffffffffffff5555fffffffffffffffffffffff555fffffffffff555555ffffff555fffff5555555555555555fffffffffffffffffff
        ffffffffffffffffffff5555ffffffffffffffffff5555ffffffffffffffffff5555fffffffffffffffffffffff555ffffffffffff55555ffffffffffffff555555555555555ffffffffffffffffffff
        ffffffffffffffffffff5555fffffffffffffffffff555ffffffffffffffffff5555fffffffffffffffffffffff555fffffffffffff55555fffffffffffff555555555555555ffffffffffffffffffff
        fffffffffffffffffffff555fffffffffffffffffff555fffffffffffffffffff555fffffffffffffffffffffff555ffffffffffffff5555fffffffffffff55555555555555555ffffffffffffffffff
        fffffffffffffffffffff555fffffffffffffffffff555fffffffffffffffffff555fffffffffffffffffffffff555fffffffffffffff555fffffffffffff555555555555555555fffffffffffffffff
        fffffffffffffffffffff555fffffffffffffffffff555fffffffffffffffffff555fffffffffffffffffffffff555fffffffffffffff5555ffffffffffff5555555555555f5555fffffffffffffffff
        fffffffffffffffffffff5555ffffffffffffffffff555fffffffffffffffffff555fffffffffffffffffffffff555fffffffffffffff5555ffffffffffff5555555555555f55555ffffffffffffffff
        fffffffffffffffffffff5555ffffffffffffffffff555ffffffffffffffffff5555fffffffffffffffffffffff555ffffffffffffffff555ffffffffffff555555555555fff55555fffffffffffffff
        ffffffffffffffffffffff5555fffffffffffffffff555fffffffffffffffff5555555555ffffffffffffffffff555ffffffffffffffff555ffffffffffffff555555555fffff5555fffffffffffffff
        ffffffffffffffffffffff5555fffffffffffffffff555ffffffffffffffff555555555555555ffffffffffffff555ffffffffffffffff555fffffffffffffff5555555fffffff5555ffffffffffffff
        fffffffffffffffffffffff555fffffffffffffffff555fffffffffffffff555555f55555555555555fffffffff555ffffffffffffffff555fffffffffffffffffffffffffffff5555ffffffffffffff
        fffffffffffffffffffffff555fffffffffffffffff5555fffffffffffff55555ffffff55555555555fffffffff555fffffffffffffff5555fffffffffffffffffffffffffffff55555fffffffffffff
        fffffffffffffffffffffff5555ffffffffffffffff5555fffffffffff555555ffffffffff55555555fffffffff555fffffffffffffff5555ffffffffffffffffffffffffffffff5555fffffffffffff
        fffffffffffffffffffffff5555fffffffffffffffff5555fffffffff555555ffffffffffffffffffffffffffff555fffffffffffffff5555fffffffffffffffffffffffffffffff555fffffffffffff
        ffffffffffffffffffffffff555fffffffffffffffff5555fffffff5555555fffffffffffffffffffffffffffff555fffffffffffffff555ffffffffffffffffffffffffffffffff5555ffffffffffff
        ffffffffffffffffffffffff555ffffffffffffffffff5555ffff55555555ffffffffffffffffffffffffffffff555ffffffffffffff5555ffffffffffffffffffffffffffffffff5555ffffffffffff
        ffffffffffffffffffffffff555ffffffffffffffffff5555ff55555555ffffffffffffffffffffffffffffffff555ffffffffffffff5555fffffffffffffffffffffffffffffffff555ffffffffffff
        ffffffffffffffffffffffff5555fffffffffffffffff5555f5555555fffffffffffffffffffffffffffffffff5555fffffffffffff5555fffffffffffffffffffffffffffffffff5555ffffffffffff
        ffffffffffffffffffffffff5555ffffffffffffffffff555f55555fffffffffffffffffffffffffffffffffff5555fffffffffffff5555fffffffffffffffffffffffffffffffff5555ffffffffffff
        fffffffffffffffffffffffff555ffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffff555fffffffffffff5555ffffffffffffffffffffffffffffffffff555fffffffffffff
        fffffffffffffffffffffffff5555fffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffff555fffffffffffff5555ffffffffffffffffffffffffffffffffff555fffffffffffff
        fffffffffffffffffffffffff5555ffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffff555fffffffffffff5555ffffffffffffffffffffffffffffffffff555fffffffffffff
        ffffffffffffffffffffffffff555ffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffff555ffffffffffff5555fffffffffffffffffffffffffffffffffff555fffffffffffff
        ffffffffffffffffffffffffff555ffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff555ffffffffffff5555ffffffffffffffffffffffffffffffffff5555fffffffffffff
        ffffffffffffffffffffffffff5555fffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff555ffffffffffff555fffffffffffffffffffffffffffffffffff5555fffffffffffff
        ffffffffffffffffffffffffff5555ffffffffffffffffff555fffffffffffffffffffffffffffffffffffffff555ffffffffffff555fffffffffffffffffffffffffffffffff55555ffffffffffffff
        ffffffffffffffffffffffffff5555ffffffffffffffffff555fffffffffffffffffffffffffffffffffffffff555ffffffffffff555ffffffffffffffffffffffffffffffff555555ffffffffffffff
        fffffffffffffffffffffffffff5555fffffffffffffffff555fffffffffffffffffffffffffffffffffffffff555ffffffffffff555ffffffffffffffffffffffffffffff55555555ffffffffffffff
        fffffffffffffffffffffffffff5555fffffffffffffffff555fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffff
        ffffffffffffffffffffffffffff555fffffffffffffffff555fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffff
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PLAYER1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f 5 5 f 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f 5 5 f f f 5 5 f . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f 5 5 f 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f 5 5 f f f 5 5 f . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . . . . f . . . . . 
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(muro)
    sprites.destroy(carlos_calaca)
})
function enemies (col: number, row: number, vx: number) {
    carlos_calaca = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 f 5 5 f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f 5 5 f . . . . . . 
        . . . . f f f 5 f 5 . . . . . . 
        . . . . f f f f 5 f . . . . . . 
        . . . . f f f 5 f 5 . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f . . . . f . . . . . . 
        `, SpriteKind.Enemy)
    carlos_calaca.setBounceOnWall(true)
    carlos_calaca.setVelocity(vx, 0)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PLAYER1.isHittingTile(CollisionDirection.Bottom)) {
        PLAYER1.vy = -150
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 5 f 5 5 f . . . . 
        . . . . f 5 5 f 5 f 5 f . . . . 
        . . . f 5 5 f 5 5 f 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 f 5 f . . . 
        . . f 5 f 5 5 5 5 5 f 5 f . . . 
        . . f 5 f 5 5 f 5 5 f 5 f . . . 
        . . . f 5 f f 5 f 5 f 5 f . . . 
        . . . . f f 5 5 f 5 f 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, PLAYER1, 0, 0)
    projectile.follow(carlos_calaca)
    pause(100)
    sprites.destroy(projectile)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(PLAYER1, assets.tile`myTile1`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(calaca)
})
let projectile: Sprite = null
let calaca: Sprite = null
let muro: Sprite = null
let carlos_calaca: Sprite = null
let PLAYER1: Sprite = null
music.setVolume(255)
scene.setBackgroundColor(5)
tiles.setCurrentTilemap(tilemap`nivel2`)
PLAYER1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f 5 5 5 5 5 f . . . . 
    . . . . . f 5 f 5 5 f f . . . . 
    . . . . . f 5 5 5 5 5 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f 5 5 5 5 5 f . . . . 
    . . . . . f 5 5 5 5 5 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . f 5 5 5 f 5 5 5 f . . . 
    . . . . f 5 5 f f f 5 5 f . . . 
    . . . . . f 5 5 f 5 5 f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f . . . f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(PLAYER1, assets.tile`myTile1`)
controller.moveSprite(PLAYER1, 77, 0)
PLAYER1.ay = 300
scene.cameraFollowSprite(PLAYER1)
enemies(6, -9, 10)
carlos_calaca.ay = 300
muro = sprites.create(img`
    . . . f f f f f f f f f . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.muro)
tiles.placeOnRandomTile(muro, assets.tile`myTile2`)
calaca = sprites.create(img`
    . . f f f f f f f f f f f f . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    f 5 5 f f f 5 5 5 5 f f f 5 5 f 
    f 5 f f f f f 5 5 f f f f f 5 f 
    f 5 f f 5 f f 5 5 f f 5 f f 5 f 
    f 5 f f f f f 5 5 f f f f f 5 f 
    f 5 5 f f f 5 5 5 5 f f f 5 5 f 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f 5 f 5 5 f 5 f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(calaca, assets.tile`myTile4`)
