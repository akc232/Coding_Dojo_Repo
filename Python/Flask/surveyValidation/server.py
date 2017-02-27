from flask import Flask, render_template, request, redirect, session, flash

app= Flask(__name__)
app.secret_key= 'SurveYY'

@app.route('/')

def index():
    return render_template('index.html')

@app.route('/users', methods=['POST'])
def create_user():
    # session['userdata']= request.form
    name=request.form['name']
    location= request.form['location']
    language= request.form['language']
    comment= request.form['comment']
    # print userdata
    if len(request.form['name'])<1:
        flash("You done effed up AARON. Try agian...Your Name Please!")
    # else:
    #     flash("Name is logged")
    if len(request.form['comment'])>120:
        flash("Too amny words bruh.")
    # else:
    #     flash("Thanks for the words.")

    return render_template('/users.html', name=name, location=location, language=language, comment=comment)

app.run(debug=True)


# The Name and Comment fields should be validated so that they are not blank. Also, validate that the comment field is no longer than 120 characters.
