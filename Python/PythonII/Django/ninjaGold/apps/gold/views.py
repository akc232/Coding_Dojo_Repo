from django.shortcuts import render, redirect
import random

# Create your views here.

def index(request):

    if 'money' not in request.session:
        request.session['money'] = 0
    if 'activity' not in request.session:
        request.session['activity'] = []

    return render(request, 'gold/index.html')

def getgold(request):
    gold ={
    'farm': random.randint(10,20),
    'cave': random.randint(5,10),
    'house': random.randint(5,10),
    'casino': random.randint(-50,50),
    }

    if request.POST['building'] =='farm':
        request.session['money']+= gold['farm']
        log={ 'activity': "You earned "+str(gold['farm'])+" from the farm!", 'color': "green"}

    elif request.POST['building'] =='cave':
        request.session['money']+= gold['cave']
        log= { 'activity': "You earned "+str(gold['farm'])+" from the cave!", 'color': "green"}

    elif request.POST['building'] =='house':
        request.session['money']+= gold['house']
        log= { 'activity': "You earned "+str(gold['farm'])+" from the house!", 'color': "green"}

    elif request.POST['building'] =='casino':
        request.session['money']+= gold['casino']
        log= {'activity': "You earned/lost "+str(gold['farm'])+" from the casino!", 'color': "green" }

        if gold['casino']< 0:
            log= {'activity': "You earned/lost "+str(gold['farm'])+" from the casino!", 'color': "red" }

    request.session['activity'].append(log)
    return redirect('/')

def clear(request):
    del request.session['money']
    del request.session['activity']
    return redirect('/')
