"use strict";

const fs     = require("fs");
const path   = require('path');
const expect = require('chai').expect;
const parser = require('../../src/parse/smcat-parser');

const programASTPairs =
        require("./00-no-transitions.json")
        .concat(require("./01-transitions-only.json"))
        .concat(require("./03-composite.json"));

const syntaxErrors =
    require("./10-no-transitions-errors.json")
    .concat(require("./11-transition-errors.json"))
    .concat(require("./12-composition-errors.json"));

const fileBasedPairs =
    require("./02-comments.json");


describe('#parse() - happy day ASTs - ', () => {
    programASTPairs.forEach(pPair => {
        if (pPair.hasOwnProperty('pending') && pPair.pending) {
            xit(pPair.title);
        } else {
            it(pPair.title, () => {
                expect(parser.parse(pPair.program)).to.deep.equal(pPair.ast);
            });
        }
    });
});

describe('#parse() - file based - ', () => {
    fileBasedPairs.forEach(pPair => {
        it(pPair.title, () => {
            let lProgram = fs.readFileSync(path.join(__dirname, pPair.programInputFile), 'utf-8');

            expect(parser.parse(lProgram)).to.deep.equal(require("./" + pPair.astFixtureFile));
        });
    });
});


function assertSyntaxError(pProgram, pParser, pErrorType){
    if (!pErrorType){
        pErrorType = "SyntaxError";
    }
    try {
        var lStillRan = false;
        if (pParser.parse(pProgram)) {
            lStillRan = true;
        }
        expect(lStillRan).to.equal(false);
    } catch (e) {
        expect(e.name).to.equal(pErrorType);
    }
}

describe('#parse() - syntax errors - ', () => {
    syntaxErrors.forEach(pPair => {
        it(pPair.title, () =>  {
            assertSyntaxError(pPair.program, parser, pPair.error);
        });
    });
});
/* eslint max-nested-callbacks: 0 */
