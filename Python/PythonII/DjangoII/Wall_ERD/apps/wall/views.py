from django.shortcuts import render
from .models import Users, Messages, Comments
# Create your views here.
def index(request):
    Users.objects.create(first_name = "John", last_name = "Doe", email = "jdoe@django.com", password = "secret" )
    user = Users.objects.all()
    print"--->", (user)
    # Messages.objects.create()
    # message = Messages.objects.all()
    # print "--->", message
    # Comments.objects.create()
    # comment = Comments.objects.all()
    # print "--->", comment

    return render (request, 'wall/index.html')
