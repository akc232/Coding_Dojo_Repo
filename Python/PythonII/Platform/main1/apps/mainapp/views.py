from django.shortcuts import render
from.models import Blog, Comment
# Create your views here.

def index(request):
    context = {
    "blogs": Blog.objects.all()
    # select * from Blog
    }
    return render(request, 'mainapp/index.html', context)
def blogs(request):
 # using ORM
    Blog.objects.create(title=request.POST['title'], blog=request.POST['blog'])
 # insert into Blog (title, blog, created_at, updated_at) values (title, blog, now(), now())
    return redirect('/')
