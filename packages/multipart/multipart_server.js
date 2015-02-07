var formidable = Npm.require('formidable');

Router.onBeforeAction(function (req, res, next) {

  var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {

      if(fields){

        if(req.body){

        } else {
          req.body = {};
        }

        _.extend(req.body, fields);

      }

      if(files){

        if(req.files){

        } else {
          req.files = {};
        }

        _.extend(req.files, files);

      }

      next();

    });  


});
