from django.db import models


class Event_type(models.Model):
    name = models.CharField(max_length = 50, default="None")

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

class Event(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    date = models.DateField()
    event_type = models.ForeignKey(Event_type, on_delete=models.CASCADE)



    



# Create your models here.
