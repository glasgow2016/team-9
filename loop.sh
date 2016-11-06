#!/bin/bash

while [ true ];
do
    raspistill -o ./tempPic/tempPicture.png
    sleep 2
    output=$(python detect_colour.py --image /tempPic/tempPicture.png)
    echo $output
    if [ output == "true" ];
    then
        python pingServer.py
    fi
done
    
