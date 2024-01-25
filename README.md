# [package]: CommunicationDefinitions

The communication definitions package contains all definitions for communication between our services. Communication is completely language-agnostic, so the definitions are written in protobuf syntax.

To get started quickly, this repository automatically builds packages for the languages used in the ASE project, which can be easily imported using the standard package manager. Current auto-generated packages are:

- **Go**
    - Installation: `go get github.com/VU-ASE/pkg-CommunicationDefinitions/packages/go`
    - Usage: import the namespace you need. The namespaces are defined at the top of every _/definitions/*.proto_ file in this repository
- **Typescript**: 
    - Installation:
        - `npm install 'https://gitpkg.now.sh/VU-ASE/pkg-CommunicationDefinitions/packages/typescript?main'`
        - OR `yarn add 'https://gitpkg.now.sh/VU-ASE/pkg-CommunicationDefinitions/packages/typescript?main'`
    - Usage: import `ase-communication-definitions` in your TypeScript files
- **C**:
    - Usage: download the generated source and header files from this repository

## Bring your own language

If the above list of languages does not meet your requirements, you are encouraged to add your own language and packaging mechanism. Using [Protobuf](https://github.com/protocolbuffers/protobuf) many languages are supported. See the *Makefile* for example implementations.