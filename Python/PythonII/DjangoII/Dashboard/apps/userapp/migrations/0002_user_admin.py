# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-26 23:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='admin',
            field=models.IntegerField(null=True),
        ),
    ]