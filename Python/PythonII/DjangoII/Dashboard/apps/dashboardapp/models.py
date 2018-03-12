from __future__ import unicode_literals

from django.db import models
from ..userapp.models import User

# Create your models here.

# class DashboardManager(models.Manager):
#     pass
#
class Message(models.Model):
    messages = models.TextField()
    user = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    comments = models.TextField()
    message = models.ForeignKey(Message)
    user = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
