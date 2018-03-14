from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.contrib import messages
from .models import User, Poke

# Create your views here.


def index(request):
    if 'id' not in request.session:
        return redirect ('login:index')
    else:
        users= User.objects.order_by('id')
        context={
        'users':User.objects.exclude(id=request.session['id']),
        # 'pokes': Poke.objects.filter().count(),


        }
        print context


        return render (request, 'beltapp/index.html', context)

def create(request):
    if 'id' not in request.session:
        return redirect ('login:index')
    else:
        Poke.objects.create_poke(request.POST)

        return redirect('belt:index')
