/* eslint-disable */
const package = require("./package.json");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const gulpif = require("gulp-if");
const rename = require("gulp-rename");
const uglifyES = require("gulp-uglify-es").default;

const buildPath = "build/";

let watching = true;

const copyPaths = [{
    "input": "src/index.html",
    "output": ""
  },
  {
    "input": "favicon/*.{png,ico}",
    "output": "favicon/"
  },
  {
    "input": ["favicon/favicon.ico", "favicon/browserconfig.xml", "favicon/manifest.json"],
    "output": ""
  },
  {
    "input": "src/images/**/*",
    "output": "images/"
  },
  {
    "input": "vendor/**/css/**/*.css",
    "output": ""
  },
  {
    "input": "vendor/**/images/**/*",
    "output": ""
  },
  {
    "input": "vendor/**/js/**/*.js",
    "output": ""
  },
  {
    "input": "vendor/**/webfonts/**/*.{eot,svg,ttf,woff,woff2}",
    "output": ""
  },
  {
    "input": "vendor/**/cmaps/**/*",
    "output": ""
  },
  {
    "input": "vendor/**/locale/**/*",
    "output": ""
  }
];

const jsPath = {
  "input": [
    "./src/js/prototype.js",
    "./src/js/jui/jComponent.js",
    "./src/js/jui/*.js",
    "./src/js/utils.js",
    "./src/js/header.js",
    "./src/js/api.js",
    "./src/js/config.js",
    "./src/js/pages/*.js",
    "./src/js/footer.js"
  ],
  "output": "js/"
};

const clean = (done) => {
  del.sync(buildPath);
  done();
};

const _copy = (paths, done) => {
  const path = paths.pop();
  if (typeof path === "undefined")
    return done();
  gulp
    .src(path.input)
    .pipe(gulp.dest(buildPath + path.output))
    .on("end", () => {
      _copy(paths, done);
    });
}

const copy = (done) => {
  _copy([...copyPaths], done);
};

const script = () => gulp.src(jsPath.input)
  .pipe(eslint({
    "configFile": ".eslintrc"
  }))
  .pipe(eslint.format())
  .pipe(gulpif(!watching, eslint.failAfterError()))
  .pipe(concat("noobs.js"))
  // pipe(gulpif(!watching, uglifyES()))
  .pipe(gulp.dest(buildPath + jsPath.output));

const watch = (done) => {
  copyPaths.forEach((path) => gulp.watch(path.input, copy));
  gulp.watch(scssPath.watch, scss);
  gulp.watch(jsPath.input, script);
  return done();
};

const production = (done) => {
  watching = false;
  return done();
};

const development = (done) => {
  watching = true;
  return done();
};


exports.clean = gulp.series(clean);

exports.build = gulp.series(production, exports.clean, copy, script);

exports.watch = gulp.series(development, exports.clean, copy, script, watch);

exports.default = (done) => {
  // eslint-disable-next-line no-console
  console.log(`\n* * * Available tasks: ${Object.keys(exports)} * * *\n`);
  return done();
};