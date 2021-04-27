import argparse
import csv


def parse_arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file",
                        help="csv location", required=True)
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_arguments()
    csv_location = args.file
    print(csv_location)
    cnt = 0
    title_arr = []
    date_arr = []
    rating_arr = []
    with open(csv_location, mode="r") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',', quotechar='"')
        for idx, row in enumerate(csv_reader):
            if idx == 0:
                title_idx = row.index("Title")
                date_idx = row.index("Date Read")
                rating_idx = row.index("My Rating")
            else:
                title_arr.append(row[title_idx])
                date_arr.append(row[date_idx])
                rating_arr.append(row[rating_idx])
        with open("events.txt", "w") as file:
            file.write("events=[")
            for title, date, rating in zip(title_arr, date_arr, rating_arr):
                file.write(
                    f'{{title:"{title}",date: new Date("{date}"), rating: {rating}}},')
            file.write("]")
