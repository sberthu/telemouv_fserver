'use strict';

var sessions = [];
var curSession = null;
/***********************************************/
function getRandomElement(_array) {
    var _nb_Max = _array.length;
    var _idx = (Math.floor(Math.random() * (_nb_Max * 10))) % _nb_Max;
    return _array[_idx];
}
function makeid(_nbcars)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < _nbcars; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
/***********************************************/
var profils = [
    {
        id: 100,
        login: "login",
        password: "password",
        firstname: "Gérard",
        name: "Menvu",
        age: 59,
        town: "Montpellier",
        pathologies: ["Rhume des foins", "Rate dilatée"],
        photolink: "http://fr.web.img5.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/07/27/15/04/271855.jpg"
    },
    {
        id: 101,
        login: "melody",
        password: "sa",
        firstname: "Marco di Paulo",
        name: "Roberto dè Santa Cluch'",
        age: 72,
        town: "Saint Clément des rivières (Hérault)",
        pathologies: ["dyslalie", "Climatoséptique"],
        photolink: "http://fr.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/medias/nmedia/18/35/93/48/18436581.jpg"
    }

];
var profil = getRandomElement(profils);
/************************************************/
var dashboards = [
    {
        seanceId: 0,
        seanceType: "individuelle",
        seanceLocation: "Parc des princes - Paris",
        seancePatient: [
            {
                id: 10,
                lien: "",
                photo: "http://fr.web.img6.acsta.net/cx_160_213/b_1_d6d6d6/pictures/16/05/13/12/48/215343.jpg"
            }
        ],
        seanceDate: "2016-12-05 09:30"
    },
    {
        seanceId: 1,
        seanceType: "Collective",
        seanceLocation: "CHU - Salle des sports",
        seancePatient: [
            {
                id: 11,
                lien: "",
                photo: "http://fr.web.img4.acsta.net/cx_160_213/b_1_d6d6d6/pictures/16/05/20/12/52/423680.jpg"
            },
            {
                id: 12,
                lien: "",
                photo: "http://fr.web.img5.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/09/09/09/32/311995.jpg"
            },
            {
                id: 13,
                lien: "",
                photo: "http://fr.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/medias/nmedia/18/35/35/02/19481413.jpg"
            },
            {
                id: 14,
                lien: "",
                photo: "http://fr.web.img6.acsta.net/cx_160_213/b_1_d6d6d6/pictures/16/05/13/12/48/215343.jpg"
            },
            {
                id: 15,
                lien: "",
                photo: "http://fr.web.img4.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/07/08/10/41/559250.jpg"
            }
        ],
        seanceDate: "2016-12-21 10:30"
    }
];
var dashboard = getRandomElement(dashboards);
/************************************************/
var members = [
    {
        id: 11,
        firstName: "Willem",
        name: "Dafoe",
        age: 61,
        town: "Appleton",
        pathology: ["cirrhose"],
        photoLink: "http://fr.web.img4.acsta.net/cx_160_213/b_1_d6d6d6/pictures/16/05/20/12/52/423680.jpg"
    },
    {
        id: 12,
        firstName: "Ralph",
        name: "Fiennes",
        age: 53,
        town: "Ipswich",
        pathology: ["cancer de la prostate"],
        photoLink: "http://fr.web.img5.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/09/09/09/32/311995.jpg"
    },
    {
        id: 13,
        firstName: "Kristin",
        name: "Scott Thomas",
        age: 56,
        town: "Redruth",
        pathology: ["Rhinite"],
        photoLink: "http://fr.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/medias/nmedia/18/35/35/02/19481413.jpg"
    },
    {
        id: 14,
        firstName: "Juliette",
        name: "Binoche",
        age: 52,
        town: "Paris",
        pathology: ["Rigolomanie"],
        photoLink: "http://fr.web.img6.acsta.net/cx_160_213/b_1_d6d6d6/pictures/16/05/13/12/48/215343.jpg"
    },
    {
        id: 15,
        firstName: "Julie",
        name: "Delpy",
        age: 46,
        town: "Paris",
        pathology: ["Viellesse"],
        photoLink: "http://fr.web.img4.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/07/08/10/41/559250.jpg"
    }

];
var member = getRandomElement(members);
/************************************************/
var seances = [
    {
        seanceId: 0,
        seanceLocationLabel: "Grande Salle des sports de Bretage",
        seanceLocationAddress: "18 rue des lilas",
        seanceLocationTown: "Nantes",
        seanceLocationPhoneNumber: "01-25-13-45-65",
        seanceLocationLat: "47.2172500",
        seanceLocationLon: "-1.5533600",
        seanceType: 1,
        seanceDateTime: "2016-12-24 08:30",
        seanceSpecificities: [],
        seanceGender: 'N',
        seanceAgeRange: '0-99',
        seanceMaxParticipants: 3,
        seanceActivity: "Baby Foot",
        seanceParticipants: [
            {
                memberId: 11,
                memberFirstName: "Willem",
                memberName: "Dafoe"
            },
            {
                memberId: 15,
                memberFirstName: "Julie",
                memberName: "Delpy"
            }
        ],
        seanceDuration: 30
    }
];
var seance = getRandomElement(seances);
/************************************************/
var timeLines = [
    {
        seanceId: 0,
        seanceDate: "2016-12-24 08:30",
        seanceType: 1,
        seanceLocationLabel: "Grande Salle des sports de Bretage",
        seanceDuration: 30,
        seanceParticipants: [
            {
                memberId: 11,
                memberFirstName: "Willem",
                memberName: "Dafoe"
            },
            {
                memberId: 15,
                memberFirstName: "Julie",
                memberName: "Delpy"
            }
        ]
    }
];
var timeLine = getRandomElement(timeLines);
/************************************************/
function createReponse(_value) {
    if (typeof _value === "object" && _value !== null) {
        _value.errorCode = "0";
    } else {
        _value = {
            errorCode: "1"
        };
    }
    return _value;
}
function createSession() {
    curSession = {
        apaId: null,
        token: null,
        profil: profil,
        member: null,
        dashboard: dashboard,
        seance: seance,
        timeLine: timeLine
    };
}
exports.createApaId = function () {
    curSession.apaId = makeid(10);    
    sessions.push(curSession);
    if (sessions.length > 20) {
        sessions.slice(0, 1);
    }
    return curSession.apaId;
};
exports.getapaId = function () {
    return curSession.apaId;
};
exports.createToken = function () {
    curSession.token = makeid(16);
    return curSession.token;
};
exports.getToken = function () {
    return curSession.token;
};
exports.checkLogin = function (_login) {
    var _found = false;
    var _profil = profils.find(function (e) {
        return e.login === _login;
    });
    if (_profil) {
        curSession.profil = _profil;
        _found = true;
    }
    return _found;
};
exports.checkPassword = function (_password) {
    return (_password === curSession.profil.password);
};
exports.checkApaId = function (_apaId) {
    var _found = true;
    if (_apaId !== curSession.apaId) {
        var _session = sessions.find(function(s) {
            return s.apaId === _apaId;
        });
        _found = (typeof _session === "object");
    }
    return _found;
};
exports.checkToken = function (_token) {
    return (_token === curSession.token);
};
exports.getDashBoard = function () {
    return createReponse(curSession.dashboard);
};
exports.checkMember = function (_idMember) {
    var _found = false;
    var _member = members.find(function (e) {
        return (e.id+"") === (_idMember)+"";
    });
    if (_member) {
        curSession.member = _member;
        _found = true;
    }
    return _found;
};
exports.getMember = function () {
    return createReponse(curSession.member);
};
exports.getMembers = function () {
    return createReponse(members);
};
exports.getProfil = function () {
    return createReponse(curSession.profil);
};
exports.checkSeance = function (_idSeance) {
    var _found = false;
    var _seance = seances.find(function (e) {
        return e.seanceId === _idSeance;
    });
    if (_seance) {
        curSession.seance = _seance;
        _found = true;
    }
    return _found;
};
exports.getSeance = function () {
    return createReponse(curSession.seance);
};
exports.getTimeLine = function () {
    return createReponse(curSession.timeLine);
};
createSession();
