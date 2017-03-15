from django.shortcuts import render, redirect
import re
from django.contrib import messages
from .models import User


# EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
# Create your views here.
def index(request):
    return render(request, 'emailapp/index.html')


def success(request):
    data = {
        "emails": User.objects.all()
    }
    return render (request, 'emailapp/email.html', data)

def add(request):

    user = request.POST['email']
    print "is this running?"
    if not EMAIL_REGEX.match(user):
        messages.error(request,'Email is not Valid!!')
        return redirect('/')
    else:
        User.objects.create(email=request.POST['email'])
        messages.info(request, "The Email Address you entered ("+ user +") is valid! Thank You!")
    return redirect ('/success')

def delete(request,id):
    delete= User.objects.get(id=id)
    delete.delete()
    messages.info(request, "Email Removed!")
    return redirect ('/')
