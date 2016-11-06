#!/usr/bin/env python

import numpy as np
import argparse
import cv2
import imutils
from picamera.array import PiRGBArray
from picamera import PiCamera
import time
import requests

def midpoint(ptA, ptB):
    return ((long(ptA[0]) + long(ptB[0])) * 0.5, (long(ptA[1]) + long(ptB[1])) * 0.5)

def cnts_request_send(cnts):
    ''' Sends request given input cnts'''
    for c in cnts:
        box = cv2.minAreaRect(c)
        box = cv2.cv.BoxPoints(box) if imutils.is_cv2() else cv2.boxPoints(box)
        box = np.array(box, dtype = "uint8")
        cv2.drawContours(output, [box.astype("int")], -1, (0, 255, 0), 2)

        for (x, y) in box:
            cv2.circle(output, (int(x), int(y)), 5, (0, 0, 255), -1)

        (tl, tr, br, bl) = box

        topMid = midpoint(tl, tr)
        botMid = midpoint(bl, br)
        leftMid = midpoint(tl, bl)
        rightMid = midpoint(tr, br)

        if abs(botMid[1] - topMid[1]) > 10:
            if abs(rightMid[0] - leftMid[0]) > 10:


                r = requests.post("https://ai26.host.cs.st-andrews.ac.uk/helix/puzzle/123")
                return True
            else:
                return False
        else:
            return False

camera = PiCamera()
while True:
    rawCapture = PiRGBArray(camera)

    time.sleep(0.5)

    camera.capture(rawCapture, format = "bgr")
    image = rawCapture.array

    cv2.imwrite("original.png", image)

    # define the colour boundary
    boundary = ([0, 0, 150], [100, 100, 255]);

    # create the mask
    lower = np.array(boundary[0], dtype = "uint8")
    upper = np.array(boundary[1], dtype = "uint8")
    mask = cv2.inRange(image, lower, upper)
    output = cv2.bitwise_and(image, image, mask = mask)

    # edge detection
    output = cv2.GaussianBlur(output, (7, 7), 0)
    output = cv2.Canny(output, 50, 100)
    output = cv2.dilate(output, None, iterations=1)
    output = cv2.erode(output, None, iterations=1)
    cnts = cv2.findContours(output.copy(), cv2.RETR_EXTERNAL,
	    cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if imutils.is_cv2() else cnts[1]

    #screw that
    for c in cnts:
        box = cv2.minAreaRect(c)
        box = cv2.cv.BoxPoints(box) if imutils.is_cv2() else cv2.boxPoints(box)
        box = np.array(box, dtype = "uint8")
        cv2.drawContours(output, [box.astype("int")], -1, (0, 255, 0), 2)

        for (x, y) in box:
            cv2.circle(output, (int(x), int(y)), 5, (0, 0, 255), -1)

        (tl, tr, br, bl) = box

        topMid = midpoint(tl, tr)
        botMid = midpoint(bl, br)
        leftMid = midpoint(tl, bl)
        rightMid = midpoint(tr, br)

        if abs(botMid[1] - topMid[1]) > 10:
            if abs(rightMid[0] - leftMid[0]) > 10:

		print 'Sending request'
                r = requests.post("https://ai26.host.cs.st-andrews.ac.uk/helix/puzzle/123")
                break
            else:
                print "false"
        else:
            print "false"

    #write the image file
    cv2.imwrite("colourblock.png", output)
