var express = require("express");
var path = require("path");

module.exports.index = function(req, res) {
    res.sendFile(path.join(__dirname, '../view/index.html'));
};

module.exports.about = function(req, res) {
    res.sendFile(path.join(__dirname, '../view/about.html'));
};

module.exports.contact = function(req, res) {
    res.sendFile(path.join(__dirname, '../view/contact.html'));
};