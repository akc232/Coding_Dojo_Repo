from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.survey),
    url(r'^survey/process$', views.create),
    url(r'^survey/result$', views.show),
    # url(r'^clear$', views.clear),
]
