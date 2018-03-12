from __future__ import unicode_literals

from django.db import models
from ..loginapp.models import User

# Create your models here.

class Course(models.Model):
    name = models.CharField(max_length= 255)
    description = models.TextField()
    count= models.IntegerField(default =0)
    user = models.ForeignKey(User, related_name="courses")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __unicode__(self):
        return unicode(self.id)+" "+self.name + " "+ self.description +" "+ unicode(self.user)+" "+unicode(self.count)


# optional comments section not completed..

class Comment(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(User, related_name="comments")
    courses = models.ForeignKey(Course, related_name="course_comments")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.comment+" "


#building models for course..
