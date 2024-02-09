# Changelog

## [3.0.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.6.0...v3.0.0) (2024-02-09)


### ⚠ BREAKING CHANGES

* made compatible with v2 of pkg-ServiceRunner

### Features

* add actuation protobuf message ([f8f3226](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/f8f3226d3270890116ec0356cf7517243535d7a8))
* Add Image proto defintion ([b1a34e5](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/b1a34e510fce7f60d83665f039a94d3ab407fa32))
* Add SimFrame message ([61e3e3d](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/61e3e3dfdb5d9fb902551aa836a6b65271c22f73))
* added canvas object definitions ([4c64799](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/4c6479951d4d5beefea2d7ade8b47b6dc6a235cc))
* added dependencies to Service description, added REGISTERED status ([cca7f57](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/cca7f575e2a5348dc26659ea0ea4e121a88e0eac))
* added jpeg compression parameters ([d8a1a59](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d8a1a591bac32f433ca6e67715809573f231c31b))
* added livestream frame support ([e047f54](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/e047f54d88c20af4de3acdd1afe374bb5180f998))
* added protobuf segment support ([616c30a](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/616c30ae50487313208ee948b391a6413d322eba))
* added README and initial code ([f8b675e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/f8b675ecbbaf8cbf62740e75e07c7c95fb3352c8))
* added remote sensor definitions ([61b2348](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/61b2348260a8f7dc0fc18561e9ad3dc9af9f7249))
* added segmentation definitions ([07c2a82](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/07c2a827d5c5d082dcc92fa87d43d04aa7652dbc))
* added service discovery message definitions ([4c3ef35](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/4c3ef356ea5fcab935985a37c79bbd6702fd7853))
* added service output address to debug information ([996e174](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/996e1744cb90c8e09f31b4d005e2cb32b24d057f))
* added ServiceStatusUpdate message ([8020526](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/802052650d31f7756a8135bc6c9e5034ee30234a))
* added space for sensor information ([20c371e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/20c371e1e5d0dedb70f190b5c48c11f803cb7cf7))
* added support for `npm install` and `go get` ([0efe056](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/0efe0567bcfff0ef91f299e93b4070f6904677b7))
* added support for errors and human controller state in message ([23574e4](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/23574e4edd2de0bfa79faddeecc897ee218f024c))
* debug and path planner information added to CameraOutput ([1b9da9f](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/1b9da9f53891319e81aa306e417df31edd383740))
* defined config message and human control order signal in protobuf ([d1cd183](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d1cd1831f496bd22f5f7b7d9e59c8ae37da945ca))
* implemented system manager and service disco messages ([d7169e9](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d7169e927c8cf65f464591e8b0314a01f401477b))
* made compatible with v2 of pkg-ServiceRunner ([6cecf41](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/6cecf416f236cee85d86828e7c54ffa90bea741d))
* made compatible with v2 of pkg-ServiceRunner ([ec7c7d4](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/ec7c7d48ca8bba007e0b5636bbb2bc41b5959711))
* merged ServiceStatus into main Service definition ([65ebc2d](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/65ebc2d8727bc27c0696306e3fedb0c3c8e0108c))
* moved definitions to protobuf ([ca3c4b7](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/ca3c4b78406c4076ac024caa02c02ae41cd0b88b))
* moved from module input to module output, in accordance with V2 ([410045f](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/410045f0e73320f0c767b131814026daebe7ad9c))
* moved go.mod to root ([a1713a7](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/a1713a78b48e69f1c6e7802858748d73bbe0efa5))
* moved separate scripts to Makefile ([6941d77](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/6941d77d8f5c5da0528effc6ab1478f70b97c727))
* moved to jpeg instead of raw pixel values ([d8701c3](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d8701c3694bfb35e86daac94bc5910763ee5ce3d))
* removed ServiceStatus from systemmanager wrapper ([8f5a618](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/8f5a6180c36478ff283a7e167cae8baae2bb57c6))
* removed status from service list ([f8c6f30](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/f8c6f3091034c4e15f01e478fddcd534ff45aab0))
* support for debug streams and service lists ([f7c4a5c](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/f7c4a5cd31f03261123cf80b86826ccdc6b9524b))
* support for ServiceOptions, to enforce tuning state parameters ([b97b44a](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/b97b44aa3d559ed95ce61be6b799ad76e7cb38fa))
* test-commit ([4f53600](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/4f53600be1865a235d7cfcfae76047a2782bddfc))
* test-commit 2 ([efa33a2](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/efa33a2c7dfdc7d75b3a88ea4e2065046b696229))
* updated script for TypeScript generation ([3ac104c](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/3ac104c41159d2446392e1b2f6d1a4fec66136a2))


