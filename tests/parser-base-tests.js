import {ParserTest} from './parser-tests.js';


class ParserBaseTest extends ParserTest {

  constructor() {
    super();
  }

}

let parserTest = new ParserBaseTest();

parserTest.runTest(
  'Identifier', 'x',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"x"}]}],
      "isInferred":true}]}

);


parserTest.runTest(
  'Identifier Font', '\\mathbf{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {"mathvariant": "bold"},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "x"}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Two Identifiers', 'xy',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"x"}]},
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"y"}]}],
      "isInferred":true}]}

);


parserTest.runTest(
  'Integer', '2',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"mn",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"2"}]}],
      "isInferred":true}]}

);


parserTest.runTest(
  'Number', '3.14',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mn",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "3.14"}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Decimal', '.',
  {"kind": "math",
   "texClass": 6,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 6,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mo",
         "texClass": 6,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix",
           "separator": true},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "."}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);


parserTest.runTest(
  'Integer Font', '\\mathbf{2}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mn",
               "texClass": 0,
               "attributes": {"mathvariant": "bold"},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "2"}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Prime', 'x\'',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"msup",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"mi",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":true,
              "scriptlevel":0,
              "mathvariant":"italic"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"x"}]},
           {"kind":"mo",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":1,
              "form":"infix"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"′"}],
            "isEmbellished":true}]}],
      "isInferred":true}]}

);

parserTest.runTest(
  'PrimeSup', 'x^{\'}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msup",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "x"}]},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": false,
                 "scriptlevel": 1},
               "properties": {},
               "childNodes": [
                 {"kind": "msup",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 1},
                     "properties": {},
                     "childNodes": []},
                    {"kind": "mo",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 2,
                       "form": "infix"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "′"}],
                     "isEmbellished": true}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Double Prime', 'x\'\'',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"msup",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"mi",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":true,
              "scriptlevel":0,
              "mathvariant":"italic"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"x"}]},
           {"kind":"mo",
            "texClass":6,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":1,
              "form":"infix"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"″"}],
            "isEmbellished":true}]}],
      "isInferred":true}]}

);


parserTest.runTest(
  'PrePrime', '\'x',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"msup",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"mi",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":true,
              "scriptlevel":0},
            "properties":{},
            "childNodes":[]},
           {"kind":"mo",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":1,
              "form":"infix"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"′"}],
            "isEmbellished":true}]},
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"x"}]}],
      "isInferred":true}]}

);


parserTest.runTest(
  'Prime with subscript', 'x^\'_{3}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "merror",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mtext",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "Missing open brace for superscript"}],
               "isSpacelike": true}],
            "isInferred": true,
            "isSpacelike": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Prime on Sub', 'x^{\'_{a}}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msup",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "x"}]},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": false,
                 "scriptlevel": 1},
               "properties": {},
               "childNodes": [
                 {"kind": "msubsup",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 1},
                     "properties": {},
                     "childNodes": []},
                    {"kind": "TeXAtom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 2},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "mrow",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": false,
                          "scriptlevel": 2},
                        "properties": {"texprimestyle": true},
                        "childNodes": [
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {
                             "displaystyle": false,
                             "scriptlevel": 2,
                             "mathvariant": "italic"},
                           "properties": {"texprimestyle": true},
                           "childNodes": [
                             {"kind": "text",
                              "text": "a"}]}],
                        "isInferred": true}]},
                    {"kind": "mo",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 2,
                       "form": "infix"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "\u2032"}],
                     "isEmbellished": true}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Prime on Sup', 'x^{a^{\'}}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msup",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "x"}]},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": false,
                 "scriptlevel": 1},
               "properties": {},
               "childNodes": [
                 {"kind": "msup",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 1,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "a"}]},
                    {"kind": "TeXAtom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 2},
                     "properties": {},
                     "childNodes": [
                       {"kind": "mrow",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": false,
                          "scriptlevel": 2},
                        "properties": {},
                        "childNodes": [
                          {"kind": "msup",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {
                             "displaystyle": false,
                             "scriptlevel": 2},
                           "properties": {},
                           "childNodes": [
                             {"kind": "mi",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {
                                "displaystyle": false,
                                "scriptlevel": 2},
                              "properties": {},
                              "childNodes": []},
                             {"kind": "mo",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {
                                "displaystyle": false,
                                "scriptlevel": 3,
                                "form": "infix"},
                              "properties": {},
                              "childNodes": [
                                {"kind": "text",
                                 "text": "\u2032"}],
                              "isEmbellished": true}]}],
                        "isInferred": true}]}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Sup on Prime', 'x^{\'^{a}}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msup",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "x"}]},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": false,
                 "scriptlevel": 1},
               "properties": {},
               "childNodes": [
                 {"kind": "msup",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 1},
                     "properties": {},
                     "childNodes": []},
                    {"kind": "mrow",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 2},
                     "properties": {},
                     "childNodes": [
                       {"kind": "mo",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": false,
                          "scriptlevel": 2,
                          "form": "prefix"},
                        "properties": {"variantForm": true},
                        "childNodes": [
                          {"kind": "text",
                           "text": "\u2032"}],
                        "isEmbellished": true},
                       {"kind": "TeXAtom",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": false,
                          "scriptlevel": 2},
                        "properties": {},
                        "childNodes": [
                          {"kind": "mrow",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {
                             "displaystyle": false,
                             "scriptlevel": 2},
                           "properties": {},
                           "childNodes": [
                             {"kind": "mi",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {
                                "displaystyle": false,
                                "scriptlevel": 2,
                                "mathvariant": "italic"},
                              "properties": {},
                              "childNodes": [
                                {"kind": "text",
                                 "text": "a"}]}],
                           "isInferred": true}]}]}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Prime on Prime', 'x^{\'^{\'}}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msup",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "x"}]},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": false,
                 "scriptlevel": 1},
               "properties": {},
               "childNodes": [
                 {"kind": "msup",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 1},
                     "properties": {},
                     "childNodes": []},
                    {"kind": "mrow",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 2},
                     "properties": {},
                     "childNodes": [
                       {"kind": "mo",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": false,
                          "scriptlevel": 2,
                          "form": "prefix"},
                        "properties": {"variantForm": true},
                        "childNodes": [
                          {"kind": "text",
                           "text": "\u2032"}],
                        "isEmbellished": true},
                       {"kind": "TeXAtom",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": false,
                          "scriptlevel": 2},
                        "properties": {},
                        "childNodes": [
                          {"kind": "mrow",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {
                             "displaystyle": false,
                             "scriptlevel": 2},
                           "properties": {},
                           "childNodes": [
                             {"kind": "msup",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {
                                "displaystyle": false,
                                "scriptlevel": 2},
                              "properties": {},
                              "childNodes": [
                                {"kind": "mi",
                                 "texClass": 0,
                                 "attributes": {},
                                 "inherited": {
                                   "displaystyle": false,
                                   "scriptlevel": 2},
                                 "properties": {},
                                 "childNodes": []},
                                {"kind": "mo",
                                 "texClass": 0,
                                 "attributes": {},
                                 "inherited": {
                                   "displaystyle": false,
                                   "scriptlevel": 3,
                                   "form": "infix"},
                                 "properties": {},
                                 "childNodes": [
                                   {"kind": "text",
                                    "text": "\u2032"}],
                                 "isEmbellished": true}]}],
                           "isInferred": true}]}]}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Over', '1 \\over 2',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mfrac",
         "texClass": null,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "1"}]},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 0},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "2"}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Above', 'a \\above 1pt b',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mfrac",
         "texClass": null,
         "attributes": {"linethickness": "1pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "a"}]},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "b"}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Style', '\\scriptscriptstyle a',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mstyle",
         "texClass": 0,
         "attributes": {"displaystyle": false,
                        "scriptlevel": 2},
         "inherited": {},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 2},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": false,
                 "scriptlevel": 2,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "a"}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


