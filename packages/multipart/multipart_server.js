var multiparty = Npm.require('multiparty');
var util = Npm.require('util');

Router.onBeforeAction(function (req, res, next) {

  var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {



      if(fields){

        if(req.body){

        } else {

          req.body = {};

        }

        _.each(fields, function(f, key){

          req.body[key] = f[0];

        });

      }

      if(files){

        if(req.files){

        } else {
          req.files = {};
        }

        // parse files for backwards compatability with iron-router 0.8.3

        _.each(files, function(val, idx){

          req.files[idx] = {
            originalFilename: val[0].originalFilename,
            path: val[0].path,
            headers: val[0].headers,
            name: val[0].originalFilename,
            size: val[0].size
          };

        });

      }

      /*
      console.log(util.inspect(fields, showHidden=false, depth=3, colorize=true));      
      console.log(util.inspect(files, showHidden=false, depth=3, colorize=true));      

      console.log(util.inspect(req.body.fields, showHidden=false, depth=3, colorize=true));      
      console.log(util.inspect(req.files, showHidden=false, depth=3, colorize=true));      
      */

      next();

    });  


});
