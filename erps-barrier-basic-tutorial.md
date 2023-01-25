### @activities true
### @explicitHints true

# ERPS STEM WEEK :: Barrier - Basic

## Introduction
### Introduction Step @unplugged
In this challenge, we are going to program an import feature you might sometimes see in town; an access barrier.  
  
Before we start coding though, let's have a think about:  

Q. Where are road barriers used?  
Q. What other features do barriers have?  
Q. What is the reason for having an access barrier?  
  
Our barrier also uses a new bit of kit - a servo!  Now you're programming motors, which could be connected to loads of things!  
  
![Radio traffic lights](https://raw.githubusercontent.com/niaxotim/erps-barrier-basic/master/assets/no_entry.png)

## Setting up our barrier
### Step 1
When we turn our barrier on for the first time, it would be good to have a 'default' state, where it is closed.  

We can do this using the ``||Kitronik_ACCESSbit.Move barrier Down||`` block. Let's put this inside our ``||basic.on start||`` block.  

Did you know?  There's another way to achieve this too - our servo works using pin0.  So we could ask
our code to set the servo to 90 degrees - the servo works anti-clockwise!  

Choose whichever method you like to move your barrier!

#### ~ tutorialhint
```blocks
Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
```
```blocks
pins.servoWritePin(AnalogPin.P0, 90)
```

## Moving our barrier
### Step 2
Now we want to be able to open our barrier. Let's use one of our button inputs, ``||input:on button A||``.  

Drag a ``||Kitronik_ACCESSbit.Move barrier Up||`` block in to the editor. Or, if you're using the 
pins to move your barrier, drag a ``||pins.servo write pin P0 to 0||`` block in instead, making sure to set the 
degrees to '0'.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
})
```

```blocks
input.onButtonPressed(Button.A, function () {
pins.servoWritePin(AnalogPin.P0, 0)
})
```

### Step 3
But what about closing our barrier? Let's use our other button input, ``||input:on button B||``.  

Drag a ``||Kitronik_ACCESSbit.Move barrier Down||`` block in to the editor. Or, if you're using the 
pins to move your barrier, drag a ``||pins.servo write pin P0 to 90||`` block in instead, making sure to set the 
degrees to '90'.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.B, function () {
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
})
```

```blocks
input.onButtonPressed(Button.B, function () {
pins.servoWritePin(AnalogPin.P0, 90)
})
```

### Step 4
Connect your second BBC micro:bit and click ``|Download|`` to transfer your code.  
  
When your micro:bit powers up, does the barrier set itself to the 'down' position as expected?
  
Press ``||input:button A||`` to check that your barrier opens up, and that pressing ``||input:button B||`` closes it again!


### Barrier Basic Tutorial Complete @unplugged
Great work! Your barrier is now working! You've now got some serious control over your road!
Way to go! ;)
![Great job](https://raw.githubusercontent.com/niaxotim/erps-barrier-basic/master/assets/great_job.png)
