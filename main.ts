input.onButtonPressed(Button.A, function () {
    jugadorArriba.change(LedSpriteProperty.Y, -1)
    JugadorAbajo.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    jugadorArriba.change(LedSpriteProperty.Y, -1)
    JugadorAbajo.change(LedSpriteProperty.Y, -1)
})
let JugadorAbajo: game.LedSprite = null
let jugadorArriba: game.LedSprite = null
jugadorArriba = game.createSprite(1, 3)
JugadorAbajo = game.createSprite(1, 4)
let obstáculo = game.createSprite(4, 4)
basic.forever(function () {
    obstáculo.change(LedSpriteProperty.X, -1)
})
