from django.shortcuts import render, redirect
import random

# Create your views here.

def index(request):

    try:
        request.session['money']
        request.session['activity']

    except:
        request.session['money'] =0
        request.session['activity'] = " "


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
        log= "You earned "+str(gold['farm'])+" from the farm!"
    if request.POST['building'] =='cave':
        request.session['money']+= gold['cave']
        log= "You earned "+str(gold['farm'])+" from the cave!"
    if request.POST['building'] =='house':
        request.session['money']+= gold['house']
        log= "You earned "+str(gold['farm'])+" from the house!"
    if request.POST['building'] =='casino':
        request.session['money']+= gold['casino']
        log= "You earned/lost "+str(gold['farm'])+" from the casino!"

    request.session['activity'] = log




# I think Im usuing to much session? I need to ge the "activity to render correctly in the HTMl. It will post but not a running list form, havent figured out how I will get it to render yet. Also need to add color. Probably a dictionary is needed."
    # if request.session['money']> 0:
    #     color = "green"
    # if request.session['money'] <0:
    #     color = "red"

    return redirect('/')
def clear(request):
    del request.session['money']
    del request.session['activity']
    if request.method == "POST":
        request.session['money'] = 0
    return redirect('/')





    # data = {
    # 'num' :random.randint(10,20),
    # }
    # request.session['money']= request.session['num'] + num,
    # log= Markup("<p>"+"Earned"+" "+str(num)+" "+" from the farm! Lil piggy."+" "+str(time)+"</p>"),
    # print log
    # print data
    # print request.session['money']
    #
    # elif request.POST['building'] == 'cave':
    #     num= random.randint(5,10),
    #     money= request.session['gold'] + num,
    #     log= Markup("<p>""Earned"+" "+str(num)+" "+" from the cave!"+" "+str(time)+"</p>"),
    #
    # elif request.POST['building'] == 'house':
    #     num= random.randint(2,5),
    #     money= request.session['gold'] + num,
    #     log= Markup("<p>"+"Earned"+" "+str(num)+" "+" from the house!"+" "+str(time)+"</p>"),
    #
    # elif request.POST['building'] == 'casino':
    #     num= random.randint(-50,50),
    #     money= request.session['gold'] + num,
    #     log= Markup("<p>Earned/Lost"+" "+str(num)+" "+" from the casino!"+" "+str(time)+"<p/>"),
    #

    # log= request.session['log'] + log
