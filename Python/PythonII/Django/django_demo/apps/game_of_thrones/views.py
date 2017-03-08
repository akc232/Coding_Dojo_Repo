from django.shortcuts import render, HttpResponse, redirect
#CONTROLER
# Create your views here.
def index(request):
    print("*"*10)
    return render (request, "game_of_thrones/index.html")

def show(request) :
    print(request.method)
    return render(request, 'game_of_thrones/show_users.html')

def create(request):
    if request.method == 'POST':
        print "*"*50
        print request.POST
        print "*"*50
        request.session['name'] = request.POST['first_name']
        return redirect('/')

    else:
        print request.method
        return redirect('/')
