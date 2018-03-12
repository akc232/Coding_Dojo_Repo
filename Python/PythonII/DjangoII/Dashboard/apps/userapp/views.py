from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User
import datetime
# Create your views here.
def index(request):
    context={
    # 'data': User.objects.all(),
    }

    return render(request,'userapp/index.html', context)
def login(request):
    result= User.objects.check_user(request.POST)
    # print valid, "<----"
    if result[0] ==False:
        for error in result[1]:
            messages.error(request, error)
            # print result[0], result[1], "<--"
            return redirect('/')

    else:
        # print result
        request.session['name']= result[1].first_name
        request.session['last']= result[1].last_name
        request.session['email']= result[1].email
        # print result[1]
        # print request.session['name']
        return redirect('dashboardapp:index')


def register(request):

    return render (request, 'userapp/register.html')

def create(request):
    process=User.objects.create_new_user(request.POST)

    if process[0] == False:
        for error in process[1]:
            messages.error(request, error)
        return redirect ('userapp:register')

    else:
        for success in process[1]:
            messages.info(request, success)
            print process
            print process[1]
            request.session['name']= process[2].first_name
            request.session['last']= process[2].last_name
            request.session['email']= process[2].email
        return render (request, 'dashboardapp/index.html')

def success(request):

    if 'name' not in request.session:

        return redirect('/')
    else:
        messages.info(request, 'Log in Successful!')

        return render(request, 'loginapp/success.html')

def logout(request):
    request.session.clear()
    return redirect ('/')


# def process(request):
#     process=User.objects.create_new_user(request.POST)
#
#     if process[0] == False:
#         for error in process[1]:
#             messages.error(request, error)
#         return redirect ('/')
#
#     else:
#         for success in process[1]:
#             messages.info(request, success)
#             print process
#             print process[1]
#             request.session['name']= process[2].first_name
#             request.session['last']= process[2].last_name
#             request.session['email']= process[2].email
#         return render (request, 'userapp/success.html')

# def login(request):
#
#     result= User.objects.check_user(request.POST)
#     # print valid, "<----"
#     if result[0] ==False:
#         for error in result[1]:
#             messages.error(request, error)
#             # print result[0], result[1], "<--"
#             return redirect('/')
#
#     else:
#         # print result
#         request.session['name']= result[1].first_name
#         request.session['last']= result[1].last_name
#         request.session['email']= result[1].email
#         # print result[1]
#         # print request.session['name']
#         return redirect('/success')
#
# def success(request):
#
#
#     if 'name' not in request.session:
#
#         return redirect('/')
#     else:
#         messages.info(request, 'Log in Successful!')
#
#         return render(request, 'loginapp/success.html')
#
# def logout(request):
#     request.session.clear()
#     return redirect ('/')
