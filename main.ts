input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . .
        # # . . .
        . . . . .
        `)
    serial.writeLine("A")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . # #
        . . . # #
        . . . . .
        `)
    serial.writeLine("B")
})
