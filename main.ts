input.onGesture(Gesture.Shake, function () {
    luck = randint(1, 3)
    if (luck == 1) {
        basic.showString("yes")
    } else if (luck == 2) {
        basic.showString("no")
    } else {
        basic.showString("maybe")
    }
})
let luck = 0
basic.showString("ask me")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Angry)
}
