input.onButtonPressed(Button.A, function () {
    is_controller = 1
    basic.showIcon(IconNames.Ghost)
})
let is_controller = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.setFrequencyBand(0)
radio.setTransmitPower(1)
radio.setTransmitSerialNumber(false)
is_controller = 0
