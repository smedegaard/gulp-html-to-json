const through = require('gulp-through');

var gulpHtmlToJson = through('gulp-html-to-json', function(file, attribute) {
    if(path.extname(file.path) !== '.html') return;
    if(err) return this.emit('error', new gutil.PluginError('less', err));
    let result = '{"' + attribute + '": ' + file.contents + '}';
    file.contents = new Buffer(result);
    file.path = gutil.replaceExtension(file.path, '.css');
}, defaults);
