# angular-filesize-filter

This module provides an AngularJS filter for formatting byte counts as
file size strings with units.



## Install

```
npm install --save angular-filesize-filter
```

... and add it to your page via a `<script>` tag, or include it in your build process.



## Usage

1. Add it as a module dependency:
    ```javascript
    var app = angular.module("myModuleName", ["ngFilesizeFilter"]);
    ```

2. Enjoy!
    ```html
    {{ 1234567 | filesize }} = 1.2 MB
    {{ 1234567 | filesize:4 }} = 1.2346 MB
    ```



## License

MIT License

Copyright (c) 2016 - 2017 Fabian Meyer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
