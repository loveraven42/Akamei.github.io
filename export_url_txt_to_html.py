import sys
import requests
import re

reload(sys)
sys.setdefaultencoding("utf-8")

f = open("urls.txt", "r")
lines = f.readlines()
pattern = "<title>(.*?)</title>"

f = open("urls.html", "w")
f.write("<html><meta charset=\"utf-8\" />")
for line in lines:
    try:
        line = line.strip("\n")
        r = requests.get(line)
        code = r.status_code
        title = re.findall(pattern, r.content)
        if len(title):
            title = title[0]
        else:
            title = ""
        if r.headers['server']:
            server = r.headers['server']
        else:
            server = ""
        f.write("[" + str(code) + "] " + server  + "  " + str(title).encode("utf-8").decode("utf-8") + "<a href='" + line + "'>" + line + "</a><br/>" )
    except Exception as e:
	    print e
	# print "error*******************88"
f.write("</html>")
