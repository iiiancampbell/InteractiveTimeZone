# InteractiveTimeZone
Time zone dash board for Interactive Service Desk.

Assigning tickets to engineers in different regions requires ensuring the time in the respective region is 7:30am or later to allow engineers to prepare the work for customers business hours which start at 9:30am.

There is no internal tool or shortcut which allows the Service Desk to check all major regions times at a glance.

This dashboard fixes that issue.


# Javascript & Moment.js

The built in date handling with Javascript is a pain when trying to deal with different time zones and daylight savings adjustments. It IS possible but the amount of work needed to put in wasn't worth the pay off in my mind. 

Instead, moment.js was used as it is an small and efficient library that allows for the easy integration of date formating adjustment.
