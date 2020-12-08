while True:
    print("Light Level:" + input.light_level())
    if input.light_level() < 30:
        light.set_all (light.rbg(0,0,255)
    elif input.light_level() >= 30:
        light.set_all(light.rgb(0,0,0))