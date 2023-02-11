from pynput.keyboard import Key,Controller
keyboard = Controller()

class Volume:
    def volume_up():
        keyboard.press(Key.media_volume_up)
        keyboard.release(Key.media_volume_up)
    
    def volume_down():
        keyboard.press(Key.media_volume_down)
        keyboard.release(Key.media_volume_down)