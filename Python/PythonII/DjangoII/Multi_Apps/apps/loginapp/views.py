from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User
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
        for success in process[1]:
            # print process
            # print process[1]
            userID= User.objects.filter(email=process[2].email)
            messages.info(request, success)
            request.session['id']=userID[0].id
            request.session['name']= userID[0].first_name
            request.session['last']= userID[0].last_name
            request.session['email']= userID[0].email
        return render (request, 'loginapp/success.html')

def login(request):

    result= User.objects.check_user(request.POST)
    userID= User.objects.filter(email=result[1].email)
    # print userID, "<-- userID"
    # print userID[0].id

    if result[0] ==False:
        for error in result[1]:
            messages.error(request, error)
            return redirect('login:index')

    else:
        request.session['id']=userID[0].id
        request.session['name']= userID[0].first_name
        request.session['last']= userID[0].last_name
        request.session['email']= userID[0].email
        messages.info(request, 'Log in Successful!')
        return redirect('login:success')

def success(request):


    if 'id' not in request.session:

        return redirect('loginapp:index')
    else:

        return render(request, 'loginapp/success.html')

def logout(request):
    request.session.clear()
    return redirect ('login:index')
