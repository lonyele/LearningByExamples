import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';

const plugins = loadPlugins();

import popupWebpackConfig from './popup/webpack.config';
import eventWebpackConfig from './event/webpack.config';
import contentWebpackConfig from './content/webpack.config';
import iframeWebpackConfig from './iframe/webpack.config';

gulp.task('popup-js', ['clean'], (cb) => {
  webpack(popupWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('event-js', ['clean'], (cb) => {
  webpack(eventWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('content-js', ['clean'], (cb) => {
  webpack(contentWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('iframe-js', ['clean'], (cb) => {
  webpack(iframeWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});


gulp.task('popup-html', ['clean'], () => {
  return gulp.src('popup/src/index.html')
    .pipe(plugins.rename('popup.html'))
    .pipe(gulp.dest('./build'))
});

gulp.task('copy-manifest', ['clean'], () => {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('./build'));
});
gulp.task('copy-content-css', ['clean'], () => {
  return gulp.src('content.css')
    .pipe(gulp.dest('./build'));
});
gulp.task('copy-iframe-css', ['clean'], () => {
  return gulp.src('iframe/iframe.css')
    .pipe(gulp.dest('./build'));
});
gulp.task('copy-iframe-html', ['clean'], () => {
  return gulp.src('iframe/iframe.html')
    .pipe(gulp.dest('./build'));
});
/*
gulp.task('copy-iframe-js', ['clean'], () => {
  return gulp.src('iframe/iframe.js')
    .pipe(gulp.dest('./build'));
});
*/
gulp.task('copy-chromeps-js', ['clean'], () => {
  return gulp.src('chromeps.js')
    .pipe(gulp.dest('./build'));
});
gulp.task('copy-charac-jpg', ['clean'], () => {
  return gulp.src('charac.jpg')
    .pipe(gulp.dest('./build'));
});

gulp.task('clean', (cb) => {
  rimraf('./build', cb);
});

gulp.task('build', ['iframe-js','copy-charac-jpg','copy-manifest','copy-content-css','copy-chromeps-js','copy-iframe-css','copy-iframe-html','popup-js', 'popup-html', 'event-js', 'content-js']);

gulp.task('watch', ['default'], () => {
  gulp.watch('popup/**/*', ['build']);
  gulp.watch('content/**/*', ['build']);
  gulp.watch('event/**/*', ['build']);
  gulp.watch('iframe/**/*', ['build']);
  

});

gulp.task('default', ['build']);
