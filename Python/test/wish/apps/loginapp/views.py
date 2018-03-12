from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User
from ..wishapp.models import MyItem
import datetime
# Create your views here.
def index(request):
    context={
    # 'data': User.objects.all(),
    }

    return render(request,'loginapp/index.html', context)

def process(request):
    process=User.objects.create_new_user(request.POST)


    if process[0] == False:
        for error in process[1]:
            messages.error(request, error)
        return redirect ('login:index')

    else:
        request.session['id']=process[2].id
        request.session['name']= process[2].first_name
        request.session['last']= process[2].last_name
        request.session['email']= process[2].email
        return redirect ('wish:index')

def login(request):

    result= User.objects.check_user(request.POST)
    # userID= User.objects.filter(email=result[1].email)
    # print userID, "<-- userID"
    # print userID[0].id

    if result[0] ==False:
        for error in result[1]:
            messages.error(request, error)
            return redirect('login:index')

    else:
        request.session['id']=result[1].id
        request.session['name']= result[1].first_name
        request.session['last']= result[1].last_name
        request.session['email']= result[1].email
        # if result[0] == True:
        #     messages.info(request, 'Log in Successful!')
        #     pass
        return redirect('wish:index')

def success(request):


    if 'id' not in request.session:

        return redirect('login:index')
    else:

        return render(request, 'wish:index')

def logout(request):
    request.session.clear()
    print  "session"
    return redirect ('login:index')
