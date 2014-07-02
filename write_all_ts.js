#!/usr/bin/env node

if (process.argv.length != 3) {
  console.log('USAGE: <path>');
  process.exit(1);
}

var project_folder = process.argv[2];
if (project_folder[0] != '/') {
  project_folder = process.cwd() + '/' + project_folder;
}
if (project_folder[project_folder.length - 1] != '/') {
  project_folder += '/';
}

String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

var fs = require('fs'),
    dive = require('dive');

var lines = [];
dive(project_folder, function(err, file) {
  if (err) throw err;
  if (!file.endsWith('.ts')) return;
  if (file.endsWith('/_all.ts')) return;

  var relative_name = file.substring(project_folder.length);

  var top_level_dir = relative_name.substring(0, relative_name.indexOf('/'));
  relative_name = relative_name.substring(relative_name.indexOf('/') + 1);

  if (top_level_dir == 'app' && relative_name != 'app.ts') {
    lines.push("/// <reference path='" + relative_name + "' />");
  } else if (top_level_dir == 'lib') {
    lines.push("/// <reference path='../lib/" + relative_name + "' />");
  }
}, function() {
  lines.sort();
  var content = lines.join('\n') + '\n\n';
  //content += 'declare function define(i:any,f?:any);\n';
  content += 'declare function require(i:any,f?:any);\n';
  fs.writeFile(project_folder + 'app/_all.ts', content, function(err) {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      console.log('wrote app/_all.ts');
    }
  });
});

