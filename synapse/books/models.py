from django.db import models

# defining the properties of every book in the database
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    rating = models.FloatField()
    description = models.TextField()

    published_date = models.DateField()
    pages = models.IntegerField()
    cover_image = models.URLField(blank=True, null=True)
    language = models.CharField(max_length=30)

    def __str__(self):
        return self.title