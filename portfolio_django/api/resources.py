# this file controls how we can access the data from the database

from tastypie.resources import ModelResource, ALL_WITH_RELATIONS
from tastypie import fields
from api.models import Project
from api.models import Note
from tastypie.authorization import Authorization

# the resource displays the data
class ProjectResource(ModelResource):
    class Meta:
        # use the project model, and wherever we query this resource, it accesses Project database
        queryset = Project.objects.all()
        # call what is returned 'project'
        resource_name = 'project'
        authorization = Authorization()
        # fields = ['title']  # this makes it so that only the title is exposed


class NoteResource(ModelResource):
    # this will relate to a project that exists
    project = fields.ForeignKey(ProjectResource, 'project')
    class Meta:
        queryset = Note.objects.all()
        resource_name = 'note'
        authorization = Authorization()
        fields = ['title', 'body']
        filtering = {
            'project': ALL_WITH_RELATIONS
        }