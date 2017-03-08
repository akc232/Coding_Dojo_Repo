from django.shortcuts import render, HttpResponse
import datetime
import django

# Create your views here.
def index(request):

    time = {
    'time': datetime.datetime.now()
    }
    # time = {
    # 'time': django.utils.timezone.now(),
    # }

    return render(request, 'timedisplay/index.html', time)
