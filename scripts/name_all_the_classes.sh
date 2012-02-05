#!/bin/bash
sed -i "s/^\(\s*S\.\)\([A-Za-z0-9_]*\)\(\s*=\s*S\..*\.extend[(][{]*\s*\)/\1\2\3\n  _className : '\2',/g" * 