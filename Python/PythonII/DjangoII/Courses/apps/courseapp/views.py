from django.shortcuts import render, redirect
from .models import Course, Comment
# Create your views here.
def index(request):
    info = {
    'courses': Course.objects.all()
    }
    return render(request, 'courseapp/index.html', info)

def create(request):
    print request.POST['name']
    print request.POST['description']
    Course.objects.create(name =request.POST['name'] , description =request.POST['description'])
    return redirect('/')

def remove_Course(request, id):
    info = {
    'ids': Course.objects.filter(id=id)
    }
    return render(request, 'courseapp/remove.html', info)

def remove(request,id):
    instance = Course.objects.get(id=id)
    instance.delete()
    return redirect('/')


def infoPage(request,id):
    info = {
    'courses': Course.objects.filter(id=id),
    }
    return render(request, 'courseapp/info.html', info)


def commentPost(request,id):
    course = Course.objects.get(id=id)
    Comment.objects.create(comment =request.POST['comment'], course=course )
    print request.POST['comment']
    return redirect ('/')

def commentDelete(request, id):
    delete = Comment.objects.get(id=id)
    delete.delete()
    return redirect ('/')

#need to look up the redirect to include the id so I dont have to redirect to the main index page.