### Bug Fixes

* added correct go package in README ([168afea](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/168afeaa1880fad7d7f5942d842fd71c183892ca))
* added correct import path for v2 ([b5c68b5](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/b5c68b538b8cc1d2d892f58165d96e460ffdc027))
* added SeriveStatusUpdate to system manager wrapper ([477959d](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/477959d1cdd14a9182cbbc670618bb306b38662a))
* added ServiceIdentifier information to Debug messages ([1fb9d7c](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/1fb9d7c261c481b42da7787a00fbad4d0f1e1498))
* added v2 import path ([0efdfaf](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/0efdfafa2430de57e2e52526e353058ee84804c4))
* Bump version ([168b9a8](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/168b9a827e7a7d2ec3229386dfd8f4b59646ad22))
* Correct 64 bit floats to 32 ([d94c297](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d94c29740aeb8c43bd703e0fe0e1b42c4849a237))
* correct go package name ([46618f9](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/46618f9f8077203b892b58b3c82f12336e438bee))
* correct go package name ([dc80511](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/dc8051106ebc895271fbd091aac3c8adac39ef07))
* import before build ([28c093e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/28c093e31da33aab30790852bace8f3a5c266d51))
* namespace conflict for imported ServiceIdentifier ([884921a](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/884921a20fb95d6d3bf12cac49df40b7991ef832))
* protobuf compilation errors ([91e7e38](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/91e7e3829ac7960ef008b648d9bbefc3aa2ffa7f))
* renamed "_value" to "_default" ([691e97e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/691e97ea46b8e1587f3700679b3b3bd22d588848))
* restored ServiceInformationRequest ([f21cdd8](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/f21cdd8e60e42a72ccc85dc7db1b50dcb9ed160e))
* simplified systemmanager messages using oneof ([4d25416](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/4d25416921a93a0626cce9f9398f1d8ea4c1208b))
* trigger rebuild ([289846e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/289846e80244fb32874dc25401656954145ebefe))
* trigger rebuild for eduardo ([418c433](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/418c433aea1755dee537279c34f6a560acbbcd1e))
* used ServiceEndpoint definition in debug information ([bba95ef](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/bba95efe49cd03378e3f36e9dce5efdc264e725c))

## [2.6.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.5.2...v2.6.0) (2024-02-08)


### Features

* Add SimFrame message ([61e3e3d](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/61e3e3dfdb5d9fb902551aa836a6b65271c22f73))
* removed ServiceStatus from systemmanager wrapper ([8f5a618](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/8f5a6180c36478ff283a7e167cae8baae2bb57c6))


### Bug Fixes

* trigger rebuild ([289846e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/289846e80244fb32874dc25401656954145ebefe))

## [2.6.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.5.3...v2.6.0) (2024-02-08)


### Features

* removed ServiceStatus from systemmanager wrapper ([0a91e18](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/0a91e18eec0cbccc7bd3194e0d6876f9f78b5fad))

## [2.5.3](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.5.2...v2.5.3) (2024-02-08)


### Bug Fixes

* trigger rebuild ([289846e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/289846e80244fb32874dc25401656954145ebefe))

## [2.5.2](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.5.1...v2.5.2) (2024-02-08)


### Bug Fixes

* restored ServiceInformationRequest ([f21cdd8](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/f21cdd8e60e42a72ccc85dc7db1b50dcb9ed160e))

## [2.5.1](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.5.0...v2.5.1) (2024-02-08)


### Bug Fixes

* added SeriveStatusUpdate to system manager wrapper ([477959d](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/477959d1cdd14a9182cbbc670618bb306b38662a))

