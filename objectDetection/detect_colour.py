#!/usr/bin/env python

import numpy as np
import argparse
import cv2

ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", help = "path to the image")
args = vars(ap.parse_args())

# load the image
image = cv2.imread(args["image"])

# define the colour boundary
boundary = ([30, 150, 80], [70, 190, 120]);

# create the mask
lower = np.array(boundary[0], dtype = "uint8")
upper = np.array(boundary[1], dtype = "uint8")
mask = cv2.inRange(image, lower, upper)
output = cv2.bitwise_and(image, image, mask = mask)

#show the image
cv2.imwrite("colourblock.png", output)
cv2.waitKey(0)
