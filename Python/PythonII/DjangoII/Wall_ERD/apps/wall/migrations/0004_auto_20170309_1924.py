# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-09 19:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wall', '0003_auto_20170309_1922'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='comment',
            field=models.TextField(max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='messages',
            name='message',
            field=models.TextField(max_length=1000, null=True),
        ),
    ]
