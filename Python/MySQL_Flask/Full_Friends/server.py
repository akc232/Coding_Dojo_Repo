from flask import Flask, render_template, request, redirect, session, flash
import re
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app,'full_friendsdb')
app.secret_key = 'SupeRsecreT'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html', all_friends = friends)

@app.route('/friends', methods= ['POST'])
def create():
    query= "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES (:first, :last, :email, NOW(), NOW())"
    data = {
    'first': request.form['first_name'],
    'last': request.form['last_name'],
    'email': request.form['email']
    }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<id>/edit')
def show(id):
    query = "SELECT * FROM friends WHERE id = :id"
    data = {'id': id}
    friends= mysql.query_db(query, data)
    return render_template('edit.html', friends = friends[0])

@app.route('/update', methods = ['POST'])
def update():
    query = "UPDATE friends SET first_name = :first, last_name = :last, email = :email, updated_at = NOW() WHERE id = :id"
    data = {
    'first': request.form['first_name'],
    'last': request.form['last_name'],
    'email': request.form['email'],
    'id': request.form['id']
    }
    print data
    print "---->", mysql.query_db(query, data),
    print query
    return redirect('/')

@app.route('/friends/<id>/delete', methods = ['POST'])
def delete(id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id':id}
    mysql.query_db(query, data)
    # print mysql.query_db(query, data)
    # print id
    # print data
    return redirect('/')

app.run(debug=True)
