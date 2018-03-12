from django.conf.urls import url
from . import views

app_name='userapp'
urlpatterns = [

    url(r'^$', views.index, name='index'),
    url(r'^register$', views.register, name='register'),
    url(r'^create$', views.create, name='create'),
    url(r'^login$', views.login, name='login'),


]
