
const fs = require('fs');

const rawData = `1	4100335	16	KTD: Govt.Dental College, Kottayam	OR: Orthodontics and Dentofacial Orthopaedics	SM
2	4100068	17	TVD: Govt.Dental College, Thiruvananthapuram	OR: Orthodontics and Dentofacial Orthopaedics	SM
3	4100215	19	TVD: Govt.Dental College, Thiruvananthapuram	CD: Conservative Dentistry and Endodontics	SM
4	4100673	27	TVD: Govt.Dental College, Thiruvananthapuram	PO: Prosthodontics and Crown and Bridge	SM
5	4100737	49	KKD: Govt.Dental College, Kozhikode	PO: Prosthodontics and Crown and Bridge	SM
6	4100657	64	TVD: Govt.Dental College, Thiruvananthapuram	PD: Pedodontics and Preventive Dentistry	SM
7	4100011	74	KTD: Govt.Dental College, Kottayam	MX: Oral & Maxillo Facial Surgery	SM
8	4100015	76	TVD: Govt.Dental College, Thiruvananthapuram	PR: Periodontology	SM
9	4100246	86	KTD: Govt.Dental College, Kottayam	PO: Prosthodontics and Crown and Bridge	MU
10	4100231	93	KKD: Govt.Dental College, Kozhikode	MX: Oral & Maxillo Facial Surgery	SM
11	4100628	98	TVD: Govt.Dental College, Thiruvananthapuram	PO: Prosthodontics and Crown and Bridge	BH
12	4100307	114	KTD: Govt.Dental College, Kottayam	PR: Periodontology	SM
13	4100269	119	TVD: Govt.Dental College, Thiruvananthapuram	PR: Periodontology	MU
14	4100379	127	KTD: Govt.Dental College, Kottayam	MX: Oral & Maxillo Facial Surgery	EZ
15	4100358	236	KKD: Govt.Dental College, Kozhikode	PR: Periodontology	BH
16	4100501	243	KTD: Govt.Dental College, Kottayam	MR: Oral Medicine & Radiology	SM
17	4100119	273	TVD: Govt.Dental College, Thiruvananthapuram	MR: Oral Medicine & Radiology	SM
18	4100252	312	KKD: Govt.Dental College, Kozhikode	MR: Oral Medicine & Radiology	EZ
19	4100102	321	KTD: Govt.Dental College, Kottayam	PM: Oral Pathology & Microbiology	SM
20	4100052	338	KKD: Govt.Dental College, Kozhikode	PM: Oral Pathology & Microbiology	SM
21	4100171	350	KTD: Govt.Dental College, Kottayam	PH: Public Health Dentistry	SM
22	4100229	384	KMD: KMCT Dental College, Kozhikode	OR: Orthodontics and Dentofacial Orthopaedics	SM
23	4100480	389	MED: MES Dental College, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	SM
24	4100399	391	TVD: Govt.Dental College, Thiruvananthapuram	CD: Conservative Dentistry and Endodontics	LA
25	4100079	461	KKD: Govt.Dental College, Kozhikode	OR: Orthodontics and Dentofacial Orthopaedics	EW
26	4100333	490	KMD: KMCT Dental College, Kozhikode	MX: Oral & Maxillo Facial Surgery	SM
27	4100123	499	MBD: Mar Baselios Dental College, Ernakulam	OR: Orthodontics and Dentofacial Orthopaedics	SM
28	4100638	532	MLD: Malabar Dental College, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	SM
29	4100637	535	ADC: Annoor Dental College, Ernakulam	OR: Orthodontics and Dentofacial Orthopaedics	SM
30	4100470	538	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	OR: Orthodontics and Dentofacial Orthopaedics	SM
31	4100827	563	KTD: Govt.Dental College, Kottayam	CD: Conservative Dentistry and Endodontics	EW
32	4100337	583	KMD: KMCT Dental College, Kozhikode	PO: Prosthodontics and Crown and Bridge	SM
33	4100074	596	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	OR: Orthodontics and Dentofacial Orthopaedics	BH
34	4100373	605	KTD: Govt.Dental College, Kottayam	PM: Oral Pathology & Microbiology	EW
35	4100851	615	RDC: Royal Dental College, Palakkad	CD: Conservative Dentistry and Endodontics	SM
36	4100693	640	KMD: KMCT Dental College, Kozhikode	PH: Public Health Dentistry	SM
37	4100209	644	MBD: Mar Baselios Dental College, Ernakulam	OR: Orthodontics and Dentofacial Orthopaedics	EZ
38	4100682	714	PMD: Pushpagiri College of Dental Science, Thiruvalla	OR: Orthodontics and Dentofacial Orthopaedics	SM
39	4100062	717	KMD: KMCT Dental College, Kozhikode	CD: Conservative Dentistry and Endodontics	SM
40	4100599	751	SGD: St. Geregorios Dental College, Ernakulam	OR: Orthodontics and Dentofacial Orthopaedics	SM
41	4100274	760	MLD: Malabar Dental College, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	SM
42	4100356	924	EID: Educare Institute of Dental Sciences, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	SM
43	4100084	926	PSD: PSM College of Dental Science & Research, Trichur	OR: Orthodontics and Dentofacial Orthopaedics	SM
44	4100467	948	SVD: Sri. Sankara Dental College, Varkala	OR: Orthodontics and Dentofacial Orthopaedics	SM
45	4100428	951	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	OR: Orthodontics and Dentofacial Orthopaedics	EZ
46	4100384	987	KMD: KMCT Dental College, Kozhikode	MX: Oral & Maxillo Facial Surgery	SM
47	4100158	1105	TVD: Govt.Dental College, Thiruvananthapuram	MX: Oral & Maxillo Facial Surgery	BX
48	4100798	1128	MBD: Mar Baselios Dental College, Ernakulam	PD: Pedodontics and Preventive Dentistry	SM
49	4100321	1164	PMD: Pushpagiri College of Dental Science, Thiruvalla	MX: Oral & Maxillo Facial Surgery	SM
50	4100019	1215	PMD: Pushpagiri College of Dental Science, Thiruvalla	CD: Conservative Dentistry and Endodontics	SM
51	4100172	1232	PSD: PSM College of Dental Science & Research, Trichur	CD: Conservative Dentistry and Endodontics	SM
52	4100341	1233	SGD: St. Geregorios Dental College, Ernakulam	OR: Orthodontics and Dentofacial Orthopaedics	MU
53	4100320	1254	KMD: KMCT Dental College, Kozhikode	MR: Oral Medicine & Radiology	SM
54	4100474	1282	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	CD: Conservative Dentistry and Endodontics	SM
55	4100689	1337	ADC: Annoor Dental College, Ernakulam	OR: Orthodontics and Dentofacial Orthopaedics	MM
56	4100324	1380	MED: MES Dental College, Malappuram	CD: Conservative Dentistry and Endodontics	SM
57	4100626	1458	KMD: KMCT Dental College, Kozhikode	CD: Conservative Dentistry and Endodontics	MU
58	4100739	1561	KMD: KMCT Dental College, Kozhikode	MX: Oral & Maxillo Facial Surgery	SM
59	4100208	1567	MBD: Mar Baselios Dental College, Ernakulam	CD: Conservative Dentistry and Endodontics	SM
60	4100219	1596	KMD: KMCT Dental College, Kozhikode	CD: Conservative Dentistry and Endodontics	EZ
61	4100278	1610	KTD: Govt.Dental College, Kottayam	MR: Oral Medicine & Radiology	SC
62	4100585	1650	PMD: Pushpagiri College of Dental Science, Thiruvalla	MX: Oral & Maxillo Facial Surgery	MU
63	4100368	1651	KMD: KMCT Dental College, Kozhikode	OR: Orthodontics and Dentofacial Orthopaedics	SC ##
64	4100454	1663	MBD: Mar Baselios Dental College, Ernakulam	PD: Pedodontics and Preventive Dentistry	SM
65	4100018	1665	MED: MES Dental College, Malappuram	CD: Conservative Dentistry and Endodontics	SM
66	4100442	1732	PMD: Pushpagiri College of Dental Science, Thiruvalla	CD: Conservative Dentistry and Endodontics	SM
67	4100837	1801	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	CD: Conservative Dentistry and Endodontics	SM
68	4100348	1834	ADC: Annoor Dental College, Ernakulam	CD: Conservative Dentistry and Endodontics	SM
69	4100240	1945	ADC: Annoor Dental College, Ernakulam	CD: Conservative Dentistry and Endodontics	SM
70	4100345	1955	MLD: Malabar Dental College, Malappuram	CD: Conservative Dentistry and Endodontics	SM
71	4100103	2088	ADC: Annoor Dental College, Ernakulam	PO: Prosthodontics and Crown and Bridge	SM
72	4100315	2147	KMD: KMCT Dental College, Kozhikode	PD: Pedodontics and Preventive Dentistry	SM
73	4100565	2408	EID: Educare Institute of Dental Sciences, Malappuram	CD: Conservative Dentistry and Endodontics	SM
74	4100752	2449	KMD: KMCT Dental College, Kozhikode	PO: Prosthodontics and Crown and Bridge	SM
75	4100430	2517	TVD: Govt.Dental College, Thiruvananthapuram	PM: Oral Pathology & Microbiology	SC
76	4100632	2553	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	MX: Oral & Maxillo Facial Surgery	SM
77	4100347	2573	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PD: Pedodontics and Preventive Dentistry	SM
78	4100092	2606	KMD: KMCT Dental College, Kozhikode	PD: Pedodontics and Preventive Dentistry	SM
79	4100422	2630	MBD: Mar Baselios Dental College, Ernakulam	MX: Oral & Maxillo Facial Surgery	SM
80	4100296	2634	SGD: St. Geregorios Dental College, Ernakulam	CD: Conservative Dentistry and Endodontics	SC ##
81	4100867	2668	KKD: Govt.Dental College, Kozhikode	MX: Oral & Maxillo Facial Surgery	KU
82	4100237	2670	RDC: Royal Dental College, Palakkad	OR: Orthodontics and Dentofacial Orthopaedics	SC
83	4100370	2766	EID: Educare Institute of Dental Sciences, Malappuram	CD: Conservative Dentistry and Endodontics	SM
84	4100157	2991	PSD: PSM College of Dental Science & Research, Trichur	CD: Conservative Dentistry and Endodontics	MM
85	4100220	2992	MED: MES Dental College, Malappuram	MX: Oral & Maxillo Facial Surgery	SM
86	4100872	3063	KMD: KMCT Dental College, Kozhikode	MR: Oral Medicine & Radiology	SM
87	4100667	3101	MLD: Malabar Dental College, Malappuram	CD: Conservative Dentistry and Endodontics	SM
88	4100198	3141	KMD: KMCT Dental College, Kozhikode	PO: Prosthodontics and Crown and Bridge	SM
89	4100476	3170	SVD: Sri. Sankara Dental College, Varkala	CD: Conservative Dentistry and Endodontics	SM
90	4100131	3186	KMD: KMCT Dental College, Kozhikode	PO: Prosthodontics and Crown and Bridge	SM
91	4100369	3268	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PD: Pedodontics and Preventive Dentistry	SM
92	4100134	3356	MED: MES Dental College, Malappuram	PO: Prosthodontics and Crown and Bridge	SM
93	4100338	3363	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	CD: Conservative Dentistry and Endodontics	SM
94	4100194	3401	SGD: St. Geregorios Dental College, Ernakulam	OR: Orthodontics and Dentofacial Orthopaedics	AC
95	4100443	3411	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	MX: Oral & Maxillo Facial Surgery	SM
96	4100161	3423	MED: MES Dental College, Malappuram	MX: Oral & Maxillo Facial Surgery	SM
97	4100159	3427	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	CD: Conservative Dentistry and Endodontics	SM
98	4100507	3445	MBD: Mar Baselios Dental College, Ernakulam	CD: Conservative Dentistry and Endodontics	BH
99	4100441	3453	KMD: KMCT Dental College, Kozhikode	PR: Periodontology	SM
100	4100295	3474	PSD: PSM College of Dental Science & Research, Trichur	CD: Conservative Dentistry and Endodontics	SC
101	4100465	3530	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	CD: Conservative Dentistry and Endodontics	MU
102	4100039	3533	RDC: Royal Dental College, Palakkad	OR: Orthodontics and Dentofacial Orthopaedics	NR
103	4100808	3585	RDC: Royal Dental College, Palakkad	CD: Conservative Dentistry and Endodontics	BH
104	4100260	3637	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PO: Prosthodontics and Crown and Bridge	SM
105	4100486	3680	KMD: KMCT Dental College, Kozhikode	PD: Pedodontics and Preventive Dentistry	SM
106	4100458	3729	PMD: Pushpagiri College of Dental Science, Thiruvalla	CD: Conservative Dentistry and Endodontics	SC
107	4100793	3775	MLD: Malabar Dental College, Malappuram	PD: Pedodontics and Preventive Dentistry	SM
108	4100374	3778	MBD: Mar Baselios Dental College, Ernakulam	PO: Prosthodontics and Crown and Bridge	SM
109	4100042	3800	KMD: KMCT Dental College, Kozhikode	PD: Pedodontics and Preventive Dentistry	SM
110	4100336	3891	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	MX: Oral & Maxillo Facial Surgery	SM
111	4100322	3904	PMD: Pushpagiri College of Dental Science, Thiruvalla	PO: Prosthodontics and Crown and Bridge	SM
112	4100180	3979	MLD: Malabar Dental College, Malappuram	CD: Conservative Dentistry and Endodontics	MU
113	4100545	4082	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	MX: Oral & Maxillo Facial Surgery	SM
114	4100756	4123	PSD: PSM College of Dental Science & Research, Trichur	PD: Pedodontics and Preventive Dentistry	SM
115	4100175	4251	KMD: KMCT Dental College, Kozhikode	OR: Orthodontics and Dentofacial Orthopaedics	NR
116	4100003	4279	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	MX: Oral & Maxillo Facial Surgery	SM
117	4100540	4301	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PO: Prosthodontics and Crown and Bridge	SM
118	4100090	4324	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PO: Prosthodontics and Crown and Bridge	SM
119	4100351	4326	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	CD: Conservative Dentistry and Endodontics	EZ
120	4100826	4334	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	MX: Oral & Maxillo Facial Surgery	BH
121	4100314	4392	RDC: Royal Dental College, Palakkad	PD: Pedodontics and Preventive Dentistry	SM
122	4100596	4419	EID: Educare Institute of Dental Sciences, Malappuram	CD: Conservative Dentistry and Endodontics	EZ
123	4100725	4428	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	MX: Oral & Maxillo Facial Surgery	SC
124	4100817	4436	MED: MES Dental College, Malappuram	PO: Prosthodontics and Crown and Bridge	SM
125	4100398	4503	KMD: KMCT Dental College, Kozhikode	PO: Prosthodontics and Crown and Bridge	SC
126	4100101	4608	EID: Educare Institute of Dental Sciences, Malappuram	PR: Periodontology	SM
127	4100440	4615	KMD: KMCT Dental College, Kozhikode	PH: Public Health Dentistry	SM
128	4100254	4665	PMD: Pushpagiri College of Dental Science, Thiruvalla	PO: Prosthodontics and Crown and Bridge	SM
129	4100327	4706	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PD: Pedodontics and Preventive Dentistry	MU
130	4100478	4746	KMD: KMCT Dental College, Kozhikode	PR: Periodontology	SM
131	4100140	4885	EID: Educare Institute of Dental Sciences, Malappuram	PO: Prosthodontics and Crown and Bridge	SM
132	4100888	5063	RDC: Royal Dental College, Palakkad	PO: Prosthodontics and Crown and Bridge	SM
133	4100261	5115	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	OR: Orthodontics and Dentofacial Orthopaedics	NR
134	4100264	5193	PSD: PSM College of Dental Science & Research, Trichur	PR: Periodontology	SM
135	4100316	5216	PMD: Pushpagiri College of Dental Science, Thiruvalla	PD: Pedodontics and Preventive Dentistry	SM
136	4100228	5267	MED: MES Dental College, Malappuram	MX: Oral & Maxillo Facial Surgery	EZ
137	4100306	5325	MLD: Malabar Dental College, Malappuram	PD: Pedodontics and Preventive Dentistry	SM
138	4100527	5333	KMD: KMCT Dental College, Kozhikode	OR: Orthodontics and Dentofacial Orthopaedics	NR
139	4100226	5398	SGD: St. Geregorios Dental College, Ernakulam	PO: Prosthodontics and Crown and Bridge	SM
140	4100709	5438	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PO: Prosthodontics and Crown and Bridge	BH
141	4100273	5486	MBD: Mar Baselios Dental College, Ernakulam	OR: Orthodontics and Dentofacial Orthopaedics	NR
142	4100187	5496	KTD: Govt.Dental College, Kottayam	PD: Pedodontics and Preventive Dentistry	ST
143	4100911	5509	MLD: Malabar Dental College, Malappuram	PD: Pedodontics and Preventive Dentistry	SM
144	4100696	5564	MBD: Mar Baselios Dental College, Ernakulam	PO: Prosthodontics and Crown and Bridge	MU
145	4100300	5567	KMD: KMCT Dental College, Kozhikode	PR: Periodontology	SM
146	4100130	5638	RDC: Royal Dental College, Palakkad	PD: Pedodontics and Preventive Dentistry	SM
147	4100339	5647	SGD: St. Geregorios Dental College, Ernakulam	PO: Prosthodontics and Crown and Bridge	SM
148	4100502	5739	EID: Educare Institute of Dental Sciences, Malappuram	PD: Pedodontics and Preventive Dentistry	SM
149	4100487	5762	EID: Educare Institute of Dental Sciences, Malappuram	PD: Pedodontics and Preventive Dentistry	SM
150	4100685	5921	MLD: Malabar Dental College, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	NR
151	4100405	5946	PSD: PSM College of Dental Science & Research, Trichur	PO: Prosthodontics and Crown and Bridge	SM
152	4100493	5952	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	MX: Oral & Maxillo Facial Surgery	EZ
153	4100377	6015	ADC: Annoor Dental College, Ernakulam	PM: Oral Pathology & Microbiology	SM
154	4100541	6095	MBD: Mar Baselios Dental College, Ernakulam	CD: Conservative Dentistry and Endodontics	NR
155	4100034	6147	MLD: Malabar Dental College, Malappuram	CD: Conservative Dentistry and Endodontics	LA
156	4100328	6150	EID: Educare Institute of Dental Sciences, Malappuram	PO: Prosthodontics and Crown and Bridge	SC
157	4100097	6168	PMD: Pushpagiri College of Dental Science, Thiruvalla	PR: Periodontology	SM
158	4100144	6280	MBD: Mar Baselios Dental College, Ernakulam	PR: Periodontology	SM
159	4100723	6290	KMD: KMCT Dental College, Kozhikode	OR: Orthodontics and Dentofacial Orthopaedics	NR
160	4100029	6295	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	OR: Orthodontics and Dentofacial Orthopaedics	NR
161	4100244	6322	MLD: Malabar Dental College, Malappuram	PD: Pedodontics and Preventive Dentistry	BH
162	4100183	6368	PMD: Pushpagiri College of Dental Science, Thiruvalla	PO: Prosthodontics and Crown and Bridge	LA
163	4100710	6401	RDC: Royal Dental College, Palakkad	PD: Pedodontics and Preventive Dentistry	SM
164	4100230	6442	MED: MES Dental College, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	NR
165	4100589	6534	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	PD: Pedodontics and Preventive Dentistry	SM
166	4100151	6734	SVD: Sri. Sankara Dental College, Varkala	PD: Pedodontics and Preventive Dentistry	SM
167	4100523	6736	MLD: Malabar Dental College, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	KU
168	4100238	6830	SGD: St. Geregorios Dental College, Ernakulam	PO: Prosthodontics and Crown and Bridge	SC ##
169	4100022	6908	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PR: Periodontology	SM
170	4100085	6921	PMD: Pushpagiri College of Dental Science, Thiruvalla	OR: Orthodontics and Dentofacial Orthopaedics	NR
171	4100509	6922	MLD: Malabar Dental College, Malappuram	PO: Prosthodontics and Crown and Bridge	SM
172	4100132	6936	SVD: Sri. Sankara Dental College, Varkala	PO: Prosthodontics and Crown and Bridge	SM
173	4100620	6980	MLD: Malabar Dental College, Malappuram	PO: Prosthodontics and Crown and Bridge	BH
174	4100690	7042	PSD: PSM College of Dental Science & Research, Trichur	PD: Pedodontics and Preventive Dentistry	MM
175	4100733	7120	MLD: Malabar Dental College, Malappuram	PR: Periodontology	SM
176	4100634	7239	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	PO: Prosthodontics and Crown and Bridge	SM
177	4100426	7331	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	PO: Prosthodontics and Crown and Bridge	SM
178	4100113	7352	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	PD: Pedodontics and Preventive Dentistry	BH
179	4100033	7428	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	PO: Prosthodontics and Crown and Bridge	SM
180	4100789	7490	ADC: Annoor Dental College, Ernakulam	OR: Orthodontics and Dentofacial Orthopaedics	NR
181	4100645	7523	MBD: Mar Baselios Dental College, Ernakulam	PR: Periodontology	SM
182	4100109	7579	RDC: Royal Dental College, Palakkad	CD: Conservative Dentistry and Endodontics	NR
183	4100288	7662	RDC: Royal Dental College, Palakkad	PO: Prosthodontics and Crown and Bridge	SM
184	4100115	7716	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PR: Periodontology	SM
185	4100821	7761	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PO: Prosthodontics and Crown and Bridge	EZ
186	4100687	7808	ADC: Annoor Dental College, Ernakulam	PO: Prosthodontics and Crown and Bridge	EZ
187	4100504	7921	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	OR: Orthodontics and Dentofacial Orthopaedics	NR
188	4100615	8176	ADC: Annoor Dental College, Ernakulam	PD: Pedodontics and Preventive Dentistry	MU
189	4100677	8374	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PR: Periodontology	SM
190	4100730	8502	SVD: Sri. Sankara Dental College, Varkala	PO: Prosthodontics and Crown and Bridge	BH
191	4100148	8561	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PR: Periodontology	SM
192	4100390	8664	MBD: Mar Baselios Dental College, Ernakulam	MR: Oral Medicine & Radiology	SM
193	4100436	8841	KMD: KMCT Dental College, Kozhikode	PD: Pedodontics and Preventive Dentistry	SC
194	4100705	8937	MLD: Malabar Dental College, Malappuram	PD: Pedodontics and Preventive Dentistry	SC
195	4100267	9170	PSD: PSM College of Dental Science & Research, Trichur	PO: Prosthodontics and Crown and Bridge	MU
196	4100375	9277	RDC: Royal Dental College, Palakkad	PO: Prosthodontics and Crown and Bridge	EZ
197	4100176	9547	ADC: Annoor Dental College, Ernakulam	PO: Prosthodontics and Crown and Bridge	MM
198	4100340	9647	RDC: Royal Dental College, Palakkad	OR: Orthodontics and Dentofacial Orthopaedics	NR
199	4100312	9654	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	OR: Orthodontics and Dentofacial Orthopaedics	NR #
200	4100392	9724	EID: Educare Institute of Dental Sciences, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	NR
201	4100890	9759	MLD: Malabar Dental College, Malappuram	PR: Periodontology	SM
202	4100471	9770	SGD: St. Geregorios Dental College, Ernakulam	CD: Conservative Dentistry and Endodontics	NR
203	4100866	9777	PSD: PSM College of Dental Science & Research, Trichur	PR: Periodontology	BH
204	4100098	10214	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PD: Pedodontics and Preventive Dentistry	SC
205	4100719	10291	ADC: Annoor Dental College, Ernakulam	PR: Periodontology	SM
206	4100656	10335	ADC: Annoor Dental College, Ernakulam	PR: Periodontology	MM
207	4100506	10758	KMD: KMCT Dental College, Kozhikode	PR: Periodontology	SC
208	4100754	10763	AID: Sree Anjaneya Institute of Dental Sciences, Kozhikode	OR: Orthodontics and Dentofacial Orthopaedics	NR
209	4100678	10916	RDC: Royal Dental College, Palakkad	PR: Periodontology	SM
210	4100549	10984	EID: Educare Institute of Dental Sciences, Malappuram	PR: Periodontology	MU
211	4100437	10986	MED: MES Dental College, Malappuram	PO: Prosthodontics and Crown and Bridge	BX
212	4100816	10999	RDC: Royal Dental College, Palakkad	PR: Periodontology	SM
213	4100280	11004	KMD: KMCT Dental College, Kozhikode	CD: Conservative Dentistry and Endodontics	NR
214	4100107	11092	SVD: Sri. Sankara Dental College, Varkala	PR: Periodontology	SM
215	4100027	11263	MLD: Malabar Dental College, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	NR
216	4100169	11365	MED: MES Dental College, Malappuram	CD: Conservative Dentistry and Endodontics	NR
217	4100887	11556	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PR: Periodontology	BX
218	4100795	11643	KMD: KMCT Dental College, Kozhikode	CD: Conservative Dentistry and Endodontics	NR
219	4100162	11711	PSD: PSM College of Dental Science & Research, Trichur	OR: Orthodontics and Dentofacial Orthopaedics	NR
220	4100190	11776	SVD: Sri. Sankara Dental College, Varkala	PD: Pedodontics and Preventive Dentistry	EZ
221	4100555	11913	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	MR: Oral Medicine & Radiology	SM
222	4100326	11946	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	CD: Conservative Dentistry and Endodontics	NR
223	4100575	12145	PMD: Pushpagiri College of Dental Science, Thiruvalla	PR: Periodontology	EZ
224	4100138	12227	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	CD: Conservative Dentistry and Endodontics	NR
225	4100568	12503	EID: Educare Institute of Dental Sciences, Malappuram	PO: Prosthodontics and Crown and Bridge	MM
226	4100362	12582	KMD: KMCT Dental College, Kozhikode	MX: Oral & Maxillo Facial Surgery	LA
227	4100488	12659	SVD: Sri. Sankara Dental College, Varkala	PR: Periodontology	SC ##
228	4100279	12769	MBD: Mar Baselios Dental College, Ernakulam	MR: Oral Medicine & Radiology	SM
229	4100895	13054	KMD: KMCT Dental College, Kozhikode	PM: Oral Pathology & Microbiology	SM
230	4100136	13093	KMD: KMCT Dental College, Kozhikode	MX: Oral & Maxillo Facial Surgery	NR
231	4100072	13224	EID: Educare Institute of Dental Sciences, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	NR
232	4100477	13317	EID: Educare Institute of Dental Sciences, Malappuram	PR: Periodontology	MM
233	4100811	13335	PSD: PSM College of Dental Science & Research, Trichur	OR: Orthodontics and Dentofacial Orthopaedics	NR
234	4100163	13793	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PD: Pedodontics and Preventive Dentistry	NR
235	4100038	13840	KMD: KMCT Dental College, Kozhikode	PR: Periodontology	EZ
236	4100071	13880	SVD: Sri. Sankara Dental College, Varkala	OR: Orthodontics and Dentofacial Orthopaedics	NR
237	4100394	13966	MLD: Malabar Dental College, Malappuram	MR: Oral Medicine & Radiology	SM
238	4100650	14196	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	MR: Oral Medicine & Radiology	SM
239	4100110	14324	MED: MES Dental College, Malappuram	OR: Orthodontics and Dentofacial Orthopaedics	ST
240	4100861	14722	MBD: Mar Baselios Dental College, Ernakulam	PD: Pedodontics and Preventive Dentistry	KU
241	4100706	14765	ADC: Annoor Dental College, Ernakulam	PR: Periodontology	BH
242	4100868	14870	MBD: Mar Baselios Dental College, Ernakulam	MR: Oral Medicine & Radiology	SC
243	4100819	14963	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	PM: Oral Pathology & Microbiology	SM
244	4100865	15270	PMS: PMS College of Dental Sciences & Research Centre, Vattapara, TVPM	MR: Oral Medicine & Radiology	SC
245	4100291	15769	KMD: KMCT Dental College, Kozhikode	MR: Oral Medicine & Radiology	BH
246	4100742	15939	MLD: Malabar Dental College, Malappuram	CD: Conservative Dentistry and Endodontics	NR
247	4100675	16649	KMD: KMCT Dental College, Kozhikode	PM: Oral Pathology & Microbiology	SM
248	4100088	16672	MBD: Mar Baselios Dental College, Ernakulam	PR: Periodontology	EZ`;

