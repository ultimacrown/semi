function menu () {
    basic.showIcon(IconNames.Happy)
    if (input.buttonIsPressed(Button.A)) {
        mode = 1
        basic.clearScreen()
        basic.pause(1000)
    } else if (input.buttonIsPressed(Button.B)) {
        mode = 2
        basic.clearScreen()
        basic.pause(1000)
    }
}
function serial2 () {
    if (input.buttonIsPressed(Button.AB)) {
        serial.writeLine("H")
    } else if (input.buttonIsPressed(Button.B)) {
        serial.writeLine("B")
    } else if (input.buttonIsPressed(Button.A)) {
        serial.writeLine("A")
    } else if (input.rotation(Rotation.Pitch) < -30) {
        serial.writeLine("U")
    } else if (input.rotation(Rotation.Roll) < -45) {
        serial.writeLine("L")
    } else if (input.rotation(Rotation.Roll) > 45) {
        serial.writeLine("R")
    } else if (input.rotation(Rotation.Pitch) > 30) {
        serial.writeLine("D")
    } else {
    	
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        serial.writeLine("E")
        mode = 0
    } else if (input.pinIsPressed(TouchPin.P1)) {
        serial.writeLine("S")
    } else {
    	
    }
}
input.onGesture(Gesture.Shake, function () {
	
})
function beep () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        brightness = input.lightLevel()
        brightness += 10
        music.stopAllSounds()
    } else if (brightness < input.lightLevel()) {
        music.ringTone(262)
    } else {
        music.stopAllSounds()
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        mode = 0
        music.stopAllSounds()
    }
}
let brightness = 0
let mode = 0
mode = 0
music.setVolume(255)
music.stopAllSounds()
basic.forever(function () {
    if (mode == 0) {
        menu()
    } else if (mode == 1) {
        serial2()
    } else {
        beep()
    }
})
