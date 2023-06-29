import os
from pathlib import Path
import keyboard

sourcedir = Path(".")
outputdir = Path("./output")
seznam = list()

for file in sourcedir.glob("*.jpg"): 
    prikaz = f"ffmpeg -i {file.name} -vf scale=20:-1 {file.stem}_.jpg"
    print(prikaz)
    seznam.append(prikaz)

print("=============================================================================")

for each in seznam:
    os.system(each)
    # keyboard.press_and_release("y")
    # keyboard.press_and_release("enter")
    # print("*******")

    