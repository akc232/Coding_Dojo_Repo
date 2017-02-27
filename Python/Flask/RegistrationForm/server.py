from flask import Flask, render_template, request, redirect, session, flash, Markup, url_for
import re
from mysqlconnection import MySQLConnector

app= Flask(__name__)
app.secret_key= 'notsecreTT'
mysql = MySQLConnector(app, 'flaskSQLdb')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
PASSWORD_REGEX= re.compile(r'\d.*[A-Z]|[A-Z].*\d')
BIRTHDAY_REGEX= re.compile(r'^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$')
@app.route('/')

def index():

    query= ("SELECT * FROM users")
    users = mysql.query_db(query)
    return render_template('index.html')

@app.route('/user', methods=['POST'])
def create_user():


    firstname=request.form['firstname']
    lastname= request.form['lastname']
    email= request.form['email']
    password= request.form['password']
    confirm= request.form['confirm']
    birthday= request.form['birthday']
    # print userdata

    if request.method == 'POST':
        # checks for blank
        if len(firstname)<=0 or len(lastname)<=0 or len(email)<=0 or len(password)<=0 or len(confirm)<=0:
            flash('All fields must be filled in!', 'error')


        elif re.search('\d',firstname) or re.search('/d',lastname):
            flash('Numbers are not allowed in names!', 'error')


        elif len(password) and len(confirm)<8:
            flash('Password must be more than 8 characters!', 'error')

        elif not PASSWORD_REGEX.match(password):
            flash('Password Must contain one Capital and one Number.','error')

        elif password != confirm:
            flash('Passwords do not match', 'error')

        elif not EMAIL_REGEX.match(email):
            flash('Invalid email format.', 'error')


        elif not BIRTHDAY_REGEX.match(birthday):
            flash('Invalid Birthday Format. (mm/dd/yyyy).', 'error')

        else:
            flash('Congrats! You are registered!', 'success')



    return redirect('/')

app.run(debug=True)

    # """
    # Create a simple registration page with the following fields:
    #
    # email
    # first_name
    # last_name
    # password
    # confirm_password
    # Here are the validations you must include:
    #
    # All fields are required and must not be blank. DONE
    # First and Last Name cannot contain any numbers DONE
    # Password should be more than 8 characters DONE
    # Email should be a valid email DONE
    # Password and Password Confirmation should match DONE
    # When the form is submitted, make sure the user submits appropriate information. If the user did not submit appropriate information, return the error(s) above the form that asks the user to correct the information. DONE!!
    #

    # Ninja Version:
    # Add the validation that requires a password to have at least 1 uppercase letter and 1 numeric value. DONE!!
    # Hacker Version:
    # Add a birth-date field that must be validated as a valid date (and must be from the past). DONE
    # """
