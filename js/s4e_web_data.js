const newsItems=[
{
date:'October 25, 2023',
newsTitle:'ARCH interviews Prof. Oses',
message:'<a target="blank" href= "https://www.arch.jhu.edu/">Advanced Research Computing at Hopkins (ARCH)</a> writes a <a target="blank" href="https://www.arch.jhu.edu/research-spotlight-corey-oses/">Research Spotlight</a> on Prof. Oses and the Entropy for Energy Laboratory.',
pictures:['pic_logo_arch.png'],
},
{
date:'October 13, 2023',
newsTitle:'Keith and Will present at the 2023 IDIES Symposium',
message:'Keith and Will presented their research at the 2023 IDIES Symposium, impressive presentation, good job guys!',
pictures:['pic_kc_idies_2023.png', 'pic_ws_idies_2023.png'],
},
{
date:'September 20, 2023',
newsTitle:'The group recieves funding from Space@Hopkins',
message:'The S4E team is awarded a <a target="blank" href="https://hub.jhu.edu/announcements/2023/09/08/four-teams-awarded-spacehopkins-seed-grants/">Space@Hopkins</a> seed grant. Congratulations team!',
pictures:['pic_space_at_hopkins_logo.png'],
},
{
date:'September 1, 2023',
newsTitle:'The group welcomes Xuanhao Lin',
message:'Xuanhao comes from Guangdong Technion-Israel Institute of Technology where he studied Materials Science & Engineering. Welcome Xuanhao!',
pictures:['pic_welcome_grad_xlin.jpg'],
},
{
date:'August 1, 2023',
newsTitle:'The group welcomes Tianhao Li',
message:'Tianhao comes from Duke University where he studied Materials Science & Engineering. Welcome Tianhao!',
pictures:['pic_welcome_grad_tli.jpg'],
},
{
date:'August 1, 2023',
newsTitle:'Dakota presents at the 2023 Hopkins Summer Research Symposium',
message:'Dakota presented his research at the 2023 Hopkins Summer Research Symposium. Great job Dakota!',
pictures:['pic_dbraaten_research_symposium.jpg'],
},
{
date:'July 31, 2023',
newsTitle:'Katie presents at the 2023 MDSGC Student Research Symposium',
message:'Katie presented her research at the Maryland Space Grant Consortium\'s 2023 Student Research Symposium. Excellent work Katie!',
pictures:['pic_kcariaga_mdsgc_2023.jpg'],
},
{
date:'May 30, 2023',
newsTitle:'The group welcomes Dakota Braaten',
message:'Dakota is an undergraduate student at Kansas State University majoring in chemical engineering. Welcome Dakota!',
pictures:['pic_welcome_undergrad_dbraaten.jpg'],
},
{
date:'April 24, 2023',
newsTitle:'Katie Cariaga is named a 2023 MDSGC Summer Intern',
message:'Katie has been awarded a 2023 <a href="https://md.spacegrant.org/" target="_blank">Maryland Space Grant Consortium (MDSGC)</a> Summer Internship. <a href="https://energyinstitute.jhu.edu/revealing-the-secrets-that-may-unlock-the-potential-of-thermoelectric-materials/" target="_blank">Congratulations Katie! </a>',
pictures:['pic_mdsgc_logo.png'],
},
{
date:'April 3, 2023',
newsTitle:'Will Shiber is named a 2023 IDIES Summer Student Fellow',
message:'Will has been awarded a <a href="https://www.idies.jhu.edu/2023-idies-summer-student-fellows/" target="_blank">2023 Institute for Data Intensive Engineering and Science (IDIES) Summer Student Fellowship</a>. <a href = "https://hub.jhu.edu/announcements/2023/04/21/idies-announces-2023-summer-student-fellowship-ssf-recipients/" target="_blank">Congratulations Will! </a>',
pictures:['pic_idies_logo.png'],
},
{
date:'January 23, 2023',
newsTitle:'The group welcomes undergraduate Veric Tan',
message:'Veric is an undergraduate student majoring in materials science and engineering & cognitive science. Welcome Veric!',
pictures:['pic_welcome_undergrad_vtan.jpg'],
},
{
date:'January 23, 2023',
newsTitle:'The group welcomes undergraduate Katie Cariaga',
message:'Katie is an undergraduate student majoring in materials science and engineering & computer science. Welcome Katie!',
pictures:['pic_welcome_undergrad_kcariaga.jpg'],
},
{
date:'January 23, 2023',
newsTitle:'The group welcomes undergraduate Will Shiber',
message:'Will is an undergraduate student majoring in materials science and engineering & applied mathematics and statistics. Welcome Will!',
pictures:['pic_welcome_undergrad_wshiber.jpg'],
},
{
date:'October 19, 2022',
newsTitle:'DMSE Fall 2022 Seminar Series Speaker Prof. Reza Shahbazian-Yassar',
message:'Profs. Shahbazian-Yassar and Oses (host) following the seminar on &quot;In-Situ TEM Studies of Multi-principal Elemental Nanoparticles: Synthesis and Environmental Reactions&quot;.',
pictures:['pics_dmse_speaker_rshahbazian-yassar_2022.jpg'],
},
{
date:'October 05, 2022',
newsTitle:'Prof. Oses presents to JHU&apos;s Materials Graduate Society',
message:'Prof. Oses presents to graduate students on &quot;Materials Informatics with the aflow.org repositories&quot;.',
pictures:['pic_mgs_meet_greet_2022.jpg'],
},
{
date:'September 27, 2022',
newsTitle:'New group site published',
message:'The website is live. Visit here for the group&apos;s latest news.',
pictures:['pic_jhu_campus.jpg'],
},
{
date:'September 21, 2022',
newsTitle:'AFLOW School Workshop at JHU',
message:'Members of the AFLOW Team (JHU, Lift Technology, and Duke University) organized a morning workshop on topics in computational materials science. The recordings can be found at <a href="http://aflow.org/aflow-school/">aflow.org/aflow-school</a>. The event was hosted by the Department of Materials Science & Engineering and Advanced Research Computing at Hopkins (ARCH).',
pictures:['pic_aflow_school_2022.jpg'],
},
{
date:'August 15, 2022',
newsTitle:'The group welcomes PhD student Keith Clark',
message:'Keith comes from George Mason University where he studied Chemistry and Mathematics. Welcome Keith!',
pictures:['pic_welcome_grad_kclark.jpg'],
},
{
date:'August 15, 2022',
newsTitle:'Day One',
message:'The Entropy for Energy Laboratory launches at Johns Hopkins University.',
pictures:['pic_jhu_location.png'],
},
];

