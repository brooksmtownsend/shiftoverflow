import sqlite3
import json
import sys

data = json.load(open(sys.argv[1]))

data = data['shifts']

days = 0
hours = 0
onyens = 0
insertQuery = '''INSERT INTO Shifts(day, hour, onyen) VALUES ('{}', '{}', '{}')'''

while days < 7:
        while hours < 24:
                while onyens < len(data[days][hours]['onyens']):
                        insertQuery.format(days, hours, data[days][hours]['onyens'][onyens])
                        print(days)
                        print(hours)
                        print(data[days][hours]['onyens'][onyens])
                        # print(insertQuery)
                        onyens = onyens + 1
                onyens = 0
                hours = hours + 1
        hours = 0
        days = days + 1

