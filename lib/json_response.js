'use strict';
var telemouv = require('./telemouv.js');

function nope(_idx) {
    return '{"errorCode" :"' + _idx + '"}';
}
var responses = {
    "apaLogin": function (_idx) {
        return (_idx === 0 ? '{"errorCode" :"0", "apaId":"' + telemouv.createApaId() + '", "apaToken":"' + telemouv.createToken() + '"}' : nope(_idx));
    },
    "apaRegisterApa": function (_idx) {
        return (_idx === 0 ? '{"errorCode" :"0", "apaId":"' + telemouv.createApaId() + '"}' : nope(_idx));
    },
    "apaSetInfo": function (_idx) {
        return nope(_idx);
    },
    "apaGetDashboard": function (_idx) {
        return (_idx === 0 ? JSON.stringify(telemouv.getDashBoard()) : nope(_idx));
    },
    "apaGetLastActivities": function (_idx) {
        return nope(_idx);
    },
    "apaGetMemberInfo": function (_idx) {
        return (_idx === 0 ? JSON.stringify(telemouv.getMember()) : nope(_idx));
    },
    "apaGetMembersList": function (_idx) {
        return (_idx === 0 ? '{"errorCode" :"0", "list":' + JSON.stringify(telemouv.getMembers()) + '}' : nope(_idx));
    },
    "apaGetMemberStats": function (_idx) {
        return nope(_idx);
    },
    "apaAddMemberToSeance": function (_idx) {
        return nope(_idx);
    },
    "apaDeleteMemberFromSeance": function (_idx) {
        return nope(_idx);
    },
    "apaDeleteSeance": function (_idx) {
        return nope(_idx);
    },
    "apaGetSeanceData": function (_idx) {
        return (_idx === 0 ? JSON.stringify(telemouv.getSeance()) : nope(_idx));
    },
    "apaGetTimeline": function (_idx) {
        return (_idx === 0 ? JSON.stringify(telemouv.getTimeLine()) : nope(_idx));
    },
    "apaCreateSeance": function (_idx) {
        return (_idx === 0 ? '{"errorCode" :"0", "seanceId":"' + telemouv.getSeance().seanceId + '"}' : nope(_idx));
    },
    "apaGetInfo": function (_idx) {
        return (_idx === 0 ? JSON.stringify(telemouv.getProfil()) : nope(_idx));
    }
};

exports.getResponse = function (_is_ok, _function, _idx) {
    if (_is_ok && (typeof responses[_function] !== "undefined")) {
        return (responses[_function])(_idx);
    } else {
        return nope(2);
    }
    return null;
};