const publicationsJournal=[
{
titlePublication:'Influence of Processing on the Microstructural Evolution and Multiscale Hardness in Titanium Carbonitrides (TiCN) Produced via Field Assisted Sintering Technology',
authors:['D.&nbsp;E.&nbsp;Wolfe','C.&nbsp;M.&nbsp;DeSalle','C.&nbsp;J.&nbsp;Ryan','R.&nbsp;E.&nbsp;Slapikas','R.&nbsp;T.&nbsp;Sweny','R.&nbsp;J.&nbsp;Crealese','P.&nbsp;A.&nbsp;Kolonin','S.&nbsp;P.&nbsp;Stepanoff','A.&nbsp;Haque','S.&nbsp;Divilov','H.&nbsp;Eckert','C.&nbsp;Oses','M.&nbsp;Esters','D.&nbsp;W.&nbsp;Brenner','W.&nbsp;G.&nbsp;Fahrenholtz','J.-P.&nbsp;Maria','C.&nbsp;Toher','E.&nbsp;Zurek','S.&nbsp;Curtarolo'],
journal:'Materialia',
volume:'27',
pages:'101682',
year:2023,
status:'published',
doi:'10.1016/j.mtla.2023.101682',
filename:'10.1016_j.mtla.2023.101682',
},
{
titlePublication:'aflow++: a C++ framework for autonomous materials design',
authors:['C.&nbsp;Oses','M.&nbsp;Esters','D.&nbsp;Hicks','S.&nbsp;Divilov','H.&nbsp;Eckert','R.&nbsp;Friedrich','M.&nbsp;J.&nbsp;Mehl','A.&nbsp;Smolyanyuk','X.&nbsp;Campilongo','A.&nbsp;van&nbsp;de&nbsp;Walle','J.&nbsp;Schroers','A.&nbsp;G.&nbsp;Kusne','I.&nbsp;Takeuchi','E.&nbsp;Zurek','M.&nbsp;Buongiorno&nbsp;Nardelli','M.&nbsp;Fornari','Y.&nbsp;Lederer','O.&nbsp;Levy','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'Computational Materials Science',
volume:'217',
pages:'111889',
year:2023,
status:'published',
doi:'10.1016/j.commatsci.2022.111889',
arxiv:'2208.03052',
filename:'10.1016_j.commatsci.2022.111889',
},
{
titlePublication:'aflow.org: a web ecosystem of databases, software and tools',
authors:['M.&nbsp;Esters','C.&nbsp;Oses','S.&nbsp;Divilov','H.&nbsp;Eckert','R.&nbsp;Friedrich','D.&nbsp;Hicks','M.&nbsp;J.&nbsp;Mehl','F.&nbsp;Rose','A.&nbsp;Smolyanyuk','A.&nbsp;Calzolari','X.&nbsp;Campilongo','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'Computational Materials Science',
volume:'216',
pages:'111808',
year:2023,
status:'published',
doi:'10.1016/j.commatsci.2022.111808',
arxiv:'2207.09842',
filename:'10.1016_j.commatsci.2022.111808',
},
{
titlePublication:'QH-POCC: taming tiling entropy in thermal expansion calculations of disordered materials',
authors:['M.&nbsp;Esters','A.&nbsp;Smolyanyuk','C.&nbsp;Oses','D.&nbsp;Hicks','S.&nbsp;Divilov','H.&nbsp;Eckert','X.&nbsp;Campilongo','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
equalContributions:2,
journal:'Acta Materialia',
volume:'245',
pages:'118594',
year:2023,
status:'published',
doi:'10.1016/j.actamat.2022.118594',
arxiv:'2212.00919',
filename:'10.1016_j.actamat.2022.118594',
},
{
titlePublication:'Plasmonic high-entropy carbides',
authors:['A.&nbsp;Calzolari','C.&nbsp;Oses','C.&nbsp;Toher','M.&nbsp;Esters','X.&nbsp;Campilongo','S.&nbsp;P.&nbsp;Stepanoff','D.&nbsp;E.&nbsp;Wolfe','S.&nbsp;Curtarolo'],
journal:'Nature Communications',
volume:'13',
pages:'5993',
year:2022,
status:'published',
doi:'10.1038/s41467-022-33497-1',
filename:'10.1038_s41467-022-33497-1',
},
{
titlePublication:'The Microscopic Diamond Anvil Cell: Stabilization of Superhard, Superconducting Carbon Allotropes at Ambient Pressure',
authors:['X.&nbsp;Wang','D.&nbsp;M.&nbsp;Proserpio','C.&nbsp;Oses','C.&nbsp;Toher','S.&nbsp;Curtarolo','E.&nbsp;Zurek'],
journal:'Angewandte Chemie',
volume:'61',
number:32,
pages:'e202205129',
year:2022,
status:'published',
doi:'10.1002/anie.202205129',
arxiv:'2204.03231',
filename:'10.1002_anie.202205129',
},
{
titlePublication:'Roadmap on Machine Learning in Electronic Structure',
authors:['H.&nbsp;J.&nbsp;Kulik','T.&nbsp;Hammerschmidt','J.&nbsp;Schmidt','S.&nbsp;Botti','M.&nbsp;A.&nbsp;L.&nbsp;Marques','M.&nbsp;Boley','M.&nbsp;Scheffler','M.&nbsp;Todorovi&cacute;','P.&nbsp;Rinke','C.&nbsp;Oses','A.&nbsp;Smolyanyuk','S.&nbsp;Curtarolo','A.&nbsp;Tkatchenko','A.&nbsp;P.&nbsp;Bart&oacute;k','S.&nbsp;Manzhos','M.&nbsp;Ihara','T.&nbsp;Carrington','J.&nbsp;Behler','O.&nbsp;Isayev','M.&nbsp;Veit','A.&nbsp;Grisafi','J.&nbsp;Nigam','M.&nbsp;Ceriotti','K.&nbsp;T.&nbsp;Sch&uuml;tt','J.&nbsp;Westermayr','M.&nbsp;Gastegger','R.&nbsp;J.&nbsp;Maurer','B.&nbsp;Kalita','K.&nbsp;Burke','R.&nbsp;Nagai','R.&nbsp;Akashi','O.&nbsp;Sugino','J.&nbsp;Hermann','F.&nbsp;No&eacute;','S.&nbsp;Pilati','C.&nbsp;Draxl','M.&nbsp;Kuban','S.&nbsp;Rigamonti','M.&nbsp;Scheidgen','M.&nbsp;Esters','D.&nbsp;Hicks','C.&nbsp;Toher','P.&nbsp;V.&nbsp;Balachandran','I.&nbsp;Tamblyn','S.&nbsp;Whitelam','C.&nbsp;Bellinger','L.&nbsp;M.&nbsp;Ghiringhelli'],
journal:'Electronic Structure',
volume:'4',
number:2,
pages:'023004',
year:2022,
status:'published',
doi:'10.1088/2516-1075/ac572f',
filename:'10.1088_2516-1075_ac572f',
},
{
titlePublication:'Physics in the Machine: Integrating Physical Knowledge in Autonomous Phase-Mapping',
authors:['A.&nbsp;G.&nbsp;Kusne','A.&nbsp;McDannald','B.&nbsp;DeCost','C.&nbsp;Oses','C.&nbsp;Toher','S.&nbsp;Curtarolo','A.&nbsp;Mehta','I.&nbsp;Takeuchi'],
journal:'Frontiers in Physics',
volume:'10',
pages:'815863',
year:2022,
status:'published',
doi:'10.3389/fphy.2022.815863',
arxiv:'2111.07478',
filename:'10.3389_fphy.2022.815863',
},
{
titlePublication:'High-entropy ceramics: Propelling applications through disorder',
authors:['C.&nbsp;Toher','C.&nbsp;Oses','M.&nbsp;Esters','D.&nbsp;Hicks','G.&nbsp;N.&nbsp;Kotsonis','C.&nbsp;M.&nbsp;Rost','D.&nbsp;W.&nbsp;Brenner','J.-P.&nbsp;Maria','S.&nbsp;Curtarolo'],
journal:'MRS Bulletin',
volume:'47',
pages:'194&ndash;202',
year:2022,
status:'published',
doi:'10.1557/s43577-022-00281-x',
arxiv:'2111.11519',
filename:'10.1557_s43577-022-00281-x',
},
{
titlePublication:'Settling the matter of the role of vibrations in the stability of high-entropy carbides',
authors:['M.&nbsp;Esters','C.&nbsp;Oses','D.&nbsp;Hicks','M.&nbsp;J.&nbsp;Mehl','M.&nbsp;Jahn&aacute;tek','M.&nbsp;D.&nbsp;Hossain','J.-P.&nbsp;Maria','D.&nbsp;W.&nbsp;Brenner','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'Nature Communications',
volume:'12',
pages:'5747',
year:2021,
status:'published',
doi:'10.1038/s41467-021-25979-5',
filename:'10.1038_s41467-021-25979-5',
},
{
titlePublication:'Entropy Landscaping of High-Entropy Carbides',
authors:['M.&nbsp;D.&nbsp;Hossain','T.&nbsp;Borman','C.&nbsp;Oses','M.&nbsp;Esters','C.&nbsp;Toher','L.&nbsp;Feng','A.&nbsp;Kumar','W.&nbsp;G.&nbsp;Fahrenholtz','S.&nbsp;Curtarolo','D.&nbsp;W.&nbsp;Brenner','J.&nbsp;M.&nbsp;LeBeau','J.-P.&nbsp;Maria'],
journal:'Advanced Materials',
volume:'33',
number:42,
pages:'2102904',
year:2021,
status:'published',
doi:'10.1002/adma.202102904',
filename:'10.1002_adma.202102904',
},
{
titlePublication:'OPTIMADE: an API for exchanging materials data',
authors:['C.&nbsp;W.&nbsp;Andersen','R.&nbsp;Armiento','E.&nbsp;Blokhin','G.&nbsp;J.&nbsp;Conduit','S.&nbsp;Dwaraknath','M.&nbsp;L.&nbsp;Evans','&Aacute;.&nbsp;Fekete','A.&nbsp;Gopakumar','S.&nbsp;Gra&zcaron;ulis','A.&nbsp;Merkys','F.&nbsp;Mohamed','C.&nbsp;Oses','G.&nbsp;Pizzi','G.-M.&nbsp;Rignanese','M.&nbsp;Scheidgen','L.&nbsp;Talirz','C.&nbsp;Toher','D.&nbsp;Winston','R.&nbsp;Aversa','K.&nbsp;Choudhary','P.&nbsp;Colinet','S.&nbsp;Curtarolo','D.&nbsp;Di&nbsp;Stefano','C.&nbsp;Draxl','S.&nbsp;Er','M.&nbsp;Esters','M.&nbsp;Fornari','M.&nbsp;Giantomassi','M.&nbsp;Govoni','G.&nbsp;Hautier','V.&nbsp;Hegde','M.&nbsp;K.&nbsp;Horton','P.&nbsp;Huck','G.&nbsp;Huhs','J.&nbsp;Hummelsh&oslash;j','A.&nbsp;Kariryaa','B.&nbsp;Kozinsky','S.&nbsp;Kumbhar','M.&nbsp;Liu','N.&nbsp;Marzari','A.&nbsp;J.&nbsp;Morris','A.&nbsp;Mostofi','K.&nbsp;A.&nbsp;Persson','G.&nbsp;Petretto','T.&nbsp;Purcell','F.&nbsp;Ricci','F.&nbsp;Rose','M.&nbsp;Scheffler','D.&nbsp;Speckhard','M.&nbsp;Uhrin','A.&nbsp;Vaitkus','P.&nbsp;Villars','D.&nbsp;Waroquiers','C.&nbsp;Wolverton','M.&nbsp;Wu','X.&nbsp;Yang'],
equalContributions:18,
journal:'Scientific Data',
volume:'8',
pages:'217',
year:2021,
status:'published',
doi:'10.1038/s41597-021-00974-z',
arxiv:'2103.02068',
filename:'10.1038_s41597-021-00974-z',
},
{
titlePublication:'Automated coordination corrected enthalpies with AFLOW-CCE',
authors:['R.&nbsp;Friedrich','M.&nbsp;Esters','C.&nbsp;Oses','S.&nbsp;Ki','M.&nbsp;J.&nbsp;Brenner','D.&nbsp;Hicks','M.&nbsp;J.&nbsp;Mehl','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'Physical Review Materials',
volume:'5',
pages:'043803',
year:2021,
status:'published',
doi:'10.1103/PhysRevMaterials.5.043803',
arxiv:'2101.02724',
filename:'10.1103_PhysRevMaterials.5.043803',
},
{
titlePublication:'The AFLOW Library of Crystallographic Prototypes: Part 3',
authors:['D.&nbsp;Hicks','M.&nbsp;J.&nbsp;Mehl','M.&nbsp;Esters','C.&nbsp;Oses','O.&nbsp;Levy','G.&nbsp;L.&nbsp;W.&nbsp;Hart','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'Computational Materials Science',
volume:'199',
pages:'110450',
year:2021,
status:'published',
doi:'10.1016/j.commatsci.2021.110450',
arxiv:'2012.05961',
filename:'10.1016_j.commatsci.2021.110450',
},
{
titlePublication:'Tin-pest problem as a test of density functionals using high-throughput calculations',
authors:['M.&nbsp;J.&nbsp;Mehl','M.&nbsp;Ronquillo','D.&nbsp;Hicks','M.&nbsp;Esters','C.&nbsp;Oses','R.&nbsp;Friedrich','A.&nbsp;Smolyanyuk','E.&nbsp;Gossett','D.&nbsp;Finkenstadt','S.&nbsp;Curtarolo'],
journal:'Physical Review Materials',
volume:'5',
pages:'083608',
year:2021,
status:'published',
doi:'10.1103/PhysRevMaterials.5.083608',
arxiv:'2010.07168',
filename:'10.1103_PhysRevMaterials.5.083608',
},
{
titlePublication:'Carbon Stoichiometry and Mechanical Properties of High Entropy Carbides',
authors:['M.&nbsp;D.&nbsp;Hossain','T.&nbsp;Borman','A.&nbsp;Kumar','X.&nbsp;Chen','A.&nbsp;Khosravani','S.&nbsp;R.&nbsp;Kalidindi','E.&nbsp;A.&nbsp;Paisley','M.&nbsp;Esters','C.&nbsp;Oses','C.&nbsp;Toher','S.&nbsp;Curtarolo','J.&nbsp;M.&nbsp;LeBeau','D.&nbsp;W.&nbsp;Brenner','J.-P.&nbsp;Maria'],
equalContributions:2,
journal:'Acta Materialia',
volume:'215',
pages:'117051',
year:2021,
status:'published',
doi:'10.1016/j.actamat.2021.117051',
filename:'10.1016_j.actamat.2021.117051',
},
{
titlePublication:'On-the-fly Closed-loop Autonomous Materials Discovery via Bayesian Active Learning',
authors:['A.&nbsp;G.&nbsp;Kusne','H.&nbsp;Yu','C.&nbsp;Wu','H.&nbsp;Zhang','J.&nbsp;Hattrick-Simpers','B.&nbsp;DeCost','S.&nbsp;Sarker','C.&nbsp;Oses','C.&nbsp;Toher','S.&nbsp;Curtarolo','A.&nbsp;V.&nbsp;Davydov','R.&nbsp;Agarwal','L.&nbsp;A.&nbsp;Bendersky','M.&nbsp;Li','A.&nbsp;Mehta','I.&nbsp;Takeuchi'],
equalContributions:2,
journal:'Nature Communications',
volume:'11',
pages:'5966',
year:2020,
status:'published',
doi:'10.1038/s41467-020-19597-w',
arxiv:'2006.06141',
filename:'10.1038_s41467-020-19597-w',
},
{
titlePublication:'Discovery of novel high-entropy ceramics via machine learning',
authors:['K.&nbsp;Kaufmann','D.&nbsp;Maryanovsky','W.&nbsp;M.&nbsp;Mellor','C.&nbsp;Zhu','A.&nbsp;S.&nbsp;Rosengarten','T.&nbsp;J.&nbsp;Harrington','C.&nbsp;Oses','C.&nbsp;Toher','S.&nbsp;Curtarolo','K.&nbsp;S.&nbsp;Vecchio'],
journal:'npj Computational Materials',
volume:'6',
pages:'42',
year:2020,
status:'published',
doi:'10.1038/s41524-020-0317-6',
filename:'10.1038_s41524-020-0317-6',
},
{
titlePublication:'High-entropy ceramics',
authors:['C.&nbsp;Oses','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'Nature Reviews Materials',
volume:'5',
pages:'295&ndash;309',
year:2020,
status:'published',
doi:'10.1038/s41578-019-0170-8',
filename:'10.1038_s41578-019-0170-8',
},
{
titlePublication:'Metallic glasses for biodegradable implants',
authors:['D.&nbsp;C.&nbsp;Ford','D.&nbsp;Hicks','C.&nbsp;Oses','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'Acta Materialia',
volume:'176',
pages:'297&ndash;305',
year:2019,
status:'published',
doi:'10.1016/j.actamat.2019.07.008',
arxiv:'1902.00485',
filename:'10.1016_j.actamat.2019.07.008',
},
{
titlePublication:'Predicting Superhard Materials via a Machine Learning Informed Evolutionary Structure Search',
authors:['P.&nbsp;Avery','X.&nbsp;Wang','C.&nbsp;Oses','E.&nbsp;Gossett','D.&nbsp;M.&nbsp;Proserpio','C.&nbsp;Toher','S.&nbsp;Curtarolo','E.&nbsp;Zurek'],
journal:'npj Computational Materials',
volume:'5',
pages:'89',
year:2019,
status:'published',
doi:'10.1038/s41524-019-0226-8',
arxiv:'1906.05886',
filename:'10.1038_s41524-019-0226-8',
},
{
titlePublication:'Unavoidable disorder and entropy in multi-component systems',
authors:['C.&nbsp;Toher','C.&nbsp;Oses','D.&nbsp;Hicks','S.&nbsp;Curtarolo'],
journal:'npj Computational Materials',
volume:'5',
pages:'69',
year:2019,
status:'published',
doi:'10.1038/s41524-019-0206-z',
arxiv:'1906.01085',
filename:'10.1038_s41524-019-0206-z',
},
{
titlePublication:'Coordination corrected <i>ab initio</i> formation enthalpies',
authors:['R.&nbsp;Friedrich','D.&nbsp;Usanmaz','C.&nbsp;Oses','A.&nbsp;R.&nbsp;Supka','M.&nbsp;Fornari','M.&nbsp;Buongiorno&nbsp;Nardelli','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'npj Computational Materials',
volume:'5',
pages:'59',
year:2019,
status:'published',
doi:'10.1038/s41524-019-0192-1',
arxiv:'1811.08952',
filename:'10.1038_s41524-019-0192-1',
},
{
titlePublication:'AFLOW-QHA3P: Robust and automated method to compute thermodynamic properties of solids',
authors:['P.&nbsp;Nath','D.&nbsp;Usanmaz','D.&nbsp;Hicks','C.&nbsp;Oses','M.&nbsp;Fornari','M.&nbsp;Buongiorno&nbsp;Nardelli','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'Physical Review Materials',
volume:'3',
pages:'073801',
year:2019,
status:'published',
doi:'10.1103/PhysRevMaterials.3.073801',
arxiv:'1807.04669',
filename:'10.1103_PhysRevMaterials.3.073801',
},
{
titlePublication:'AFLOW-CHULL: Cloud-oriented platform for autonomous phase stability analysis',
authors:['C.&nbsp;Oses','E.&nbsp;Gossett','D.&nbsp;Hicks','F.&nbsp;Rose','M.&nbsp;J.&nbsp;Mehl','E.&nbsp;Perim','I.&nbsp;Takeuchi','S.&nbsp;Sanvito','M.&nbsp;Scheffler','Y.&nbsp;Lederer','O.&nbsp;Levy','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'Journal of Chemical Information and Modeling',
volume:'58',
number:12,
pages:'2477&ndash;2490',
year:2018,
status:'published',
doi:'10.1021/acs.jcim.8b00393',
arxiv:'1806.06901',
filename:'10.1021_acs.jcim.8b00393',
},
{
titlePublication:'Data-driven design of inorganic materials with the Automatic Flow Framework for Materials Discovery',
authors:['C.&nbsp;Oses','C.&nbsp;Toher','S.&nbsp;Curtarolo'],
journal:'MRS Bulletin',
volume:'43',
number:9,
pages:'670&ndash;675',
year:2018,
status:'published',
doi:'10.1557/mrs.2018.207',
arxiv:'1803.05035',
filename:'10.1557_mrs.2018.207',
},
{
titlePublication:'High-entropy high-hardness metal carbides discovered by entropy descriptors',
authors:['P.&nbsp;Sarker','T.&nbsp;J.&nbsp;Harrington','C.&nbsp;Toher','C.&nbsp;Oses','M.&nbsp;Samiee','J.-P.&nbsp;Maria','D.&nbsp;W.&nbsp;Brenner','K.&nbsp;S.&nbsp;Vecchio','S.&nbsp;Curtarolo'],
equalContributions:2,
journal:'Nature Communications',
volume:'9',
pages:'4980',
year:2018,
status:'published',
doi:'10.1038/s41467-018-07160-7',
filename:'10.1038_s41467-018-07160-7',
},
{
titlePublication:'Machine learning modeling of superconducting critical temperature',
authors:['V.&nbsp;Stanev','C.&nbsp;Oses','A.&nbsp;G.&nbsp;Kusne','E.&nbsp;Rodriguez','J.&nbsp;Paglione','S.&nbsp;Curtarolo','I.&nbsp;Takeuchi'],
journal:'npj Computational Materials',
volume:'4',
pages:'29',
year:2018,
status:'published',
doi:'10.1038/s41524-018-0085-8',
arxiv:'1709.02727',
filename:'10.1038_s41524-018-0085-8',
},
{
titlePublication:'AFLOW-ML: A RESTful API for machine-learning prediction of materials properties',
authors:['E.&nbsp;Gossett','C.&nbsp;Toher','C.&nbsp;Oses','O.&nbsp;Isayev','F.&nbsp;Legrain','F.&nbsp;Rose','E.&nbsp;Zurek','J.&nbsp;Carrete','N.&nbsp;Mingo','A.&nbsp;Tropsha','S.&nbsp;Curtarolo'],
journal:'Computational Materials Science',
volume:'152',
pages:'134&ndash;145',
year:2018,
status:'published',
doi:'10.1016/j.commatsci.2018.03.075',
arxiv:'1711.10744',
filename:'10.1016_j.commatsci.2018.03.075',
},
{
titlePublication:'AFLOW-SYM: platform for the complete, automatic and self-consistent symmetry analysis of crystals',
authors:['D.&nbsp;Hicks','C.&nbsp;Oses','E.&nbsp;Gossett','G.&nbsp;Gomez','R.&nbsp;H.&nbsp;Taylor','C.&nbsp;Toher','M.&nbsp;J.&nbsp;Mehl','O.&nbsp;Levy','S.&nbsp;Curtarolo'],
journal:'Acta Crystallographica Section A',
volume:'74',
pages:'184&ndash;203',
year:2018,
status:'published',
doi:'10.1107/S2053273318003066',
arxiv:'1802.07977',
filename:'10.1107_S2053273318003066',
},
{
titlePublication:'The structure and composition statistics of 6A binary and ternary structures',
authors:['A.&nbsp;Hever','C.&nbsp;Oses','S.&nbsp;Curtarolo','O.&nbsp;Levy','A.&nbsp;Natan'],
journal:'Inorganic Chemistry',
volume:'57',
number:2,
pages:'653&ndash;667',
year:2017,
status:'published',
doi:'10.1021/acs.inorgchem.7b02462',
arxiv:'1703.04497',
filename:'10.1021_acs.inorgchem.7b02462',
},
{
titlePublication:'AFLUX: The LUX materials search API for the AFLOW data repositories',
authors:['F.&nbsp;Rose','C.&nbsp;Toher','E.&nbsp;Gossett','C.&nbsp;Oses','M.&nbsp;Buongiorno&nbsp;Nardelli','M.&nbsp;Fornari','S.&nbsp;Curtarolo'],
journal:'Computational Materials Science',
volume:'137',
pages:'362&ndash;370',
year:2017,
status:'published',
doi:'10.1016/j.commatsci.2017.04.036',
arxiv:'1612.05130',
filename:'10.1016_j.commatsci.2017.04.036',
},
{
titlePublication:'Universal Fragment Descriptors for Predicting Properties of Inorganic Crystals',
authors:['O.&nbsp;Isayev','C.&nbsp;Oses','C.&nbsp;Toher','E.&nbsp;Gossett','S.&nbsp;Curtarolo','A.&nbsp;Tropsha'],
equalContributions:2,
journal:'Nature Communications',
volume:'8',
pages:'15679',
year:2017,
status:'published',
doi:'10.1038/ncomms15679',
arxiv:'1608.04782',
filename:'10.1038_ncomms15679',
},
{
titlePublication:'Combining the AFLOW GIBBS and elastic libraries to efficiently and robustly screening thermomechanical properties of solids',
authors:['C.&nbsp;Toher','C.&nbsp;Oses','J.&nbsp;J.&nbsp;Plata','D.&nbsp;Hicks','F.&nbsp;Rose','O.&nbsp;Levy','M.&nbsp;de&nbsp;Jong','M.&nbsp;Asta','M.&nbsp;Fornari','M.&nbsp;Buongiorno&nbsp;Nardelli','S.&nbsp;Curtarolo'],
journal:'Physical Review Materials',
volume:'1',
pages:'015401',
year:2017,
status:'published',
doi:'10.1103/PhysRevMaterials.1.015401',
arxiv:'1611.05714',
filename:'10.1103_PhysRevMaterials.1.015401',
},
{
titlePublication:'A Computational High-Throughput Search for New Ternary Superalloys',
authors:['C.&nbsp;Nyshadham','C.&nbsp;Oses','J.&nbsp;E.&nbsp;Hansen','I.&nbsp;Takeuchi','S.&nbsp;Curtarolo','G.&nbsp;L.&nbsp;W.&nbsp;Hart'],
journal:'Acta Materialia',
volume:'122',
pages:'438&ndash;447',
year:2017,
status:'published',
doi:'10.1016/j.actamat.2016.09.017',
arxiv:'1603.05967',
filename:'10.1016_j.actamat.2016.09.017',
},
{
titlePublication:'Accelerated Discovery of New Magnets in the Heusler Alloy Family',
authors:['S.&nbsp;Sanvito','C.&nbsp;Oses','J.&nbsp;Xue','A.&nbsp;Tiwari','M.&nbsp;&#381;ic','T.&nbsp;Archer','P.&nbsp;Tozman','M.&nbsp;Venkatesan','J.&nbsp;M.&nbsp;D.&nbsp;Coey','S.&nbsp;Curtarolo'],
journal:'Science Advances',
volume:'3',
number:4,
pages:'e1602241',
year:2017,
status:'published',
doi:'10.1126/sciadv.1602241',
filename:'10.1126_sciadv.1602241',
},
{
titlePublication:'High-Throughput Computation of Thermal Conductivity of High-Temperature Solid Phases: The Case of Oxide and Fluoride Perovskites',
authors:['A.&nbsp;van&nbsp;Roekeghem','J.&nbsp;Carrete','C.&nbsp;Oses','S.&nbsp;Curtarolo','N.&nbsp;Mingo'],
journal:'Physical Review X',
volume:'6',
number:4,
pages:'041061',
year:2016,
status:'published',
doi:'10.1103/PhysRevX.6.041061',
arxiv:'1606.03279',
filename:'10.1103_PhysRevX.6.041061',
},
{
titlePublication:'Modeling Off-Stoichiometry Materials with a High-Throughput Ab-Initio Approach',
authors:['K.&nbsp;Yang','C.&nbsp;Oses','S.&nbsp;Curtarolo'],
journal:'Chemistry of Materials',
volume:'28',
number:18,
pages:'6484&ndash;6492',
year:2016,
status:'published',
doi:'10.1021/acs.chemmater.6b01449',
arxiv:'1511.04373',
filename:'10.1021_acs.chemmater.6b01449',
},
{
titlePublication:'The AFLOW Standard for High-Throughput Materials Science Calculations',
authors:['C.&nbsp;E.&nbsp;Calderon','J.&nbsp;J.&nbsp;Plata','C.&nbsp;Toher','C.&nbsp;Oses','O.&nbsp;Levy','M.&nbsp;Fornari','A.&nbsp;Natan','M.&nbsp;J.&nbsp;Mehl','G.&nbsp;L.&nbsp;W.&nbsp;Hart','M.&nbsp;Buongiorno&nbsp;Nardelli','S.&nbsp;Curtarolo'],
journal:'Computational Materials Science',
volume:'108A',
pages:'233&ndash;238',
year:2015,
status:'published',
doi:'10.1016/j.commatsci.2015.07.019',
arxiv:'1506.00303',
filename:'10.1016_j.commatsci.2015.07.019',
},
{
titlePublication:'Materials Cartography: Representing and Mining Materials Space Using Structural and Electronic Fingerprints',
authors:['O.&nbsp;Isayev','D.&nbsp;Fourches','E.&nbsp;N.&nbsp;Muratov','C.&nbsp;Oses','K.&nbsp;M.&nbsp;Rasch','A.&nbsp;Tropsha','S.&nbsp;Curtarolo'],
journal:'Chemistry of Materials',
volume:'27',
number:3,
pages:'735&ndash;743',
year:2015,
status:'published',
doi:'10.1021/cm503507h',
arxiv:'1412.4096',
filename:'10.1021_cm503507h',
},
];

const publicationsBook=[
{
titlePublication:'Automated computation of materials properties',
authors:['C.&nbsp;Toher','C.&nbsp;Oses','S.&nbsp;Curtarolo'],
type:'chapter',
titleBook:'Materials Informatics: Methods, Tools and Applications',
chapter:7,
pages:'181&ndash;222',
year:2019,
status:'published',
doi:'10.1002/9783527802265.ch7',
url:'https://www.wiley.com/en-us/Materials+Informatics-p-9783527341214',
arxiv:'1805.05309',
filename:'10.1002_9783527802265.ch7',
},
{
titlePublication:'Machine learning and high-throughput approaches to magnetism',
authors:['S.&nbsp;Sanvito','M.&nbsp;&#381;ic','J.&nbsp;Nelson','T.&nbsp;Archer','C.&nbsp;Oses','S.&nbsp;Curtarolo'],
type:'chapter',
titleBook:'Handbook of Materials Modeling. Volume 2 Applications: Current and Emerging Materials',
year:2018,
status:'published',
doi:'10.1007/978-3-319-50257-1_108-1',
filename:'10.1007_978-3-319-50257-1_108-1',
},
{
titlePublication:'The AFLOW Fleet for Materials Discovery',
authors:['C.&nbsp;Toher','C.&nbsp;Oses','D.&nbsp;Hicks','E.&nbsp;Gossett','F.&nbsp;Rose','P.&nbsp;Nath','D.&nbsp;Usanmaz','D.&nbsp;C.&nbsp;Ford','E.&nbsp;Perim','C.&nbsp;E.&nbsp;Calderon','J.&nbsp;J.&nbsp;Plata','Y.&nbsp;Lederer','M.&nbsp;Jahn&aacute;tek','W.&nbsp;Setyawan','S.&nbsp;Wang','J.&nbsp;Xue','K.&nbsp;M.&nbsp;Rasch','R.&nbsp;V.&nbsp;Chepulskii','R.&nbsp;H.&nbsp;Taylor','G.&nbsp;Gomez','H.&nbsp;Shi','A.&nbsp;R.&nbsp;Supka','R.&nbsp;Al&nbsp;Rahal&nbsp;Al&nbsp;Orabi','P.&nbsp;Gopal','F.&nbsp;T.&nbsp;Cerasoli','L.&nbsp;Liyanage','H.&nbsp;Wang','I.&nbsp;Siloi','L.&nbsp;A.&nbsp;Agapito','C.&nbsp;Nyshadham','G.&nbsp;L.&nbsp;W.&nbsp;Hart','J.&nbsp;Carrete','F.&nbsp;Legrain','N.&nbsp;Mingo','E.&nbsp;Zurek','O.&nbsp;Isayev','A.&nbsp;Tropsha','S.&nbsp;Sanvito','R.&nbsp;M.&nbsp;Hanson','I.&nbsp;Takeuchi','M.&nbsp;J.&nbsp;Mehl','A.&nbsp;N.&nbsp;Kolmogorov','K.&nbsp;Yang','P.&nbsp;D&apos;Amico','A.&nbsp;Calzolari','M.&nbsp;Costa','R.&nbsp;De&nbsp;Gennaro','M.&nbsp;Buongiorno&nbsp;Nardelli','M.&nbsp;Fornari','O.&nbsp;Levy','S.&nbsp;Curtarolo'],
type:'chapter',
titleBook:'Handbook of Materials Modeling. Volume 1 Methods: Theory and Modeling',
pages:'1&ndash;28',
year:2018,
status:'published',
doi:'10.1007/978-3-319-42913-7_63-2',
arxiv:'1712.00422',
filename:'10.1007_978-3-319-42913-7_63-2',
},
];
