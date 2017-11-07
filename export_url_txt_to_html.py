import requests
import re

f = open("urls.txt", "r")
lines = f.readlines()
pattern = "<title>(.*?)</title>"

f = open("urls.html", "w")

for line in lines:
    line = line.strip("\n")
    r = requests.get(line)
    code = r.status_code
    title = re.findall(pattern=pattern, r.content)
    if r.headers['server']:
        server = r.headers['server']
    else:
        server = ""
    f.write("[" + code + "] " + server  + "  " + title + "<a href='" + line + "'>" + line + "</a>\n" )
