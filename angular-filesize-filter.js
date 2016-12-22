/*global angular */

(function (angular) {
    "use strict";

    // -- MODULE DECLARATION
    angular.module("ngFilesizeFilter", [])

    // FILTER
    .filter("filesize", function () {

        /**
         * An array of units, starting at bytes and ending with yottabytes.
         */
        var units = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        return function(bytes, precision) {

            // validate 'bytes'
            if (isNaN(parseFloat(bytes))) {
                return "-";
            }
            if (bytes < 1) {
                return "0 B";
            }

            // validate 'precision'
            if (isNaN(precision)) {
                precision = 1;
            }

            var unitIndex = Math.floor(Math.log(bytes) / Math.log(1000)),
                value = bytes / Math.pow(1000, unitIndex);

            return value.toFixed(precision) + " " + units[unitIndex];

        };

    });

})(angular);
