/*global angular */

(function (angular) {

    // -- MODULE DECLARATION
    angular.module("ngFilesizeFilter", [])

    // FILTER
    .filter("filesize", function () {

        /**
         * An array of units, starting at bytes and ending with yottabytes.
         */
        var units = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        return function(bytes, precision) {

            if (isNaN(parseFloat(bytes)))
                return "-";
            if (isNaN(precision))
                precision = 1;

            if (bytes < 1)
                return "0 B";

            var unitIndex = Math.floor(Math.log(bytes) / Math.log(1000)),
                value = bytes / Math.pow(1000, unitIndex);

            return value.toFixed(precision) + " " + units[unitIndex];

        };

    });

})(angular);
