from flask import Flask, render_template, request, redirect, session, Markup
import random
import datetime
app = Flask(__name__)
app.secret_key='ninJaaa'

time=datetime.datetime.now()

@app.route('/')
def indexPage():
    if 'gold' not in session:
        session['gold'] = 0
        session['log'] = ""
    return render_template('index.html')


@app.route('/process_money', methods=['POST'])
def money():

    if request.form['building'] == 'farm':
        num= random.randint(10,20)
        session['gold']= session['gold'] + num
        log= Markup("<p>"+"Earned"+" "+str(num)+" "+" from the farm! Lil piggy."+" "+str(time)+"</p>")
        print log

    elif request.form['building'] == 'cave':
        num= random.randint(5,10)
        session['gold']= session['gold'] + num
        log= Markup("<p>""Earned"+" "+str(num)+" "+" from the cave!"+" "+str(time)+"</p>")

    elif request.form['building'] == 'house':
        num= random.randint(2,5)
        session['gold']= session['gold'] + num
        log= Markup("<p>"+"Earned"+" "+str(num)+" "+" from the house!"+" "+str(time)+"</p>")

    elif request.form['building'] == 'casino':
        num= random.randint(-50,50)
        session['gold']= session['gold'] + num
        log= Markup("<p>Earned/Lost"+" "+str(num)+" "+" from the casino!"+" "+str(time)+"<p/>")


    session['log']= session['log'] + log
    '''
    Need to figure out how to add color to the p tag with the code this way.. gives a invalid syntax when adding class to it.
    Im thinking I have to DRY out this code.
    Like really DRY out this code...
    '''
    return redirect('/')

#this was jsut me making sure that I was printing the correct information when submiting, then I attempted to use Jquery to append it which didnt work.
    # session['farm'] ="Earned"+" "+str(farmgold)+" "+"gold from the farm!"+" "+str(time)
    # print session['farm']
    # session['cave'] ="Earned"+" "+str(cavegold)+" "+"gold from the Cave!"+" "+str(time)
    # session['house'] ="Earned"+" "+str(housegold)+" "+"gold from the house!"+" "+str(time)
    # session['casino'] ="Earned/Lost"+" "+str(casinogold)+" "+"gold from the casino!"+" "+str(time)
    # return redirect('/')


@app.route('/reset', methods=['POST'])
def showMoney():
    session.clear()
    return redirect('/')
app.run(debug=True)