## [2.5.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.4.0...v2.5.0) (2024-02-08)


### Features

* added ServiceStatusUpdate message ([8020526](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/802052650d31f7756a8135bc6c9e5034ee30234a))

## [2.4.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.3.0...v2.4.0) (2024-02-08)


### Features

* merged ServiceStatus into main Service definition ([65ebc2d](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/65ebc2d8727bc27c0696306e3fedb0c3c8e0108c))

## [2.3.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.2.4...v2.3.0) (2024-02-08)


### Features

* added dependencies to Service description, added REGISTERED status ([cca7f57](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/cca7f575e2a5348dc26659ea0ea4e121a88e0eac))

## [2.2.4](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.2.3...v2.2.4) (2024-02-07)


### Bug Fixes

* used ServiceEndpoint definition in debug information ([bba95ef](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/bba95efe49cd03378e3f36e9dce5efdc264e725c))

## [2.2.3](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.2.2...v2.2.3) (2024-02-07)


### Bug Fixes

* import before build ([28c093e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/28c093e31da33aab30790852bace8f3a5c266d51))

## [2.2.2](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.2.1...v2.2.2) (2024-02-07)


### Bug Fixes

* namespace conflict for imported ServiceIdentifier ([884921a](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/884921a20fb95d6d3bf12cac49df40b7991ef832))

## [2.2.1](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.2.0...v2.2.1) (2024-02-07)


### Bug Fixes

* added ServiceIdentifier information to Debug messages ([1fb9d7c](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/1fb9d7c261c481b42da7787a00fbad4d0f1e1498))

## [2.2.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.1.1...v2.2.0) (2024-02-07)


### Features

* added service output address to debug information ([996e174](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/996e1744cb90c8e09f31b4d005e2cb32b24d057f))

## [2.1.1](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.1.0...v2.1.1) (2024-02-07)


### Bug Fixes

* renamed "_value" to "_default" ([691e97e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/691e97ea46b8e1587f3700679b3b3bd22d588848))

## [2.1.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.0.2...v2.1.0) (2024-02-07)


### Features

* support for ServiceOptions, to enforce tuning state parameters ([b97b44a](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/b97b44aa3d559ed95ce61be6b799ad76e7cb38fa))

## [2.0.2](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.0.1...v2.0.2) (2024-02-06)


### Bug Fixes

* added correct import path for v2 ([b5c68b5](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/b5c68b538b8cc1d2d892f58165d96e460ffdc027))

## [2.0.1](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v2.0.0...v2.0.1) (2024-02-06)


### Bug Fixes

* added v2 import path ([0efdfaf](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/0efdfafa2430de57e2e52526e353058ee84804c4))

## [2.0.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v1.6.0...v2.0.0) (2024-02-06)


### ⚠ BREAKING CHANGES

* made compatible with v2 of pkg-ServiceRunner

### Features

* made compatible with v2 of pkg-ServiceRunner ([6cecf41](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/6cecf416f236cee85d86828e7c54ffa90bea741d))
* made compatible with v2 of pkg-ServiceRunner ([ec7c7d4](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/ec7c7d48ca8bba007e0b5636bbb2bc41b5959711))
* removed status from service list ([f8c6f30](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/f8c6f3091034c4e15f01e478fddcd534ff45aab0))

## [1.6.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v1.5.0...v1.6.0) (2024-02-06)


### Features

* support for debug streams and service lists ([f7c4a5c](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/f7c4a5cd31f03261123cf80b86826ccdc6b9524b))

## [1.5.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v1.4.0...v1.5.0) (2024-01-27)


### Features

* moved to jpeg instead of raw pixel values ([d8701c3](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d8701c3694bfb35e86daac94bc5910763ee5ce3d))

## [1.4.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v1.3.0...v1.4.0) (2024-01-27)


### Features

* added segmentation definitions ([07c2a82](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/07c2a827d5c5d082dcc92fa87d43d04aa7652dbc))

## [1.3.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v1.2.0...v1.3.0) (2024-01-27)


### Features

* debug and path planner information added to CameraOutput ([1b9da9f](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/1b9da9f53891319e81aa306e417df31edd383740))

## [1.2.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v1.1.1...v1.2.0) (2024-01-25)


