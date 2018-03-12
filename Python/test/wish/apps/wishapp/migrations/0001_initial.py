# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-02 00:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('loginapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MyItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=255)),
                ('added_by', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ManyToManyField(to='loginapp.User')),
            ],
        ),
    ]
