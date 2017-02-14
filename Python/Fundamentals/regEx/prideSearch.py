import re


def findText(word,file):
    textfile = open(file,'r')
    filetext= textfile.read()
    textfile.close()
    words= re.findall(word, filetext)
    num=0
    for idx in range (len(words)):
        num=num+1
    print "The word"+' '+str(words[0])+' '+"is used"+' '+ str(num)+' '+"times."
#finds the word wife and logs the number it is used into a list
# findText("wife",'/Users/Andrew/Desktop/Andrew_Chang_Coding_Dojo/Python/Fundamentals/regEx/pride.txt')

def replaceText(word, replace,file):
    textfile = open(file)
    for string in textfile:  #goes through txt file and locates the word to replace.
        print string.replace(word,replace)
    textfile.close()
# replaceText("wife","unicorn",'/Users/Andrew/Desktop/Andrew_Chang_Coding_Dojo/Python/Fundamentals/regEx/pride.txt')

def findLetter(word, file):
    textfile = open(file,'r')
    filetext= textfile.read()
    textfile.close()
    words= re.findall(word, filetext)
    match=[]
    match.append(words)
    print match
# findLetter(r"t\w+",'/Users/Andrew/Desktop/Andrew_Chang_Coding_Dojo/Python/Fundamentals/regEx/pride.txt')
##hmm doesnt append the words but all that contian ts in it..tried ^ but is not working correctly with findall maybe search?

def textSplit(file):
    textfile = open(file,'r')
    filetext= textfile.read()
    lists= filetext.split()
    textfile.close()
    print lists
# textSplit('/Users/Andrew/Desktop/Andrew_Chang_Coding_Dojo/Python/Fundamentals/regEx/pride.txt')

def findPunc(word,file):
    textfile = open(file,'r')
    filetext= textfile.read()
    textfile.close()
    words= re.findall(word, filetext)
    match=[]
    match.append(words)
    print match

findPunc("[!,.?]",'/Users/Andrew/Desktop/Andrew_Chang_Coding_Dojo/Python/Fundamentals/regEx/pride.txt')



# Find all the occurrences of the word wife in the document. Report to the user how many times that word occurs in the document. DONEEE
# Write a function that returns a new string where the word wife is replaced with the word unicorn. DONE
# Return to the user a list of all the words containing the letter 't' DONE
# Split the document into a list of words. DONE
# Find all of the punctuation in the document.DONE
# Split the document into a list of sentences.
# Extra challenging: remove all the spaces and newline characters from the string, and replace the document's text with the new space-less string.
