const express = require('express');
const fs = require('fs');

module.exports = {
	index: function (req, res, next) {
		res.render('index', { title: 'LX 크라우드소싱 분석 뷰어' });
	}	
}