from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^remove_Course/(?P<id>\d+)$', views.remove_Course),
    url(r'^remove/(?P<id>\d+)$',views.remove),
    url(r'^course/(?P<id>\d+)$',views.infoPage),
    url(r'^commentPost/(?P<id>\d+)$', views.commentPost),
    url(r'^commentDelete/(?P<id>\d+)$', views.commentDelete),

]
