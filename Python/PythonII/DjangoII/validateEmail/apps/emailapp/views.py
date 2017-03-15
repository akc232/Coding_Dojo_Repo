from django.shortcuts import render, redirect
import re
from django.contrib import messages
from .models import User


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
# Create your views here.
def index(request):
    return render(request, 'emailapp/index.html')


def success(request):
    data = {
        "emails": User.objects.all()
    }
    return render (request, 'emailapp/email.html', data)

def process(request):
    add = User.objects.create_new_user(request.POST)
    # print make
    # print "#0", make[1]
    if add[0] == True:
        for success in add[1]:
            messages.error(request,success)
        return redirect ('/success')
    else:
        for error in add[1]:
            messages.info(request, error)
        return redirect('/')

def delete(request,id):
    delete= User.objects.get(id=id)
    delete.delete()
    messages.info(request, "Email Removed!")
    return redirect ('/success')
