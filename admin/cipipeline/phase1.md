# CI/CD Piepline Phase 1
[Current Actions](#currently-implemented) | [Future Actions](#future-additions)

## Currently Implemented

### JS Hint
- Used to check code quality
- Notes:
  - In the [yml](../../.github/workflows/ci-cd-piepline.yml), there is a config file that is written (lines 13-17) that specify two options:
    - `esversion = 7`: this says that our JS code is written to follow [ECMAScript 7](https://en.wikipedia.org/wiki/ECMAScript#:~:text=ECMAScript%20(%2F%CB%88%C9%9Bkm,prototype%2Dbased%2C%20functional%2C%20imperative)). ECMAScript is a JavaScript standard to ensure the interoperability of web pages across different web browsers.
    - `"loopfunc": true`: this surpresses the error of using global variables like `window`

## Future Additions