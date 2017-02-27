from flask import Flask, render_template, request, redirect, session, flash, Markup
from flask import Markup
import random


app= Flask(__name__)
app.secret_key='number'



@app.route('/')
def indexRandom():

    if 'counter' not in session:
        session['counter'] = 0
    if 'result' not in session:
        session['result']= " "

    return render_template('index.html')

@app.route('/number', methods=['POST'])

def compare_num():
    session['random']= random.randrange(0,101)

    if  request.form['guess'] > session['random']:
        session['counter']+=1
        flash('To High!', 'flash')

    elif request.form['guess'] < session['random']:
        session['counter']+=1
        flash('To Low!', 'low')

    elif request.form['guess'] == session['random']:
        session['counter']+=1
        flash('Correct!', 'correct')

    print session['random']
    print request.form['guess']
    return redirect('/')



@app.route('/reset', methods=['POST'])
def restCount():
    session.clear()

    return redirect('/')

app.run(debug=True)
