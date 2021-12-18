function menu () {
    if (input.buttonIsPressed(Button.A)) {
        mode = 1
    } else if (input.buttonIsPressed(Button.B)) {
        mode = 2
    }
    basic.showIcon(IconNames.Happy)
}
function serial2 () {
    if (input.isGesture(Gesture.TiltLeft)) {
        serial.writeLine("L")
        basic.showArrow(ArrowNames.West)
    } else if (input.isGesture(Gesture.TiltRight)) {
        serial.writeLine("R")
        basic.showArrow(ArrowNames.East)
    } else if (input.isGesture(Gesture.LogoUp)) {
        serial.writeLine("D")
        basic.showArrow(ArrowNames.South)
    } else if (input.isGesture(Gesture.LogoDown)) {
        serial.writeLine("U")
        basic.showArrow(ArrowNames.North)
    } else if (input.buttonIsPressed(Button.A)) {
        serial.writeLine("A")
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            # # . . .
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        serial.writeLine("B")
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . # #
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.AB)) {
        serial.writeLine("H")
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        serial.writeLine("E")
        mode = 0
    } else {
    	
    }
}
function doSomething () {
    mode = 0
    basic.showIcon(IconNames.Sad)
}
let mode = 0
mode = 0
basic.forever(function () {
    if (mode == 0) {
        menu()
    } else if (mode == 1) {
        serial2()
    } else {
        doSomething()
    }
})
