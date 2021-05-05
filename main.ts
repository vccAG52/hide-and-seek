radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
radio.setGroup(1)
basic.showNumber(0)
basic.forever(function () {
    radio.sendNumber(0)
})
