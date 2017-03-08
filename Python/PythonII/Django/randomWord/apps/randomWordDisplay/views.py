from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

# generate = get_random_string(length=18)



# Create your views here.
def index(request):
    print "*"*50
    return render(request, 'randomWordDisplay/index.html')

def create(request):

    print (request.method)
    if request.method == "POST":
        request.session['count'] +=1
        request.session['random'] = get_random_string(length=18)
        print "*"*15
        return redirect('/')
    else:
        return redirect('/')

def clear(request):
    del request.session['count']
    if request.method == "POST":
        request.session['count'] = 0
        return redirect('/')
