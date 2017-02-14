import re
def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress"]
    words+= "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"
    #  print words
    matches = []
    idx=1
    for word in words:
    	if re.search(regex,word):
    		matches.append(word)

    print "--"+str(matches)



    return matches

#
# get_matching_words(r"v")
# get_matching_words(r"ss")
# get_matching_words(r"e$")
# get_matching_words(r"b.+b")
# get_matching_words(r"b.b")
# get_matching_words(r"b\w+b")
# get_matching_words(r"^[aeiou]$")
get_matching_words(r"[regular expression]")
# get_matching_words(r"([a-z])\1")
