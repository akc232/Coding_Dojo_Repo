from flask import Flask, render_template, request, redirect, flash, session
import re
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = "I<3Secrets"
mysql = MySQLConnector(app, "helloflaskdb")
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]*$')

@app.route('/')

def hello_flask():
    return render_template("index.html")

@app.route('/users', methods=["GET"])
def showall():
    query = "SELECT * FROM users;"
    users = mysql.query_db(query)
    return render_template("users.html", users=users)

@app.route('/users', methods=['POST'])
def addusers():
    print request.form['first_name']
    print request.form['last_name']
    print request.form['email']
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Please enter a valid e-mail address")
    if not len(request.form['first_name']) > 2:
        flash("First Name field should be longer than two characters")
    if not len(request.form['last_name']) > 2:
        flash("Last Name field should be longer than two characters")
    if '_flashes' in session:
        return redirect('/')

    query = "INSERT INTO users(first_name, last_name, email, created_at, updated_at) VALUES(:first_name, :last_name, :email, now(), now())"
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }
    # print data
    newUserID = mysql.query_db(query, data)
    flash("User successfully added!")
    return redirect('/users')



@app.route('/users/<id>/delete')
def showuser(id):
    query = "DELETE FROM users WHERE iduser = :id"
    data = {
        "id": id
    }
    mysql.query_db(query, data)
    return redirect("/users")



@app.route('/clear')
def reset():
    session.clear()
    return redirect('/')

app.run(debug=True)
