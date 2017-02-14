from flask import Flask, render_template, request, redirect

app= Flask(__name__)

@app.route('/')

def index():
    return render_template('index.html')

@app.route('/users', methods=['POST'])
def create_user():
    userdata= request.form
    # name=request.form['name']
    # location= request.form['location']
    # language= request.form['language']
    # comment= request.form['comment']
    print userdata
    return render_template('/users.html', userdata=userdata)

app.run(debug=True)
