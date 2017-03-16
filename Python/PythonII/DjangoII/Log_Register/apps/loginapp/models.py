from __future__ import unicode_literals
from django.forms import extras
from django.db import models
from django.core.exceptions import ObjectDoesNotExist
import re, bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
NAME_REGEX = re.compile(r'^[a-zA-Z\-]+$')

# Create your models here.
class UserManager(models.Manager):
    def create_new_user(self, data):
        flash=[]

        if len(data['first_name'])< 2:
            flash.append('First Name must be greater than 2 letters')

        elif not NAME_REGEX.match(data['first_name']):
            flash.append('First name can not contian numbers or special characters!')

        if len(data['last_name']) < 2:
            flash.append('Last name must be at least 2 characters!')

        elif not NAME_REGEX.match(data['last_name']):
            flash.append('Last name can not contian numbers or special characters!')

        if not EMAIL_REGEX.match(data['email']):
            flash.append('Email Format is Invalid!')

        if data['password'] != data['confirm']:
            flash.append('Passwords do not match!')

        elif len(data['password']) <8:
            flash.append('Password Must be 8 or more characters long!')

        if flash:
            print "flashed message"
            # print len(first), last, email
            print User.objects.all()
            return (False, flash)

        else:
            hashed = bcrypt.hashpw(data['password'].encode(), bcrypt.gensalt())

            create= User.objects.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            password=hashed
            )
            flash.append("User Registered! Please Log in.")
            # print User.objects.all()
            return (True, flash,create)

    def check_user(self, data):
        flash=[]
        try:
            registered=User.objects.get(email=data['email'])
            if bcrypt.checkpw(data['password'].encode(), registered.password.encode()) != True:
                flash.append('Email or Password in Incorrect')
                return (False,flash, registered)
            else:
                return (True,registered)


        except ObjectDoesNotExist:
            print "not a user"
            pass
            flash.append('Email or Password in Incorrect')
        return (False, flash)






        flash.append('Not a valid Email or Password')
        #
        # if not bcrypt.checkpw(data['password'], registered.password.encode()):
        #     flash.append('Email or Password is Incorrect!')
        #
        #
        # if data['email'] != registered:
        #     flash.append('Email or Password is Incorrect!')
        #
        # if flash:
        #     return (False,flash, registered)
        #
        # else:
        #     flash.append('Successfully Logged in!')
        #     return (True,flash, registered)



class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
    def __unicode__(self):
        return "First:"+self.first_name+" Last:"+ self.last_name+" Email:"+ self.email
    # def __str__(self):
    #     return self.first_name+" "+self.last_name+" "+self.email
