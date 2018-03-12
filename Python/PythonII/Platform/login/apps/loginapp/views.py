from django.shortcuts import render, HttpResponse
from .models import User
# Create your views here.

def index(request):
    User.userManager.login("test@test.com", "testing")
    User.userManager.register()

    return HttpResponse("It works!")
