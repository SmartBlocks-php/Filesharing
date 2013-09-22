define([
    'underscore',
    'backbone',
    'Filesharing/Models/File'
], function (_, Backbone, File) {
    var FilesCollection = Backbone.Collection.extend({
        model: File,
        url: "/Filesharing/Files"
    });

    return FilesCollection;
});