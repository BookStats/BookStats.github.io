from datetime import datetime
from time import sleep
import requests
import csv
import json


csv_location = "./Goodreads_Library_Data.csv"
new_csv_location = "./Augmented_Goodreads_Library_Data.csv"
google_api_key = "YOUR KEY HERE"
#Book Id,Title,Author,Author l-f,Additional Authors,ISBN,ISBN13,My Rating,Average Rating,Publisher,Binding,Number of Pages,Year Published,Original Publication Year,Date Read,Date Added,Bookshelves,Bookshelves with positions,Exclusive Shelf,My Review,Spoiler,Private Notes,Read Count,Recommended For,Recommended By,Owned Copies,Original Purchase Date,Original Purchase Location,Condition,Condition Description,BCID
with open(csv_location, mode="r") as csv_file:
    with open(new_csv_location, mode="w", newline='') as new_csv_file:   
        csv_reader = csv.reader(csv_file, delimiter=',', quotechar='"')
        csv_writer = csv.writer(new_csv_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL, )
        for row in csv_reader:
            if (row[0] == "Book Id"):
                csv_writer.writerow(row + ["Genre"])
                continue
            title = row[1]
            author = row[2]
            # Create new google request to get book genre
            request_uri = f"https://www.googleapis.com/books/v1/volumes?q={title}+inauthor:{author}&key={google_api_key}".replace(" ", "%20")
            # print(request_uri) Add this in if you want to follow the links yourself
            response = requests.get(request_uri)
            if (response.status_code == 200):
                data = response.json()
                genre = ""
                if "categories" in data["items"][0]["volumeInfo"]:
                    genre = data["items"][0]["volumeInfo"]["categories"][0].lower()
                else:
                    genre = "unknown"
                csv_writer.writerow(row + [genre])
                print(f"book: {title}, genre: {genre}")
            else:
                print(response.status_code)
                print("yikes")