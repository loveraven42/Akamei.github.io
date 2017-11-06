f = open("urls.txt", "r")
lines = f.readlines()
f1 = open("urls.html", "w")
for line in lines:
    line = line.strip("\n")
    f1.write("<a href='"+line+"'>" + line + "</a>")
    f1.write("<br/>")
f.close()
f1.close()
