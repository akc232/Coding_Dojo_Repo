from flask import Flask, render_template, request, redirect, session, flash, Markup, url_for
import re
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt

app= Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key= 'TheWall'
mysql = MySQLConnector(app, 'walldb')

NAME_REGEX = re.compile(r'^[a-zA-Z\-]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

# --------------------------------------------Main Page--------------------------------------------------------------
#main page with login to wall or link to register-------
@app.route('/')
def main_page():
    query= ("SELECT * FROM users")
    users = mysql.query_db(query)
    return render_template('index.html', title = 'Main Page')

# --------------------------------------Register/Login/Logout Routes-------------------------------------------------
#display register page----------
@app.route('/register')
def register_Page():
    query= ("SELECT * FROM users")
    users = mysql.query_db(query)
    return render_template('register.html', title = 'Register')

#register a user---------
@app.route('/register_user', methods = ['POST'])
def create():
    first = request.form['first_name']
    last = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    confirm = request.form['confirm_password']
    errors = []
    registered = []
    if len(first) < 2:
        errors.append('First name must be at least 2 characters!')
    elif not NAME_REGEX.match(first):
        errors.append('First name can not contian numbers or special characters!')
        #firstname
    if len(last) < 2:
        errors.append('Last name must be at least 2 characters!')
    elif not NAME_REGEX.match(last):
        errors.append('Last name can not contian numbers or special characters!')
        #lastname
    if not EMAIL_REGEX.match(email):
        errors.append('Invalid Email Format!')
        #email
    if password != confirm:
        errors.append('Passwords do not match!')
    elif len(password) <=0:
        errors.append('No password Entered!')
        #password
    query = 'SELECT * FROM users WHERE email = :email'
    data = {'email': request.form['email']}
    user = mysql.query_db(query, data)

    if user:
        errors.append('Email already exists.')
    if errors:
        for error in errors:
            flash(error)
        return redirect('/register')
    else:
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        # print pw_hash
        query = "INSERT INTO users (first_name, last_name, email, pw_hash, created_at, updated_at) VALUES(:first_name, :last_name, :email, :password, NOW(), NOW())"
        data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': pw_hash
        }
        mysql.query_db(query, data)
        registered.append('Success! User is registered! Please log in.')

        if registered:
            for register in registered:
                flash(register)
        return redirect('/register')


#login user---------------------------------------------
@app.route('/login_user', methods = ['POST'])
def user_login():
    email = request.form['email']
    password = request.form['password']
    errors=[]
    user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    query_data = { 'email': request.form['email'] }
    user = mysql.query_db(user_query, query_data)

    if user:
        if bcrypt.check_password_hash(user[0]['pw_hash'], password):
            session['user_id'] = user[0]['id']
            session['first_name'] = user[0]['first_name']
            session['last_name'] = user[0]['last_name']
            session['email'] = user[0]['email']
            return redirect('/success')
        else:
            errors.append('Password is incorrect')
            if errors:
                for error in errors:
                    flash(error)
        return redirect('/')
    else:
        errors.append('Invalid email')
    if errors:
        for error in errors:
            flash(error)
        return redirect('/')

# logout out the user----------------
@app.route('/logout', methods = ['POST'])
def logout():
    session.clear()
    return redirect('/')



# -----------------------------------------------------The Wall Routes-------------------------------------------

#display Wall Page-----------
@app.route('/success')
def success():
    if 'user_id' not in session:
        flash('Please Log In to post!')
        return redirect('/')
    else:
        query = "SELECT posts.content, users.first_name, users.last_name, posts.created_at, posts.id FROM posts JOIN users on posts.user_id = users.id"
        posts = mysql.query_db(query)

        comment_query = "SELECT comments.comment, comments.post_id, users.first_name, users.last_name, comments.created_at FROM comments JOIN users on comments.user_id = users.id"
        comments = mysql.query_db(comment_query)
        return render_template('wall.html', posts = posts, comments = comments)

#create a post------------
@app.route('/posts', methods = ['POST'])
def content():
    query = "INSERT INTO posts (user_id, content, created_at, updated_at) VALUES (:user_id, :content, NOW(), NOW())"
    data={
    'user_id': session['user_id'],
    'content': request.form['message']
    }
    mysql.query_db(query, data)
    return redirect('/success')

#create a comment-------
@app.route('/comment/<post_id>', methods = ['POST'])
def comments(post_id):
    query = "INSERT INTO comments (user_id, post_id, comment, created_at, updated_at) VALUES (:user_id, :post_id, :comment, NOW(), NOW())"
    data={
    'user_id': session['user_id'],
    'post_id': post_id,
    'comment': request.form['comment']
    }
    mysql.query_db(query, data)
    return redirect('/success')

#----------------------------------------------Edit/Delete Routes-------------------------------------------------------

#create a check so only users can delete their own posts------
#create delete function------------
@app.route('/success/<id>/delete', methods = ['POST'])
def delete(id):
        query = "DELETE FROM posts WHERE id = :id"
        data = {'id': id}
        print "-------->", mysql.query_db(query, data)
        print data
        flash('Deleted Post!!')
        return redirect('/success')

#create delete comment function--------------
@app.route('/success/<id>/comment_delete', methods = ['POST'])
def delete_comment(id):
    query = "DELETE FROM comments WHERE post_id = :id"
    data = {'id': id}
    print "-------->", mysql.query_db(query, data)
    print data
    flash ('Deleted Comment!!')
    return redirect('/success')

app.run(debug = True)
