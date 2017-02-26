from flask import Flask
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
import md5 # imports the md5 module to generate a hash
password = 'password';
# encrypt the password we provided as 32 character string
encrypted_password = md5.new(password).hexdigest();
print "--------->", encrypted_password; #this will show you the encrypted value
# 5f4dcc3b5aa765d61d8327deb882cf99 -> nice!
mysql = MySQLConnector(app, 'flaskSQLdb')
# an example of running a query

query= ("SELECT * FROM users")
users = mysql.query_db(query)

print mysql.query_db("SELECT * FROM users")
app.run(debug=True)
