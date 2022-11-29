const { src, dest, watch, series } = require('gulp');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function images() {
	return src('src/assets/**/*')
		.pipe(imagemin({ optimizationLevel: 3 }))
		.pipe(dest('build/assets'));
}

function convertToWebp() {
	const options = {
		quality: 50,
	};

	return src('src/assets/**/*.{png,jpg}').pipe(webp(options)).pipe(dest('build/assets'));
}

function convertToAvif() {
	const options = {
		quality: 50,
	};

	return src('src/assets/**/*.{png,jpg}').pipe(avif(options)).pipe(dest('build/assets'));
}

function dev() {
	watch('src/assets/**/*', images);
	watch('src/assets/**/*', convertToWebp);
	watch('src/assets/**/*', convertToAvif);
}

exports.dev = dev;
exports.images = images;
exports.convertToWebp = convertToWebp;
exports.convertToAvif = convertToAvif;
exports.default = series(images, convertToWebp, convertToAvif, dev);
