#!/usr/bin/env bash

# This script generates a tiered Table of Contents from a
# markdown document's header tags.

# CLI args
INPUT=$1
OUTPUT=$2

# The ToC generator
function maketoc {
    # Pull out all the header tags
    # then trim the first two lines (i.e. repo name & `## Contents` itself)
    # then write to `TOC.md`
    grep -E "^\#+ [A-Za-z]+ ?[A-Za-z]*" $INPUT|tail -n+3 > $OUTPUT

    # Turn headers into top-level bullet points
    sed -i 's/^## /- /' $OUTPUT

    # Turn subheaders into 2nd level bullet points
    sed -i 's/^#### /    - /' $OUTPUT

    # Turn each point into a markdown link
    sed -i -r "s/(\- )([A-Za-z]+ ?[A-Za-z]*)/\1[\2](#\2)/" $OUTPUT

    # Replace spaces in anchor links with hyphens
    sed -i -r "s/\((#[A-Za-z]+) ([A-Za-z]+)\)$/(\1-\2)/" $OUTPUT

    # Set all anchor tags to lowercase to link properly
    sed -i -r 's/(\(#[A-Za-z]+-?[A-Za-z]+\)$)/\L\1/' $OUTPUT

    # Log the final result written to $OUTPUT
    cat $OUTPUT
}


# Are we on a GNU distro?
# If not is there `gsed` in the PATH?
# Inform user that we need `gsed` if we find neither, otherwise run the formatting script.
gsedcheck=$(which gsed)
oscheck=$(uname)

if [[ ! $oscheck =~ .*linux-gnu.*  ]] && [[ ! $gsedcheck =~ .*bin/gsed.*   ]]
then
    echo "Oops! Seems like you don't have gsed (GNU sed) installed (ಠ_ಠ)"
    echo "If you're on OSX and use homebrew, try:"
    echo "'brew install gnu-sed'"
    echo "Then rerun this script ( ＾▽＾  )っ"
    return 1
else
    maketoc
    return 0
fi