// parserTest.runTest(
//   'Vertical Padding', '\\fbox{t}',
//   {}
// );


parserTest.runTest(
  'Named Function', '\\sin x',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"fnOP": true},
         "childNodes": [
           {"kind": "text",
            "text": "sin"}]},
        {"kind": "mo",
         "texClass": -1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "⁡"}],
         "isEmbellished": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Square Root', '\\sqrt{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msqrt",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "text",
                  "text": "x"}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Nth Root', '\\sqrt[n]{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mroot",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "x"}]},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 2,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "n"}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Explicit Root', '\\root 4 \\of x',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mroot",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "x"}]},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 2},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "4"}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Tweaked Root', '\\sqrt[\\leftroot{-2}\\uproot{2}\\beta]{k}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mroot",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "k"}]},
           {"kind": "mpadded",
            "texClass": null,
            "attributes": {"width": "-0.13333333333333333em",
                           "height": "+0.13333333333333333em",
                           "voffset": "+0.13333333333333333em"},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 2},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": null,
               "attributes": {},
               "inherited": {
                 "displaystyle": false,
                 "scriptlevel": 2},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": false,
                    "scriptlevel": 2,
                    "mathvariant": "italic"},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "\u03b2"}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Color Frac', '\\frac{{\\cal \\color{red}{X}}}{\\color{blue}{\\sf y}}',
  {"kind":"math",
   "texClass":null,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":null,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"mfrac",
         "texClass":null,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"TeXAtom",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":0},
            "properties":{},
            "childNodes":[
              {"kind":"mrow",
               "texClass":0,
               "attributes":{},
               "inherited":{
                 "displaystyle":false,
                 "scriptlevel":0},
               "properties":{},
               "childNodes":[
                 {"kind":"mstyle",
                  "texClass":0,
                  "attributes":{"mathcolor":"red"},
                  "inherited":{
                    "displaystyle":false,
                    "scriptlevel":0},
                  "properties":{},
                  "childNodes":[
                    {"kind":"mrow",
                     "texClass":0,
                     "attributes":{},
                     "inherited":{
                       "mathcolor":"red",
                       "displaystyle":false,
                       "scriptlevel":0},
                     "properties":{},
                     "childNodes":[
                       {"kind":"mi",
                        "texClass":0,
                        "attributes":{"mathvariant":"-tex-caligraphic"},
                        "inherited":{
                          "mathcolor":"red",
                          "displaystyle":false,
                          "scriptlevel":0,
                          "mathvariant":"italic"},
                        "properties":{},
                        "childNodes":[
                          {"kind":"text",
                           "text":"X"}]}],
                     "isInferred":true}]}],
               "isInferred":true}]},
           {"kind":"mstyle",
            "texClass":0,
            "attributes":{"mathcolor":"blue"},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":0},
            "properties":{"texprimestyle":true},
            "childNodes":[
              {"kind":"mrow",
               "texClass":0,
               "attributes":{},
               "inherited":{
                 "mathcolor":"blue",
                 "displaystyle":false,
                 "scriptlevel":0},
               "properties":{"texprimestyle":true},
               "childNodes":[
                 {"kind":"mi",
                  "texClass":0,
                  "attributes":{"mathvariant":"sans-serif"},
                  "inherited":{
                    "mathcolor":"blue",
                    "displaystyle":false,
                    "scriptlevel":0,
                    "mathvariant":"italic"},
                  "properties":{"texprimestyle":true},
                  "childNodes":[
                    {"kind":"text",
                     "text":"y"}]}],
               "isInferred":true}]}]}],
      "isInferred":true}]}

);


