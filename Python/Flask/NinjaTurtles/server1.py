from flask import Flask, render_template, request, redirect, url_for
import re

app = Flask(__name__)

TURTLE_REGEX= re.compile(r'[a-zA-Z0-9]')

@app.route('/')

def index():

    return render_template('index.html')

@app.route('/ninjas')
def Ninjas():

    return render_template('ninjas.html')



@app.route('/ninjas/<color>')
def PickNinjas(color):

    if color == 'purple':
        name= 'Donatello'
        tmnt= 'img/Donatello.jpg'
    elif color == 'blue':
        name= 'Leonardo'
        tmnt= 'img/Leonardo.jpg'
    elif color == 'orange':
        name = 'Micheal Angelo'
        tmnt= 'img/Micheal_Angelo.jpg'
    elif color == 'red':
        name = 'Raphael'
        tmnt= 'img/Raphael.jpg'
    elif color == '123':
        name = 'April'
        tmnt= 'img/April.jpg'

    return render_template('oneNinjas.html', color=color, tmnt= tmnt, name= name)

app.run(debug=True)
