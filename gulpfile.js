const { src, dest, watch, series } = require('gulp');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function images() {
	return src('src/assets/gulp/**/*')
		.pipe(imagemin({ optimizationLevel: 3 }))
		.pipe(dest('src/assets'));
}

function convertToWebp() {
	const options = {
		quality: 50,
	};

	return src('src/assets/gulp/**/*.{png,jpg}').pipe(webp(options)).pipe(dest('src/assets'));
}

function convertToAvif() {
	const options = {
		quality: 50,
	};

	return src('src/assets/gulp/**/*.{png,jpg}').pipe(avif(options)).pipe(dest('src/assets'));
}

function dev() {
	watch('src/assets/gulp/**/*', images);
	watch('src/assets/gulp/**/*', convertToWebp);
	watch('src/assets/gulp/**/*', convertToAvif);
}

exports.dev = dev;
exports.images = images;
exports.convertToWebp = convertToWebp;
exports.convertToAvif = convertToAvif;
exports.default = series(images, convertToWebp, convertToAvif);