parserTest.runTest(
  'Negation Simple', 'a \\not= b',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"a"}]},
        {"kind":"mo",
         "texClass":3,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "form":"infix"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"≠"}],
         "isEmbellished":true},
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"b"}]}],
      "isInferred":true}]}

);

parserTest.runTest(
  'Negation Complex', 'a \\not= b \\not\\rightarrow c \\not\\leq d',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"a"}]},
        {"kind":"mo",
         "texClass":3,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "form":"infix"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"≠"}],
         "isEmbellished":true},
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"b"}]},
        {"kind":"mo",
         "texClass":3,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "form":"infix",
           "accent":true},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"↛"}],
         "isEmbellished":true},
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"c"}]},
        {"kind":"mo",
         "texClass":3,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "form":"infix"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"≰"}],
         "isEmbellished":true},
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"d"}]}],
      "isInferred":true}]}

);


parserTest.runTest(
  'Negation Explicit', ' \\not\\longrightarrow',
  {"kind": "math",
   "texClass": 3,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 3,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mo",
         "texClass": 3,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "⟶"},
           {"kind": "text",
            "text": "̸"}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);


parserTest.runTest(
  'Negation Large', ' \\not3',
  {"kind": "math",
   "texClass": 3,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 3,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 3,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": 0,
               "attributes": {"width": 0},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mtext",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "⧸"}],
                     "isSpacelike": true}],
                  "isInferred": true,
                  "isSpacelike": true}],
               "isSpacelike": true}],
            "isInferred": true,
            "isSpacelike": true}]},
        {"kind": "mn",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "3"}]}],
      "isInferred": true}]}
);

// parserTest.runTest(
//   'Dots', '... {\\cdot\\cdot\\cdot}^2 {\\ldots}^2', {}
// );

parserTest.runTest(
  'Greek', '\\alpha',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "α"}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Large Set', '\\bigcup',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mo",
         "texClass": 1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix",
           "largeop": true,
           "movablelimits": true,
           "symmetric": true},
         "properties": {"movesupsub": true},
         "childNodes": [
           {"kind": "text",
            "text": "⋃"}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);

parserTest.runTest(
  'Fenced', '\\left(\\frac{a}{\\left[bc\\right]}\\right)',
  {"kind": "math",
   "texClass": 7,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 7,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mrow",
         "texClass": 7,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "(",
                        "close": ")"},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "("}],
            "isEmbellished": true},
           {"kind": "mfrac",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0,
                             "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "a"}]},
              {"kind": "mrow",
               "texClass": 7,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {"open": "[",
                              "close": "]",
                              "texprimestyle": true},
               "childNodes": [
                 {"kind": "mo",
                  "texClass": 4,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0,
                                "form": "prefix",
                        "fence": true,
                        "stretchy": true,
                        "symmetric": true},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "["}],
                      "isEmbellished": true},
                    {"kind": "mi",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "b"}]},
                    {"kind": "mi",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "c"}]},
                    {"kind": "mo",
                      "texClass": 5,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 0,
                        "form": "postfix",
                        "fence": true,
                        "stretchy": true,
                        "symmetric": true},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "]"}],
                      "isEmbellished": true}]}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": ")"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


