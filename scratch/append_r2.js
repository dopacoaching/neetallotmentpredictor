const fs = require('fs');
const path = require('path');

const newData = `510 1361 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
511 1362 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
512 1376 All India Nair Dental College
and Hospital, Mumbai
PERIODONTOLOGY Reported - - - - - - No
Upgradation
513 1384 All India Nair Dental College
and Hospital, Mumbai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
514 1389 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
515 1390 Banaras
Hindu
University
Institute of Medical
Science, BHU,
Varanasi
PUBLIC HEALTH
DENTISTRY
Reported - - - - - - No
Upgradation
516 1398 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
517 1402 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
518 1404 All India Government Dental
College and Hospital,
Patiala
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported All India Government Dental
College and Hospital,
Nagpur , DEAN,
GOVT. DENTAL
COLLEGE AND
HOSPITAL,
MEDICAL COLLEGE
PREMISES,
MEDICAL SQUARE,
NAGPUR,
Maharashtra, 440003
ORAL AND
MAXILLOFACIAL
SURGERY
ST ST 1 Upgraded
519 1406 All India Govt. Dental College
and Hospital,
Jamnagar
PERIODONTOLOGY Not
Reported
All India Government Dental
College and Hospital,
Vijayawada ,
GOVERNMENT
DENTAL COLLEGE
AND HOSPITAL,
GUNADALA,
VIJAYAWADA - 520
004, Andhra Pradesh,
520004
ORAL AND
MAXILLOFACIAL
SURGERY
SC SC 58 Fresh Allotted
in 2nd Round
520 1429 All India Government Dental
College, Kottayam
PERIODONTOLOGY Reported - - - - - - No
Upgradation
521 1441 All India Government Dental
College and Hospital,
Patiala
PERIODONTOLOGY Not
Reported
- - - - - - Did not fill up
fresh choices.
522 1443 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
523 1447 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
524 1455 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
525 1463 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Not Allotted.
526 1482 All India Govt dental College
Raipur Chhattisgarh
PERIODONTOLOGY Reported All India Institute of Medical
Science, BHU,
Varanasi ,
INSTITUTE OF
MEDICAL
SCIENCES,
BANARAS HINDU
UNIVERSITY,
VARANASI, Uttar
Pradesh, 221005
PERIODONTOLOGY SC SC 55 Upgraded
527 1485 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
528 1487 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
529 1491 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
530 1492 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
531 1511 All India Mahatma Gandhi PG
Institute of Dental
Sciences, Puducherry
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported All India Government of Dental
College and Hospital
Jaipur , Near T.B.
Hospital, Subhash
Nagar, Jaipur,
Rajasthan, 302016
PEDIATRIC AND
PREVENTIVE
DENTISTRY
SC SC 13 Upgraded
532 1531 All India Goa Dental College
and Hospital, Goa
PERIODONTOLOGY Reported - - - - - - No
Upgradation
533 1532 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
534 1534 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
535 1544 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
536 1545 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
537 1558 - - - - All India Government Dental
College and Hospital,
Aurangabad , Govt.
Medical College and
Hospital Campus,
DhanwantariNagar
Ghati,Chha.
Sambhajinagar
Aurangabad,
Maharashtra, 431001
ORAL MEDICINE
AND RADIOLOGY
SC SC 18 Fresh Allotted
in 2nd Round
538 1567 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
539 1569 Manageme
nt/Paid
Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
540 1573 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
541 1575 All India Government Dental
College,
Thiruvananthapuram
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
542 1583 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
543 1588 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
544 1593 - - - - Management/
Paid Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune ,
Bharati Vidyapeeth
DU Dental College
and Hospital, Pune –
Satara Road,
Dhankwadi,
Pune.411043,
Maharashtra, 411043
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 19 Fresh Allotted
in 2nd Round
545 1608 All India RIMS, Government
Dental College and
Hospital, Kadapa
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
- - - - - - Not Allotted.
546 1611 All India Government Dental
College and
Research Institute,
Bangalore
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Seat
Surrendered
- - - - - - Not Allotted.
547 1614 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
548 1617 All India Dr. R. Ahmed Dental
College and Hospital,
Kolkata
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - No
Upgradation
549 1626 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
550 1628 All India Faculty of Dental
Sciences, KGMU,
Lucknow
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not fill up
fresh choices.
551 1629 All India Government Dental
College, Kottayam
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported All India Government Dental
College and Hospital,
Patiala , Govt. Dental
College and Hospital,
Patiala, Punjab,
147001
PROSTHODONTICS
AND CROWN AND
BRIDGE
ST ST 6 Upgraded
552 1632 All India Institute of Medical
Science, BHU,
Varanasi
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
All India Govt. Dental College
and Hospital,
Jamnagar , NEAR
T.B. HOSPITAL,
NAVAGAM GHED,
JAMNAGAR, Gujarat,
361008
PERIODONTOLOGY SC SC 97 Fresh Allotted
in 2nd Round
553 1638 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not fill up
fresh choices.
554 1639 All India S.C.B Dental College
and Hospital, Cuttack
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
All India Mahatma Gandhi PG
Institute of Dental
Sciences, Puducherry
, GOVT OF
PUDUCHERRY
INSTITUTION
INDIRA NAGAR,
GORIMEDU,
PONDICHERRY,
Puducherry, 605006
PEDIATRIC AND
PREVENTIVE
DENTISTRY
SC SC 19 Fresh Allotted
in 2nd Round
555 1648 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
556 1666 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
557 1671 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
558 1679 All India Goa Dental College
and Hospital, Goa
PERIODONTOLOGY Not
Reported
- - - - - - Did not fill up
fresh choices.
559 1688 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
560 1695 All India Government Dental
College and Hospital,
Aurangabad
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
- - - - - - Did not fill up
fresh choices.
561 1702 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
562 1707 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
563 1712 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
564 1718 - - - - Management/
Paid Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai ,
Alapakkam Main
Road Maduravoyal
Chennai Tamil Nadu,
Tamil Nadu, 600095
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 2 Fresh Allotted
in 2nd Round
565 1722 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
566 1727 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
567 1733 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Did not fill up
fresh choices.
568 1768 All India Dr. R. Ahmed Dental
College and Hospital,
Kolkata
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
569 1779 All India Government of Dental
College and Hospital
Jaipur
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
All India RIMS, Government
Dental College and
Hospital, Kadapa ,
PRINICIPAL GOVT
DENTAL COLLEGE
and HOSPITAL,
RIMS, PUTLAMPALLI
KADAPA, Andhra
Pradesh, 516004
PERIODONTOLOGY SC SC 78 Fresh Allotted
in 2nd Round
570 1782 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
571 1789 All India Govt dental College
Raipur Chhattisgarh
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
572 1801 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
573 1802 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
574 1806 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
575 1810 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
576 1812 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
577 1817 - - - - All India Govt dental College
Raipur Chhattisgarh ,
Near Marhi Mata
Mandir, Rajbandha
Maidan, Raipur
492001, Chhattisgarh,
492001
PERIODONTOLOGY SC SC 117 Fresh Allotted
in 2nd Round
578 1820 - - - - Management/
Paid Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
, KLE Vishwanath
Katti Institute of
Dental Sciences, J.N.
Medical College
Campus, Nehru
Nagar,Belagavi,
Karnataka, 590010
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 15 Fresh Allotted
in 2nd Round
579 1831 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Not Allotted.
580 1840 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
581 1842 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
582 1845 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
583 1849 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
584 1850 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
PROSTHODONTICS
AND CROWN AND
BRIDGE
Seat
Surrendered
- - - - - - Did not fill up
fresh choices.
585 1854 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORAL AND
MAXILLOFACIAL
SURGERY
Reported Management/
Paid Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru , DIST.
DAKSHINA
KANNADA, POST
DERALAKATTE,
MANGALORE,
Karnataka, 575018
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 14 Upgraded
586 1868 All India S.C.B Dental College
and Hospital, Cuttack
PUBLIC HEALTH
DENTISTRY
Not
Reported
- - - - - - Did not fill up
fresh choices.
587 1869 Banaras
Hindu
University
Institute of Medical
Science, BHU,
Varanasi
ORAL MEDICINE
AND RADIOLOGY
Reported - - - - - - No
Upgradation
588 1882 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not fill up
fresh choices.
589 1907 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar , K8
Kalinga Nagar PO
Mahalaxmi Vihar
Bhubaneswar,
Odisha, 751029
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 4 Fresh Allotted
in 2nd Round
590 1914 - - - - Management/
Paid Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar ,
CAMPUS-5
KUSHABHADRA
CAMPUS P.O-KIIT
BHUBANESWAR
ODISHA, Odisha,
751024
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 1 Fresh Allotted
in 2nd Round
591 1917 - - - - Management/
Paid Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
, KLE Vishwanath
Katti Institute of
Dental Sciences, J.N.
Medical College
Campus, Nehru
Nagar,Belagavi,
Karnataka, 590010
ORAL AND
MAXILLOFACIAL
SURGERY
Open EWS 1 Fresh Allotted
in 2nd Round
592 1926 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
593 1931 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Did not fill up
fresh choices.
594 1937 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
595 1956 All India Indira Gandhi Govt.
Dental College,
Jammu
PUBLIC HEALTH
DENTISTRY
Not
Reported
- - - - - - Not Allotted.
596 1977 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
597 2009 All India Dr. R. Ahmed Dental
College and Hospital,
Kolkata
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Not
Reported
- - - - - - Did not fill up
fresh choices.
598 2019 - - - - All India Govt. Dental College
& Hospital, Srinagar ,
Shireen Bagh Karan
Nagar Srinagar,
Jammu And Kashmir,
190010
PERIODONTOLOGY SC SC 27 Fresh Allotted
in 2nd Round
599 2023 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
600 2038 All India Indira Gandhi Govt.
Dental College,
Jammu
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Reported All India Government Dental
College and Hospital,
Patiala , Govt. Dental
College and Hospital,
Patiala, Punjab,
147001
PERIODONTOLOGY SC SC 68 Upgraded
601 2047 - - - - All India Government Dental
College and Hospital,
Shimla , H P
GOVERNMENT
DENTAL COLLEGE
HOSPITAL IGMC
SHIMLA, Himachal
Pradesh, 171001
PERIODONTOLOGY SC SC 65 Fresh Allotted
in 2nd Round
602 2054 - - - - All India Institute of Medical
Science, BHU,
Varanasi ,
INSTITUTE OF
MEDICAL
SCIENCES,
BANARAS HINDU
UNIVERSITY,
VARANASI, Uttar
Pradesh, 221005
ORAL MEDICINE
AND RADIOLOGY
SC SC 7 Fresh Allotted
in 2nd Round
603 2058 Manageme
nt/Paid
Seats
Quota
MANAV RACHNA
DENTAL COLLEGE
FARIDABAD
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - No
Upgradation
604 2064 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
605 2074 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
606 2089 All India Post Graduate
Institute of Dental
Sciences, Rohtak
PERIODONTOLOGY Reported - - - - - - Did not fill up
fresh choices.
607 2101 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
608 2107 - - - - All India S.C.B Dental College
and Hospital, Cuttack
, MANGALABAG,
CUTTACK, ODISHA,
INDIA, Odisha,
753007
ORAL MEDICINE
AND RADIOLOGY
SC SC 119 Fresh Allotted
in 2nd Round
609 2113 All India Govt. Dental College
and Hospital,
Cuddalore Dt
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
All India Government Dental
College, Kottayam ,
Government Dental
College
Gandhinagar P.O
Kottayam
Kerala, Kerala,
686008
PROSTHODONTICS
AND CROWN AND
BRIDGE
ST ST 3 Fresh Allotted
in 2nd Round
610 2119 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
611 2123 - - - - All India Dr. R. Ahmed Dental
College and Hospital,
Kolkata , 114 AJC
BOSE RD, West
Bengal, 700014
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
SC SC 11 Fresh Allotted
in 2nd Round
612 2131 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Reported Management/
Paid Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
, KLE Vishwanath
Katti Institute of
Dental Sciences, J.N.
Medical College
Campus, Nehru
Nagar,Belagavi,
Karnataka, 590010
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 12 Upgraded
613 2132 - - - - All India S.C.B Dental College
and Hospital, Cuttack
, MANGALABAG,
CUTTACK, ODISHA,
INDIA, Odisha,
753007
PUBLIC HEALTH
DENTISTRY
SC SC 40 Fresh Allotted
in 2nd Round
614 2136 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
615 2158 - - - - All India RIMS, Government
Dental College and
Hospital, Kadapa ,
PRINICIPAL GOVT
DENTAL COLLEGE
and HOSPITAL,
RIMS, PUTLAMPALLI
KADAPA, Andhra
Pradesh, 516004
ORAL MEDICINE
AND RADIOLOGY
SC SC 49 Fresh Allotted
in 2nd Round
616 2173 - - - - All India Government of Dental
College and Hospital
Jaipur , Near T.B.
Hospital, Subhash
Nagar, Jaipur,
Rajasthan, 302016
ORAL MEDICINE
AND RADIOLOGY
SC SC 39 Fresh Allotted
in 2nd Round
617 2176 - - - - Management/
Paid Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune ,
Bharati Vidyapeeth
DU Dental College
and Hospital, Pune –
Satara Road,
Dhankwadi,
Pune.411043,
Maharashtra, 411043
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 20 Fresh Allotted
in 2nd Round
618 2184 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
619 2199 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Sangli
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
620 2201 Delhi
University
Quota
Maulana Azad
Institute and Dental
Science, New Delhi
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
621 2210 - - - - All India Government Dental
College and Hospital,
Shimla , H P
GOVERNMENT
DENTAL COLLEGE
HOSPITAL IGMC
SHIMLA, Himachal
Pradesh, 171001
ORAL MEDICINE
AND RADIOLOGY
SC SC 142 Fresh Allotted
in 2nd Round
622 2216 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
623 2221 Banaras
Hindu
University
Institute of Medical
Science, BHU,
Varanasi
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
624 2222 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
625 2224 All India S.C.B Dental College
and Hospital, Cuttack
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
626 2233 All India RIMS, Government
Dental College and
Hospital, Kadapa
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported All India Govt. Dental College
& Hospital, Srinagar ,
Shireen Bagh Karan
Nagar Srinagar,
Jammu And Kashmir,
190010
ORAL AND
MAXILLOFACIAL
SURGERY
ST ST 2 Upgraded
627 2236 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not fill up
fresh choices.
628 2239 All India Government of Dental
College and Hospital
Jaipur
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
- - - - - - Not Allotted.
629 2252 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Sangli
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
630 2257 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
631 2261 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
632 2268 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Not Allotted.
633 2277 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
- - - - - - Did not fill up
fresh choices.
634 2281 - - - - Management/
Paid Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar ,
CAMPUS-5
KUSHABHADRA
CAMPUS P.O-KIIT
BHUBANESWAR
ODISHA, Odisha,
751024
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 31 Fresh Allotted
in 2nd Round
635 2287 All India Government Dental
College, Chennai
PERIODONTOLOGY Reported - - - - - - No
Upgradation
636 2291 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Not Allotted.
637 2307 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
638 2319 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
639 2323 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
640 2328 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
641 2331 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
642 2341 - - - - All India Indira Gandhi Govt.
Dental College,
Jammu , Rehari
Chungi Jammu,
Jammu And Kashmir,
180005
PUBLIC HEALTH
DENTISTRY
SC SC 157 Fresh Allotted
in 2nd Round
643 2373 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
, KLE Vishwanath
Katti Institute of
Dental Sciences, J.N.
Medical College
Campus, Nehru
Nagar,Belagavi,
Karnataka, 590010
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 2 Upgraded
644 2391 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
645 2402 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
646 2406 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
647 2422 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
Rural Dental College,
Loni , Rural Dental
College, Loni, Near
Shirdi,
At-Loni Bk., Tal-
Rahata,
Dist-Ahmednagar,
Maharashtra, 413736
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open OBC 1 Upgraded
648 2425 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
649 2435 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Sangli
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
650 2454 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
651 2456 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Not Allotted.
652 2460 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
653 2461 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
654 2462 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
655 2475 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
656 2482 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
657 2501 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
658 2504 - - - - Management/
Paid Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune , Sant Tukaram
Nagar, Pimpri, Pune,
Maharashtra, 411018
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 2 Fresh Allotted
in 2nd Round
659 2505 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
660 2509 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
661 2528 - - - - Management/
Paid Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha , Sawangi
Meghe Wardha
INDIA, Maharashtra,
442107
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 2 Fresh Allotted
in 2nd Round
662 2534 Muslim
Minority
Quota
Yenepoya Dental
College, Yenepoya
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Did not fill up
fresh choices.
663 2539 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not fill up
fresh choices.
664 2545 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
665 2546 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
666 2558 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
667 2570 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
668 2587 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
669 2589 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
670 2596 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Seat
Surrendered
- - - - - - Did not fill up
fresh choices.
671 2603 - - - - All India Government Dental
College and
Research Institute,
Bangalore , Victoria
Hospital Campus,
Fort, Bengaluru,
Karnataka, 560002
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
SC SC 10 Fresh Allotted
in 2nd Round
672 2610 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PUBLIC HEALTH
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
673 2615 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
674 2620 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
675 2621 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
676 2623 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
677 2646 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
Management/
Paid Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur , SRI
SIDDHARTHA
DENTAL COLLEGE
& HOSPITAL
AGALAKOTE B H
ROAD TUMKUR,
Karnataka, 572107
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open OBC 3 Fresh Allotted
in 2nd Round
678 2652 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
679 2671 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Seat
Surrendered
Management/
Paid Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar ,
CAMPUS-5
KUSHABHADRA
CAMPUS P.O-KIIT
BHUBANESWAR
ODISHA, Odisha,
751024
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 5 Fresh Allotted
in 2nd Round
680 2676 All India Mahatma Gandhi PG
Institute of Dental
Sciences, Puducherry
PERIODONTOLOGY Reported All India RIMS, Government
Dental College and
Hospital, Kadapa ,
PRINICIPAL GOVT
DENTAL COLLEGE
and HOSPITAL,
RIMS, PUTLAMPALLI
KADAPA, Andhra
Pradesh, 516004
PROSTHODONTICS
AND CROWN AND
BRIDGE
ST ST 2 Upgraded
681 2681 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
682 2683 - - - - All India Indira Gandhi Govt.
Dental College,
Jammu , Rehari
Chungi Jammu,
Jammu And Kashmir,
180005
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
SC SC 37 Fresh Allotted
in 2nd Round
683 2684 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
684 2699 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
685 2706 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
686 2745 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
687 2747 All India Govt. Dental College
and Hospital,
Jamnagar
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
All India Govt. Dental College
and Hospital,
Jamnagar , NEAR
T.B. HOSPITAL,
NAVAGAM GHED,
JAMNAGAR, Gujarat,
361008
ORAL MEDICINE
AND RADIOLOGY
ST ST 8 Fresh Allotted
in 2nd Round
688 2787 All India Government Dental
College Hospital,
Hyderabad
PUBLIC HEALTH
DENTISTRY
Reported All India Govt. Dental College
and Hospital,
Cuddalore Dt , Govt.
Dental College and
Hospital, Cuddalore
Dt
Erstwhile Rajah
Muthiah Dental
College and Hospital,
Tamil Nadu, 608002
ORAL AND
MAXILLOFACIAL
SURGERY
ST ST 2 Upgraded
689 2789 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
690 2791 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
691 2795 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Seat
Surrendered
Management/
Paid Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune ,
Bharati Vidyapeeth
DU Dental College
and Hospital, Pune –
Satara Road,
Dhankwadi,
Pune.411043,
Maharashtra, 411043
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open EWS 69 Fresh Allotted
in 2nd Round
692 2801 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Sangli
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
693 2802 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Not Allotted.
694 2804 All India Indira Gandhi Govt.
Dental College,
Jammu
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Not Allotted.
695 2808 All India RIMS, Government
Dental College and
Hospital, Kadapa
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Not
Reported
All India Goa Dental College
and Hospital, Goa ,
Bambolim, Goa, Goa,
403202
PERIODONTOLOGY ST ST 8 Fresh Allotted
in 2nd Round
696 2829 Jain
Minority
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
697 2840 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
698 2847 - - - - All India Government of Dental
College and Hospital
Jaipur , Near T.B.
Hospital, Subhash
Nagar, Jaipur,
Rajasthan, 302016
PEDIATRIC AND
PREVENTIVE
DENTISTRY
ST ST 87 Fresh Allotted
in 2nd Round
699 2848 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
700 2850 - - - - All India Govt. Dental College
& Hospital, Srinagar ,
Shireen Bagh Karan
Nagar Srinagar,
Jammu And Kashmir,
190010
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
SC SC 47 Fresh Allotted
in 2nd Round
701 2859 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
702 2864 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
Management/
Paid Seats
Quota
Manipal College of
Dental Sce., Manipal ,
Madhav Nagar,
Manipal India,
Karnataka, 576104
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 2 Fresh Allotted
in 2nd Round
703 2895 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
SRM Dental College,
Chennai , SRM
DENTAL COLLEGE,
BHARATHI SALAI,
RAMAPURAM,
CHENNAI, Tamil
Nadu, 600089
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 4 Fresh Allotted
in 2nd Round
704 2900 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
705 2915 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
706 2919 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
707 2923 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
708 2931 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
709 2932 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
710 2939 Delhi
University
Quota
Maulana Azad
Institute and Dental
Science, New Delhi
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Reported - - - - - - Did not opt
for
Upgradation.
711 2943 Banaras
Hindu
University
Institute of Medical
Science, BHU,
Varanasi
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Not
Reported
Banaras
Hindu
University
Institute of Medical
Science, BHU,
Varanasi ,
INSTITUTE OF
MEDICAL
SCIENCES,
BANARAS HINDU
UNIVERSITY,
VARANASI, Uttar
Pradesh, 221005
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
OBC OBC 5 Fresh Allotted
in 2nd Round
712 2949 - - - - Management/
Paid Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad ,
Karad, Dist. Satara
(Maharashtra State),
Karad, Maharashtra,
415110
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open EWS 62 Fresh Allotted
in 2nd Round
713 2955 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
714 2971 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
Management/
Paid Seats
Quota
JSS Dental College
and Hospital, Mysuru
, JSS Medical
Institutions Campus
Sri
Shivarathreeshwara
nagara Bannimantap
Mysuru, Karnataka,
570015
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 2 Fresh Allotted
in 2nd Round
715 2992 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Did not fill up
fresh choices.
716 2996 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not fill up
fresh choices.
717 2998 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not fill up
fresh choices.
718 3011 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Sangli
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
719 3015 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
720 3020 - - - - Management/
Paid Seats
Quota
Saveetha Dental
College, Chennai ,
Saveetha Dental
College and
Hospitals,Poonamalle
e high road,
Velappanchavadi
Chennai, Tamil Nadu,
600077
ORAL MEDICINE
AND RADIOLOGY
Open OBC 17 Fresh Allotted
in 2nd Round
721 3024 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
722 3026 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
723 3027 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
724 3041 Manageme
nt/Paid
Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
725 3042 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
726 3048 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
727 3058 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
728 3059 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
729 3080 All India Government College
of Dentistry, Indore
PUBLIC HEALTH
DENTISTRY
Reported - - - - - - No
Upgradation
730 3081 - - - - Management/
Paid Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
, KLE Vishwanath
Katti Institute of
Dental Sciences, J.N.
Medical College
Campus, Nehru
Nagar,Belagavi,
Karnataka, 590010
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 8 Fresh Allotted
in 2nd Round
731 3092 Manageme
nt/Paid
Seats
Quota
Malla Reddy Institute
of Dental sciences,
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
732 3107 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad ,
Karad, Dist. Satara
(Maharashtra State),
Karad, Maharashtra,
415110
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open OBC 1 Fresh Allotted
in 2nd Round
733 3109 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
- - - - - - Did not fill up
fresh choices.
734 3118 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Not Allotted.
735 3139 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
736 3151 - - - - Management/
Paid Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha , Sawangi
Meghe Wardha
INDIA, Maharashtra,
442107
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 20 Fresh Allotted
in 2nd Round
737 3168 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
Management/
Paid Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru , DIST.
DAKSHINA
KANNADA, POST
DERALAKATTE,
MANGALORE,
Karnataka, 575018
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open General 42 Fresh Allotted
in 2nd Round
738 3172 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
739 3190 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
740 3193 - - - - Management/
Paid Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar ,
CAMPUS-5
KUSHABHADRA
CAMPUS P.O-KIIT
BHUBANESWAR
ODISHA, Odisha,
751024
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open EWS 1 Fresh Allotted
in 2nd Round
741 3196 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
742 3204 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
743 3209 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Not Allotted.
744 3211 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha , Sawangi
Meghe Wardha
INDIA, Maharashtra,
442107
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open OBC 46 Fresh Allotted
in 2nd Round
745 3221 - - - - Management/
Paid Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar , K8
Kalinga Nagar PO
Mahalaxmi Vihar
Bhubaneswar,
Odisha, 751029
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open OBC 123 Fresh Allotted
in 2nd Round
746 3238 All India Government College
of Dentistry, Indore
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Not
Reported
- - - - - - Not Allotted.
747 3250 Manageme
nt/Paid
Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
748 3257 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Did not fill up
fresh choices.
749 3259 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
750 3274 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
751 3286 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
752 3298 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
753 3302 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not fill up
fresh choices.
754 3318 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
755 3323 Manageme
nt/Paid
Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
756 3327 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
757 3338 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
Management/
Paid Seats
Quota
Yenepoya Dental
College, Yenepoya ,
University Road,
Deralakatte,
Mangaluru,
Karnataka, 575018
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 5 Fresh Allotted
in 2nd Round
758 3353 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
759 3359 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Reported - - - - - - Did not opt
for
Upgradation.
760 3365 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
761 3373 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
762 3376 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
763 3381 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
764 3385 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
765 3393 - - - - Management/
Paid Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
, KLE Vishwanath
Katti Institute of
Dental Sciences, J.N.
Medical College
Campus, Nehru
Nagar,Belagavi,
Karnataka, 590010
ORAL MEDICINE
AND RADIOLOGY
Open General 142 Fresh Allotted
in 2nd Round
766 3400 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Seat
Surrendered
- - - - - - Did not fill up
fresh choices.
767 3421 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
768 3428 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
769 3431 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
770 3432 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Reported - - - - - - Did not opt
for
Upgradation.
771 3434 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
772 3436 Manageme
nt/Paid
Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
773 3439 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORAL MEDICINE
AND RADIOLOGY
Reported - - - - - - No
Upgradation
774 3443 - - - - Management/
Paid Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai , No.1
Ramachandra Nagar,
Porur, Chennai.,
Tamil Nadu, 600116
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open OBC 1 Fresh Allotted
in 2nd Round
775 3451 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported Management/
Paid Seats
Quota
Rural Dental College,
Loni , Rural Dental
College, Loni, Near
Shirdi,
At-Loni Bk., Tal-
Rahata,
Dist-Ahmednagar,
Maharashtra, 413736
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open OBC 5 Upgraded
776 3454 Manageme
nt/Paid
Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
777 3456 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
PUBLIC HEALTH
DENTISTRY
Reported - - - - - - No
Upgradation
778 3460 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
779 3467 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
780 3501 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - No
Upgradation
781 3511 - - - - Management/
Paid Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad ,
Karad, Dist. Satara
(Maharashtra State),
Karad, Maharashtra,
415110
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 3 Fresh Allotted
in 2nd Round
782 3516 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
783 3542 - - - - Management/
Paid Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara ,
Sumandeep
Vidyapeeth
Campus,Piparia Tal -
Waghodiya,
Vadodara, Gujarat,
India, Gujarat,
391760
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open General 1 Fresh Allotted
in 2nd Round
784 3550 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
Management/
Paid Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar ,
CAMPUS-5
KUSHABHADRA
CAMPUS P.O-KIIT
BHUBANESWAR
ODISHA, Odisha,
751024
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 1 Fresh Allotted
in 2nd Round
785 3562 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
786 3565 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not fill up
fresh choices.
787 3570 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
788 3586 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
ORAL AND
MAXILLOFACIAL
SURGERY
Reported Management/
Paid Seats
Quota
Yenepoya Dental
College, Yenepoya ,
University Road,
Deralakatte,
Mangaluru,
Karnataka, 575018
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 8 Upgraded
789 3587 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
790 3595 All India Government Dental
College and
Research Institute,
Bangalore
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
Reported All India Mahatma Gandhi PG
Institute of Dental
Sciences, Puducherry
, GOVT OF
PUDUCHERRY
INSTITUTION
INDIRA NAGAR,
GORIMEDU,
PONDICHERRY,
Puducherry, 605006
PERIODONTOLOGY ST ST 11 Upgraded
791 3596 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
PROSTHODONTICS
AND CROWN AND
BRIDGE
Seat
Surrendered
- - - - - - Not Allotted.
792 3604 Manageme
nt/Paid
Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad ,
Karad, Dist. Satara
(Maharashtra State),
Karad, Maharashtra,
415110
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 4 Fresh Allotted
in 2nd Round
793 3606 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
794 3610 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
795 3611 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported Management/
Paid Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai ,
VELACHERY MAIN
ROAD,
NARAYANAPURAM,
PALLIKARANAI,
CHENNAI-600100,
Tamil Nadu, 600100
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 19 Upgraded
796 3614 - - - - Management/
Paid Seats
Quota
Malla Reddy Dental
College For Women, ,
Suraram X Roads,
Jeedimetla,
Hyderabad,
Telangana,
Telangana, 500055
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 19 Fresh Allotted
in 2nd Round
797 3645 - - - - All India Indira Gandhi Govt.
Dental College,
Jammu , Rehari
Chungi Jammu,
Jammu And Kashmir,
180005
PROSTHODONTICS
AND CROWN AND
BRIDGE
ST ST 3 Fresh Allotted
in 2nd Round
798 3655 Manageme
nt/Paid
Seats
Quota
Malla Reddy Institute
of Dental sciences,
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
799 3698 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
800 3715 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
801 3736 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
802 3740 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
803 3744 - - - - Management/
Paid Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar ,
CAMPUS-5
KUSHABHADRA
CAMPUS P.O-KIIT
BHUBANESWAR
ODISHA, Odisha,
751024
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open OBC 123 Fresh Allotted
in 2nd Round
804 3768 Manageme
nt/Paid
Seats
Quota
Santosh Dentall
College and Hsopital,
Ghaziabad
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
805 3780 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
806 3791 - - - - Management/
Paid Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana , M.M.
COLLEGE OF
DENTAL SCIENCES
AND RESEARCH,
MULLANA, AMBALA,
Haryana, 133207
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 6 Fresh Allotted
in 2nd Round
807 3792 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
808 3818 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Not Allotted.
809 3821 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
- - - - - - Not Allotted.
810 3830 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Seat
Surrendered
- - - - - - Did not fill up
fresh choices.
811 3834 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
812 3842 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
813 3845 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
814 3846 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana , M.M.
COLLEGE OF
DENTAL SCIENCES
AND RESEARCH,
MULLANA, AMBALA,
Haryana, 133207
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 7 Fresh Allotted
in 2nd Round
815 3853 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Seat
Surrendered
- - - - - - Did not fill up
fresh choices.
816 3857 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
817 3862 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported Management/
Paid Seats
Quota
BVDU Dental College
and Hospital, Sangli ,
Sangli Miraj Road
Wanlesswadi Sangli,
Maharashtra, 416414
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open OBC 14 Upgraded
818 3869 Manageme
nt/Paid
Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
819 3885 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
820 3894 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not fill up
fresh choices.
821 3895 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
822 3896 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
823 3916 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
824 3919 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
825 3922 - - - - All India Government Dental
College Hospital,
Hyderabad ,
Government Dental
College, Hyderbad
Afzalgunj,
Hyderabad.,
Telangana, 500012
PUBLIC HEALTH
DENTISTRY
ST ST 124 Fresh Allotted
in 2nd Round
826 3940 - - - - Management/
Paid Seats
Quota
Malla Reddy Institute
of Dental sciences, ,
Suraram X Roads,
Jeedimetla,
Hyderabad,
Telangana, 500055
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 6 Fresh Allotted
in 2nd Round
827 3944 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
828 3952 Muslim
Minority
Quota
Yenepoya Dental
College, Yenepoya
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
829 3976 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
830 3978 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
831 3988 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
832 4009 Manageme
nt/Paid
Seats
Quota
Malla Reddy Institute
of Dental sciences,
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
833 4027 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PUBLIC HEALTH
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
834 4029 - - - - Management/
Paid Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai , Bharati
Vidyapeeth Dental
College and Hospital,
Sec.seven Belapur
Navi Mumbai.,
Maharashtra, 400614
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 1 Fresh Allotted
in 2nd Round
835 4043 Manageme
nt/Paid
Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
836 4046 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
837 4051 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not fill up
fresh choices.
838 4053 Manageme
nt/Paid
Seats
Quota
Indira Gandhi Institute
of Dental Sciences,
SBV, Pondycherry
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
839 4059 Manageme
nt/Paid
Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
840 4062 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
841 4079 - - - - Management/
Paid Seats
Quota
JSS Dental College
and Hospital, Mysuru
, JSS Medical
Institutions Campus
Sri
Shivarathreeshwara
nagara Bannimantap
Mysuru, Karnataka,
570015
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 26 Fresh Allotted
in 2nd Round
842 4081 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
843 4088 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
844 4102 - - - - Management/
Paid Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai , Dr. D.
Y. Patil Vidyanagar,
Sector 7, Nerul, Navi
Mumbai,
Maharashtra, 400706
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 1 Fresh Allotted
in 2nd Round
845 4104 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
846 4109 - - - - All India Government Dental
College and Hospital,
Shimla , H P
GOVERNMENT
DENTAL COLLEGE
HOSPITAL IGMC
SHIMLA, Himachal
Pradesh, 171001
ORAL MEDICINE
AND RADIOLOGY
ST ST 88 Fresh Allotted
in 2nd Round
847 4114 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
848 4141 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
849 4146 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORAL MEDICINE
AND RADIOLOGY
Reported - - - - - - Did not opt
for
Upgradation.
850 4148 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
851 4152 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
- - - - - - Did not fill up
fresh choices.
852 4156 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
853 4166 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur , SRI
SIDDHARTHA
DENTAL COLLEGE
& HOSPITAL
AGALAKOTE B H
ROAD TUMKUR,
Karnataka, 572107
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 8 Fresh Allotted
in 2nd Round
854 4171 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported Management/
Paid Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
, KLE Vishwanath
Katti Institute of
Dental Sciences, J.N.
Medical College
Campus, Nehru
Nagar,Belagavi,
Karnataka, 590010
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open OBC 1 Upgraded
855 4172 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
856 4173 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
857 4188 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
858 4196 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not fill up
fresh choices.
859 4208 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Sangli
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported Management/
Paid Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune ,
Bharati Vidyapeeth
DU Dental College
and Hospital, Pune –
Satara Road,
Dhankwadi,
Pune.411043,
Maharashtra, 411043
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 14 Upgraded
860 4211 Manageme
nt/Paid
Seats
Quota
SRM Katt. Dental
College and Hospt.
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
861 4236 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
862 4240 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
863 4253 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
864 4282 - - - - All India RIMS, Government
Dental College and
Hospital, Kadapa ,
PRINICIPAL GOVT
DENTAL COLLEGE
and HOSPITAL,
RIMS, PUTLAMPALLI
KADAPA, Andhra
Pradesh, 516004
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
ST ST 117 Fresh Allotted
in 2nd Round
865 4292 Manageme
nt/Paid
Seats
Quota
Indira Gandhi Institute
of Dental Sciences,
SBV, Pondycherry
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
866 4296 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Not Allotted.
867 4312 Manageme
nt/Paid
Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
868 4314 Muslim
Minority
Quota
Yenepoya Dental
College, Yenepoya
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
869 4325 - - - - All India Government College
of Dentistry, Indore , 1
Sardar Patel Marg,
Indore, Madhya
Pradesh, 452001
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
ST ST 19 Fresh Allotted
in 2nd Round
870 4328 Manageme
nt/Paid
Seats
Quota
Malla Reddy Dental
College For Women,
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
871 4329 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
Management/
Paid Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha , Sawangi
Meghe Wardha
INDIA, Maharashtra,
442107
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 3 Fresh Allotted
in 2nd Round
872 4333 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
PUBLIC HEALTH
DENTISTRY
Reported - - - - - - No
Upgradation
873 4335 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
874 4342 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PERIODONTOLOGY Reported Management/
Paid Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune ,
Bharati Vidyapeeth
DU Dental College
and Hospital, Pune –
Satara Road,
Dhankwadi,
Pune.411043,
Maharashtra, 411043
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 1 Upgraded
875 4354 Jain
Minority
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
876 4370 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported Management/
Paid Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad ,
Karad, Dist. Satara
(Maharashtra State),
Karad, Maharashtra,
415110
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open EWS 9 Upgraded
877 4375 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
878 4376 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
879 4388 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune , Sant Tukaram
Nagar, Pimpri, Pune,
Maharashtra, 411018
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 2 Upgraded
880 4391 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Sangli
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
881 4395 - - - - Management/
Paid Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai , No.1
Ramachandra Nagar,
Porur, Chennai.,
Tamil Nadu, 600116
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open OBC 201 Fresh Allotted
in 2nd Round
882 4404 - - - - Management/
Paid Seats
Quota
Yenepoya Dental
College, Yenepoya ,
University Road,
Deralakatte,
Mangaluru,
Karnataka, 575018
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open General 13 Fresh Allotted
in 2nd Round
883 4405 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
ORAL MEDICINE
AND RADIOLOGY
Reported - - - - - - Did not opt
for
Upgradation.
884 4411 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
885 4416 - - - - All India Government Dental
College and
Research Institute,
Bangalore , Victoria
Hospital Campus,
Fort, Bengaluru,
Karnataka, 560002
ORAL AND
MAXILLOFACIAL
PATHOLOGY AND
ORAL
MICROBIOLOGY
ST ST 132 Fresh Allotted
in 2nd Round
886 4430 Manageme
nt/Paid
Seats
Quota
JSS Dental College
and Hospital, Mysuru
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
887 4440 Manageme
nt/Paid
Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
888 4443 Manageme
nt/Paid
Seats
Quota
SRM Katt. Dental
College and Hospt.
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
889 4458 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
- - - - - - Not Allotted.
890 4462 Manageme
nt/Paid
Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
891 4465 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
- - - - - - Did not fill up
fresh choices.
892 4484 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Not Allotted.
893 4485 Manageme
nt/Paid
Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
Management/
Paid Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara ,
Sumandeep
Vidyapeeth
Campus,Piparia Tal -
Waghodiya,
Vadodara, Gujarat,
India, Gujarat,
391760
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 9 Fresh Allotted
in 2nd Round
894 4497 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
895 4501 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
896 4511 Manageme
nt/Paid
Seats
Quota
SRM Katt. Dental
College and Hospt.
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
897 4513 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
898 4546 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
- - - - - - Did not fill up
fresh choices.
899 4561 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
900 4565 Manageme
nt/Paid
Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
901 4573 All India Post Graduate
Institute of Dental
Sciences, Rohtak
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
902 4588 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
903 4589 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
904 4592 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
905 4597 - - - - Management/
Paid Seats
Quota
SRM Dental College,
Chennai , SRM
DENTAL COLLEGE,
BHARATHI SALAI,
RAMAPURAM,
CHENNAI, Tamil
Nadu, 600089
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 5 Fresh Allotted
in 2nd Round
906 4598 - - - - Management/
Paid Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune , Sant Tukaram
Nagar, Pimpri, Pune,
Maharashtra, 411018
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 1 Fresh Allotted
in 2nd Round
907 4601 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar , K8
Kalinga Nagar PO
Mahalaxmi Vihar
Bhubaneswar,
Odisha, 751029
PERIODONTOLOGY Open General 11 Fresh Allotted
in 2nd Round
908 4611 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PERIODONTOLOGY Reported - - - - - - No
Upgradation
909 4612 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
910 4613 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PERIODONTOLOGY Reported Management/
Paid Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara ,
Sumandeep
Vidyapeeth
Campus,Piparia Tal -
Waghodiya,
Vadodara, Gujarat,
India, Gujarat,
391760
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 2 Upgraded
911 4617 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported Management/
Paid Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara ,
Sumandeep
Vidyapeeth
Campus,Piparia Tal -
Waghodiya,
Vadodara, Gujarat,
India, Gujarat,
391760
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 4 Upgraded
912 4620 - - - - Management/
Paid Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune ,
Bharati Vidyapeeth
DU Dental College
and Hospital, Pune –
Satara Road,
Dhankwadi,
Pune.411043,
Maharashtra, 411043
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open EWS 6 Fresh Allotted
in 2nd Round
913 4624 - - - - Management/
Paid Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana , M.M.
COLLEGE OF
DENTAL SCIENCES
AND RESEARCH,
MULLANA, AMBALA,
Haryana, 133207
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 7 Fresh Allotted
in 2nd Round
914 4637 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha , Sawangi
Meghe Wardha
INDIA, Maharashtra,
442107
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 12 Upgraded
915 4641 Manageme
nt/Paid
Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported Management/
Paid Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune ,
Bharati Vidyapeeth
DU Dental College
and Hospital, Pune –
Satara Road,
Dhankwadi,
Pune.411043,
Maharashtra, 411043
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 1 Upgraded
916 4643 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
917 4647 Jain
Minority
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
918 4660 - - - - Management/
Paid Seats
Quota
JSS Dental College
and Hospital, Mysuru
, JSS Medical
Institutions Campus
Sri
Shivarathreeshwara
nagara Bannimantap
Mysuru, Karnataka,
570015
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 4 Fresh Allotted
in 2nd Round
919 4666 Manageme
nt/Paid
Seats
Quota
Indira Gandhi Institute
of Dental Sciences,
SBV, Pondycherry
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Did not fill up
fresh choices.
920 4670 - - - - Management/
Paid Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune , Sant Tukaram
Nagar, Pimpri, Pune,
Maharashtra, 411018
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 3 Fresh Allotted
in 2nd Round
921 4676 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
922 4707 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PERIODONTOLOGY Reported - - - - - - No
Upgradation
923 4714 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
924 4722 Manageme
nt/Paid
Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
925 4758 Manageme
nt/Paid
Seats
Quota
SRM Katt. Dental
College and Hospt.
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
926 4762 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
927 4774 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
SRM Dental College,
Chennai , SRM
DENTAL COLLEGE,
BHARATHI SALAI,
RAMAPURAM,
CHENNAI, Tamil
Nadu, 600089
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 3 Fresh Allotted
in 2nd Round
928 4780 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
929 4788 - - - - Management/
Paid Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune , Sant Tukaram
Nagar, Pimpri, Pune,
Maharashtra, 411018
ORAL AND
MAXILLOFACIAL
SURGERY
Open SC 26 Fresh Allotted
in 2nd Round
930 4794 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not fill up
fresh choices.
931 4806 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
932 4814 Manageme
nt/Paid
Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune
PERIODONTOLOGY Reported Management/
Paid Seats
Quota
Bharati Vidyapeeth
DU Dental College
and Hospt., Pune ,
Bharati Vidyapeeth
DU Dental College
and Hospital, Pune –
Satara Road,
Dhankwadi,
Pune.411043,
Maharashtra, 411043
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open General 4 Upgraded
933 4815 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - No
Upgradation
934 4816 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
ORAL MEDICINE
AND RADIOLOGY
Reported - - - - - - No
Upgradation
935 4828 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai , Dr. D.
Y. Patil Vidyanagar,
Sector 7, Nerul, Navi
Mumbai,
Maharashtra, 400706
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 3 Upgraded
936 4829 Manageme
nt/Paid
Seats
Quota
SRM Katt. Dental
College and Hospt.
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
937 4830 - - - - Management/
Paid Seats
Quota
BVDU Dental College
and Hospital, Sangli ,
Sangli Miraj Road
Wanlesswadi Sangli,
Maharashtra, 416414
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 4 Fresh Allotted
in 2nd Round
938 4848 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not fill up
fresh choices.
939 4849 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
940 4865 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Not Allotted.
941 4869 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
942 4870 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
943 4900 Manageme
nt/Paid
Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Did not fill up
fresh choices.
944 4903 - - - - Management/
Paid Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai , Bharati
Vidyapeeth Dental
College and Hospital,
Sec.seven Belapur
Navi Mumbai.,
Maharashtra, 400614
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 76 Fresh Allotted
in 2nd Round
945 4906 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Not Allotted.
946 4914 - - - - Management/
Paid Seats
Quota
SRM Dental College,
Chennai , SRM
DENTAL COLLEGE,
BHARATHI SALAI,
RAMAPURAM,
CHENNAI, Tamil
Nadu, 600089
ORAL AND
MAXILLOFACIAL
SURGERY
Open SC 16 Fresh Allotted
in 2nd Round
947 4918 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported Management/
Paid Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha , Sawangi
Meghe Wardha
INDIA, Maharashtra,
442107
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open OBC 12 Upgraded
948 4925 Manageme
nt/Paid
Seats
Quota
Institute of Dental
Sciences,
Bhubaneswar
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
949 4927 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
950 4930 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
951 4933 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
952 4937 Manageme
nt/Paid
Seats
Quota
Malla Reddy Institute
of Dental sciences,
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
953 4948 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
954 4949 - - - - Management/
Paid Seats
Quota
Saveetha Dental
College, Chennai ,
Saveetha Dental
College and
Hospitals,Poonamalle
e high road,
Velappanchavadi
Chennai, Tamil Nadu,
600077
ORAL MEDICINE
AND RADIOLOGY
Open General 15 Fresh Allotted
in 2nd Round
955 4957 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
956 4967 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
957 4968 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
958 4976 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
959 4981 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
960 4985 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
961 4996 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported Management/
Paid Seats
Quota
Indira Gandhi Institute
of Dental Sciences,
SBV, Pondycherry ,
SBV Pondicherry
Campus,
Pillaiyarkuppam,
Pondicherry,
Puducherry, 607402
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 2 Upgraded
962 5005 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Not Allotted.
963 5027 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
964 5030 - - - - Management/
Paid Seats
Quota
SRM Dental College,
Chennai , SRM
DENTAL COLLEGE,
BHARATHI SALAI,
RAMAPURAM,
CHENNAI, Tamil
Nadu, 600089
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open OBC 3 Fresh Allotted
in 2nd Round
965 5032 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
- - - - - - Not Allotted.
966 5033 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
967 5035 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
968 5036 - - - - Management/
Paid Seats
Quota
SRM Dental College,
Chennai , SRM
DENTAL COLLEGE,
BHARATHI SALAI,
RAMAPURAM,
CHENNAI, Tamil
Nadu, 600089
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 2 Fresh Allotted
in 2nd Round
969 5037 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
970 5051 - - - - Management/
Paid Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur , SRI
SIDDHARTHA
DENTAL COLLEGE
& HOSPITAL
AGALAKOTE B H
ROAD TUMKUR,
Karnataka, 572107
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 21 Fresh Allotted
in 2nd Round
971 5055 Manageme
nt/Paid
Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
972 5056 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
973 5058 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Not Allotted.
974 5069 Manageme
nt/Paid
Seats
Quota
Santosh Dentall
College and Hsopital,
Ghaziabad
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
975 5076 Muslim
Minority
Quota
Yenepoya Dental
College, Yenepoya
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not fill up
fresh choices.
976 5089 Manageme
nt/Paid
Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
977 5108 Manageme
nt/Paid
Seats
Quota
Malla Reddy Institute
of Dental sciences,
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Not Allotted.
978 5114 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not fill up
fresh choices.
979 5120 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
- - - - - - Did not fill up
fresh choices.
980 5121 Manageme
nt/Paid
Seats
Quota
Santosh Dentall
College and Hsopital,
Ghaziabad
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
981 5127 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
982 5134 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
983 5152 Manageme
nt/Paid
Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
984 5158 - - - - Management/
Paid Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad ,
Karad, Dist. Satara
(Maharashtra State),
Karad, Maharashtra,
415110
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 3 Fresh Allotted
in 2nd Round
985 5160 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
986 5164 Muslim
Minority
Quota
Yenepoya Dental
College, Yenepoya
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
987 5167 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
988 5185 - - - - Management/
Paid Seats
Quota
Yenepoya Dental
College, Yenepoya ,
University Road,
Deralakatte,
Mangaluru,
Karnataka, 575018
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 2 Fresh Allotted
in 2nd Round
989 5194 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
990 5213 Manageme
nt/Paid
Seats
Quota
Indira Gandhi Institute
of Dental Sciences,
SBV, Pondycherry
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
991 5225 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
992 5236 - - - - Management/
Paid Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha , Sawangi
Meghe Wardha
INDIA, Maharashtra,
442107
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open OBC 1 Fresh Allotted
in 2nd Round
993 5240 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
994 5241 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
995 5251 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Did not fill up
fresh choices.
996 5263 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
997 5279 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
998 5305 - - - - Management/
Paid Seats
Quota
Santosh Dentall
College and Hsopital,
Ghaziabad , No.1,
Santosh Nagar,
Ghaziabad, Delhi
NCR, Uttar Pradesh,
201009
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open General 135 Fresh Allotted
in 2nd Round
999 5340 Manageme
nt/Paid
Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
1000 5355 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
1001 5356 - - - - Management/
Paid Seats
Quota
Sharad Pawar Dental
College and Hospital,
Wardha , Sawangi
Meghe Wardha
INDIA, Maharashtra,
442107
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open OBC 5 Fresh Allotted
in 2nd Round
1002 5394 Jain
Minority
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
1003 5411 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
- - - - - - Did not fill up
fresh choices.
1004 5430 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
1005 5431 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
1006 5442 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
PUBLIC HEALTH
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
1007 5443 - - - - Management/
Paid Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai ,
Alapakkam Main
Road Maduravoyal
Chennai Tamil Nadu,
Tamil Nadu, 600095
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 122 Fresh Allotted
in 2nd Round
1008 5444 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
1009 5445 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
1010 5447 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PERIODONTOLOGY Not
Reported
- - - - - - Did not fill up
fresh choices.
1011 5455 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported Management/
Paid Seats
Quota
Rural Dental College,
Loni , Rural Dental
College, Loni, Near Shirdi,
At-Loni Bk., Tal-
Rahata,
Dist-Ahmednagar,
Maharashtra, 413736
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 3 Upgraded
1012 5475 Manageme
nt/Paid
Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
1013 5484 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
Sri Ramachandra
Dental and Hospt.,
Chennai , No.1
Ramachandra Nagar,
Porur, Chennai.,
Tamil Nadu, 600116
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 5 Upgraded
1014 5501 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
1015 5504 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
1016 5516 - - - - Management/
Paid Seats
Quota
SRM Katt. Dental
College and Hospt.
Chennai , SRM
KATTANKULATHUR
DENTAL COLLEGE
SRMIST
SRM NAGAR
POTHERI
KATTANKULATHUR
KANCHIPURM DT,
Tamil Nadu, 603203
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open General 3 Fresh Allotted
in 2nd Round
1017 5525 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
1018 5527 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Not Allotted.
1019 5530 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
JSS Dental College
and Hospital, Mysuru
, JSS Medical
Institutions Campus
Sri
Shivarathreeshwara
nagara Bannimantap
Mysuru, Karnataka,
570015
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 5 Upgraded
1020 5543 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
1021 5550 Jain
Minority
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
1022 5553 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
1023 5556 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
1024 5558 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
1025 5580 Manageme
nt/Paid
Seats
Quota
Sree Balaji Dental
College and Hospital,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
1026 5587 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
1027 5588 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported Management/
Paid Seats
Quota
Rural Dental College,
Loni , Rural Dental
College, Loni, Near Shirdi,
At-Loni Bk., Tal-
Rahata,
Dist-Ahmednagar,
Maharashtra, 413736
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open OBC 2 Upgraded
1028 5600 - - - - Management/
Paid Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai ,
Alapakkam Main
Road Maduravoyal
Chennai Tamil Nadu,
Tamil Nadu, 600095
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 6 Fresh Allotted
in 2nd Round
1029 5602 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not fill up
fresh choices.
1030 5605 Non-
Resident
Indian
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
1031 5611 Manageme
nt/Paid
Seats
Quota
Malla Reddy Institute
of Dental sciences,
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
1032 5612 Manageme
nt/Paid
Seats
Quota
Kalinga Institute of
Dental Sciences,
Bhubaneswar
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
1033 5614 Manageme
nt/Paid
Seats
Quota
Indira Gandhi Institute
of Dental Sciences,
SBV, Pondycherry
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
Sri Siddhartha
DentalCollege,
Tumkur , SRI
SIDDHARTHA
DENTAL COLLEGE
& HOSPITAL
AGALAKOTE B H
ROAD TUMKUR,
Karnataka, 572107
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 51 Upgraded
1034 5617 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
1035 5636 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - No
Upgradation
1036 5664 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
1037 5670 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Seat
Surrendered
Management/
Paid Seats
Quota
BVDU Dental College
and Hospital, Sangli ,
Sangli Miraj Road
Wanlesswadi Sangli,
Maharashtra, 416414
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open SC 5 Fresh Allotted
in 2nd Round
1038 5676 Manageme
nt/Paid
Seats
Quota
Malla Reddy Dental
College For Women,
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not fill up
fresh choices.
1039 5680 - - - - Management/
Paid Seats
Quota
Yenepoya Dental
College, Yenepoya ,
University Road,
Deralakatte,
Mangaluru,
Karnataka, 575018
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 19 Fresh Allotted
in 2nd Round
1040 5683 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
1041 5685 Manageme
nt/Paid
Seats
Quota
Thaimoogambigai
Dental College and
Hsopt. Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
Management/
Paid Seats
Quota
Thaimoogambigai
Dental College and
Hsopt. Chennai ,
Golden George Nagar
Mugappair
Chennai 600107,
Tamil Nadu, 600107
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open OBC 4 Fresh Allotted
in 2nd Round
1042 5703 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
1043 5719 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai , Dr. D.
Y. Patil Vidyanagar,
Sector 7, Nerul, Navi
Mumbai,
Maharashtra, 400706
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open EWS 3 Upgraded
1044 5735 Manageme
nt/Paid
Seats
Quota
Yenepoya Dental
College, Yenepoya
ORAL MEDICINE
AND RADIOLOGY
Reported - - - - - - Did not opt
for
Upgradation.
1045 5749 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
1046 5759 Manageme
nt/Paid
Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi
PERIODONTOLOGY Reported - - - - - - No
Upgradation
1047 5765 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
1048 5780 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
1049 5787 Manageme
nt/Paid
Seats
Quota
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
1050 5791 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
VMS Dental College,
Salem , Sankari Main
Road (NH-47),
Ariyanoor,
Salem., Tamil Nadu,
636308
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 3 Fresh Allotted
in 2nd Round
1051 5798 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
1052 5808 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
- - - - - - Did not fill up
fresh choices.
1053 5815 Manageme
nt/Paid
Seats
Quota
Santosh Dentall
College and Hsopital,
Ghaziabad
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
1054 5819 - - - - Management/
Paid Seats
Quota
SRM Dental College,
Chennai , SRM
DENTAL COLLEGE,
BHARATHI SALAI,
RAMAPURAM,
CHENNAI, Tamil
Nadu, 600089
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open General 10 Fresh Allotted
in 2nd Round
1055 5826 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
1056 5845 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
1057 5864 Manageme
nt/Paid
Seats
Quota
Malla Reddy Dental
College For Women,
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
VMS Dental College,
Salem , Sankari Main
Road (NH-47),
Ariyanoor,
Salem., Tamil Nadu,
636308
ORAL AND
MAXILLOFACIAL
SURGERY
Open General 30 Fresh Allotted
in 2nd Round
1058 5883 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Not
Reported
Management/
Paid Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara ,
Sumandeep
Vidyapeeth
Campus,Piparia Tal -
Waghodiya,
Vadodara, Gujarat,
India, Gujarat,
391760
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 3 Fresh Allotted
in 2nd Round
1059 5884 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not fill up
fresh choices.
1060 5902 Manageme
nt/Paid
Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported Management/
Paid Seats
Quota
Saveetha Dental
College, Chennai ,
Saveetha Dental
College and
Hospitals,Poonamalle
e high road,
Velappanchavadi
Chennai, Tamil Nadu,
600077
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open General 3 Upgraded
1061 5904 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
1062 5905 - - - - Management/
Paid Seats
Quota
Yenepoya Dental
College, Yenepoya ,
University Road,
Deralakatte,
Mangaluru,
Karnataka, 575018
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 4 Fresh Allotted
in 2nd Round
1063 5906 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
1064 5910 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
1065 5915 - - - - Management/
Paid Seats
Quota
SRM Katt. Dental
College and Hospt.
Chennai , SRM
KATTANKULATHUR
DENTAL COLLEGE
SRMIST
SRM NAGAR
POTHERI
KATTANKULATHUR
KANCHIPURM DT,
Tamil Nadu, 603203
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Open EWS 132 Fresh Allotted
in 2nd Round
1066 5928 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported Management/
Paid Seats
Quota
Manipal College of
Dental Science,
Mangalore , Light
House Hill Road,
Mangalore India,
Karnataka, 575001
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 3 Upgraded
1067 5929 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
1068 5948 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
ORAL MEDICINE
AND RADIOLOGY
Not
Reported
Management/
Paid Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai , Dr. D.
Y. Patil Vidyanagar,
Sector 7, Nerul, Navi
Mumbai,
Maharashtra, 400706
ORAL MEDICINE
AND RADIOLOGY
Open General 13 Fresh Allotted
in 2nd Round
1069 5968 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported - - - - - - Did not opt
for
Upgradation.
1070 5981 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Navi Mumbai
ORAL MEDICINE
AND RADIOLOGY
Reported - - - - - - No
Upgradation
1071 5982 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Reported Management/
Paid Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai , Bharati
Vidyapeeth Dental
College and Hospital,
Sec.seven Belapur
Navi Mumbai.,
Maharashtra, 400614
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 8 Upgraded
1072 5997 Manageme
nt/Paid
Seats
Quota
Saveetha Dental
College, Chennai ,
Saveetha Dental
College and
Hospitals,Poonamalle
e high road,
Velappanchavadi
Chennai, Tamil Nadu,
600077
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open General 3 Upgraded
1073 5998 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Sce., Manipal
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
Management/
Paid Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai , Bharati
Vidyapeeth Dental
College and Hospital,
Sec.seven Belapur
Navi Mumbai.,
Maharashtra, 400614
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 7 Fresh Allotted
in 2nd Round
1074 6002 Manageme
nt/Paid
Seats
Quota
Amrita School of
Dentistry, Kochi
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
1075 6008 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not opt
for
Upgradation.
1076 6030 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported Management/
Paid Seats
Quota
Rural Dental College,
Loni , Rural Dental
College, Loni, Near Shirdi,
At-Loni Bk., Tal-
Rahata,
Dist-Ahmednagar,
Maharashtra, 413736
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open OBC 1 Upgraded
1077 6035 Manageme
nt/Paid
Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai
ORTHODONTICS
AND DENTOFACIAL
ORTHOPEDICS
Not
Reported
- - - - - - Did not fill up
fresh choices.
1078 6041 Manageme
nt/Paid
Seats
Quota
Manipal College of
Dental Science,
Mangalore
PERIODONTOLOGY Reported - - - - - - Did not fill up
fresh choices.
1079 6054 - - - - Management/
Paid Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai , Bharati
Vidyapeeth Dental
College and Hospital,
Sec.seven Belapur
Navi Mumbai.,
Maharashtra, 400614
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open EWS 4 Fresh Allotted
in 2nd Round
1080 6059 Non-
Resident
Indian
AB Shetty Memorial
Inst. of Dental Sce.,
Mangaluru
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
1081 6089 - - - - Management/
Paid Seats
Quota
Indira Gandhi Institute
of Dental Sciences,
SBV, Pondycherry ,
SBV Pondicherry
Campus,
Pillaiyarkuppam,
Pondicherry,
Puducherry, 607402
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 8 Fresh Allotted
in 2nd Round
1082 6093 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - Did not fill up
fresh choices.
1083 6095 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Reported - - - - - - No
Upgradation
1084 6097 - - - - Management/
Paid Seats
Quota
Amrita School of
Dentistry, Kochi ,
Amrita School of
Dentistry, Amrita
Institute of Medical
Sciences, AIMSPonekkara
P.O
Kochi, Kerala, 682041
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open General 8 Fresh Allotted
in 2nd Round
1085 6099 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - Did not opt
for
Upgradation.
1086 6111 Manageme
nt/Paid
Seats
Quota
Indira Gandhi Institute
of Dental Sciences,
SBV, Pondycherry
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported - - - - - - No
Upgradation
1087 6112 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
PERIODONTOLOGY Not
Reported
- - - - - - Did not fill up
fresh choices.
1088 6120 Manageme
nt/Paid
Seats
Quota
Rural Dental College,
Loni
PERIODONTOLOGY Not
Reported
- - - - - - Did not fill up
fresh choices.
1089 6124 Manageme
nt/Paid
Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana
PROSTHODONTICS
AND CROWN AND
BRIDGE
Reported Management/
Paid Seats
Quota
Malla Reddy Institute
of Dental sciences, ,
Suraram X Roads,
Jeedimetla,
Hyderabad,
Telangana, 500055
PROSTHODONTICS
AND CROWN AND
BRIDGE
Open OBC 15 Upgraded
1090 6134 Manageme
nt/Paid
Seats
Quota
Dr. DY Patil Dental
College and Hosp.
Pune
PERIODONTOLOGY Reported - - - - - - Did not opt
for
Upgradation.
1091 6139 Manageme
nt/Paid
Seats
Quota
K M Shah Dental
College, SumanDeep
Vidyapeeth,
Vadodara
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported Management/
Paid Seats
Quota
BVDU Dental College
and Hospital, Navi
Mumbai , Bharati
Vidyapeeth Dental
College and Hospital,
Sec.seven Belapur
Navi Mumbai.,
Maharashtra, 400614
CONSERVATIVE
DENTISTRY AND
ENDODONTICS
Open General 8 Upgraded
1092 6162 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
PROSTHODONTICS
AND CROWN AND
BRIDGE
Not
Reported
- - - - - - Did not fill up
fresh choices.
1093 6165 Manageme
nt/Paid
Seats
Quota
SRM Dental College,
Chennai
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported - - - - - - Did not opt
for
Upgradation.
1094 6167 Manageme
nt/Paid
Seats
Quota
VMS Dental College,
Salem
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - Did not opt
for
Upgradation.
1095 6169 Manageme
nt/Paid
Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai
ORAL AND
MAXILLOFACIAL
SURGERY
Not
Reported
Management/
Paid Seats
Quota
Meenakshi Ammal
Dental College and
Host., Chennai ,
Alapakkam Main
Road Maduravoyal
Chennai Tamil Nadu,
Tamil Nadu, 600095
ORAL AND
MAXILLOFACIAL
SURGERY
Open OBC 10 Fresh Allotted
in 2nd Round
1096 6173 Manageme
nt/Paid
Seats
Quota
MM College of Dental
Scie. and Res.,
Mullana
ORAL AND
MAXILLOFACIAL
SURGERY
Reported - - - - - - No
Upgradation
1097 6174 Manageme
nt/Paid
Seats
Quota
School of Dental
Sciences and
KIMSDU, Karad
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Reported Management/
Paid Seats
Quota
KLE VK Inst. of
Dental Scie. Belagavi , KLE Vishwanath
Katti Institute of
Dental Sciences, J.N.
Medical College
Campus, Nehru
Nagar,Belagavi,
Karnataka, 590010
PEDIATRIC AND
PREVENTIVE
DENTISTRY
Open OBC 22 Upgraded`;

const targetFile = path.resolve('brain/mcc_r2_2025.txt');
fs.appendFileSync(targetFile, '\n' + newData, 'utf8');
console.log('Appended new data successfully.');
