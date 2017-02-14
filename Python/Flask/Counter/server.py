from flask import Flask, render_template, request, redirect, session

app= Flask(__name__)
app.secret_key='CoUnter'

@app.route('/')

def indexCounter():
    try:
        session['counter']+=1
    except KeyError:
        session['counter'] =1


    return render_template('index.html')

    #renders the index, and adds to the count

@app.route('/ninja', methods=['POST'])
def sessionCounter():
    session['counter'] = session['counter']+1
    return redirect('/')


@app.route('/hacker', methods=['POST'])
def showCount():
    session['counter'] =0
    return redirect('/')


app.run(debug=True)