// Test for delimiter lookup.
parserTest.runTest(
  'Fenced2', '\\{\\frac{a}{\\uparrow bc\\downarrow}\\}',
  {"kind": "math",
   "texClass": 4,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 4,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mo",
         "texClass": 4,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "prefix",
                       "fence": true,
                       "stretchy": true,
                       "symmetric": true},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "{"}],
         "isEmbellished": true},
        {"kind": "mfrac",
         "texClass": null,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "a"}]},
           {"kind": "mrow",
            "texClass": 3,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mo",
               "texClass": 3,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0,
                             "form": "prefix",
                             "stretchy": true},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "text",
                  "text": "↑"}],
               "isEmbellished": true},
              {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                    "scriptlevel": 0,
                    "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                      "text": "b"}]},
                {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                    "scriptlevel": 0,
                    "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                      "text": "c"}]},
                {"kind": "mo",
                  "texClass": 3,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                    "scriptlevel": 0,
                    "form": "postfix",
                    "stretchy": true},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                      "text": "↓"}],
                  "isEmbellished": true}],
              "isInferred": true}]},
        {"kind": "mo",
          "texClass": 5,
          "attributes": {},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0,
            "form": "postfix",
            "fence": true,
            "stretchy": true,
            "symmetric": true},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": "}"}],
          "isEmbellished": true}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Fenced3', '\\left\\{\\left\\vert \\left[ \\left\\| A \\right.\\right| \\right]\\right\\}',
  {"kind": "math",
   "texClass": 7,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 7,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mrow",
         "texClass": 7,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "{",
                        "close": "}"},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "{"}],
            "isEmbellished": true},
           {"kind": "mrow",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {"open": "|",
                           "close": "]"},
            "childNodes": [
              {"kind": "mo",
               "texClass": 4,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "form": "prefix",
                             "fence": true,
                             "stretchy": true,
                             "symmetric": true},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "|"}],
               "isEmbellished": true},
              {"kind": "mrow",
               "texClass": 4,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {"open": "[",
                              "close": "|"},
               "childNodes": [
                 {"kind": "mo",
                  "texClass": 4,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0,
                                "form": "prefix",
                                "fence": true,
                                "stretchy": true,
                                "symmetric": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "["}],
                  "isEmbellished": true},
                 {"kind": "mrow",
                  "texClass": 4,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0},
                      "properties": {"open": "∥",
                        "close": ""},
                      "childNodes": [
                        {"kind": "mo",
                          "texClass": 4,
                          "attributes": {},
                          "inherited": {"displaystyle": true,
                            "scriptlevel": 0,
                            "form": "prefix",
                            "fence": true,
                            "stretchy": true,
                            "symmetric": true},
                          "properties": {},
                          "childNodes": [
                            {"kind": "text",
                              "text": "∥"}],
                          "isEmbellished": true},
                        {"kind": "mi",
                          "texClass": 0,
                          "attributes": {},
                          "inherited": {"displaystyle": true,
                            "scriptlevel": 0,
                            "mathvariant": "italic"},
                          "properties": {},
                          "childNodes": [
                            {"kind": "text",
                              "text": "A"}]},
                        {"kind": "mo",
                          "texClass": 0,
                          "attributes": {"fence": true,
                            "stretchy": true,
                            "symmetric": true},
                          "inherited": {"displaystyle": true,
                            "scriptlevel": 0,
                            "form": "postfix"},
                          "properties": {},
                          "childNodes": [
                            {"kind": "text",
                              "text": ""}],
                          "isEmbellished": true}]},
                    {"kind": "mo",
                      "texClass": 5,
                      "attributes": {},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "postfix",
                        "fence": true,
                        "stretchy": true,
                        "symmetric": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "|"}],
                      "isEmbellished": true}]},
                {"kind": "mo",
                  "texClass": 5,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                    "scriptlevel": 0,
                    "form": "postfix",
                    "fence": true,
                    "stretchy": true,
                    "symmetric": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                      "text": "]"}],
                  "isEmbellished": true}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "}"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Middle', '\\left(a\\middle|b\\right)',
  {"kind": "math",
   "texClass": 7,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 7,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mrow",
         "texClass": 7,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "(",
                        "close": ")"},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "("}],
            "isEmbellished": true},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "a"}]},
           {"kind": "TeXAtom",
            "texClass": 5,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": null,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [],
               "isInferred": true,
               "isSpacelike": true}]},
           {"kind": "mo",
            "texClass": 0,
            "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "infix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "|"}],
              "isEmbellished": true},
            {"kind": "TeXAtom",
              "texClass": 4,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0},
              "properties": {},
              "childNodes": [
                {"kind": "mrow",
                  "texClass": null,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [],
                  "isInferred": true,
                  "isSpacelike": true}]},
            {"kind": "mi",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "mathvariant": "italic"},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "b"}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": ")"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'MathChar0 Operator', '\\Rightarrow',
  {"kind":"math",
   "texClass":3,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":3,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"mo",
         "texClass":3,
         "attributes":{"stretchy":false},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "form":"infix",
           "accent":true,
           "stretchy":true},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"⇒"}],
         "isEmbellished":true}
      ],
      "isInferred":true,
      "isEmbellished":true}],
   "isEmbellished":true}
);


// Tests for mathchar7.
parserTest.runTest(
  'MathChar7 Single', '\\Upsilon',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {"mathvariant": "normal"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "\u03a5"}]}],
      "isInferred": true}]}
);

// Tests for mathchar7.
parserTest.runTest(
  'MathChar7 Single Font', '\\mathbf{\\Upsilon}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {"mathvariant": "bold"},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "\u03a5"}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'MathChar7 Operator', '\\And',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {"mathvariant": "normal"},
         "inherited": {"displaystyle": true,
            "scriptlevel": 0,
            "mathvariant": "italic"},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": "&"}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'MathChar7 Multi', '\\Lambda \\& \\Gamma \\Rightarrow \\Omega\\And\\Upsilon',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"mi",
         "texClass":0,
         "attributes":{"mathvariant":"normal"},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"Λ"}]},
        {"kind":"mi",
         "texClass":0,
         "attributes":{"mathvariant":"normal"},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"&"}]},
        {"kind":"mi",
         "texClass":0,
         "attributes":{"mathvariant":"normal"},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"Γ"}]},
        {"kind":"mo",
         "texClass":3,
         "attributes":{"stretchy":false},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "form":"infix",
           "accent":true,
           "stretchy":true},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"⇒"}],
         "isEmbellished":true},
        {"kind":"mi",
         "texClass":0,
         "attributes":{"mathvariant":"normal"},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"Ω"}]},
        {"kind":"mi",
         "texClass":0,
         "attributes":{"mathvariant":"normal"},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"&"}]},
        {"kind":"mi",
         "texClass":0,
         "attributes":{"mathvariant":"normal"},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"Υ"}]}],
      "isInferred":true}]}
);

