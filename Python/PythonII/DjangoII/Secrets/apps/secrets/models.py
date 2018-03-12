from __future__ import unicode_literals

from django.db import models
from ..loginapp.models import User

# Create your models here.


class Secret(models.Model):
    message =models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
class Like(models.Model):
    like =models.CharField(max_length=10)
    secrets = models.ForeignKey(Secret)
    users = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