### Features

* moved go.mod to root ([a1713a7](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/a1713a78b48e69f1c6e7802858748d73bbe0efa5))


### Bug Fixes

* added correct go package in README ([168afea](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/168afeaa1880fad7d7f5942d842fd71c183892ca))
* correct go package name ([46618f9](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/46618f9f8077203b892b58b3c82f12336e438bee))

## [1.1.1](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v1.1.0...v1.1.1) (2024-01-25)


### Bug Fixes

* added correct go package in README ([168afea](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/168afeaa1880fad7d7f5942d842fd71c183892ca))
* correct go package name ([46618f9](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/46618f9f8077203b892b58b3c82f12336e438bee))
* correct go package name ([dc80511](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/dc8051106ebc895271fbd091aac3c8adac39ef07))

## [1.1.0](https://github.com/VU-ASE/pkg-CommunicationDefinitions/compare/v1.0.0...v1.1.0) (2024-01-25)


### Features

* add actuation protobuf message ([f8f3226](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/f8f3226d3270890116ec0356cf7517243535d7a8))
* Add Image proto defintion ([b1a34e5](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/b1a34e510fce7f60d83665f039a94d3ab407fa32))
* added canvas object definitions ([4c64799](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/4c6479951d4d5beefea2d7ade8b47b6dc6a235cc))
* added jpeg compression parameters ([d8a1a59](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d8a1a591bac32f433ca6e67715809573f231c31b))
* added livestream frame support ([e047f54](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/e047f54d88c20af4de3acdd1afe374bb5180f998))
* added protobuf segment support ([616c30a](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/616c30ae50487313208ee948b391a6413d322eba))
* added remote sensor definitions ([61b2348](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/61b2348260a8f7dc0fc18561e9ad3dc9af9f7249))
* added service discovery message definitions ([4c3ef35](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/4c3ef356ea5fcab935985a37c79bbd6702fd7853))
* added space for sensor information ([20c371e](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/20c371e1e5d0dedb70f190b5c48c11f803cb7cf7))
* added support for `npm install` and `go get` ([0efe056](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/0efe0567bcfff0ef91f299e93b4070f6904677b7))
* added support for errors and human controller state in message ([23574e4](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/23574e4edd2de0bfa79faddeecc897ee218f024c))
* defined config message and human control order signal in protobuf ([d1cd183](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d1cd1831f496bd22f5f7b7d9e59c8ae37da945ca))
* implemented system manager and service disco messages ([d7169e9](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d7169e927c8cf65f464591e8b0314a01f401477b))
* moved definitions to protobuf ([ca3c4b7](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/ca3c4b78406c4076ac024caa02c02ae41cd0b88b))
* moved from module input to module output, in accordance with V2 ([410045f](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/410045f0e73320f0c767b131814026daebe7ad9c))
* moved separate scripts to Makefile ([6941d77](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/6941d77d8f5c5da0528effc6ab1478f70b97c727))
* updated script for TypeScript generation ([3ac104c](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/3ac104c41159d2446392e1b2f6d1a4fec66136a2))


### Bug Fixes

* Correct 64 bit floats to 32 ([d94c297](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/d94c29740aeb8c43bd703e0fe0e1b42c4849a237))
* protobuf compilation errors ([91e7e38](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/91e7e3829ac7960ef008b648d9bbefc3aa2ffa7f))
* simplified systemmanager messages using oneof ([4d25416](https://github.com/VU-ASE/pkg-CommunicationDefinitions/commit/4d25416921a93a0626cce9f9398f1d8ea4c1208b))

## 1.0.0 (2023-12-12)


### Features

* added README and initial code ([f8b675e](https://github.com/VU-ASL/shared-MessagingDefinitions/commit/f8b675ecbbaf8cbf62740e75e07c7c95fb3352c8))
* test-commit ([4f53600](https://github.com/VU-ASL/shared-MessagingDefinitions/commit/4f53600be1865a235d7cfcfae76047a2782bddfc))
* test-commit 2 ([efa33a2](https://github.com/VU-ASL/shared-MessagingDefinitions/commit/efa33a2c7dfdc7d75b3a88ea4e2065046b696229))
