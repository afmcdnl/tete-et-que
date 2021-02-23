let Pièce = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Andrew")
})
input.onButtonPressed(Button.B, function () {
    Pièce = randint(1, 2)
    if (Pièce == 1) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # #
            . . . # .
            `)
    }
})
