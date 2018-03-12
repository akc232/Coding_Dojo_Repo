from django.shortcuts import render, redirect
from .models import Course, Comment
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    info = {
    'courses': Course.objects.filter(user_id=request.session['id']),
    'logs': Course.objects.all(),
    }
    # print info
    return render(request, 'courseapp/index.html', info)

def create(request):
    # print request.POST['name']
    # print request.POST['description']
    Course.objects.create(user_id= request.session['id'], name =request.POST['name'] , description =request.POST['description'],)
    return redirect('course:index')

def remove_Course(request, id):
    info = {
    'ids': Course.objects.filter(id=id)
    }
    return render(request, 'courseapp/remove.html', info)

def remove(request,id):
    instance = Course.objects.get(id=id)
    instance.delete()
    return redirect(reverse('course:index'))


def infoPage(request,id):
    info = {
    'courses': Course.objects.filter(id=id),
    'text': Comment.objects.all(),
    }
    # print info
    return render(request, 'courseapp/info.html', info)


def commentPost(request,id):
    course = Course.objects.get(id=id)
    # print course,"<----"
    # print course.id, "id??"
    # print course
    Comment.objects.create(comment=request.POST['comment'], courses_id=course.id, user_id=request.session['id'] )
    return redirect('course:index')
    # return redirect (reverse('course:commentPost', kwargs={'id':course.id}))

def commentDelete(request, id):
    delete = Comment.objects.get(id=id)
    delete.delete()
    return redirect ('course:index')

def user_courses(request):
    data={
    'users': Course.objects.all()
    }
    # print data
    return render (request, 'courseapp/user_courses.html', data )

def add_user_courses(request):
    request.session['count'] = 0
    tally = Course.objects.get(user_id__email=request.POST['student'])
    print tally, "????"
    if request.method == 'POST':
        # Course.objects.create(user_id= tally.id, count= +1)


        return redirect('course:user_courses')

#need to look up the redirect to include the id so I dont have to redirect to the main index page.
