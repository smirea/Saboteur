#!/bin/bash

#IMPORTANT: only gets classes from S
#IMPORTANT 2: the -i options gets only card then EXTEND S.*
#             This means that S.Card = Class.extend WON'T BE RETURNED!!

if [ "$1" == '-i' ]; then
  grep -r "^\s*S\.\([a-zA-Z0-9_]*\)\s*=\s*S\.[a-zA-Z0-9_]*\.extend" * | sed "s/.*\(\s*S\.\)\([a-zA-Z0-9_]*\)\s*=\s*S\.\([a-zA-Z0-9_]*\)\.extend.*/\2 :: \3/g"
else
  grep -r "^\s*S\.\([a-zA-Z0-9_]*\)\s*=\s*S\.[a-zA-Z0-9_]*\.extend" * | sed "s/.*\(\s*S\.\)\([a-zA-Z0-9_]*\)\s*=\s*S\.\([.a-zA-Z0-9_]*\)\.extend.*/\2/g"
fi