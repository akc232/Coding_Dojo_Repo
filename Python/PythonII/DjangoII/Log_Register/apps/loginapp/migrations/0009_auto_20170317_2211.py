# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-17 22:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginapp', '0008_auto_20170317_1855'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birthday',
            field=models.DateField(blank=True),
        ),
    ]