parserTest.runTest(
  'Tilde', '~',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mtext",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "\u00a0"}],
         "isSpacelike": true}],
      "isInferred": true,
      "isSpacelike": true}],
   "isSpacelike": true}
);

parserTest.runTest(
  'Tilde2', 'a~b',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mtext",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "\u00a0"}],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);

// Superscript cases:
parserTest.runTest(
  'Empty base', '^2',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msup",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": ""}]},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "2"}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Empty base2', '{}^2',
  {"kind": "math",
   "texClass": -1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": -1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msup",
         "texClass": -1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": null,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [],
               "isInferred": true,
               "isSpacelike": true}]},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "2"}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Square', 'x^2',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"msup",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"mi",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":true,
              "scriptlevel":0,
              "mathvariant":"italic"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"x"}]},
           {"kind":"mn",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":1},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"2"}]}]}],
      "isInferred":true}]}

);


parserTest.runTest(
  'Cube', 'x^3',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"msup",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"mi",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":true,
              "scriptlevel":0,
              "mathvariant":"italic"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"x"}]},
           {"kind":"mn",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":1},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"3"}]}]}],
      "isInferred":true}]}

);

parserTest.runTest(
  'Large Operator', '\\sum^2_1',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "munderover",
         "texClass": 1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"movesupsub": true},
         "childNodes": [
           {"kind": "mo",
            "texClass": 1,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "form": "infix",
              "largeop": true,
              "movablelimits": true,
              "symmetric": true},
            "properties": {"movesupsub": true,
                           "texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "\u2211"}],
            "isEmbellished": true},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "1"}]},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "2"}]}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);

parserTest.runTest(
  'Move Superscript',
  '\\left( \\sum_1^n \\right)^{2}',
  {"kind": "math",
   "texClass": -1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": -1,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msup",
         "texClass": -1,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 7,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {"open": "(",
                           "close": ")"},
            "childNodes": [
              {"kind": "mo",
               "texClass": 4,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "form": "prefix",
                             "fence": true,
                             "stretchy": true,
                             "symmetric": true},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "("}],
               "isEmbellished": true},
              {"kind": "munderover",
               "texClass": 1,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {"movesupsub": true},
               "childNodes": [
                 {"kind": "mo",
                  "texClass": 1,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0,
                                "form": "infix",
                                "largeop": true,
                                "movablelimits": true,
                                "symmetric": true},
                  "properties": {"movesupsub": true,
                                 "texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "∑"}],
                      "isEmbellished": true},
                    {"kind": "mn",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 1},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "1"}]},
                    {"kind": "mi",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 1,
                        "mathvariant": "italic"},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "n"}]}],
                  "isEmbellished": true},
                {"kind": "mo",
                  "texClass": 5,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                    "scriptlevel": 0,
                    "form": "postfix",
                    "fence": true,
                    "stretchy": true,
                    "symmetric": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                      "text": ")"}],
                  "isEmbellished": true}]},
            {"kind": "TeXAtom",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": false,
                "scriptlevel": 1},
              "properties": {},
              "childNodes": [
                {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mn",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 1},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "2"}]}],
                  "isInferred": true}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Empty Base Index', '_3',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msub",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": ""}]},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "3"}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Empty Base Index2', '{}_3',
  {"kind": "math",
   "texClass": -1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": -1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msub",
         "texClass": -1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": null,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [],
               "isInferred": true,
               "isSpacelike": true}]},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "3"}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Index', 'x_3',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"msub",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"mi",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":true,
              "scriptlevel":0,
              "mathvariant":"italic"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"x"}]},
           {"kind":"mn",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":1},
            "properties":{"texprimestyle":true},
            "childNodes":[
              {"kind":"text",
               "text":"3"}]}]}],
      "isInferred":true}]}

);


parserTest.runTest(
  'SubSup', 'x^a_3',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"msubsup",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"mi",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":true,
              "scriptlevel":0,
              "mathvariant":"italic"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"x"}]},
           {"kind":"mn",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":1},
            "properties":{"texprimestyle":true},
            "childNodes":[
              {"kind":"text",
               "text":"3"}]},
           {"kind":"mi",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":1,
              "mathvariant":"italic"},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"a"}]}]}],
      "isInferred":true}]}
);


parserTest.runTest(
  'Positive Spacing', 'a\\quad b',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "1em"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"scriptlevel": 0},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Negative Spacing', 'a\\!\\!b',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "negativethinmathspace"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"scriptlevel": 0},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "negativethinmathspace"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"scriptlevel": 0},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Limit', '\\lim',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mo",
         "texClass": 1,
         "attributes": {"movablelimits": true,
                        "form": "prefix"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix"},
         "properties": {"movesupsub": true,
                        "movablelimits": true},
         "childNodes": [
           {"kind": "text",
            "text": "lim"}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);


parserTest.runTest(
  'Limits SubSup', '\\int^2\\limits_3',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "munderover",
         "texClass": 1,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"movesupsub": true},
         "childNodes": [
           {"kind": "mo",
            "texClass": 1,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "infix",
                          "largeop": true,
                          "symmetric": true},
            "properties": {"movablelimits": false,
                           "texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "∫"}],
            "isEmbellished": true},
            {"kind": "mn",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": false,
                "scriptlevel": 1},
              "properties": {"texprimestyle": true},
              "childNodes": [
                {"kind": "text",
                  "text": "3"}]},
            {"kind": "mn",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": false,
                "scriptlevel": 1},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "2"}]}],
          "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
  "isEmbellished": true}
);


