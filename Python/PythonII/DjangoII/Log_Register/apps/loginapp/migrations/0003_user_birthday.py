# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-17 03:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginapp', '0002_remove_user_confirm_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='birthday',
            field=models.DateField(null=True),
        ),
    ]