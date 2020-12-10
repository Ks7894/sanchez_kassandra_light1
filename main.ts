// while True:
//    print("Light Level:" + input.light_level())
//   if input.light_level() > 20:
//      light.set_all(light.rgb(0,0,0))
// else:
//    light.set_all(light.rgb(0,0,255))
while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() < 20) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() < 11) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.clear()
    }
    
}
