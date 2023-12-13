#!/bin/bash
# Script to easily compile all proto files to JS code. 
# the Go code is meant to be included as a git submodule

# make sure you have installed the proto compiler (protoc) and dependencies. See: https://protobuf.dev/getting-started/gotutorial/
# make sure you have installed the typescript compilation plugin using npm (just run npm install)
protoc --ts_out=paths=source_relative:./gen -I./definitions definitions/*.proto

#  --plugin="node_modules/.bin/protoc-gen-ts_proto" --ts_proto_opt=esModuleInterop=true