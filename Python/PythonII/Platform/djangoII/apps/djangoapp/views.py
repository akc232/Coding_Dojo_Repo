from django.shortcuts import render
from .models import User
# Create your views here.
def index(request):
    People.objects.create(first_name = "Andrew", last_name = "Chang")
    people = People.objects.all()
    print (people)
    return render(request, 'djangoapp/index.html')
