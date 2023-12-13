#!/bin/bash
# Script to easily compile all proto files to Go code. 
# the Go code is meant to be included as a git submodule

# make sure you have installed the proto compiler (protoc) and dependencies. See: https://protobuf.dev/getting-started/gotutorial/
protoc --go_out=paths=source_relative:./gen -I./definitions definitions/*.proto