parserTest.runTest(
  'Limits UnderOver', '\\lim_3\\nolimits^2',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "msubsup",
         "texClass": 1,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"movesupsub": false},
         "childNodes": [
           {"kind": "mo",
            "texClass": 1,
            "attributes": {"form": "prefix"},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "infix"},
            "properties": {"movablelimits": false,
                           "movesupsub": true},
            "childNodes": [
              {"kind": "text",
               "text": "lim"}],
            "isEmbellished": true},
           {"kind": "mn",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": false,
                "scriptlevel": 1},
              "properties": {"texprimestyle": true},
              "childNodes": [
                {"kind": "text",
                  "text": "3"}]},
            {"kind": "mn",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": false,
                "scriptlevel": 1},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "2"}]}],
          "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
  "isEmbellished": true}
);


parserTest.runTest(
  'Limits', '\\sum\\limits^2_3',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "munderover",
         "texClass": 1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"movesupsub": true},
         "childNodes": [
           {"kind": "mo",
            "texClass": 1,
            "attributes": {"movablelimits": false},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "form": "infix",
              "largeop": true,
              "movablelimits": true,
              "symmetric": true},
            "properties": {"movesupsub": true,
                           "movablelimits": false,
                           "texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "\u2211"}],
            "isEmbellished": true},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "3"}]},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "2"}]}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);


parserTest.runTest(
  'Frac', '\\frac{a}{b}',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mfrac",
         "texClass": null,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "a"}]},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "b"}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Raise', '\\raise 1em {x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mpadded",
         "texClass": 0,
         "attributes": {"height": "+1em",
                        "depth": "-1em",
                        "voffset": "+1em"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "TeXAtom",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "x"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Lower', '\\lower 1em {x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mpadded",
         "texClass": 0,
         "attributes": {"height": "-1em",
                        "depth": "+1em",
                        "voffset": "-1em"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "TeXAtom",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "x"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Operator Dots', '+\\dots+',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mo",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "prefix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "+"}],
         "isEmbellished": true},
        {"kind": "mo",
         "texClass": 7,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "\u22ef"}],
         "isEmbellished": true},
        {"kind": "mo",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "postfix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "+"}],
         "isEmbellished": true}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Operatorname', 'a\\operatorname{xyz}b',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mi",
         "texClass": 1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"movesupsub": false,
                        "movablelimits": false,
                        "fnOP": true},
         "childNodes": [
           {"kind": "text",
            "text": "xyz"}]},
        {"kind": "mo",
         "texClass": -1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "\u2061"}],
         "isEmbellished": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Mathop', '\\mathop{\\rm a} b',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 1,
         "attributes": {"mathvariant": "normal"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {"movesupsub": true,
                        "movablelimits": true,
                        "fnOP": true},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mo",
         "texClass": -1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "\u2061"}],
         "isEmbellished": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Mathop Super', '\\mathop{\\rm a}^b',
  {"kind": "math",
   "texClass": 3,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 3,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mover",
         "texClass": 3,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"movesupsub": true},
         "childNodes": [
           {"kind": "mo",
            "texClass": 3,
            "attributes": {"lspace": "0",
                           "rspace": "0",
                           "movablelimits": true},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "form": "infix"},
            "properties": {"movablelimits": true,
                           "texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "a"}],
            "isEmbellished": true},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "b"}]}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);


parserTest.runTest(
  'Mathop Sub', '\\mathop{\\rm a}_b',
  {"kind": "math",
   "texClass": 3,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 3,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "munder",
         "texClass": 3,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"movesupsub": true},
         "childNodes": [
           {"kind": "mo",
            "texClass": 3,
            "attributes": {"lspace": "0",
                           "rspace": "0",
                           "movablelimits": true},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "form": "infix"},
            "properties": {"movablelimits": true},
            "childNodes": [
              {"kind": "text",
               "text": "a"}],
            "isEmbellished": true},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "b"}]}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);


parserTest.runTest(
  'Mathop Cal', '\\mathop{\\cal a}',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {"movesupsub": true,
                        "movablelimits": true},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {"mathvariant": "-tex-caligraphic"},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "a"}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Mathrel', '\\mathrel{R}',
  {"kind": "math",
   "texClass": 3,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 3,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 3,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "R"}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Vector', '\\vec{a}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "a"}]},
                 {"kind": "mo",
                  "texClass": 3,
                  "attributes": {"stretchy": false},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "form": "infix",
                    "accent": true,
                    "stretchy": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "\u2192"}],
                  "isEmbellished": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Vector Font', '\\mathrm{\\vec{a}}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "TeXAtom",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mover",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "accent": true},
                     "properties": {},
                     "childNodes": [
                       {"kind": "mi",
                        "texClass": 0,
                        "attributes": {"mathvariant": "normal"},
                        "inherited": {
                          "displaystyle": true,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
                        "properties": {"texprimestyle": true},
                        "childNodes": [
                          {"kind": "text",
                           "text": "a"}]},
                       {"kind": "mo",
                        "texClass": 3,
                        "attributes": {"stretchy": false},
                        "inherited": {
                          "displaystyle": true,
                          "scriptlevel": 0,
                          "form": "infix",
                          "accent": true,
                          "stretchy": true},
                        "properties": {},
                        "childNodes": [
                          {"kind": "text",
                           "text": "\u2192"}],
                        "isEmbellished": true}]}],
                  "isInferred": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Vector Op', '\\vec{+}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mo",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "form": "infix"},
                  "properties": {"movablelimits": false,
                                 "texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "+"}],
                  "isEmbellished": true},
                 {"kind": "mo",
                  "texClass": 3,
                  "attributes": {"stretchy": false},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "form": "infix",
                    "accent": true,
                    "stretchy": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "\u2192"}],
                  "isEmbellished": true}],
               "isEmbellished": true}],
            "isInferred": true,
            "isEmbellished": true}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);


