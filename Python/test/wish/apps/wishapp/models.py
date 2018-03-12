from __future__ import unicode_literals

from django.db import models

from ..loginapp.models import User

class MyItemManager(models.Manager):
    def create_item(self, data):
        flash = []
        item = self.create(
        item = data['item'],
        added_by= data['user'],
        )

        this_user = User.objects.get(id = data['id'])
        print this_user, "this user"
        this_item = MyItem.objects.get(id= item.id)
        print this_item, "this item"
        print this_item.user
        this_item.user.add(this_user)
        # this_item.save()



        return (True, flash, item)

    def add_item(self, data):
        add_user = User.objects.get(id = data['user'])
        add_item = MyItem.objects.get(id= data['id'])
        add_item.user.add(add_user)

        return (True)

# Tasks complete. Only need to add the ability to remove items from user list and allow the user to delete their own item they added.


class MyItem (models.Model):
    item = models.CharField(max_length=255)
    added_by = models.CharField(max_length=255)
    user = models.ManyToManyField(User)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = MyItemManager()
    def __unicode__(self):
        return self.item+ " "+unicode(self.user)

# class OtherList (models.Model):
#     item = models.CharField(max_length=255)
#     user = models.ManyToManyField(User)
#     name = models.CharField(max_length=255)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
