#!/bin/bash
for file in homework*;do
  mv "$file" "${file:9}-homework"
done