parserTest.runTest(
  'Overline', '\\overline{a}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mover",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "accent": false},
         "properties": {"subsupOK": true},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "a"}]},
           {"kind": "mo",
            "texClass": 0,
            "attributes": {"accent": false},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1,
              "form": "infix",
              "accent": true,
              "stretchy": true},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "\u00af"}],
            "isEmbellished": true}]}],
      "isInferred": true}]}
)


parserTest.runTest(
  'Overline Limits', '\\overline{\\int\\limits^2}',
  {"kind": "math",
   "texClass": -1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": -1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mover",
         "texClass": -1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "accent": false},
         "properties": {"subsupOK": true},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mo",
               "texClass": 0,
               "attributes": {"rspace": 0},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "form": "prefix"},
               "properties": {"texprimestyle": true},
               "childNodes": [],
               "isEmbellished": true},
              {"kind": "mover",
               "texClass": 1,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {"movesupsub": true,
                              "texprimestyle": true},
               "childNodes": [
                 {"kind": "mo",
                  "texClass": 1,
                  "attributes": {"lspace": 0,
                                 "rspace": 0},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "form": "postfix",
                    "largeop": true,
                    "symmetric": true},
                  "properties": {"movesupsub": true,
                                 "movablelimits": false,
                                 "texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "\u222b"}],
                  "isEmbellished": true},
                 {"kind": "mn",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "2"}]}],
               "isEmbellished": true}]},
           {"kind": "mo",
            "texClass": 0,
            "attributes": {"accent": false},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1,
              "form": "infix",
              "accent": true,
              "stretchy": true},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "\u00af"}],
            "isEmbellished": true}]}],
      "isInferred": true}]}
)


parserTest.runTest(
  'Overline Sum', '\\overline{\\sum}',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mover",
         "texClass": 1,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "accent": false},
         "properties": {"subsupOK": true},
         "childNodes": [
           {"kind": "mo",
            "texClass": 1,
            "attributes": {"movablelimits": false},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "form": "infix",
              "largeop": true,
              "movablelimits": true,
              "symmetric": true},
            "properties": {"movesupsub": true,
                           "movablelimits": false,
                           "texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "\u2211"}],
            "isEmbellished": true},
           {"kind": "mo",
            "texClass": 0,
            "attributes": {"accent": false},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1,
              "form": "infix",
              "accent": true,
              "stretchy": true},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "\u00af"}],
            "isEmbellished": true}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
)


parserTest.runTest(
  'Overset', '\\overset{a}{b}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mover",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "b"}]},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "a"}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Underset', '\\underset{a}{b}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "munder",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "b"}]},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "a"}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Strut', '\\strut{x}',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mpadded",
         "texClass": null,
         "attributes": {"width": 0,
                        "height": "8.6pt",
                        "depth": "3pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": null,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [],
               "isSpacelike": true}],
            "isInferred": true,
            "isSpacelike": true}],
         "isSpacelike": true},
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "x"}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Fbox', '\\fbox{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "menclose",
         "texClass": 0,
         "attributes": {"notation": "box"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mtext",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "x"}],
               "isSpacelike": true}],
            "isInferred": true,
            "isSpacelike": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Hbox', '\\hbox{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mstyle",
         "texClass": 0,
         "attributes": {"displaystyle": false,
                        "scriptlevel": 0},
         "inherited": {},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mtext",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": false,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "x"}],
               "isSpacelike": true}],
            "isInferred": true,
            "isSpacelike": true}],
         "isSpacelike": true}],
      "isInferred": true,
      "isSpacelike": true}],
   "isSpacelike": true}
);


