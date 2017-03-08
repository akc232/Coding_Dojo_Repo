from flask import Flask, render_template, request, redirect, session, flash, Markup, url_for
import re
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt

app= Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key= 'TheWall'
mysql = MySQLConnector(app, 'restfuldb')

NAME_REGEX = re.compile(r'^[a-zA-Z\-]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
#-------------------------------------------Main Page---------------------------------------------------------------
@app.route('/')
def index():
    query = "SELECT users.id, CONCAT(users.first_name,' ', users.last_name) AS name, users.email, users.created_at FROM users"
    users = mysql.query_db(query)
    return render_template('index.html', users = users)


#-------------------------------------------Show Page---------------------------------------------------------------
#creats a page to show user info
@app.route('/users/<id>')
def show_user(id):
    query = "SELECT users.id, CONCAT(users.first_name,' ', users.last_name) AS name, users.email, users.created_at FROM users"
    data = {
    'id': id
    }
    users = mysql.query_db(query)
    return render_template('show.html', users = users)
#-------------------------------------------Add Page---------------------------------------------------------------

#create an add page
@app.route('/users/new')
def create_users():

    return render_template('add.html')

@app.route('/users/create', methods = ['POST'])
def addsuser():
    query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES( :first, :last, :email, NOW(), NOW())"
    data ={
    'first': request.form['first'],
    'last': request.form['last'],
    'email': request.form['email']
    }
    mysql.query_db(query, data)
    return redirect('/')
#-------------------------------------------Edit Page---------------------------------------------------------------
#create an edit page
@app.route('/users/<id>/edit')
def show_edit(id):
    query = "SELECT * FROM users WHERE id = :id"
    data ={
    'id':id
    }
    users = mysql.query_db(query, data)
    return render_template('edit.html', users = users[0])

@app.route('/update', methods = ['POST'])
def submit_edits():
    query = "UPDATE users SET first_name = :first, last_name = :last, email = :email, updated_at = NOW() WHERE id = :id"
    data ={
    'first': request.form['first_name'],
    'last': request.form['last_name'],
    'email': request.form['email'],
    'id': request.form['id']
    }
    mysql.query_db(query, data)
    return redirect('/')


#post edits



app.run(debug = True)
