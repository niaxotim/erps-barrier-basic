input.onButtonPressed(Button.A, function () {
    Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Long, 1)
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Short, 5)
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
})
Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
