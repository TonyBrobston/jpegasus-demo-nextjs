#!/bin/sh

. ./.scripts/acceptanceTestFunctions.sh

installCypress
buildJpegasusDemo
startJpegasusDemo
openCypressAndSetupTeardown
