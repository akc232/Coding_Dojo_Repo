from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')

def index():
    return render_template("index.html", greeting="Hello Landing Page. I hope you enjoy my greeting!! Coding Dojo!! Weeeew", paragraph="Check me out. Im a paragraph.", times= 5)

@app.route('/ninjas')

def ninjas():
    return render_template("ninjas.html", greeting="This is all the super cool information about ninjas...", paragraph= "The coolest thing about them is that they are better than pirates. The end.")
@app.route('/dojos')

def dojos():
    return render_template('dojos.html')   
app.run(debug=True)
