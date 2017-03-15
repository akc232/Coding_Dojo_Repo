from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
# Create your models here.
class UserManager(models.Manager):
    def create_new_user(self,data):
        flash=[]
        success=[]
        if not EMAIL_REGEX.match(data['email']):
            flash.append('Email is not Valid!!')
            return(False, flash)

        else:
            new_user = User.objects.create(email=data['email'])
            flash.append("The Email Address you entered ("+ data['email'] +") is valid! Thank You!")
            return (True, flash)


class User(models.Model):
    email = models.CharField(max_length= 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
    def __str__(self):
        return self.email
