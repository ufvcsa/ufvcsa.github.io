#!/usr/bin/env python3
import glob, os

def templater():
    with open('template.html', 'r') as file:
        template = file.read()
    for file in glob.glob('*.ht'):
        out = file.rstrip('ht')[0:-1] + '.html'
        with open(out, 'w') as outfile:
            with open(file, 'r') as infile:
                outfile.write(template.replace('[[CONTENT]]', infile.read()))

if __name__ == '__main__':
    # Don't tell Tyler about this
    # ? php what's that
    templater()
