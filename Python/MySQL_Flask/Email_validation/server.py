from flask import Flask, render_template, request, redirect, session, flash
import re
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'emaildb')
app.secret_key = 'ThiSiSaSEcret!'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():
    query = "SELECT * FROM user_email"
    users = mysql.query_db(query)


    return render_template('index.html',all_users = users)


@app.route('/success', methods= ['POST'])
def sucess():
    email = request.form['email']

    if request.method == 'POST':
        if not EMAIL_REGEX.match(email):
            flash('Invalid email format.', 'error')
            return redirect('/')
        else:
            insert = "INSERT INTO user_email (email, created_at, updated_at) VALUES(:email, NOW(), NOW());"
            data = {
                     'email': request.form['email'],
                   }
            query = "SELECT * FROM user_email"
            users = mysql.query_db(query)
            mysql.query_db(insert, data)
            return render_template('success.html', all_users= users)

app.run(debug=True)
