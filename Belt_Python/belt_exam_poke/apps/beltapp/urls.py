from django.conf.urls import url,include
from . import views

app_name = 'belt'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create$', views.create, name='create'),
    # url(r'^add/(?P<id>\d+)$', views.add, name='add'),
    # url(r'^destroy_quote/(?P<id>\d+)$', views.remove_quote, name='remove_quote'),
    # url(r'^user/(?P<id>\d+)$', views.show, name='user'),
    # url(r'^destroy/(?P<id>\d+)$', views.destroy, name='destroy'),
    #


]
