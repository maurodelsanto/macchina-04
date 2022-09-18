/**
 * Giallo 1
 * 
 * Rosso 2
 * 
 * Blu 3
 */
radio.onReceivedString(function (receivedString) {
    if (receivedString == "ON") {
        AvviaMacchina = true
    }
    if (receivedString == "OFF") {
        AvviaMacchina = false
    }
    if (receivedString == "F" && AvviaMacchina == true) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, VelocitàAvanti)
    }
    if (receivedString == "B" && AvviaMacchina == true) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, VelocitàDietro)
    }
    if (receivedString == "L" && AvviaMacchina == true) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, VelocitàRotazione)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eBackward, VelocitàRotazioneNeg)
        basic.pause(100)
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
        basic.pause(100)
    }
    if (receivedString == "R" && AvviaMacchina == true) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, VelocitàRotazione)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eBackward, VelocitàRotazioneNeg)
        basic.pause(100)
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
        basic.pause(100)
    }
    if (receivedString == "S" && AvviaMacchina == true) {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    }
})
let AvviaMacchina = false
let VelocitàRotazioneNeg = 0
let VelocitàRotazione = 0
let VelocitàDietro = 0
let VelocitàAvanti = 0
VelocitàAvanti = 120
VelocitàDietro = 50
VelocitàRotazione = 60
VelocitàRotazioneNeg = 30
AvviaMacchina = true
radio.setGroup(1)
basic.forever(function () {
    if (AvviaMacchina == true) {
        DFRobotMaqueenPlusV2.showColor(0xff0000)
    }
    if (AvviaMacchina == false) {
        DFRobotMaqueenPlusV2.ledBlank()
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    }
})
