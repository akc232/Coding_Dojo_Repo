from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User
# Create your views here.
def index(request):
    context={
    'data': User.objects.all()
    }
    return render(request,'loginapp/index.html', context)

def process(request):
    process=User.objects.create_new_user(request.POST)
    if process[0] == False:
        for error in process[1]:
            messages.error(request, error)
        return redirect ('/')

    else:
        for success in process[1]:
            messages.info(request, success)
            # request.session.name = process[2].first_name
            # print request.session.name
        return redirect ('/')

def login(request):

    result= User.objects.check_user(request.POST)
        # print result
    if result[0] ==False:
        for error in result[1]:
            messages.error(request, error)
            print result[0], result[1], "<--"
            return redirect('/')

    else:
        print result
        request.session['name']= result[1].first_name
        print request.session['name']
        return redirect('/success')

def success(request):

    if 'name' not in request.session:

        return redirect('/')
    else:
        messages.info(request, 'Log in Successful!')

        return render(request, 'loginapp/success.html')

def logout(request):
    del request.session['name']
    return redirect ('/')
