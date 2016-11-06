#!/usr/bin/env python
from PIL import Image
import os
import time
from objectDetection import detect_colour
import fileinput

while(1):
    os.system('raspistill -o ./tempPic/tempPicture.png')
    time.sleep(1)
    img = Image.open('./tempPic/tempPicture.png')
    #run if with victors openCV code
    detect_colour.main("./tempPic/tempPicture")
    result = fileinput.input()
    if (result is "true):
        # ping server

