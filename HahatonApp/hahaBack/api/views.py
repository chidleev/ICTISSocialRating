from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers

from django.contrib.auth import login

from rest_framework import permissions, status
from rest_framework.response import Response 
from rest_framework import generics, views
from rest_framework.views import APIView
from .models import Event, Event_type
from .serializer import EventSerializer, EventTypeSerializer, LoginSerializer
# Create your views here.



def userSeem(request):
    return HttpResponse("Вы кто такие? Я вас не звал. Идите нахуй")



class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventTypeList(generics.ListCreateAPIView):
    queryset = Event_type
    serializer_class = EventTypeSerializer


class EventTypeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event_type
    serializer_class = EventTypeSerializer




class LoginView(views.APIView):
    # This view should be accessible also for unauthenticated users.
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = LoginSerializer(data=self.request.data,
            context={ 'request': self.request })
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response(None, status=status.HTTP_202_ACCEPTED)


