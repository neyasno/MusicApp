from main import views

from django.contrib import admin
from django.urls import path , re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('csrf', views.get_csrf , name='csrf'),
    path('login/post' , views.login , name='login'),
    re_path(r'^(?:.*)/?$', views.main , name='main'),
    re_path(r'^(?P<file>.+\.(svg$|png$|jpg$))', views.mainr),
]
