# importing all necessary packages
import cv2
import numpy as np
import pyautogui
import keyboard
from pynput.mouse import Controller as Controller
from pynput.mouse import Button
import time
from ctypes import windll, Structure, c_long, byref
import os

class POINT(Structure):
    _fields_ = [("x", c_long), ("y", c_long)]

def queryMousePosition():
    pt = POINT()
    windll.user32.GetCursorPos(byref(pt))
    return { "x": pt.x, "y": pt.y}

# start of the actual script
if __name__ == '__main__':
    print('Starting...')


    # setting up a view parameters
    mouse = Controller()
    enabledOneTab = False
    enabledSpray = False
    tm = int(round(time.time() * 1000))
    fps = 1
    fps1 = 0
    fpscounter = 0

    while True:

        cur = queryMousePosition()

        img = pyautogui.screenshot(region=(cur['x']-5, cur['y']-5, 10, 10))
        img = np.array(img)
        frame = np.array(img).sum()

        if keyboard.is_pressed('caps_lock'):
            frame1 = np.array(img).sum()
            if enabledOneTab == True:
                enabledOneTab = False
            else:
                print('Predicting...')
                enabledOneTab = True
                enabledSpray = False
            
            time.sleep(0.2)

        if enabledOneTab == True:
            if frame1 > (frame+1000) or frame1 < (frame-1000):
                mouse.press(Button.left)
                time.sleep(0.2)
                mouse.release(Button.left)
                enabledOneTab = False
                #print('Shot')

            if frame1 > (frame+100) or frame1 < (frame-100):
                frame1 = np.array(img).sum()

            if frame1 > (frame+100) or frame1 < (frame-100):
                frame1 = np.array(img).sum()

        if int(round(time.time() * 1000))-tm > 1000:
            fps1 = fps
            tm = int(round(time.time() * 1000))
            fps = 0
        fps += 1
            
        r = 200.0 / img.shape[1]
        dim = (200, int(img.shape[0] * r))
        img = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)

        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        cv2.imshow("screenshot", img)
        if cv2.waitKey(1) == ord("q"):
            break
            cv2.destroyAllWindows()

        #print('colorValue: ' + str(frame) + ' FPS: ' + str(fps1))
        
        
        fpscounter += 1
        if fpscounter == 50:
            fpscounter = 0
            os.system('cls')
            print('FPS: ' + str(fps1))

