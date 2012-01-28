#!/bin/bash

grep -r "^\s*S\.\([a-zA-Z]*\)\s*=\s*S\.[a-zA-Z]*\.extend" * | sed "s/.*\(\s*S\.\)\([a-zA-Z]*\)\(\s*=.*[a-zA-Z]*\.extend\).*/\2/g"