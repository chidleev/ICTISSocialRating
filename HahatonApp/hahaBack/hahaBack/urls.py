"""hahaBack URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api import views as apiViews

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", apiViews.userSeem),
    path("api/events", apiViews.EventList.as_view(), name="event-list"),
    path("api/event/<int:pk>/", apiViews.EventDetail.as_view(), name="event-detail"),
    path("api/event-types/", apiViews.EventTypeList.as_view(), name="event-type-list"),
    path("api/event-types/<int:pk>/", apiViews.EventTypeDetail.as_view(), name="event-type-detail"),
    path('api/login/', apiViews.LoginView.as_view()),
]
