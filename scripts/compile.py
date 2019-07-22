#!/usr/bin/env python3
import glob, os

def getfiles():
    l = glob.glob('src/*.ht')
    l.extend(glob.glob('src/documents/*.ht'))
    return l

def templater():
    with open('template.html', 'r') as file:
        template = file.read()
    for file in getfiles():
        out = file.rstrip('ht')[0:-1] + '.html'
        with open(out, 'w') as outfile:
            with open(file, 'r') as infile:
                outfile.write(template.replace('[[CONTENT]]', infile.read()))

if __name__ == '__main__':
    # Don't tell Tyler about this
    # ? php what's that
    templater()