const lines = rawData.split('\n');
const csvLines = ['college_name,college_code,specialty,category,cutoff_rank,year,counselling_body,degree,round,state,college_type,quota'];

lines.forEach(line => {
    const parts = line.split('\t');
    if (parts.length < 6) return;

    const rank = parts[2].trim();
    
    // College: Code: Name
    const collegePart = parts[3].trim();
    const collegeMatch = collegePart.match(/^([^:]+):\s*(.*)$/);
    const collegeCode = collegeMatch ? collegeMatch[1].trim() : '';
    const collegeName = collegeMatch ? collegeMatch[2].trim() : collegePart.trim();

    // Specialty: Code: Name
    const specialtyPart = parts[4].trim();
    const specialtyMatch = specialtyPart.match(/^([^:]+):\s*(.*)$/);
    const specialty = specialtyMatch ? specialtyMatch[2].trim() : specialtyPart.trim();

    // Category
    const category = parts[5].trim().replace(/[#\s]+$/, '');

    const year = '2024';
    const body = 'Kerala CEE';
    const degree = 'MDS';
    const round = 'Round 1';
    const state = 'Kerala';
    const collegeType = collegeName.toLowerCase().includes('govt') ? 'Government' : 'Self-Financing';
    const quota = 'State Quota';

    const q = v => `"${String(v).replace(/"/g, '""')}"`;
    csvLines.push([q(collegeName),q(collegeCode),q(specialty),q(category),rank,year,q(body),q(degree),q(round),q(state),q(collegeType),q(quota)].join(','));
});

fs.writeFileSync('dental_allotments.csv', csvLines.join('\n'));
console.log('CSV generated successfully.');
