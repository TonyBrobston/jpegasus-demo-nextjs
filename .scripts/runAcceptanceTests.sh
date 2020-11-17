#!/bin/sh

. ./.scripts/acceptanceTestFunctions.sh

installCypress
buildJpegasusDemo
startJpegasusDemo
runCypressAndSetupTeardown
