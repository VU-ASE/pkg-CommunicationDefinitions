# Messaging Definitions

> [!IMPORTANT]  
> This repository should be included in modules and utilities as a *Git submodule*. The code cannot be run on itself.

The messaging defintions define the structure and types of messages that are exchanged between clients, a forwarding server and a car. They are essential for providing livestream capabilities. 

## Including definitions in Go code

1. Import the submodule (or pull the latest changes if already added)
2. The code exports a package called *"messages"* which can be referenced from your Go project once you pulled the submodule
