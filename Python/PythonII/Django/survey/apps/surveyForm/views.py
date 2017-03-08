from django.shortcuts import render, redirect

# Create your views here.
def survey(request):
    print "*"*20
    return render (request, 'surveyForm/index.html')


def show(request):

    info = {
    'name': request.session['name'],
    'location': request.session['dojo'],
    'language': request.session['code'],
    'words': request.session['comment'],
    }
    print "-----", info
    return render (request, 'surveyForm/users.html', info)

def create(request):
    if request.method == "POST":
        request.session['name'] = request.POST['first_name'],
        request.session['dojo'] = request.POST['location'],
        request.session['code'] = request.POST['language'],
        request.session['comment'] = request.POST['comment'],
        request.session['counter'] +=1
        return   redirect ('/survey/result')
