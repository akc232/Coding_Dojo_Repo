from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninjas$', views.show),
    url(r'^ninjas/(?P<color>[a-zA-Z0-9]+)$', views.display),
]
