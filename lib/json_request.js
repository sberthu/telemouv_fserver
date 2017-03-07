'use strict';

var colors = require("colors");

var telemouv = require('./telemouv.js');
var regexp_email = "[A-Z0-9._%-]+@[A-Z0-9-]+\\.[A-Z]{2,6}";
var regexp_date = "(19|20)\\d\\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])";
var regexp_datetime = "(19|20)\\d\\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])\\ ([0-1][1-9]|2[0-3])\\:([0-5][0-9])";
var regexp_tel = "0[1-68]([-. ]?[0-9]{2}){4}";
var regexp_gender = "[MF]";
var regexp_gender_all = "[MFB]";
var regexp_text = ".*";
var regexp_text_required = ".+";
var regexp_decimal = "[-+]?[0-9]*\\.?[0-9]*";
var regexp_number = "\\d*";
var regexp_number_required = "\\d+";
var regexp_integer = "\\d";
var regexp_two_numbers = "\\d+,\\d+";
var regexp_boolean = "[01]";
var regexp_year = "[12][0-9][0-9][0-9]";
var regexp_month = "[01][0-9]";
var regexp_seanceType = "[01]";
var regexp_seanceCategory = "[01]";


/**********************************************************************************/
var requests = {
    "apaLogin": {
        "apaLogin": function (e) {
            return telemouv.checkLogin(e);
        },
        "apaPass": function (e) {
            return telemouv.checkPassword(e);
        },
        "deviceType": function (e) {
            return check(regexp_integer, e);
        }
    },
    "apaRegisterApa": {
        "firstName": function (e) {
            return check(regexp_text_required, e);
        },
        "name": function (e) {
            return check(regexp_text_required, e);
        },
        "mobileNumber": function (e) {
            return check(regexp_tel, e);
        },
        "work": function (e) {
            return check(regexp_text, e);
        },
        "pseudo": function (e) {
            return check(regexp_text_required, e);
        },
        "email": function (e) {
            return check(regexp_email, e);
        },
        "password": function (e) {
            return check(regexp_text_required, e);
        }
    },
    "apaSetInfo": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "gender": function (e) {
            return check(regexp_gender, e);
        },
        "location": function (e) {
            return check(regexp_text, e);
        },
        "attendanceAgeRange": function (e) {
            return check(regexp_two_numbers, e);
        },
        "attendanceWithoutPathology": function (e) {
            return check(regexp_boolean, e);
        },
        "attendanceReducedMobility": function (e) {
            return check(regexp_boolean, e);
        },
        "attendanceWithChronicalPathology": function (e) {
            return check(regexp_boolean, e);
        },
        "attendancePathologies": function (e) {
            return checkIsObject(e);
        },
        "mainWorkplaceName": function (e) {
            return check(regexp_text, e);
        },
        "mainWorkplaceAddress": function (e) {
            return check(regexp_text, e);
        },
        "mainWorkplaceTown": function (e) {
            return check(regexp_text, e);
        },
        "otherWorkPlace": function (e) {
            return checkIsArray(e);
        },
        "groupFee": function (e) {
            return check(regexp_number, e);
        },
        "individualFee": function (e) {
            return check(regexp_number, e);
        },
        "annualFee": function (e) {
            return check(regexp_number, e);
        },
        "diplomaName": function (e) {
            return check(regexp_text, e);
        },
        "diplomaDeliverAuthority": function (e) {
            return check(regexp_text, e);
        },
        "diplomaYear": function (e) {
            return check(regexp_year, e);
        },
        "diplomaPlace": function (e) {
            return check(regexp_text, e);
        },
        "otherDiploma": function (e) {
            return checkIsArray(e);
        },
        "physicalActivities": function (e) {
            return checkIsArray(e);
        }
    },
    "apaGetDashboard": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        }
    },
    "apaGetLastActivities": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        }
    },
    "apaGetMemberInfo": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        },
        "memberId": function (e) {
            return telemouv.checkMember(e);
        }
    },
    "apaGetMembersList": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        }
    },
    "apaGetMemberStats": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        },
        "statType": function (e) {
            return check("[12345]", e);
        },
        "startDate": function (e) {
            return check(regexp_date, e);
        },
        "endDate": function (e) {
            return check(regexp_date, e);
        }

    },
    "apaAddMemberToSeance": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        },
        "seanceId": function (e) {
            return check(regexp_number_required, e);
        }
    },
    "apaDeleteMemberFromSeance": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        },
        "seanceId": function (e) {
            return check(regexp_number_required, e);
        },
        "memberId": function (e) {
            return check(regexp_number_required, e);
        }
    },
    "apaDeleteSeance": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        },
        "seanceId": function (e) {
            return check(regexp_number_required, e);
        }
    },
    "apaGetSeanceData": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        },
        "seanceId": function (e) {
            return check(regexp_number_required, e);
        }
    },
    "apaGetTimeline": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        },
        "month": function (e) {
            return check(regexp_month, e);
        },
        "year": function (e) {
            return check(regexp_year, e);
        }
    }
    ,
    "apaCreateSeance": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        },
        "seanceLocationLabel": function (e) {
            return check(regexp_text, e);
        },
        "seanceLocationAddress": function (e) {
            return check(regexp_text, e);
        },
        "seanceLocationTown": function (e) {
            return check(regexp_text, e);
        },
        "seanceLocationPhoneNumber": function (e) {
            return check(regexp_tel, e);
        },
        "seanceLocationLat": function (e) {
            return check(regexp_decimal, e);
        },
        "seanceLocationLon": function (e) {
            return check(regexp_decimal, e);
        },
        "seanceType": function (e) {
            return check(regexp_seanceType, e);
        },
        "seanceDateTime": function (e) {
            return check(regexp_datetime, e);
        },
        "seanceSpecificities": function (e) {
            return checkIsArray(e);
        },
        "seanceGender": function (e) {
            return check(regexp_gender_all, e);
        },
        "seanceAgeRange": function (e) {
            return check(regexp_two_numbers, e);
        },
        "seanceMaxParticipants": function (e) {
            return check(regexp_number_required, e);
        },
        "seanceActivity": function (e) {
            return check(regexp_text_required, e);
        },
        "seanceParticipants": function (e) {
            return checkIsArray(e);
        },
        "seanceCategory": function (e) {
            return check(regexp_seanceCategory, e);
        },
        "seanceDuration": function (e) {
            return check(regexp_number_required, e);
        },
        "seanceRecurrence": function (e) {
            return check(regexp_number_required, e);
        },
        "seancePathologies": function (e) {
            return checkIsArray(e);
        }
    }
    ,
    "apaGetInfo": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        }
    }
    ,
    "apaSearchMember": {
        "apaId": function (e) {
            return telemouv.checkApaId(e);
        },
        "apaToken": function (e) {
            return telemouv.checkToken(e);
        },
        "email": function (e) {
            return check(regexp_text_required, e);
        }
    }
}
;
function checkIsArray(_param) {
    return Array.isArray(_param);
}
;
function checkIsObject(_param) {
    return (typeof _param === "object");
}
;
function check(_strregex, _param) {
    _strregex = "^" + _strregex + "$";
    var _regex = new RegExp(_strregex, 'ig');
    return _regex.test(_param);
}
exports.getBody = function (_body) {
    console.log(_body);
    if (typeof _body === "string") {
        _body = JSON.parse(_body);
    }
    if (typeof _body === "object" && typeof _body["telemouv"] !== "undefined") {
        return _body.telemouv;
    }
    return null;
};
exports.checkRequest = function (_function, _body) {
    var _ret = false;
    if (typeof requests[_function] !== "undefined") {
        var _request = requests[_function];
        _ret = true;
        for (var _prop in _request) {
            if (null === _body || typeof _body[_prop] === "undefined") {
                return null;
            }
            var _param = _body[_prop];
            telemouv.setParameter(_prop, _param);
            var _fc_check = _request[_prop];
            var _result = _fc_check(_param);
            console.log(_prop + ":" + _param + (_result ? colors.green(":passed") : colors.red(":failed")));
            _ret = _ret && _result;
        }
    }
    return _ret;
};