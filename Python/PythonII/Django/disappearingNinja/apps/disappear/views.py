from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'disappear/index.html')

#show imgs
def show(request):
    return render (request, 'disappear/ninja.html')

# run process to display single TMNT
def display(request, color):

    if color == 'purple':
        name= 'Donatello'
        tmnt= 'disappear/img/Donatello.jpg'
    elif color == 'blue':
        name= 'Leonardo'
        tmnt= 'disappear/img/Leonardo.jpg'
    elif color == 'orange':
        name = 'Micheal Angelo'
        tmnt= 'disappear/img/Micheal_Angelo.jpg'
    elif color == 'red':
        name = 'Raphael'
        tmnt= 'disappear/img/Raphael.jpg'
    elif color == 'april':
        name = 'April'
        tmnt= 'disappear/img/April.jpg'

        data={
        'name': name,
        'tmnt': tmnt,
        }
        return render (request, 'disappear/ninjacolor.html', data)

    else:
        tmnt= 'disappear/img/April.jpg'
    other={
    'name': 'not the right page',
    'tmnt': tmnt,
    }

    return render (request, 'disappear/ninjacolor.html', other)
