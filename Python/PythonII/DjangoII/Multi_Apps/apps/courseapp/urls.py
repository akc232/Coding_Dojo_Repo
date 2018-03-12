from django.conf.urls import url, include
from views import index, create, remove_Course, remove, infoPage, commentPost, commentDelete, user_courses, add_user_courses

app_name = 'course'
urlpatterns = [
    url(r'^$', index, name= 'index'),
    url(r'^create$', create, name= 'create'),
    url(r'^user_courses', user_courses, name='user_courses'),
    url(r'^add_user_courses', add_user_courses, name='add_user_courses'),
    url(r'^remove_Course/(?P<id>\d+)$', remove_Course, name= 'remove_Course'),
    url(r'^remove_Course/delete/remove/(?P<id>\d+)$',remove, name= 'delete'),
    url(r'^courseInfo/(?P<id>\d+)$',infoPage, name= 'courseInfo'),
    url(r'^courseInfo/commentPost/(?P<id>\d+)$', commentPost, name= 'commentPost'),
    url(r'^commentDelete/(?P<id>\d+)$', commentDelete, name= 'commentDelete'),



]
