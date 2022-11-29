const { src, dest, watch, series } = require('gulp');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function images() {
	return src('src/**/*')
		.pipe(imagemin({ optimizationLevel: 3 }))
		.pipe(dest('src'));
}

function convertToWebp() {
	const options = {
		quality: 50,
	};

	return src('src/**/*.{png,jpg}').pipe(webp(options)).pipe(dest('src'));
}

function convertToAvif() {
	const options = {
		quality: 50,
	};

	return src('src/**/*.{png,jpg}').pipe(avif(options)).pipe(dest('src'));
}

function dev() {
	watch('src/**/*', images);
	watch('src/**/*', convertToWebp);
	watch('src/**/*', convertToAvif);
}

exports.dev = dev;
exports.images = images;
exports.convertToWebp = convertToWebp;
exports.convertToAvif = convertToAvif;
exports.default = series(images, convertToWebp, convertToAvif, dev);
