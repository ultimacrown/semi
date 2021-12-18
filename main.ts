input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    if (mode == 1) {
        serial.writeString("R")
        basic.showArrow(ArrowNames.East)
    }
})
input.onButtonPressed(Button.A, function () {
    if (mode == 1) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            # # . . .
            . . . . .
            `)
        serial.writeLine("A")
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (mode == 1) {
        serial.writeString("L")
        basic.showArrow(ArrowNames.West)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (mode == 1) {
        serial.writeString("D")
        basic.showArrow(ArrowNames.South)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (mode == 1) {
        serial.writeString("U")
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . # #
            . . . . .
            `)
        serial.writeLine("B")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
let mode = 0
mode = 0
basic.forever(function () {
    if (mode == 0) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
