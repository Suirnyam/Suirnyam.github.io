from PIL import Image
import os

# if slozka == "":
#     slozka = './Fotky' #slozka adaná uvnitř skriptu

def kompresor_fotek(cesta:str):
    # Your Desired Width Here (in Pixels):
    max_width = 2500 # pixels
    # Get a list of all the image files in the folder
    images = [f for f in os.listdir(cesta)]
    print(len(images)) #případně i celkovou originální velikost
    os.mkdir(cesta + "\\output")
    for img in images:
        if img.endswith((".jpg", ".png", ".PNG", ".JPG", ".jpeg")):
            # img = images[0]
            image = Image.open(cesta + "\\" + img)
            width, height = image.size
            aspect_ratio = width / height
            new_height = max_width / aspect_ratio
            image = image.resize((max_width,round(new_height)))
            # Save the image
            filename = cesta + '\\output\\' + img
            image.save(filename, optimize=True, quality=85)


# some_folder
# -- compress.py (this Python script)
# -- my_foldername
# ---- image1.jpg
# ---- image2.png
# ---- image3.jpg
# -- output

# Now copy&paste the following Python code into a new file compress.py and store it in your outer folder some_folder:

if __name__ == "__main__":
    from argparse import ArgumentParser
    parser = ArgumentParser(description = "Složka s obrázky")
    parser.add_argument("slozka", type = str)
    args = parser.parse_args()
    slozka = args.slozka
    kompresor_fotek(slozka)
    # args_slozka = r"C:\Users\Admin\Desktop\Nova slozkaa"
    # uloz_do = args_slozka + "\Zmenšeno"
    # os.mkdir(uloz_do)