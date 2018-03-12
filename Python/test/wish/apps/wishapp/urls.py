from django.conf.urls import url
from . import views

app_name= 'wish'
urlpatterns = [

url(r'^$', views.index, name='index'),
url(r'^create$', views.show_create, name='show_create'),
url(r'^add$', views.add, name='add'),
url(r'^add_list$', views.add_list, name='add_list'),
url(r'^item/(?P<id>\d+)$', views.show_item, name='item'),
# url(r'^destroy_quote/(?P<id>\d+)$', views.remove_quote, name='remove_quote'),
# url(r'^user/(?P<id>\d+)$', views.show, name='user'),
# url(r'^destroy/(?P<id>\d+)$', views.destroy, name='destroy'),
]
