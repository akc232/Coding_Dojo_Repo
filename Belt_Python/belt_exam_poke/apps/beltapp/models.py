from __future__ import unicode_literals

from django.db import models
from ..loginapp.models import User

# Create your models here.

class PokeManager(models.Manager):
    def create_poke(self, data):

        create = self.create(
        poked_id = data['id'],
        user_id = data['poke'],
        )
        # this_user= User.objects.get(id= data['poke'])
        # this_poke= Poke.objects.get(id = create.id)
        # #
        # this_poke.user.add(this_user)

        return (True, create)




class Poke(models.Model):
    poked_id = models.IntegerField()
    user = models.ManyToManyField(User)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = PokeManager()

    def unicode(self):
        return self.poked_id+" "+unicode(self.user)
