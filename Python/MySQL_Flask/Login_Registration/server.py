from flask import Flask, render_template, request, redirect, session, flash, Markup, url_for
import re
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt

app= Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key= 'notsecreTT'
mysql = MySQLConnector(app, 'logindb')

NAME_REGEX = re.compile(r'^[a-zA-Z\-]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():

    query= ("SELECT * FROM users")
    users = mysql.query_db(query)
    return render_template('index.html', title = 'Registration', users= users)


@app.route('/users', methods = ['POST'])
def create():
    first = request.form['first_name']
    last = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    confirm = request.form['confirm_password']

    #checks for validations when registering
    errors = []
    if len(first) < 2:
        errors.append('First name must be at least 2 characters!')
    elif not NAME_REGEX.match(first):
        errors.append('First name can not contian numbers or special characters!')

    if len(last) < 2:
        errors.append('Last name must be at least 2 characters!')
    elif not NAME_REGEX.match(last):
        errors.append('Last name can not contian numbers or special characters!')

    if not EMAIL_REGEX.match(email):
        errors.append('Invalid Email Format!')
    if password != confirm:
        errors.append('Passwords do not match!')

#flashes errors
    if errors:
        for error in errors:
            flash(error)
        return redirect('/')
    else:
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        print pw_hash
        query = "INSERT INTO users (first_name, last_name, email, pw_hash, created_at, updated_at) VALUES(:first_name, :last_name, :email, :password, NOW(), NOW())"
        data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': pw_hash
        }
        mysql.query_db(query, data)
        return redirect('/success')

@app.route('/login')
def register_page():

    query= ("SELECT * FROM users")
    users = mysql.query_db(query)
    return render_template('login.html', title = 'Login', users = users)

@app.route('/user_login', methods = ['POST'])
def user_login():
    email = request.form['email']
    password = request.form['password']
    errors=[]
    user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    query_data = { 'email': email }
    user = mysql.query_db(user_query, query_data) # user will be returned in a list
    if bcrypt.check_password_hash(user[0]['pw_hash'], password):
        return redirect('/success')
    else:
        errors.append('Password is incorrect')
        if errors:
            for error in errors:
                flash(error)
            return redirect('/login')

@app.route('/success')
def success():

    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    return render_template('success.html', all_users = users)

#

app.run(debug = True)
