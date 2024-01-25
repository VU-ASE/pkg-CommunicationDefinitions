#!/bin/bash
# Script to easily compile all proto files to C code. 
# the C code is meant to be included as a git submodule

# Make sure you have installed the proto compiler (protoc)
# You can install it with : `sudo apt install protobuf-c-compiler`
mkdir -p ./packages/c/gen
protoc --c_out=./packages/c/gen -I./definitions definitions/**/*.proto -I./definitions definitions/*.proto