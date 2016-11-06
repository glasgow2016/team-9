#!/usr/bin/env python
from PIL import Image
import os
import time

while(1):
    os.system('raspistill -o ./tempPic/tempPicture.png')
    time.sleep(1)
    img = Image.open('./tempPic/tempPicture.png')
    #run if with victors openCV code
