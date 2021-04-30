from datetime import datetime
from time import sleep
import requests
import csv
import json


csv_location = "./Person_3.csv"
new_csv_location = "./Ratings_Reordered_Person_3.csv"
#Book Id,Title,Author,Author l-f,Additional Authors,ISBN,ISBN13,My Rating,Average Rating,Publisher,Binding,Number of Pages,Year Published,Original Publication Year,Date Read,Date Added,Bookshelves,Bookshelves with positions,Exclusive Shelf,My Review,Spoiler,Private Notes,Read Count,Recommended For,Recommended By,Owned Copies,Original Purchase Date,Original Purchase Location,Condition,Condition Description,BCID

labels_row = []
other_rows = []
with open(csv_location, mode="r") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',', quotechar='"')
    for row in csv_reader:
        if (row[0] == "Book Id"):
            labels_row = row + ["idx"]
            continue
        try:
            float(row[7]) - float(row[8])
            other_rows.append(row)
        except:
            continue

# Sort by books I rated higher
other_rows.sort(key=(lambda row: float(row[7]) - float(row[8])))
result_lines = other_rows[:5] + other_rows[-5:]
for idx, line in enumerate(result_lines):
    line.append(idx)

with open(new_csv_location, mode="w", newline="") as new_csv_file:
    csv_writer = csv.writer(new_csv_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL, )
    csv_writer.writerow(labels_row)
    csv_writer.writerows(result_lines)