parserTest.runTest(
  'Phantom', 'x\\phantom{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mphantom",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "y"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vertical Phantom', 'x\\vphantom{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": 0,
               "attributes": {"width": 0},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mphantom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0},
                     "properties": {},
                     "childNodes": [
                       {"kind": "mrow",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": true,
                          "scriptlevel": 0},
                        "properties": {},
                        "childNodes": [
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {
                             "displaystyle": true,
                             "scriptlevel": 0,
                             "mathvariant": "italic"},
                           "properties": {},
                           "childNodes": [
                             {"kind": "text",
                              "text": "y"}]}],
                        "isInferred": true}]}],
                  "isInferred": true}]}],
            "isInferred": true}]},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Horizontal Phantom', 'x\\hphantom{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": 0,
               "attributes": {"height": 0,
                              "depth": 0},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mphantom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0},
                     "properties": {},
                     "childNodes": [
                       {"kind": "mrow",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": true,
                          "scriptlevel": 0},
                        "properties": {},
                        "childNodes": [
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {
                             "displaystyle": true,
                             "scriptlevel": 0,
                             "mathvariant": "italic"},
                           "properties": {},
                           "childNodes": [
                             {"kind": "text",
                              "text": "y"}]}],
                        "isInferred": true}]}],
                  "isInferred": true}]}],
            "isInferred": true}]},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Smash', '\\smash{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": 0,
               "attributes": {"height": 0,
                              "depth": 0},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "x"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Smash Bottom', '\\smash[b]{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": 0,
               "attributes": {"depth": 0},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "x"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Smash Top', '\\smash[t]{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": 0,
               "attributes": {"height": 0},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "x"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Llap', '\\llap{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": 0,
               "attributes": {"width": 0,
                              "lspace": "-1width"},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "x"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Rlap', '\\rlap{x}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": 0,
               "attributes": {"width": 0},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "x"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Raise In Line', 'x\\raise{2pt}{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "mpadded",
         "texClass": 0,
         "attributes": {"height": "+2pt",
                        "depth": "-2pt",
                        "voffset": "+2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "TeXAtom",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "y"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Lower 2', 'x\\lower{2pt}{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "mpadded",
         "texClass": 0,
         "attributes": {"height": "-2pt",
                        "depth": "+2pt",
                        "voffset": "-2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "TeXAtom",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "y"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Raise Negative', 'x\\raise{-2pt}{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "mpadded",
         "texClass": 0,
         "attributes": {"height": "-2pt",
                        "depth": "+2pt",
                        "voffset": "-2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "TeXAtom",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "y"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Lower Negative', 'x\\lower{-2pt}{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "mpadded",
         "texClass": 0,
         "attributes": {"height": "+2pt",
                        "depth": "-2pt",
                        "voffset": "+2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "TeXAtom",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
                     "properties": {},
                     "childNodes": [
                       {"kind": "text",
                        "text": "y"}]}],
                  "isInferred": true}]}],
            "isInferred": true}]},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Move Left', 'x\\moveleft{2pt}{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "-2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "y"}]}],
            "isInferred": true}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Move Right', 'x\\moveright{2pt}{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "y"}]}],
            "isInferred": true}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "-2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Move Left Negative', 'x\\moveleft{-2pt}{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "y"}]}],
            "isInferred": true}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "-2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Move Right Negative', 'x\\moveright{-2pt}{y}z',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "-2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "y"}]}],
            "isInferred": true}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "2pt"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "z"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Rule 2D', '\\rule{2cm}{1cm}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"mathbackground": "black",
                        "width": "2cm",
                        "height": "1cm"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true}],
      "isInferred": true,
      "isSpacelike": true}],
   "isSpacelike": true}
);


parserTest.runTest(
  'Rule 3D', '\\Rule{2cm}{2cm}{1cm}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"mathbackground": "black",
                        "width": "2cm",
                        "height": "2cm",
                        "depth": "1cm"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true}],
      "isInferred": true,
      "isSpacelike": true}],
   "isSpacelike": true}
);


parserTest.runTest(
  'Space 3D', '\\Space{2cm}{2cm}{1cm}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "2cm",
                        "height": "2cm",
                        "depth": "1cm"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true}],
      "isInferred": true,
      "isSpacelike": true}],
   "isSpacelike": true}
);


parserTest.runTest(
  'BuildRel', '\\buildrel{a}\\over b',
  {"kind": "math",
   "texClass": 3,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 3,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 3,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "b"}]},
                 {"kind": "TeXAtom",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 1},
                     "properties": {},
                     "childNodes": [
                       {"kind": "mi",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": false,
                          "scriptlevel": 1,
                          "mathvariant": "italic"},
                        "properties": {},
                        "childNodes": [
                          {"kind": "text",
                           "text": "a"}]}],
                     "isInferred": true}]}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'BuildRel Expression', 'x\\buildrel{a}\\over b y',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "TeXAtom",
         "texClass": 3,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "b"}]},
                 {"kind": "TeXAtom",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {
                       "displaystyle": false,
                       "scriptlevel": 1},
                     "properties": {},
                     "childNodes": [
                       {"kind": "mi",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {
                          "displaystyle": false,
                          "scriptlevel": 1,
                          "mathvariant": "italic"},
                        "properties": {},
                        "childNodes": [
                          {"kind": "text",
                           "text": "a"}]}],
                     "isInferred": true}]}]}],
            "isInferred": true}]},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "y"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Shift Left', 'a<<b',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mo",
         "texClass": 3,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "<"},
           {"kind": "text",
            "text": "<"}],
         "isEmbellished": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Less Equal', 'a<=b',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mo",
         "texClass": 3,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "<"},
           {"kind": "text",
            "text": "="}],
         "isEmbellished": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Linebreak', 'a\\\\b',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"linebreak": "newline"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Custom Linebreak', 'a\\\\[2ex]b',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"depth": "2ex"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"linebreak": "newline"},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Interspersed Text', 'a\\text{c$d$e}b',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "a"}]},
        {"kind": "mrow",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mtext",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "c"}],
            "isSpacelike": true},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mrow",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "mathvariant": "italic"},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "d"}]}],
               "isInferred": true}]},
           {"kind": "mtext",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "e"}],
            "isSpacelike": true}]},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "b"}]}],
      "isInferred": true}]}
);

parserTest.printTime();
