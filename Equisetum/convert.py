import os
from pathlib import Path

sourcedir = Path(".")
outputdir = Path("./output")

for file in sourcedir.glob("*.jpg"): print(f"ffmpeg -i {file.name} -vf scale=20:-1 {file.stem}_.jpg")


