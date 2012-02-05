#!/bin/bash

file=client_includes.js

echo '' > $file
a=$(php include_client.php list)
for i in $a
do
  cat <<HEAD >> $file

/**
 * @FILE: $i
 */
HEAD
cat $i >> $file
echo "/******************************************************************************/" >> $file
done
