const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const dirs = {
    src: {
        js: ["assets/scripts/*.js", "assets/scripts/**/*.js", "assets/scripts/**/**/*.js"],
        css: "assets/styles/*.scss",
    },
    dist: {
        js: "public/resources/scripts",
        css: "public/resources/styles",
    },
    watch: {
        css: ["assets/styles/*.scss", "assets/styles/**/*.scss"],
        js: ["assets/scripts/*.js", "assets/scripts/**/*.js", "assets/scripts/**/**/*.js"],
    }
};

gulp.task('scripts', function () {
        return gulp.src(dirs.src.js)
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(concat('main.min.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dirs.dist.js));
    }
);


gulp.task('sass', function () {
        return gulp.src(dirs.src.css)
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false
            }))
            .pipe(concat('main.min.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dirs.dist.css));
    }
);

gulp.task('watch', function () {
        gulp.watch(dirs.watch.js, gulp.series("scripts"));
        gulp.watch(dirs.watch.css, gulp.series("sass"));
    }
);

gulp.task('default', gulp.series("scripts", "sass", "watch"));

gulp.task('dist', gulp.series("scripts", "sass"));
