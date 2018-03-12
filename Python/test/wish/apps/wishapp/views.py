from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.contrib import messages, sessions
from .models import User, MyItem


#started at 10pm ended 11:08

# Create your views here.
def index(request):
    context = {
        'items': MyItem.objects.all().exclude(user__id= request.session['id']),
        'myitems': MyItem.objects.filter(user__id= request.session['id']),
    }

    # print context

    return render( request, 'wishapp/index.html', context)

def show_create(request):
    # context = {
    #     'items': MyItem.objects.
    # }

    return render (request, 'wishapp/create.html')

def add(request):
    add= MyItem.objects.create_item(request.POST)
    # print add,"<<<<<"

    return redirect('wish:index')

def show_item(request,id):
    context={
    'items': MyItem.objects.filter(id=id)
    }

    return render (request, 'wishapp/show.html', context)

def add_list(request):
    MyItem.objects.add_item(request.POST)
    return redirect('wish:index')
