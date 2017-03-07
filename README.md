 FakeServerTelemouv
====================

Un serveur HTTP ou HTTPS servant les webservices proposés par Télémouv.
voici les services gérés dans cette version :

	apaLogin
    apaRegisterApa
	apaSetInfo
	apaGetDashboard
	apaGetLastActivities
	apaGetMemberInfo
	apaGetMembersList
	apaGetMemberStats
	apaAddMemberToSeance
	apaDeleteMemberFromSeance
	apaDeleteSeance
	apaGetSeanceData
	apaGetTimeline
	apaCreateSeance
	apaGetInfo
	apaSearchMember

## Installation

Télécharger nodejs : https://nodejs.org/en/
Installer nodejs.
Télécharger et Installer le package : npm install https://github.com/sberthu/telemouv_fserver.git
ou 
Séparément : 
git clone https://github.com/sberthu/telemouv_fserver.git
npm install --save


## Usage

>run_dev.bat pour un usage en HTTP
>run_prod.bat pour un usage en HTTPS

## tests

Les tests ont été effectués avec PostMan dans le répertoire /TESTS

## Contributing

Ne pas oublier de mettre à jour les tests après modifications.

## Release history

* 1.0.3 Add TESTS PostMan
* 1.0.4 Add apaSearchMember and complete apaGetMemberStats




