from flask import Flask
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'flaskSQLdb')
# an example of running a query

query= ("SELECT * FROM users")
users = mysql.query_db(query)

print mysql.query_db("SELECT * FROM users")
app.run(debug=True)
