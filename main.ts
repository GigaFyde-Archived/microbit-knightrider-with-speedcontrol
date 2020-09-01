let speed = 100
input.onButtonPressed(Button.A, function () {
    speed = speed - 10
})

input.onButtonPressed(Button.B, function () {
    speed = speed + 10
})
    

while (true) {

  
    led.plot(0, 2)
    basic.pause(speed)
    led.unplot(0, 2)

    led.plot(1, 2)
    basic.pause(speed)
    led.unplot(1, 2)

    led.plot(2, 2)
    basic.pause(speed)
    led.unplot(2, 2)

    led.plot(3, 2)
    basic.pause(speed)
    led.unplot(3, 2)

    led.plot(4, 2)
    basic.pause(speed)
    led.unplot(4, 2)

    
    led.plot(3, 2)
    basic.pause(speed)
    led.unplot(3, 2)

    led.plot(2, 2)
    basic.pause(speed)
    led.unplot(2, 2)

    led.plot(1, 2)
    basic.pause(speed)
    led.unplot(1, 2)


}