radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == commander_stop) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    is_controller = 1
    basic.showIcon(IconNames.Ghost)
})
let roll = 0
let command = 0
let command_to = 0
let commander_stop = 0
let is_controller = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.setTransmitSerialNumber(false)
radio.setFrequencyBand(0)
radio.setTransmitPower(1)
is_controller = 0
commander_stop = 0
basic.forever(function () {
    basic.pause(100)
    if (is_controller) {
        command_to += commander_stop
        radio.sendNumber(command)
    }
})
basic.forever(function () {
    basic.pause(100)
    if (is_controller) {
        let command_stop = 0
        command = command_stop
        roll = input.rotation(Rotation.Roll)
        if (roll > 45) {
            basic.showArrow(ArrowNames.East)
        } else if (roll < -45) {
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showIcon(IconNames.Duck)
        }
        radio.sendNumber(command)
    }
})
