/*
Name:       Eric Jiang, Melina Muthuswamy, Kevin Yan
Course:     CSE
Assignment:   CSE Year-long Project
Purpose:      Provide a functional website that users can utilize
        to search news pertinent to each state.
*/

//  JSON data for each state
var US = [
     
    {
       "Name": "Alaska",
       "ElectoralVotes": 3,
       "Population": "626,932",
       "TotalArea": "663,267.26",
       "Water Area": "91,316.00",
       "Land Area": "571,951.26",
       "Density per Square Mile of Land Area": 1.1,
       "Capital": "Juneau",
       "Abbreviation": "AK",
       "woeid":'871220997885751297'
    },
    {
       "Name": "Hawaii",
       "ElectoralVotes": 4,
       "Population": "1,211,537",
       "TotalArea": "10,930.98",
       "Water Area": "4,508.36",
       "Land Area": "6,422.62",
       "Density per Square Mile of Land Area": 188.6,
       "Capital": "Honolulu",
       "Abbreviation": "HI",
       "woeid":'871221118161612800'
    },
    {
       "Name": "Alabama",
       "ElectoralVotes": 9,
       "Population": "4,447,100",
       "TotalArea": "52,419.02",
       "Water Area": "1,675.01",
       "Land Area": "50,744.00",
       "Density per Square Mile of Land Area": 87.6,
       "Capital": "Montgomery",
       "Abbreviation": "AL",
       "woeid":'871221259673141249'
    },
    {
       "Name": "Arkansas",
       "ElectoralVotes": 6,
       "Population": "2,673,400",
       "TotalArea": "53,178.62",
       "Water Area": "1,110.45",
       "Land Area": "52,068.17",
       "Density per Square Mile of Land Area": 51.3,
       "Capital": "Little Rock",
       "Abbreviation": "AR",
       "woeid":'871221342959435776'
    },
    {
       "Name": "Arizona",
       "ElectoralVotes": 10,
       "Population": "5,130,632",
       "TotalArea": "113,998.30",
       "Water Area": "363.73",
       "Land Area": "113,634.57",
       "Density per Square Mile of Land Area": 45.2,
       "Capital": "Pheonix",
       "Abbreviation": "AZ",
       "woeid":'871221429253148673'
    },
    {
       "Name": "California",
       "ElectoralVotes": 55,
       "Population": "33,871,648",
       "TotalArea": "163,695.57",
       "Water Area": "7,736.23",
       "Land Area": "155,959.34",
       "Density per Square Mile of Land Area": 217.2,
       "Capital": "Sacramento",
       "Abbreviation": "CA",
       "woeid":'871221644207042561'
    },
    {
       "Name": "Colorado",
       "ElectoralVotes": 9,
       "Population": "4,301,261",
       "TotalArea": "104,093.57",
       "Water Area": "376.04",
       "Land Area": "103,717.53",
       "Density per Square Mile of Land Area": 41.5,
       "Capital": "Denver",
       "Abbreviation": "CO",
       "woeid":'871222113411190784'
    },
    {
       "Name": "Connecticut",
       "ElectoralVotes": 7,
       "Population": "3,405,565",
       "TotalArea": "5,543.33",
       "Water Area": "698.53",
       "Land Area": "4,844.80",
       "Density per Square Mile of Land Area": 702.9,
       "Capital": "Hartford",
       "Abbreviation": "CT",
       "woeid":'871222190011809793'
    },
    {
       "Name": "Delaware",
       "ElectoralVotes": 3,
       "Population": "783,600",
       "TotalArea": "2,489.27",
       "Water Area": "535.71",
       "Land Area": "1,953.56",
       "Density per Square Mile of Land Area": 401.1,
       "Capital": "Dover",
       "Abbreviation": "DE",
       "woeid":'871222250481090560'
    },
    {
       "Name": "Florida",
       "ElectoralVotes": 27,
       "Population": "15,982,378",
       "TotalArea": "65,754.59",
       "Water Area": "11,827.77",
       "Land Area": "53,926.82",
       "Density per Square Mile of Land Area": 296.4,
       "Capital": "Tallahassee",
       "Abbreviation": "FL",
       "woeid":'871222301055995904'
    },
    {
       "Name": "Georgia",
       "ElectoralVotes": 15,
       "Population": "8,186,453",
       "TotalArea": "59,424.77",
       "Water Area": "1,518.63",
       "Land Area": "57,906.14",
       "Density per Square Mile of Land Area": 141.4,
       "Capital": "Atlanta",
       "Abbreviation": "GA",
       "woeid":'871222451576983552'
    },
    {
       "Name": "Iowa",
       "ElectoralVotes": 7,
       "Population": "2,926,324",
       "TotalArea": "56,271.55",
       "Water Area": "402.2",
       "Land Area": "55,869.36",
       "Density per Square Mile of Land Area": 52.4,
       "Capital": "Des Moines",
       "Abbreviation": "IA",
       "woeid":'871222830301622273'
    },
    {
       "Name": "Idaho",
       "ElectoralVotes": 4,
       "Population": "1,293,953",
       "TotalArea": "83,570.08",
       "Water Area": "822.87",
       "Land Area": "82,747.21",
       "Density per Square Mile of Land Area": 15.6,
       "Capital": "Boise ",
       "Abbreviation": "ID",
       "woeid":'871222571487854593'
    },
    {
       "Name": "Illinois",
       "ElectoralVotes": 21,
       "Population": "12,419,293",
       "TotalArea": "57,914.38",
       "Water Area": "2,330.79",
       "Land Area": "55,583.58",
       "Density per Square Mile of Land Area": 223.4,
       "Capital": "Springfield",
       "Abbreviation": "IL",
       "woeid":'871222621593116677'
    },
    {
       "Name": "Indiana",
       "ElectoralVotes": 11,
       "Population": "6,080,485",
       "TotalArea": "36,417.73",
       "Water Area": "550.83",
       "Land Area": "35,866.90",
       "Density per Square Mile of Land Area": 169.5,
       "Capital": "Indianapolis",
       "Abbreviation": "IN",
       "woeid":'871222743890526209'
    },
    {
       "Name": "Kansas",
       "ElectoralVotes": 6,
       "Population": "2,688,418",
       "TotalArea": "82,276.84",
       "Water Area": "461.96",
       "Land Area": "81,814.88",
       "Density per Square Mile of Land Area": 32.9,
       "Capital": "Topeka",
       "Abbreviation": "KS",
       "woeid":'871222878351613952'
    },
    {
       "Name": "Kentucky",
       "ElectoralVotes": 8,
       "Population": "4,041,769",
       "TotalArea": "40,409.02",
       "Water Area": "680.85",
       "Land Area": "39,728.18",
       "Density per Square Mile of Land Area": 101.7,
       "Capital": "Frankfort",
       "Abbreviation": "KY",
       "woeid":'871222929786380289'
    },
    {
       "Name": "Louisiana",
       "ElectoralVotes": 9,
       "Population": "4,468,976",
       "TotalArea": "51,839.70",
       "Water Area": "8,277.85",
       "Land Area": "43,561.85",
       "Density per Square Mile of Land Area": 102.6,
       "Capital": "Baton Rouge",
       "Abbreviation": "LA",
       "woeid":'871223336516321282'
    },
    {
       "Name": "Massachusetts",
       "ElectoralVotes": 12,
       "Population": "6,349,097",
       "TotalArea": "10,554.57",
       "Water Area": "2,714.55",
       "Land Area": "7,840.02",
       "Density per Square Mile of Land Area": 809.8,
       "Capital": "Boston",
       "Abbreviation": "MA",
       "woeid":'871223547846438914'
    },
    {
       "Name": "Maryland",
       "ElectoralVotes": 10,
       "Population": "5,296,486",
       "TotalArea": "12,406.68",
       "Water Area": "2,632.86",
       "Land Area": "9,773.82",
       "Density per Square Mile of Land Area": 541.9,
       "Capital": "Annapolis",
       "Abbreviation": "MD",
       "woeid":'871223487024771072'
    },
    {
       "Name": "Maine",
       "ElectoralVotes": 4,
       "Population": "1,274,923",
       "TotalArea": "35,384.65",
       "Water Area": "4,523.10",
       "Land Area": "30,861.55",
       "Density per Square Mile of Land Area": 41.3,
       "Capital": "Augusta",
       "Abbreviation": "ME",
       "woeid":'871223414572318720'
    },
    {
       "Name": "Michigan",
       "ElectoralVotes": 17,
       "Population": "9,938,444",
       "TotalArea": "96,716.11",
       "Water Area": "39,912.28",
       "Land Area": "56,803.82",
       "Density per Square Mile of Land Area": 175,
       "Capital": "Lansing",
       "Abbreviation": "MI",
       "woeid":'871223611528540160'
    },
    {
       "Name": "Minnesota",
       "ElectoralVotes": 10,
       "Population": "4,919,479",
       "TotalArea": "86,938.87",
       "Water Area": "7,328.79",
       "Land Area": "79,610.08",
       "Density per Square Mile of Land Area": 61.8,
       "Capital": "Saint Paul",
       "Abbreviation": "MN",
       "woeid":'871223682965884929'
    },
    {
       "Name": "Missouri",
       "ElectoralVotes": 11,
       "Population": "5,595,211",
       "TotalArea": "69,704.31",
       "Water Area": "818.39",
       "Land Area": "68,885.93",
       "Density per Square Mile of Land Area": 81.2,
       "Capital": "Jefferson City",
       "Abbreviation": "MO",
       "woeid":'871223820958535681'
    },
    {
       "Name": "Mississippi",
       "ElectoralVotes": 6,
       "Population": "2,844,658",
       "TotalArea": "48,430.19",
       "Water Area": "1,523.24",
       "Land Area": "46,906.96",
       "Density per Square Mile of Land Area": 60.6,
       "Capital": "Jackson",
       "Abbreviation": "MS",
       "woeid":'871223741862342656'
    },
       {
       "Name": "Montana",
       "ElectoralVotes": 3,
       "Population": "902,195",
       "TotalArea": "147,042.40",
       "Water Area": "1,489.96",
       "Land Area": "145,552.43",
       "Density per Square Mile of Land Area": 6.2,
       "Capital": "Helena",
       "Abbreviation": "MT",
       "woeid": '871218063420665856'

          
    },
    {
       "Name": "North Carolina",
       "ElectoralVotes": 15,
       "Population": "8,049,313",
       "TotalArea": "53,818.51",
       "Water Area": "5,107.63",
       "Land Area": "48,710.88",
       "Density per Square Mile of Land Area": 165.2,
       "Capital": "Raleigh",
       "Abbreviation": "NC",
       "woeid": '871218848955084801'
          
    },
    {
       "Name": "North Dakota",
       "ElectoralVotes": 3,
       "Population": "642,200",
       "TotalArea": "70,699.79",
       "Water Area": "1,723.86",
       "Land Area": "68,975.93",
       "Density per Square Mile of Land Area": 9.3,
       "Capital": "Bismark",
       "Abbreviation": "ND",
       "woeid": '871219029175881728'

    },
    {
       "Name": "Nebraska",
       "ElectoralVotes": 5,
       "Population": "1,711,263",
       "TotalArea": "77,353.73",
       "Water Area": "481.31",
       "Land Area": "76,872.41",
       "Density per Square Mile of Land Area": 22.3,
       "Capital": "Lincoln",
       "Abbreviation": "NE",
       "woeid": '871219204636246016'          
    },
    {
       "Name": "New Hampshire",
       "ElectoralVotes": 4,
       "Population": "1,235,786",
       "TotalArea": "9,349.94",
       "Water Area": "381.84",
       "Land Area": "8,968.10",
       "Density per Square Mile of Land Area": 137.8,
       "Capital": "Concord",
       "Abbreviation": "NH",
       "woeid" :  '871219789288660992'          
    },
    {
       "Name": "New Jersey",
       "ElectoralVotes": 15,
       "Population": "8,414,350",
       "TotalArea": "8,721.30",
       "Water Area": "1,303.96",
       "Land Area": "7,417.34",
       "Density per Square Mile of Land Area": 1134.4,
       "Capital": "Trenton",
       "Abbreviation": "NJ",
       "woeid": '871219996973813761'
          
    },	
    {
       "Name": "New Mexico",
       "ElectoralVotes": 5,
       "Population": "1,819,046",
       "TotalArea": "121,589.48",
       "Water Area": "233.96",
       "Land Area": "121,355.53",
       "Density per Square Mile of Land Area": 15,
       "Capital": "Santa Fe",
       "Abbreviation": "NM",
       "woeid":  '871220166268530689'
    },
    {
       "Name": "Nevada",
       "ElectoralVotes": 5,
       "Population": "1,998,257",
       "TotalArea": "110,560.71",
       "Water Area": "734.71",
       "Land Area": "109,825.99",
       "Density per Square Mile of Land Area": 18.2,
       "Capital": "Carson City",
       "Abbreviation": "NV",
       "woeid": '871220358107598851'

          
    },
    {
       "Name": "New York",
       "ElectoralVotes": 31,
       "Population": "18,976,457",
       "TotalArea": "54,556.00",
       "Water Area": "7,342.22",
       "Land Area": "47,213.79",
       "Density per Square Mile of Land Area": 401.9,
       "Capital": "Albany",
       "Abbreviation": "NY",
       "woeid":  '871220491830296577'

          
    },
    {
       "Name": "Ohio",
       "ElectoralVotes": 20,
       "Population": "11,353,140",
       "TotalArea": "44,824.90",
       "Water Area": "3,876.53",
       "Land Area": "40,948.38",
       "Density per Square Mile of Land Area": 277.3,
       "Capital": "Columbus",
       "Abbreviation": "OH",
       "woeid": '871220666774802432'
    },
    {
       "Name": "Oklahoma",
       "ElectoralVotes": 7,
       "Population": "3,450,654",
       "TotalArea": "69,898.19",
       "Water Area": "1,231.13",
       "Land Area": "68,667.06",
       "Density per Square Mile of Land Area": "50.3",
       "Capital": "Okalhoma City",
       "Abbreviation": "OK",
       "woeid":'871221072376606720'

    },
    {
       "Name": "Oregon",
       "ElectoralVotes": 7,
       "Population": "3,421,399",
       "TotalArea": "98,380.64",
       "Water Area": "2,383.85",
       "Land Area": "95,996.79",
       "Density per Square Mile of Land Area": 35.6,
       "Capital": "Salem",
       "Abbreviation": "OR",
       "woeid":'871221227356028928'          
    },
    {
       "Name": "Pennsylvania",
       "ElectoralVotes": 21,
       "Population": "12,281,054",
       "TotalArea": "46,055.24",
       "Water Area": "1,238.63",
       "Land Area": "44,816.61",
       "Density per Square Mile of Land Area": 274,
       "Capital": "Harrisburg",
       "Abbreviation": "PA",
       "woeid":'871221415671934976'          
    },
    {
       "Name": "Rhode Island",
       "ElectoralVotes": 4,
       "Population": "1,048,319",
       "TotalArea": "1,545.05",
       "Water Area": "500.12",
       "Land Area": "1,044.93",
       "Density per Square Mile of Land Area": 1003.2,
       "Capital": "Providence",
       "Abbreviation": "RI",
       "woeid":'871221654449467396'          
    },
    {
       "Name": "South Carolina",
       "ElectoralVotes": 8,
       "Population": "4,012,012",
       "TotalArea": "32,020.20",
       "Water Area": "1,910.73",
       "Land Area": "30,109.47",
       "Density per Square Mile of Land Area": 133.2,
       "Capital": "Columbia",
       "Abbreviation": "SC",
       "woeid": '871221813166174208'          
    },
    {
       "Name": "South Dakota",
       "ElectoralVotes": 3,
       "Population": "754,844",
       "TotalArea": "77,116.49",
       "Water Area": "1,231.85",
       "Land Area": "75,884.64",
       "Density per Square Mile of Land Area": 9.9,
       "Capital": "Pierre",
       "Abbreviation": "SD",
       "woeid":'871222053189406721'          
    },
    {
       "Name": "Tennessee",
       "ElectoralVotes": 11,
       "Population": "5,689,283",
       "TotalArea": "42,143.27",
       "Water Area": "926.15",
       "Land Area": "41,217.12",
       "Density per Square Mile of Land Area": 138,
       "Capital": "Nashville",
       "Abbreviation": "TN",
       "woeid": '871222189177090049'          
    },
    {
       "Name": "Texas",
       "ElectoralVotes": 34,
       "Population": "20,851,820",
       "TotalArea": "268,580.82",
       "Water Area": "6,783.70",
       "Land Area": "261,797.12",
       "Density per Square Mile of Land Area": 79.6,
       "Capital": "Austin",
       "Abbreviation": "TX",
       "woeid": '871222337915551744'          
    },
    {
       "Name": "Utah",
       "ElectoralVotes": 5,
       "Population": "2,233,169",
       "TotalArea": "84,898.83",
       "Water Area": "2,755.18",
       "Land Area": "82,143.65",
       "Density per Square Mile of Land Area": 27.2,
       "Capital": "Salt Lake City",
       "Abbreviation": "UT",
       "woeid":'871222588290281472'          
    },
    {
       "Name": "Virginia",
       "ElectoralVotes": 13,
       "Population": "7,078,515",
       "TotalArea": "42,774.20",
       "Water Area": "3,180.13",
       "Land Area": "39,594.07",
       "Density per Square Mile of Land Area": 178.8,
       "Capital": "Richmond",
       "Abbreviation": "VA",
       "woeid":'871222773762469888'          
    },
    {
       "Name": "Vermont",
       "ElectoralVotes": 3,
       "Population": "608,827",
       "TotalArea": "9,614.26",
       "Water Area": "364.7",
       "Land Area": "9,249.56",
       "Density per Square Mile of Land Area": 65.8,
       "Capital": "Montpelier",
       "Abbreviation": "VT",
       "woeid":'871222928599392257'          
    },
    {
       "Name": "Washington",
       "ElectoralVotes": 11,
       "Population": "5,894,121",
       "TotalArea": "71,299.64",
       "Water Area": "4,755.58",
       "Land Area": "66,544.06",
       "Density per Square Mile of Land Area": 88.6,
       "Capital": "Olympia",
       "Abbreviation": "WA",
       "woeid":'871223118693576704'          
    },
    {
       "Name": "Wisconsin",
       "ElectoralVotes": 10,
       "Population": "5,363,675",
       "TotalArea": "65,497.82",
       "Water Area": "11,187.72",
       "Land Area": "54,310.10",
       "Density per Square Mile of Land Area": 98.8,
       "Capital": "Madison",
       "Abbreviation": "WI",
       "woeid": '871223233537871872'          
    },
    {
       "Name": "West Virginia",
       "ElectoralVotes": 5,
       "Population": "1,808,344",
       "TotalArea": "24,229.76",
       "Water Area": "152.03",
       "Land Area": "24,077.73",
       "Density per Square Mile of Land Area": 75.1,
       "Capital": "Charleston",
       "Abbreviation": "WV",
       "woeid":'871223421933322240'       
    },
    {
       "Name": "Wyoming",
       "ElectoralVotes": "3",
       "Population": "493,782",
       "TotalArea": "97,813.56",
       "Water Area": "713.16",
       "Land Area": "97,100.40",
       "Density per Square Mile of Land Area": "5.1",
       "Capital": "Cheyenne",
       "Abbreviation": "WY",
       "woeid": '871223677836288000'          
     },
     {
        "Name": "Washington DC",
        "Capital": "N/A",
        "Abbreviation": "DC",
        "Population": "672,228",
        "ElectoralVotes": "N/A",
        "TotalArea": "68.34",
        "woeid": "871351864608141312"
      }
  ];



// Draw the svg map
var rsr = Raphael('map', '959', '593'); 
var frames = rsr.path("M215,493v55l36,45 M0,425h147l68,68h85l54,54v46");
frames.attr({id: 'frames',fill: 'none',stroke: '#A9A9A9',"stroke-width": '2','stroke-opacity': '1'});
frames.data('id', 'frames'); 
var outlines = rsr.set();

var AK = rsr.path("M161.1,453.7l-0.3,85.4l1.6,1l3.1,0.2l1.5-1.1h2.6l0.2,2.9l7,6.8l0.5,2.6l3.4-1.9l0.6-0.2l0.3-3.1 l1.5-1.6l1.1-0.2l1.9-1.5l3.1,2.1l0.6,2.9l1.9,1.1l1.1,2.4l3.9,1.8l3.4,6l2.7,3.9l2.3,2.7l1.5,3.7l5,1.8l5.2,2.1l1,4.4l0.5,3.1 l-1,3.4l-1.8,2.3l-1.6-0.8l-1.5-3.1l-2.7-1.5l-1.8-1.1l-0.8,0.8l1.5,2.7l0.2,3.7l-1.1,0.5l-1.9-1.9l-2.1-1.3l0.5,1.6l1.3,1.8 l-0.8,0.8c0,0-0.8-0.3-1.3-1c-0.5-0.6-2.1-3.4-2.1-3.4l-1-2.3c0,0-0.3,1.3-1,1c-0.6-0.3-1.3-1.5-1.3-1.5l1.8-1.9l-1.5-1.5v-5h-0.8 l-0.8,3.4l-1.1,0.5l-1-3.7l-0.6-3.7l-0.8-0.5l0.3,5.7v1.1l-1.5-1.3l-3.6-6l-2.1-0.5l-0.6-3.7l-1.6-2.9l-1.6-1.1v-2.3l2.1-1.3 l-0.5-0.3l-2.6,0.6l-3.4-2.4l-2.6-2.9l-4.8-2.6l-4-2.6l1.3-3.2v-1.6l-1.8,1.6l-2.9,1.1l-3.7-1.1l-5.7-2.4h-5.5l-0.6,0.5l-6.5-3.9 l-2.1-0.3l-2.7-5.8l-3.6,0.3l-3.6,1.5l0.5,4.5l1.1-2.9l1,0.3l-1.5,4.4l3.2-2.7l0.6,1.6l-3.9,4.4l-1.3-0.3l-0.5-1.9l-1.3-0.8 l-1.3,1.1l-2.7-1.8l-3.1,2.1l-1.8,2.1l-3.4,2.1l-4.7-0.2l-0.5-2.1l3.7-0.6v-1.3l-2.3-0.6l1-2.4l2.3-3.9v-1.8l0.2-0.8l4.4-2.3l1,1.3 h2.7l-1.3-2.6l-3.7-0.3l-5,2.7l-2.4,3.4l-1.8,2.6l-1.1,2.3l-4.2,1.5l-3.1,2.6l-0.3,1.6l2.3,1l0.8,2.1l-2.7,3.2l-6.5,4.2l-7.8,4.2 l-2.1,1.1l-5.3,1.1l-5.3,2.3l1.8,1.3l-1.5,1.5l-0.5,1.1l-2.7-1l-3.2,0.2l-0.8,2.3h-1l0.3-2.4l-3.6,1.3l-2.9,1l-3.4-1.3l-2.9,1.9 h-3.2l-2.1,1.3l-1.6,0.8l-2.1-0.3l-2.6-1.1l-2.3,0.6l-1,1l-1.6-1.1v-1.9l3.1-1.3l6.3,0.6l4.4-1.6l2.1-2.1l2.9-0.6l1.8-0.8l2.7,0.2 l1.6,1.3l1-0.3l2.3-2.7l3.1-1l3.4-0.6l1.3-0.3l0.6,0.5h0.8l1.3-3.7l4-1.5l1.9-3.7l2.3-4.5l1.6-1.5l0.3-2.6l-1.6,1.3l-3.4,0.6 l-0.6-2.4l-1.3-0.3l-1,1l-0.2,2.9l-1.5-0.2l-1.5-5.8l-1.3,1.3l-1.1-0.5l-0.3-1.9l-4,0.2l-2.1,1.1l-2.6-0.3l1.5-1.5l0.5-2.6 l-0.6-1.9l1.5-1l1.3-0.2l-0.6-1.8v-4.4l-1-1l-0.8,1.5h-6.1l-1.5-1.3l-0.6-3.9l-2.1-3.6v-1l2.1-0.8l0.2-2.1l1.1-1.1l-0.8-0.5 l-1.3,0.5l-1.1-2.7l1-5l4.5-3.2l2.6-1.6l1.9-3.7l2.7-1.3l2.6,1.1l0.3,2.4l2.4-0.3l3.2-2.4l1.6,0.6l1,0.6h1.6l2.3-1.3l0.8-4.4 c0,0,0.3-2.9,1-3.4c0.6-0.5,1-1,1-1l-1.1-1.9l-2.6,0.8l-3.2,0.8l-1.9-0.5l-3.6-1.8l-5-0.2l-3.6-3.7l0.5-3.9l0.6-2.4l-2.1-1.8 l-1.9-3.7l0.5-0.8l6.8-0.5h2.1l1,1h0.6l-0.2-1.6l3.9-0.6l2.6,0.3l1.5,1.1l-1.5,2.1l-0.5,1.5l2.7,1.6l5,1.8l1.8-1l-2.3-4.4l-1-3.2 l1-0.8l-3.4-1.9l-0.5-1.1l0.5-1.6l-0.8-3.9l-2.9-4.7l-2.4-4.2l2.9-1.9h3.2l1.8,0.6l4.2-0.2l3.7-3.6l1.1-3.1l3.7-2.4l1.6,1l2.7-0.6 l3.7-2.1l1.1-0.2l1,0.8l4.5-0.2l2.7-3.1h1.1l3.6,2.4l1.9,2.1l-0.5,1.1l0.6,1.1l1.6-1.6l3.9,0.3l0.3,3.7l1.9,1.5l7.1,0.6l6.3,4.2 l1.5-1l5.2,2.6l2.1-0.6l1.9-0.8l4.8,1.9L161.1,453.7z M46,482.6l2.1,5.3l-0.2,1l-2.9-0.3l-1.8-4l-1.8-1.5H39l-0.2-2.6l1.8-2.4 l1.1,2.4l1.5,1.5L46,482.6z M43.4,516.1l3.7,0.8l3.7,1l0.8,1l-1.6,3.7l-3.1-0.2l-3.4-3.6L43.4,516.1z M22.7,502l1.1,2.6 l1.1,1.6l-1.1,0.8l-2.1-3.1V502H22.7z M9,575.1l3.4-2.3l3.4-1l2.6,0.3l0.5,1.6l1.9,0.5l1.9-1.9l-0.3-1.6l2.7-0.6l2.9,2.6 l-1.1,1.8l-4.4,1.1l-2.7-0.5l-3.7-1.1l-4.4,1.5l-1.6,0.3L9,575.1z M57.9,570.6l1.6,1.9l2.1-1.6l-1.5-1.3L57.9,570.6z M60.8,573.6l1.1-2.3l2.1,0.3l-0.8,1.9H60.8z M84.4,571.7l1.5,1.8l1-1.1l-0.8-1.9L84.4,571.7z M93.2,559.2l1.1,5.8l2.9,0.8 l5-2.9l4.4-2.6l-1.6-2.4l0.5-2.4l-2.1,1.3l-2.9-0.8l1.6-1.1l1.9,0.8l3.9-1.8l0.5-1.5l-2.4-0.8l0.8-1.9l-2.7,1.9l-4.7,3.6l-4.8,2.9L93.2,559.2z M135.5,539.4l2.4-1.5l-1-1.8l-1.8,1L135.5,539.4z").attr({id: 'AK',fill: '#F7DC8A',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'AK'); 
AK.data({'id':0});

var HI = rsr.path("M233.1,519.3l1.9-3.6l2.3-0.3l0.3,0.8l-2.1,3.1H233.1z M243.3,515.6l6.1,2.6l2.1-0.3l1.6-3.9 l-0.6-3.4l-4.2-0.5l-4,1.8L243.3,515.6z M274,525.6l3.7,5.5l2.4-0.3l1.1-0.5l1.5,1.3l3.7-0.2l1-1.5l-2.9-1.8l-1.9-3.7l-2.1-3.6 l-5.8,2.9L274,525.6z M294.2,534.5l1.3-1.9l4.7,1l0.6-0.5l6.1,0.6l-0.3,1.3l-2.6,1.5l-4.4-0.3L294.2,534.5z M299.5,539.7l1.9,3.9 l3.1-1.1l0.3-1.6l-1.6-2.1l-3.7-0.3V539.7z M306.5,538.5l2.3-2.9l4.7,2.4l4.4,1.1l4.4,2.7v1.9l-3.6,1.8l-4.8,1l-2.4-1.5 L306.5,538.5z M323.1,554.1l1.6-1.3l3.4,1.6l7.6,3.6l3.4,2.1l1.6,2.4l1.9,4.4l4,2.6l-0.3,1.3l-3.9,3.2l-4.2,1.5l-1.5-0.6l-3.1,1.8 l-2.4,3.2l-2.3,2.9l-1.8-0.2l-3.6-2.6l-0.3-4.5l0.6-2.4l-1.6-5.7l-2.1-1.8l-0.2-2.6l2.3-1l2.1-3.1l0.5-1l-1.6-1.8L323.1,554.1z").attr({id: 'HI',fill: '#FFA4A7',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'HI'); 
HI.data({'id':1});

var AL = rsr.path("M625.6,466.8l-1.6-15.2l-2.7-18.8l0.2-14.1l0.8-31l-0.2-16.7l0.2-6.4l7.8-0.4l27.8-2.6l8.9-0.7 l-0.1,2.2l0.2,2.1l0.6,3.4l3.4,7.9l2.4,9.9l1.5,6.1l1.6,4.8l1.5,7l2.1,6.3l2.6,3.4l0.5,3.4l1.9,0.8l0.2,2.1l-1.8,4.8l-0.5,3.2 l-0.2,1.9l1.6,4.4l0.3,5.3l-0.8,2.4l0.6,0.8l1.5,0.8l1,2.5h-6.3l-6.8,0.6l-25.5,2.9l-10.4,1.4l-0.1,3.8l1.8,1.8l2.6,1.9l0.6,7.9 l-5.5,2.6l-2.7-0.3l2.7-1.9v-1l-3.1-6l-2.3-0.6l-1.5,4.4l-1.3,2.7l-0.6-0.2H625.6z").attr({id: 'AL',fill: '#F7DC8A',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'AL'); 
AL.data({'id':2});

var AR = rsr.path("M591,345l-3.8,0.9l-6.2-0.5l0.7-3l3.2-2.7l0.5-2.3l-1.8-3l-11,0.5l-20.8,0.9l-23.3,0.7L505,337 l1.6,6.9v8.2l1.4,11l0.2,37.8l2.3,1.9l3-1.4l2.7,1.1l0.4,10.3l22.9-0.1l18.9-0.8l10.1-0.2l1.1-2.1l-0.3-3.5l-1.8-3l1.6-1.5 l-1.6-2.5l0.7-2.5l1.4-5.6l2.5-2.1l-0.7-2.3l3.7-5.4l2.7-1.4l-0.1-1.5l-0.3-1.8l2.9-5.6l2.4-1.3l0.4-3.4l1.8-1.2l0.9-4.2l-1.3-4 l4-2.4l0.6-2l1.2-4.3L591,345z").attr({id: 'AR',fill: '#FFA4A7',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'AR'); 
AR.data({'id':3});

var AZ = rsr.path("M137.7,387.5l-2.6,2.2l-0.3,1.5l0.5,1l18.9,10.7l12.1,7.6l14.7,8.6l16.8,10l12.3,2.4l25.1,2.7 l2.5-12.5l3.8-27.2l7-52.9l4.3-31l-24.6-3.7l-27.2-4.6l-33.4-6.3l-2.9,18.1l-0.5,0.5l-1.7,2.6l-2.5-0.1l-1.3-2.7l-2.7-0.3l-0.9-1.1 h-0.9l-0.9,0.6l-1.9,1l-0.1,7l-0.2,1.7l-0.6,12.6l-1.5,2.2l-0.6,3.3l2.7,4.9l1.3,5.8l0.8,1l1,0.6l-0.1,2.3l-1.6,1.4l-3.4,1.7 l-1.9,1.9l-1.5,3.7l-0.6,4.9l-2.9,2.7l-2.1,0.7l-0.1,5.8l-0.5,1.7l0.5,0.8l3.7,0.6l-0.6,2.7l-1.5,2.2L137.7,387.5z").attr({id: 'AZ',fill: '#C8DA98',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'AZ'); 
AZ.data({'id':4});

var CA = rsr.path("M136.9,386.8l3.8-0.5l1.5-2l0.7-1.9l-3.2-0.1l-1.1-1.8l0.8-1.7l0-6.2l2.2-1.3l2.7-2.6l0.4-4.9 l1.6-3.5l1.9-2.1l3.3-1.7l1.3-0.7l0.8-1.5l-0.9-0.9l-1-1.5l-0.9-5.3l-2.9-5.2l0.1-2.8l-2.2-3.2l-15-23.2l-19.4-28.7l-22.4-33 l-12.7-19.5l1.8-7.2l6.8-25.9l8.1-31.4l-12.4-3.3l-13.5-3.4l-12.6-4.1l-7.5-2.1l-11.4-3l-7.1-2.4l-1.6,4.7l-0.2,7.4l-5.2,11.8 l-3.1,2.6l-0.3,1.1l-1.8,0.8l-1.5,4.2l-0.8,3.2l2.7,4.2l1.6,4.2l1.1,3.6l-0.3,6.5l-1.8,3.1l-0.6,5.8l-1,3.7l1.8,3.9l2.7,4.5 l2.3,4.8l1.3,4l-0.3,3.2l-0.3,0.5v2.1l5.7,6.3l-0.5,2.4l-0.6,2.3l-0.6,1.9l0.2,8.2l2.1,3.7l1.9,2.6l2.7,0.5l1,2.7l-1.1,3.6 l-2.1,1.6h-1.1l-0.8,3.9l0.5,2.9l3.2,4.4l1.6,5.3l1.5,4.7l1.3,3.1l3.4,5.8l1.5,2.6l0.5,2.9l1.6,1v2.4l-0.8,1.9l-1.8,7.1l-0.5,1.9 l2.4,2.7l4.2,0.5l4.5,1.8l3.9,2.1h2.9l2.9,3.1l2.6,4.8l1.1,2.3l3.9,2.1l4.8,0.8l1.5,2.1l0.6,3.2l-1.5,0.6l0.3,1l3.2,0.8l2.7,0.2 l2.9,4.7l3.9,4.2l0.8,2.3l2.6,4.2l0.3,3.2v9.4l0.5,1.8l10,1.5l19.7,2.7L136.9,386.8z M48.8,337l1.3,1.5l-0.2,1.3l-3.2-0.1 l-0.6-1.2l-0.6-1.5L48.8,337z M50.7,337l1.2-0.6l3.6,2.1l3.1,1.2l-0.9,0.6l-4.5-0.2l-1.6-1.6L50.7,337z M71.4,356.8l1.8,2.3 l0.8,1l1.5,0.6l0.6-1.5l-1-1.8l-2.7-2l-1.1,0.2V356.8z M70,365.5l1.8,3.2l1.2,1.9l-1.5,0.2l-1.3-1.2c0,0-0.7-1.5-0.7-1.9 s0-2.2,0-2.2L70,365.5z").attr({id: 'CA',fill: '#FFA4A7',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'CA'); 
CA.data({'id':5});

var CO = rsr.path("M378.6,256.8l1.4-21.3l-32.1-3.1l-24.5-2.7l-37.3-4.1l-20.7-2.5l-2.6,22.2l-3.2,22.4l-3.8,28 l-1.5,11.1l-0.3,2.8l33.9,3.8l37.7,4.3l32,3.2l16.6,0.8").attr({id: 'CO',fill: '#F7DC8A',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'CO'); 
CO.data({'id':6});

var CT = rsr.path("M873.2,180.1l-0.6-4.2l-0.8-4.4l-1.6-6l-4.2,0.9l-21.8,4.8l0.6,3.3l1.5,7.3v8.1l-1.1,2.3l1.8,2.1 l5-3.4l3.6-3.2l1.9-2.1l0.8,0.6l2.7-1.5l5.2-1.1L873.2,180.1z").attr({id: 'CT',fill: '#FFA4A7',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'CT'); 
CT.data({'id':7});

var DE = rsr.path("M822.4,230.4l0.6-2.1l0-1.2l-1.3-0.1l-2.1,1.6l-1.5,1.5l1.5,4.2l2.3,5.7l2.1,9.7l1.6,6.3l5-0.2 l6.1-1.2l-2.3-7.4l-1,0.5l-3.6-2.4l-1.8-4.7l-1.9-3.6l-2.3-1l-2.1-3.6L822.4,230.4z").attr({id: 'DE',fill: '#F2A57C',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'DE'); 
DE.data({'id':8});

var FL = rsr.path("M755.4,445.5l2.3,7.3l3.7,9.7l5.3,9.4l3.7,6.3l4.8,5.5l4,3.7l1.6,2.9l-1.1,1.3L779,493l2.9,7.4 l2.9,2.9l2.6,5.3l3.6,5.8l4.5,8.2l1.3,7.6l0.5,12l0.6,1.8l-0.3,3.4l-2.4,1.3l0.3,1.9l-0.6,1.9l0.3,2.4l0.5,1.9l-2.7,3.2l-3.1,1.5 l-3.9,0.2l-1.5,1.6l-2.4,1l-1.3-0.5l-1.1-1l-0.3-2.9l-0.8-3.4l-3.4-5.2l-3.6-2.3l-3.9-0.3l-0.8,1.3l-3.1-4.4l-0.6-3.6l-2.6-4 l-1.8-1.1l-1.6,2.1l-1.8-0.3l-2.1-5l-2.9-3.9l-2.9-5.3l-2.6-3.1l-3.6-3.7l2.1-2.4l3.2-5.5l-0.2-1.6l-4.5-1l-1.6,0.6l0.3,0.6l2.6,1 l-1.5,4.5l-0.8,0.5l-1.8-4l-1.3-4.8l-0.3-2.7l1.5-4.7v-9.5L736,485l-1.3-3.1l-5.2-1.3l-1.9-0.6l-1.6-2.6l-3.4-1.6l-1.1-3.4l-2.7-1 l-2.4-3.7l-4.2-1.5l-2.9-1.5h-2.6l-4,0.8l-0.2,1.9l0.8,1l-0.5,1.1l-3.1-0.2l-3.7,3.6l-3.6,1.9h-3.9l-3.2,1.3l-0.3-2.7l-1.6-1.9 l-2.9-1.1l-1.6-1.5l-8.1-3.9l-7.6-1.8l-4.4,0.6l-6,0.5l-6,2.1l-3.5,0.6l-0.2-8l-2.6-1.9l-1.8-1.8l0.3-3.1l10.2-1.3l25.5-2.9 l6.8-0.6l5.4,0.3l2.6,3.9l1.5,1.5l8.1,0.5l10.8-0.6l21.5-1.3l5.4-0.7l4.6,0l0.2,2.9l3.8,0.8l0.3-4.8l-1.6-4.5l1-0.7l5.1,0.5 L755.4,445.5z M767.9,577.9l2.4-0.6l1.3-0.2l1.5-2.3l2.3-1.6l1.3,0.5l1.7,0.3l0.4,1.1l-3.5,1.2l-4.2,1.5l-2.3,1.2L767.9,577.9z M781.4,572.9l1.2,1.1l2.7-2.1l5.3-4.2l3.7-3.9l2.5-6.6l1-1.7l0.2-3.4l-0.7,0.5l-1,2.8l-1.5,4.6l-3.2,5.3l-4.4,4.2l-3.4,1.9 L781.4,572.9z").attr({id: 'FL',fill: '#E05F63',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'FL'); 
FL.data({'id':9});

var GA = rsr.path("M689.6,358l-4.8,0.8l-8.4,1.1l-8.6,0.9v2.2l0.2,2.1l0.6,3.4l3.4,7.9l2.4,9.9l1.5,6.1l1.6,4.8l1.5,7 l2.1,6.3l2.6,3.4l0.5,3.4l1.9,0.8l0.2,2.1l-1.8,4.8l-0.5,3.2l-0.2,1.9l1.6,4.4l0.3,5.3l-0.8,2.4l0.6,0.8l1.5,0.8l0.6,3.4l2.6,3.9 l1.5,1.5l7.9,0.2l10.8-0.6l21.5-1.3l5.4-0.7l4.6,0l0.2,2.9l2.6,0.8l0.3-4.4l-1.6-4.5l1.1-1.6l5.8,0.8l5,0.3l-0.8-6.3l2.3-10 l1.5-4.2l-0.5-2.6l3.3-6.2l-0.5-1.4l-1.9,0.7l-2.6-1.3l-0.6-2.1l-1.3-3.6l-2.3-2.1l-2.6-0.6l-1.6-4.8l-2.9-6.3l-4.2-1.9l-2.1-1.9 l-1.3-2.6l-2.1-1.9l-2.3-1.3l-2.3-2.9l-3.1-2.3l-4.5-1.8l-0.5-1.5l-2.4-2.9l-0.5-1.5l-3.4-4.9l-3.4,0.2l-4.1-3l-1.3-1.3l-0.3-1.8 l0.8-1.9l2.4-1.2l-1.1-1.2l0.1-0.3l-5.8,1l-7,0.8L689.6,358z").attr({id: 'GA',fill: '#8BC4CA',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'GA'); 
GA.data({'id':10});

var IA = rsr.path("M566.6,201.6l0.2,1.9l2.3,1.1l1.1,1.3l0.3,1.3l3.9,3.2l0.7,2.2l-0.8,2.9l-1.5,3.5l-0.8,2.7 l-2.2,1.6l-1.7,0.6l-5.5,1.5l-0.7,2.3l-0.8,2.3l0.6,1.4l1.7,1.7l0,3.7l-2.2,1.6l-0.5,1.5v2.5l-1.5,0.5l-1.7,1.4l-0.5,1.5l0.5,1.7 l-1.4,1.2l-2.3-2.9l-1.5-2.6l-8.3,0.8l-10.2,0.6l-25,0.7l-13,0.2l-9.4,0.2l-1.3,0.1l-1.7-4.5l-0.2-6.6l-1.6-4.1l-0.7-5.3l-2.3-3.7 l-0.9-4.8l-2.7-7.5l-1.1-5.4l-1.4-2.2l-1.6-2.7l1.8-4.3l1.4-5.7l-2.7-2.1l-0.5-2.7l0.9-2.5h1.7h11.5l49.6-0.7l19.9-0.7l1.9,2.7 l1.8,2.6l0.5,0.8l-1.8,2.7l0.5,4.2l2.5,3.9l3,1.8l2.4,0.2L566.6,201.6z").attr({id: 'IA',fill: '#8BC4CA',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'IA'); 
IA.data({'id':11});

var ID = rsr.path("M162.1,181c-22.6-4.3-14.1-2.8-21.1-4.4l4.4-17.5l4.3-17.7l1.4-4.2l2.5-5.9l-1.3-2.3l-2.5,0.1 l-0.8-1l0.5-1.1l0.3-3.1l4.5-5.5l1.8-0.5l1.1-1.1l0.6-3.2l0.9-0.7l3.9-5.8l3.9-4.3l0.2-3.8l-3.4-2.6l-1.3-4.4l0.4-9.7l3.7-16.5 l4.5-20.8l3.8-13.5l0.8-3.8l13,2.5l-4.2,21.5l2.9,7.7l-1.1,4.6l2,4.6l3.2,1.7l4.5,9.8l2.7,3.8l0.6,1.1l3.4,1.1l0.5,2.5l-6.9,16.8 l0.3,3.3l2.7,2.9l1.9,0.5l4.8-3.6l0.4-0.5l0.2,0.8l0.3,4.1l2.6,12.9l3.5,2.7l0.4,0.8l2.1,2.4l-0.8,2.8l0.7,3.8l1.9,0.9l2.1-1.6 l2.6-0.5l3.4,1.6l2.5-0.6l3.8-0.2l4,1.6l2.7-0.3l0.9-2.3l2.5-1.6l0.7,1.7l0.6,2.2l2.3,2.5l-3.8,24l-5.1,29l-4.2-0.3l-8.2-1.5 l-9.8-1.8l-12.2-2.4l-12.5-2.5l-8.5-1.8l-9.3-1.7L162.1,181z").attr({id: 'ID',fill: '#F2A57C',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'ID'); 
ID.data({'id':12});

var IL = rsr.path("M617.8,301.5v-3.6l0.3-4.9l2.4-3.1l1.8-3.8l2.6-3.9l-0.4-5.3l-2-3.5l-0.1-3.3l0.7-5.3l-0.8-7.2 l-1.1-15.8l-1.3-15l-0.9-11.6l-0.3-0.9l-0.8-2.6l-1.3-3.7l-1.6-1.8l-1.5-2.6l-0.2-5.5l-9.9,1.3l-27.2,1.7l-8.7-0.4l0.2,2.4l2.3,0.7 l0.9,1.1l0.5,1.8l3.9,3.4l0.7,2.3l-0.7,3.4l-1.8,3.7l-0.7,2.5l-2.3,1.8l-1.8,0.7l-5.3,1.4l-0.7,1.8L562,230l0.7,1.4l1.8,1.6 l-0.2,4.1l-1.8,1.6l-0.7,1.6v2.7l-1.8,0.5l-1.6,1.1l-0.2,1.4l0.2,2.1l-1.7,1.3l-1,2.8l0.5,3.7l2.3,7.3l7.3,7.5l5.5,3.7l-0.2,4.3 l0.9,1.4l6.4,0.5l2.7,1.4l-0.7,3.7l-2.3,5.9l-0.7,3.2l2.3,3.9l6.4,5.3l4.6,0.7l2.1,5l2.1,3.2l-0.9,3l1.6,4.1l1.8,2.1l1.9-0.8 l0.7-2.2l2-1.4l3.2-1.1l3.1,1.2l2.9,1.1l0.8-0.2l-0.1-1.2l-1.1-2.8l0.4-2.4l2.3-1.6l2.4-1l1.2-0.4l-0.6-1.3l-0.8-2.2l1.2-1.3 L617.8,301.5z").attr({id: 'IL',fill: '#F7DC8A',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'IL'); 
IL.data({'id':13});

var IN = rsr.path("M618.4,300.9l0.1-2.9l0.5-4.5l2.3-2.9l1.8-3.9l2.6-4.2l-0.5-5.8l-1.8-2.7l-0.3-3.2l0.8-5.5l-0.5-7 l-1.3-16l-1.3-15.4l-1-11.7l3.1,0.9l1.5,1l1.1-0.3l2.1-1.9l2.8-1.6l5.1-0.2l22-2.3l5.6-0.5l1.5,16l4.3,36.8l0.6,5.8L669,271 l1.2,1.8l0.1,1.4l-2.5,1.6l-3.5,1.6l-3.2,0.6l-0.6,4.9l-4.6,3.3l-2.8,4l0.3,2.4l-0.6,1.5h-3.3l-1.6-1.6l-2.5,1.3l-2.7,1.5l0.2,3.1 l-1.2,0.3l-0.5-1l-2.2-1.5l-3.3,1.3l-1.6,3l-1.4-0.8l-1.5-1.6l-4.5,0.5l-5.6,1L618.4,300.9z").attr({id: 'IN',fill: '#F2A57C',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'IN'); 
IN.data({'id':14});

var KS = rsr.path("M503.4,325.1l-12.6,0.2l-46.1-0.5l-44.6-2.1l-24.6-1.3l4.1-64.7l21.8,0.8l40.5,1.4l44.1,0.5h5.1 l3.2,3.2l2.8,0.2l0.9,1.1v2l-1.8,1.6l-0.5,2.6l2.2,3.6l2.5,3.1l2.5,2l1.1,11.2L503.4,325.1z").attr({id: 'KS',fill: '#C8DA98',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'KS'); 
KS.data({'id':15});

var KY = rsr.path("M721.8,297.8l-2.3,2.7l-4.2,3.6L711,310l-1.8,1.8v2.1l-3.9,2.1l-5.7,3.4l-3.5,0.4l-51.9,4.9 l-15.8,1.8l-4.6,0.5l-3.9,0l-0.2,4.2l-8.2,0.1l-7,0.6l-10.4,0.2l1.9-0.2l2.2-1.8l2.1-1.1l0.2-3.2l0.9-1.8l-1.6-2.5l0.8-1.9l2.3-1.8 l2.1-0.6l2.7,1.3l3.6,1.3l1.1-0.3l0.2-2.3l-1.3-2.4l0.3-2.3l1.9-1.5l2.6-0.6l1.6-0.6l-0.8-1.8l-0.6-1.9l1.1-0.8l1.1-3.3l3-1.7 l5.8-1l3.6-0.5l1.5,1.9l1.8,0.8l1.8-3.2l2.9-1.5l1.9,1.6l0.8,1.1l2.1-0.5l-0.2-3.4l2.9-1.6l1.1-0.8l1.1,1.6h4.7l0.8-2.1l-0.3-2.3 l2.9-3.6l4.7-3.9l0.5-4.5l2.7-0.3l3.9-1.8l2.7-1.9l-0.3-1.9l-1.5-1.5l0.6-2.2l4.1-0.2l2.4-0.8l2.9,1.6l1.6,4.4l5.8,0.3l1.8,1.8 l2.1,0.2l2.4-1.5l3.1,0.5l1.3,1.5l2.7-2.6l1.8-1.3h1.6l0.6,2.7l1.8,1l2.4,2.2l0.2,5.5l0.8,1.6l2.6,1.5l0.6,2.3l2.9,3.7l2.6,2.7 L721.8,297.8z").attr({id: 'KY',fill: '#F7DC8A',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'KY'); 
KY.data({'id':16});

var LA = rsr.path("M602.2,473l-1-2.6l-1.1-3.1l-3.3-3.5l0.9-6.8l-0.1-1.1l-1.3,0.3l-8.2,0.9l-25,0.5l-0.7-2.4l0.9-8.5 l3.3-5.9l5-8.7l-0.6-2.4l1.3-0.7l0.5-2l-2.3-2.1l-0.1-1.9l-1.8-4.3l-0.5-5.9l-9.7,0.1l-19.2,0.9l-22.2,0l0,9.6l0.7,9.4l0.7,3.9 l2.5,4.1l0.9,5l4.3,5.5l0.2,3.2l0.7,0.7l-0.7,8.5l-3,5l1.6,2.1l-0.7,2.5l-0.7,7.3l-1.4,3.2l0.1,3.6l4.7-1.5l8.1-0.3l10.3,3.6 l6.5,1.1l3.7-1.5l3.2,1.1l3.2,1l0.8-2.1l-3.2-1.1l-2.6,0.5l-2.7-1.6c0,0,0.2-1.3,0.8-1.5c0.6-0.2,3.1-1,3.1-1l1.8,1.5l1.8-1 l3.2,0.6l1.5,2.4l0.3,2.3l4.5,0.3l1.8,1.8l-0.8,1.6l-1.3,0.8l1.6,1.6l8.4,3.6l3.6-1.3l1-2.4l2.6-0.6l1.8-1.5l1.3,1l0.8,2.9 l-2.3,0.8l0.6,0.6l3.4-1.3l2.3-3.4l0.8-0.5l-2.1-0.3l0.8-1.6l-0.2-1.5l2.1-0.5l1.1-1.3l0.6,0.8c0,0-0.2,3.1,0.6,3.1 c0.8,0,4.2,0.6,4.2,0.6l4,1.9l1,1.5h2.9l1.1,1l2.3-3.1v-1.5h-1.3l-3.4-2.7l-5.8-0.8l-3.2-2.3l1.1-2.7l2.3,0.3l0.2-0.6l-1.8-1v-0.5 h3.2l1.8-3.1l-1.3-1.9l-0.3-2.7l-1.5,0.2l-1.9,2.1l-0.6,2.6l-3.1-0.6l-1-1.8l1.8-1.9l2-1.8L602.2,473z").attr({id: 'LA',fill: '#F2A57C',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'LA'); 
LA.data({'id':17});

var MA = rsr.path("M900,173.9l2.2-0.7l0.5-1.7l1,0.1l1,2.3l-1.3,0.5l-3.9,0.1L900,173.9z M890.6,174.7l2.3-2.6h1.6 l1.8,1.5l-2.4,1l-2.2,1L890.6,174.7z M855.8,152.7l17.5-4.2l2.3-0.6l2.1-3.2l3.7-1.7l2.9,4.4l-2.4,5.2l-0.3,1.5l1.9,2.6l1.1-0.8 h1.8l2.3,2.6l3.9,6l3.6,0.5l2.3-1l1.8-1.8l-0.8-2.7l-2.1-1.6l-1.5,0.8l-1-1.3l0.5-0.5l2.1-0.2l1.8,0.8l1.9,2.4l1,2.9l0.3,2.4 l-4.2,1.5l-3.9,1.9l-3.9,4.5l-1.9,1.5v-1l2.4-1.5l0.5-1.8l-0.8-3.1l-2.9,1.5l-0.8,1.5l0.5,2.3l-2.1,1l-2.7-4.5l-3.4-4.4l-2.1-1.8 l-6.5,1.9l-5.1,1.1l-21.8,4.8l-0.4-4.9l0.6-10.6l5.2-0.9L855.8,152.7z").attr({id: 'MA',fill: '#F2A57C',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'MA'); 
MA.data({'id':18});

var MD = rsr.path("M837,255.3l-6.1,1.3l-5.8,0.2l-1.8-7.1l-2.1-9.7l-2.3-5.7l-1.3-4.4l-7.5,1.6l-14.9,2.8l-37.5,7.6 l1.1,5l1,5.7l0.3-0.3l2.1-2.4l2.3-2.6l2.4-0.6l1.5-1.5l1.8-2.6l1.3,0.6l2.9-0.3l2.6-2.1l2-1.5l1.8-0.5l1.6,1.1l2.9,1.5l1.9,1.8 l1.2,1.5l4.1,1.7v2.9l5.5,1.3l1.1,0.5l1.4-2l2.9,2l-1.3,2.5l-0.8,4l-1.8,2.6v2.1l0.6,1.8l5.1,1.4l4.3-0.1l3.1,1l2.1,0.3l1-2.1 l-1.5-2.1v-1.8l-2.4-2.1l-2.1-5.5l1.3-5.3l-0.2-2.1l-1.3-1.3c0,0,1.5-1.6,1.5-2.3c0-0.6,0.5-2.1,0.5-2.1l1.9-1.3l1.9-1.6l0.5,1 l-1.5,1.6l-1.3,3.7l0.3,1.1l1.8,0.3l0.5,5.5l-2.1,1l0.3,3.6l0.5-0.2l1.1-1.9l1.6,1.8l-1.6,1.3l-0.3,3.4l2.6,3.4l3.9,0.5l1.6-0.8 l3.2,4.2l1.4,0.5l6.7-2.8l2-4L837,255.3z M820.3,264.3l1.1,2.5l0.2,1.8l1.1,1.9c0,0,0.9-0.9,0.9-1.2c0-0.3-0.7-3.1-0.7-3.1 l-0.7-2.3L820.3,264.3z").attr({id: 'MD',fill: '#F7DC8A',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'MD'); 
MD.data({'id':19});

var ME = rsr.path("M923.2,77.3l1.9,2.1l2.3,3.7v1.9l-2.1,4.7l-1.9,0.6l-3.4,3.1l-4.8,5.5c0,0-0.6,0-1.3,0 c-0.6,0-1-2.1-1-2.1l-1.8,0.2l-1,1.5l-2.4,1.5l-1,1.5l1.6,1.5l-0.5,0.6l-0.5,2.7l-1.9-0.2v-1.6l-0.3-1.3l-1.5,0.3l-1.8-3.2 l-2.1,1.3l1.3,1.5l0.3,1.1l-0.8,1.3l0.3,3.1l0.2,1.6l-1.6,2.6l-2.9,0.5l-0.3,2.9l-5.3,3.1l-1.3,0.5l-1.6-1.5l-3.1,3.6l1,3.2 l-1.5,1.3l-0.2,4.4l-1.1,6.3l-2.5-1.2l-0.5-3.1l-3.9-1.1l-0.3-2.7l-7.3-23.4l-4.2-13.6l1.4-0.1l1.5,0.4v-2.6l0.8-5.5l2.6-4.7l1.5-4 l-1.9-2.4v-6l0.8-1l0.8-2.7l-0.2-1.5l-0.2-4.8l1.8-4.8l2.9-8.9l2.1-4.2h1.3l1.3,0.2v1.1l1.3,2.3l2.7,0.6l0.8-0.8v-1l4-2.9l1.8-1.8 l1.5,0.2l6,2.4l1.9,1l9.1,29.9h6l0.8,1.9l0.2,4.8l2.9,2.3h0.8l0.2-0.5l-0.5-1.1L923.2,77.3z M902.3,107.5l1.5-1.5l1.4,1.1 l0.6,2.4l-1.7,0.9L902.3,107.5z M909,101.6l1.8,1.9c0,0,1.3,0.1,1.3-0.2s0.2-2,0.2-2l0.9-0.8l-0.8-1.8l-2,0.7L909,101.6z").attr({id: 'ME',fill: '#8BC4CA',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'ME'); 
ME.data({'id':20});

var MI = rsr.path("M581.6,82.1l1.8-2.1l2.2-0.8l5.4-3.9l2.3-0.6l0.5,0.5l-5.1,5.1l-3.3,1.9l-2.1,0.9L581.6,82.1z M667.8,114.2l0.6,2.5l3.2,0.2l1.3-1.2c0,0-0.1-1.5-0.4-1.6c-0.3-0.2-1.6-1.9-1.6-1.9l-2.2,0.2l-1.6,0.2l-0.3,1.1L667.8,114.2z M697.9,177.2l-3.2-8.2l-2.3-9.1l-2.4-3.2l-2.6-1.8l-1.6,1.1l-3.9,1.8l-1.9,5l-2.7,3.7l-1.1,0.6l-1.5-0.6c0,0-2.6-1.5-2.4-2.1 c0.2-0.6,0.5-5,0.5-5l3.4-1.3l0.8-3.4l0.6-2.6l2.4-1.6l-0.3-10l-1.6-2.3l-1.3-0.8l-0.8-2.1l0.8-0.8l1.6,0.3l0.2-1.6L676,131 l-1.3-2.6h-2.6l-4.5-1.5l-5.5-3.4h-2.7l-0.6,0.6l-1-0.5l-3.1-2.3l-2.9,1.8l-2.9,2.3l0.3,3.6l1,0.3l2.1,0.5l0.5,0.8l-2.6,0.8 l-2.6,0.3l-1.5,1.8l-0.3,2.1l0.3,1.6l0.3,5.5l-3.6,2.1l-0.6-0.2v-4.2l1.3-2.4l0.6-2.4l-0.8-0.8l-1.9,0.8l-1,4.2l-2.7,1.1l-1.8,1.9 l-0.2,1l0.6,0.8l-0.6,2.6l-2.3,0.5v1.1l0.8,2.4l-1.1,6.1l-1.6,4l0.6,4.7l0.5,1.1l-0.8,2.4l-0.3,0.8l-0.3,2.7l3.6,6l2.9,6.5l1.5,4.8 l-0.8,4.7l-1,6l-2.4,5.2l-0.3,2.7l-3.3,3.1l4.4-0.2l21.4-2.3l7.3-1l0.1,1.7l6.9-1.2l10.3-1.5l3.9-0.5l0.1-0.6l0.2-1.5l2.1-3.7 l2-1.7l-0.2-5.1l1.6-1.6l1.1-0.3l0.2-3.6l1.5-3l1.1,0.6l0.2,0.6l0.8,0.2l1.9-1L697.9,177.2z M567.5,111.2l0.7-0.6l2.7-0.8l3.6-2.3 v-1l0.6-0.6l6-1l2.4-1.9l4.4-2.1l0.2-1.3l1.9-2.9l1.8-0.8l1.3-1.8l2.3-2.3l4.4-2.4l4.7-0.5l1.1,1.1l-0.3,1l-3.7,1l-1.5,3.1 l-2.3,0.8l-0.5,2.4l-2.4,3.2l-0.3,2.6l0.8,0.5l1-1.1l3.6-2.9l1.3,1.3h2.3l3.2,1l1.5,1.1l1.5,3.1l2.7,2.7l3.9-0.2l1.5-1l1.6,1.3 l1.6,0.5l1.3-0.8h1.1l1.6-1l4-3.6l3.4-1.1l6.6-0.3l4.5-1.9l2.6-1.3l1.5,0.2v5.7l0.5,0.3l2.9,0.8l1.9-0.5l6.1-1.6l1.1-1.1l1.5,0.5v7 l3.2,3.1l1.3,0.6l1.3,1l-1.3,0.3l-0.8-0.3l-3.7-0.5l-2.1,0.6l-2.3-0.2l-3.2,1.5h-1.8l-5.8-1.3l-5.2,0.2l-1.9,2.6l-7,0.6l-2.4,0.8 l-1.1,3.1l-1.3,1.1l-0.5-0.2l-1.5-1.6l-4.5,2.4h-0.6l-1.1-1.6l-0.8,0.2l-1.9,4.4l-1,4l-3.2,7l-1.2-1l-1.4-1l-1.9-10.3l-3.5-1.4 l-2.1-2.3l-12.1-2.7l-2.9-1l-8.2-2.2l-7.9-1.1L567.5,111.2z").attr({id: 'MI',fill: '#8BC4CA',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'MI'); 
MI.data({'id':21});

var MN = rsr.path("M471.9,128.5l-0.5-8.5l-1.8-7.3l-1.8-13.5l-0.5-9.8l-1.8-3.4l-1.6-5v-10.3l0.7-3.9l-1.8-5.5l30.1,0 l0.3-8.2l0.6-0.2l2.3,0.5l1.9,0.8l0.8,5.5l1.5,6.1l1.6,1.6h4.8l0.3,1.5l6.3,0.3v2.1h4.8l0.3-1.3l1.1-1.1l2.3-0.6l1.3,1h2.9l3.9,2.6 l5.3,2.4l2.4,0.5l0.5-1l1.5-0.5l0.5,2.9l2.6,1.3l0.5-0.5l1.3,0.2v2.1l2.6,1h3.1l1.6-0.8l3.2-3.2l2.6-0.5l0.8,1.8l0.5,1.3h1l1-0.8 l8.9-0.3l1.8,3.1h0.6l0.7-1.1l4.4-0.4l-0.6,2.3l-3.9,1.8l-9.2,4.1l-4.8,2l-3.1,2.6l-2.4,3.6l-2.3,3.9l-1.8,0.8l-4.5,5l-1.3,0.2 l-3.8,2.9l-2.8,3.2l-0.2,3l0.2,7.8l-1.6,1.6L530,128l-1.8,5.7l2.5,3.6l0.5,2.5l-1.1,3l-0.2,3.7l0.5,7.1l3.4,4.1h3l2.5,2.3l3.2,1.4 l3.7,5l7.1,5l1.8,2.1l0.2,5.7l-20.6,0.7l-60.2,0.5l-0.3-35.7l-0.5-3l-4.1-3.4l-1.1-1.8v-1.6l2.1-1.6l1.4-1.4L471.9,128.5z").attr({id: 'MN',fill: '#F7DC8A',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'MN'); 
MN.data({'id':22});

var MO = rsr.path("M555.8,249.5l-2.5-3.1l-1.1-2.3l-7.8,0.7l-9.8,0.5l-25.4,0.9l-13.5,0.2l-7.9,0.1l-2.3,0.1l1.3,2.5 l-0.2,2.3l2.5,3.9l3.1,4.1l3.1,2.7l2.3,0.2l1.4,0.9v3l-1.8,1.6l-0.5,2.3l2.1,3.4l2.5,3l2.5,1.8l1.4,11.7l-0.7,35.3l0.2,4.7l0.5,5.4 l23.4-0.1l23.2-0.7l20.8-0.8l11.7-0.2l2.2,3.4l-0.7,3.3l-3.1,2.4l-0.6,1.8l5.4,0.5l3.9-0.7l1.7-5.5l0.7-5.9l2.3-2l1.7-1.5l2.1-1 l0.1-2.9l0.6-1.7l-1-1.7l-2.7,0.1l-2.2-2.6l-1.4-4.2l0.8-2.5l-1.9-3.4l-1.8-4.6l-4.8-0.8l-7-5.6l-1.7-4.1l0.8-3.2l2.1-6.1l0.5-2.9 l-1.9-1l-6.9-0.8l-1-1.7l-0.1-4.2l-5.5-3.4l-7-7.8l-2.3-7.3l-0.2-4.2L555.8,249.5z").attr({id: 'MO',fill: '#E05F63',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'MO'); 
MO.data({'id':23});

var MS = rsr.path("M624.6,467l-0.3,1.3h-5.2l-1.5-0.8l-2.1-0.3l-6.8,1.9l-1.8-0.8l-2.6,4.2l-1.1,0.8l-1.1-2.5 l-1.1-3.9l-3.4-3.2l1.1-7.5l-0.7-0.9l-1.8,0.2l-8.2,0.7l-24.2,0.7l-0.5-1.6l0.7-8l3.4-6.2l5.3-9.1l-0.9-2.1h1.1l0.7-3.2l-2.3-1.8 l0.2-1.8l-2.1-4.6l-0.3-5.3l1.4-2.7l-0.4-4.3l-1.4-3l1.4-1.4l-1.4-2.1l0.5-1.8l0.9-6.2l3-2.7l-0.7-2.1l3.7-5.3l2.7-0.9v-2.5 l-0.7-1.4l2.7-5.3l2.7-1.1l0.1-3.4l8.7-0.1l24.1-1.9l4.6-0.2l0,6.4l0.2,16.7l-0.8,31l-0.2,14.1l2.7,18.8L624.6,467z").attr({id: 'MS',fill: '#C8DA98',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'MS'); 
MS.data({'id':24});

var MT = rsr.path("M356.7,122.3l0.6-11.2l2.3-24.8c0.5-5,1.1-8.5,1.4-15.4l0.9-14.6l-30.7-2.8L302,50l-29.3-4 l-32.3-5.3l-18.4-3.4l-32.7-6.9l-4.5,21.3l3.4,7.5l-1.4,4.6l1.8,4.6l3.2,1.4l4.6,10.8l2.7,3.2l0.5,1.1l3.4,1.1l0.5,2.1l-7.1,17.6 v2.5l2.5,3.2h0.9l4.8-3l0.7-1.1l1.6,0.7l-0.2,5.3l2.7,12.6l3,2.5l0.9,0.7l1.8,2.3l-0.5,3.4l0.7,3.4l1.1,0.9l2.3-2.3h2.7l3.2,1.6 l2.5-0.9h4.1l3.7,1.6l2.7-0.5l0.5-3l3-0.7l1.4,1.4l0.5,3.2l1.8,1.4l1.5-11.6l20.7,3l28.2,4l16.6,1.9l31.4,3.5l11,1.5l1.1-15.4 L356.7,122.3z").attr({id: 'MT',fill: '#8BC4CA',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'MT'); 
MT.data({'id':25});

var NC = rsr.path("M832.1,298.5l1.7,4.7l3.6,6.5l2.4,2.4l0.6,2.3l-2.4,0.2l0.8,0.6l-0.3,4.2l-2.6,1.3l-0.6,2.1 l-1.3,2.9l-3.7,1.6l-2.4-0.3l-1.5-0.2l-1.6-1.3l0.3,1.3v1h1.9l0.8,1.3l-1.9,6.3h4.2l0.6,1.6l2.3-2.3l1.3-0.5l-1.9,3.6l-3.1,4.8 h-1.3l-1.1-0.5l-2.7,0.6l-5.2,2.4l-6.5,5.3l-3.4,4.7l-1.9,6.5l-0.5,2.4l-4.7,0.5l-5.5,1.3l-9.9-8.2l-12.6-7.6l-2.9-0.8l-12.6,1.5 l-4.3,0.8l-1.6-3.2l-3-2.1l-16.5,0.5l-7.3,0.8l-9.1,4.5l-6.1,2.6l-1.6,0.3l-5.8,1l-7,0.8l-6.8,0.5l0.5-4.1l1.8-1.5l2.7-0.6l0.6-3.7 l4.2-2.7l3.9-1.5l4.2-3.6l4.4-2.1l0.6-3.1l3.9-3.9l0.6-0.2c0,0,0,1.1,0.8,1.1c0.8,0,1.9,0.3,1.9,0.3l2.3-3.6l2.1-0.6l2.3,0.3 l1.6-3.6l2.9-2.6l0.5-2.1v-4l4.5,0.7l7.1-1.3l15.8-1.9l17.1-2.6l19.9-4l19.7-4.2l11.4-2.8L832.1,298.5z M836,331.5l2.6-2.5 l3.2-2.6l1.5-0.6l0.2-2l-0.6-6.1l-1.5-2.3l-0.6-1.9l0.7-0.2l2.7,5.5l0.4,4.4l-0.2,3.4l-3.4,1.5l-2.8,2.4l-1.1,1.2L836,331.5z").attr({id: 'NC',fill: '#C8DA98',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'NC'); 
NC.data({'id':26});

var ND = rsr.path("M471.3,127.7l-0.4-7.5l-2-7.3l-1.8-13.6l-0.5-9.8l-2-3.1l-1.6-5.4v-10.3l0.7-3.9l-2.1-5.5 l-28.4-0.6l-18.6-0.6l-26.5-1.3l-24.9-1.9l-1.3,14.2l-1.4,15.1l-2.3,24.9l-0.5,11l56.8,3.8L471.3,127.7z").attr({id: 'ND',fill: '#C8DA98',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'ND'); 
ND.data({'id':27});

var NE = rsr.path("M484.2,247l1.4,2.7l0.1,2.1l2.4,3.7l2.7,3.2h-5l-43.5-0.9l-40.8-0.9l-21.2-1l1.1-21.3l-33.4-2.7 l4.3-44l15.5,1L388,190l17.8,1.1l23.8,1.1l10.7-0.5l2.1,2.3l4.8,3l1.1,0.9l4.3-1.4l3.9-0.5l2.7-0.2l1.8,1.4l5,1.6l3,1.6l0.5,1.6 l0.9,2.1h1.8l0.8,0l1,5.2l2.7,8l1.2,4.6l2.1,3.8l0.5,4.9l1.4,4.3l0.5,6.5").attr({id: 'NE',fill: '#FFA4A7',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'NE'); 
NE.data({'id':28});

var NH = rsr.path("M880.8,142.4l0.9-1.1l1.1-3.3l-2.5-0.9l-0.5-3.1l-3.9-1.1l-0.3-2.7l-7.3-23.4l-4.6-14.5l-0.9,0 l-0.6,1.6l-0.6-0.5l-1-1l-1.5,1.9l0,5l0.3,5.7l1.9,2.7v4l-3.7,5.1l-2.6,1.1v1.1l1.1,1.8v8.6l-0.8,9.2l-0.2,4.8l1,1.3l-0.2,4.5 l-0.5,1.8l1.5,0.9l16.4-4.7l2.3-0.6l1.5-2.6L880.8,142.4z").attr({id: 'NH',fill: '#E05F63',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'NH'); 
NH.data({'id':29});

var NJ = rsr.path("M828.2,190.3l-2.1,2.4v3.1l-1.9,3.1l-0.2,1.6l1.3,1.3l-0.2,2.4l-2.3,1.1l0.8,2.7l0.2,1.1l2.7,0.3 l1,2.6l3.6,2.4l2.4,1.6v0.8l-3.2,3.1l-1.6,2.3l-1.5,2.7l-2.3,1.3l-1.2,0.7l-0.2,1.2l-0.6,2.6l1.1,2.2l3.2,2.9l4.8,2.3l4,0.6 l0.2,1.5l-0.8,1l0.3,2.7h0.8l2.1-2.4l0.8-4.8l2.7-4l3.1-6.5l1.1-5.5l-0.6-1.1l-0.2-9.4l-1.6-3.4l-1.1,0.8l-2.7,0.3l-0.5-0.5l1.1-1 l2.1-1.9l0.1-1.1l-0.4-3.4l0.5-2.7l-0.2-2.1l-2.6-1.1l-4.5-1l-3.9-1.1L828.2,190.3z").attr({id: 'NJ',fill: '#E05F63',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'NJ'); 
NJ.data({'id':30});

var NM = rsr.path("M282.7,431l-0.7-6.1l8.6,0.5l29.5,3.1l28.4,1.4l2-22.3l3.7-55.9l1.1-19.4l2,0.3l0-11.1l-32.2-2.4 l-36.9-4.4l-34.5-4.1l-4.2,30.8l-7,53.2l-3.8,26.9l-2,13.3l15.5,2l1.3-10l16.7,2.6L282.7,431z").attr({id: 'NM',fill: '#F2A57C',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'NM'); 
NM.data({'id':31});

var NV = rsr.path("M140.7,177.6l21,4.5l9.7,1.9l9.3,1.8l6.6,1.6l-0.6,5.9l-3.5,17.3l-4.1,20l-1.9,9.7l-2.2,13.3 l-3.2,16.4l-3.5,15.7l-2,10.2l-2.5,16.8l-0.5,1.1l-1.1,2.5l-1.9-0.1l-1.1-2.7l-2.7-0.5l-1.4-1l-2,0.3l-0.9,0.7l-1.3,1.3l-0.4,7 l-0.5,1.7l-0.4,12.1l-1.3,1.7l-1.9-2.3l-14.5-22.7l-19.4-29L89.6,249l-12.4-18.6l1.6-6.6l7-25.9l7.9-31.3l33.6,8.1l13.7,3").attr({id: 'NV',fill: '#8BC4CA',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'NV'); 
NV.data({'id':32});

var NY = rsr.path("M828.9,189.3l-1.1-1l-2.6-0.2l-2.3-1.9l-1.6-6.1l-3.5,0.1l-2.4-2.7l-19.4,4.4l-43,8.7l-7.5,1.2 l-0.7-6.5l1.4-1.1l1.3-1.1l1-1.6l1.8-1.1l1.9-1.8l0.5-1.6l2.1-2.7l1.1-1l-0.2-1l-1.3-3.1l-1.8-0.2l-1.9-6.1l2.9-1.8l4.4-1.5l4-1.3 l3.2-0.5l6.3-0.2l1.9,1.3l1.6,0.2l2.1-1.3l2.6-1.1l5.2-0.5l2.1-1.8l1.8-3.2l1.6-1.9h2.1l1.9-1.1l0.2-2.3l-1.5-2.1l-0.3-1.5l1.1-2.1 v-1.5h-1.8l-1.8-0.8l-0.8-1.1l-0.2-2.6l5.8-5.5l0.6-0.8l1.5-2.9l2.9-4.5l2.7-3.7l2.1-2.4l2.4-1.8l3.1-1.2l5.5-1.3l3.2,0.2l4.5-1.5 l7.6-2.1l0.5,5l2.4,6.5l0.8,5.2l-1,3.9l2.6,4.5l0.8,2.1l-0.8,2.9l2.9,1.3l0.6,0.3l3.1,11l-0.5,5.1l-0.5,10.8l0.8,5.5l0.8,3.6 l1.5,7.3v8.1l-1.1,2.3l1.8,2l0.8,1.7l-1.9,1.8l0.3,1.3l1.3-0.3l1.5-1.3l2.3-2.6l1.1-0.6l1.6,0.6l2.3,0.2l7.9-3.9l2.9-2.7l1.3-1.5 l4.2,1.6l-3.4,3.6l-3.9,2.9l-7.1,5.3l-2.6,1l-5.8,1.9l-4,1.1l-1.2-0.5l-0.2-3.7l0.5-2.7l-0.2-2.1l-2.8-1.7l-4.5-1l-3.9-1.1 L828.9,189.3z").attr({id: 'NY',fill: '#C8DA98',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'NY'); 
NY.data({'id':33});

var OH = rsr.path("M731.4,195l-6.1,4.1l-3.9,2.3l-3.4,3.7l-4,3.9l-3.2,0.8l-2.9,0.5l-5.5,2.6l-2.1,0.2l-3.4-3.1 l-5.2,0.6l-2.6-1.5l-2.4-1.4l-4.9,0.7l-10.2,1.6l-7.8,1.2l1.3,14.6l1.8,13.7l2.6,23.4l0.6,4.8l4.1-0.1l2.4-0.8l3.4,1.5l2.1,4.4 l5.1,0l1.9,2.1l1.8-0.1l2.5-1.3l2.5,0.4l2,1.5l1.7-2.1l2.3-1.3l2.1-0.7l0.6,2.7l1.8,1l3.5,2.3l2.2-0.1l1.1-1.1l-0.1-1.4l1.6-1.5 l0.2-5l1-3.9l1.5-1.4l1.5,0.9l0.8,1.2l1.2-0.2l-0.4-2.4l-0.6-0.6v-2.4l1-1.3l2.3-3.4l1.3-1.5l2.1,0.5l2.3-1.6l3.1-3.4l2.3-3.9 l0.2-5.4l0.5-5v-4.7l-1.1-3.1l1-1.5l0.9-1l-1.4-9.8L731.4,195z").attr({id: 'OH',fill: '#E05F63',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'OH'); 
OH.data({'id':34});

var OK = rsr.path("M375.3,322.6l-10.7-0.5l-6.4-0.5l0.3,0.2l-0.7,10.4l22,1.4l32.1,1.3l-2.3,24.4l-0.5,17.8l0.2,1.6 l4.3,3.7l2.1,1.1l0.7-0.2l0.7-2.1l1.4,1.8h2.1v-1.4l2.7,1.4l-0.5,3.9l4.1,0.2l2.5,1.1l4.1,0.7l2.5,1.8l2.3-2.1l3.4,0.7l2.5,3.4h0.9 v2.3l2.3,0.7l2.3-2.3l1.8,0.7h2.5l0.9,2.5l4.8,1.8l1.4-0.7l1.8-4.1h1.1l1.1,2.1l4.1,0.7l3.7,1.4l3,0.9l1.8-0.9l0.7-2.5h4.3l2.1,0.9 l2.7-2.1h1.1l0.7,1.6h4.1l1.6-2.1l1.8,0.5l2.1,2.5l3.2,1.8l3.2,0.9l1.9,1.1l-0.4-37.2l-1.4-11l-0.2-8.9l-1.4-6.5l-0.8-7.2l-0.1-3.8 l-12.1,0.3l-46.4-0.5l-45-2.1L375.3,322.6z").attr({id: 'OK',fill: '#8BC4CA',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'OK'); 
OK.data({'id':35});

var OR = rsr.path("M140.2,176.8l4.3-17.9l4.7-17.9l1.1-4.2l2.4-5.6l-0.6-1.2l-2.5,0l-1.3-1.7l0.5-1.5l0.5-3.2l4.5-5.5 l1.8-1.1l1.1-1.1l1.5-3.6l4-5.7l3.6-3.9l0.2-3.5l-3.3-2.5l-1.2-4.5l-13.2-3.7l-15.1-3.5l-15.4,0.1l-0.5-1.4l-5.5,2.1l-4.5-0.6 l-2.4-1.6l-1.3,0.7L99,84l-1.7-1.3l-5.3-2h-0.8l-4.3-1.4l-1.9,1.8l-6.2-0.3l-5.9-4.1l0.7-0.8l0.2-7.8l-2.3-3.9l-4.1-0.6 l-0.7-2.5l-2.4-0.5l-5.8,2.1l-2.3,6.5l-3.2,10l-3.2,6.5l-5,14.1l-6.5,13.6l-8.1,12.6l-1.9,2.9l-0.8,8.6l-1.3,6l2.7,3.5l6.7,2.3 l11.6,3.3l7.9,2.5l12.4,3.6l13.3,3.6l13.2,3.6").attr({id: 'OR',fill: '#E05F63',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'OR'); 
OR.data({'id':36});

var PA = rsr.path("M822.2,226.3l1.1-0.6l2.3-0.6l1.5-2.7l1.6-2.3l3.2-3.1v-0.8l-2.4-1.6l-3.6-2.4l-1-2.6l-2.7-0.3 l-0.2-1.1l-0.8-2.7l2.3-1.1l0.2-2.4l-1.3-1.3l0.2-1.6l1.9-3.1v-3.1l2.3-2.4l0.2-1.1l-2.6-0.2l-2.3-1.9l-2.4-5.3l-3-0.9l-2.3-2.1 l-18.6,4l-43,8.7l-8.9,1.5l-0.5-7.1l-5.5,5.6l-1.3,0.5l-4.2,3l2.9,19.1l2.9,9.5l3.6,19.3l3.3-0.6l11.9-1.5l37.9-7.7l14.9-2.8 l8.3-1.6l0.3-0.2l2.1-1.6L822.2,226.3z").attr({id: 'PA',fill: '#8BC4CA',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'PA'); 
PA.data({'id':37});

var RI = rsr.path("M874.1,179.8l-0.5-4.2l-0.8-4.4l-1.7-5.9l5.7-1.5l1.6,1.1l3.4,4.4l2.9,4.4l-2.9,1.5l-1.3-0.2 l-1.1,1.8l-2.4,1.9L874.1,179.8z").attr({id: 'RI',fill: '#8BC4CA',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'RI'); 
RI.data({'id':38});

var SC = rsr.path("M761.2,412.9l-1.8,1l-2.6-1.3l-0.6-2.1l-1.3-3.6l-2.3-2.1l-2.6-0.6l-1.6-4.8l-2.7-6l-4.2-1.9 l-2.1-1.9l-1.3-2.6L736,385l-2.3-1.3l-2.3-2.9l-3.1-2.3l-4.5-1.8l-0.5-1.5l-2.4-2.9l-0.5-1.5l-3.4-5.2l-3.4,0.2l-4-2.4l-1.3-1.3 l-0.3-1.8l0.8-1.9l2.3-1l-0.3-2.1l6.1-2.6l9.1-4.5l7.3-0.8l16.5-0.5l2.3,1.9l1.6,3.2l4.4-0.5l12.6-1.5l2.9,0.8l12.6,7.6l10.1,8.1 l-5.4,5.5l-2.6,6.1l-0.5,6.3l-1.6,0.8l-1.1,2.7l-2.4,0.6l-2.1,3.6l-2.7,2.7l-2.3,3.4l-1.6,0.8l-3.6,3.4l-2.9,0.2l1,3.2l-5,5.5 L761.2,412.9z").attr({id: 'SC',fill: '#FFA4A7',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'SC'); 
SC.data({'id':39});

var SD = rsr.path("M472.8,203.2l-1-1.1l-1.5-3.6l1.8-3.7l1.1-5.6l-2.6-2.1l-0.3-2.7l0.6-3l2.2-0.8l0.3-5.7l-0.1-30.1 l-0.6-3l-4.1-3.6l-1-2v-1.9l1.9-1.3l1.5-1.9l0.2-2.7l-57.4-1.6l-56.2-3.9l-0.8,5.3l-1.6,15.9l-1.3,17.9l-1.6,24.6l16,1l19.6,1.1 l18,1.3l23.8,1.3l10.7-0.8l2.9,2.3l4.3,3l1,0.8l3.5-0.9l4-0.3l2.7-0.1l3.1,1.2l4.5,1.4l3.1,1.8l0.6,1.9l0.9,1.9l0.7-0.5 L472.8,203.2z").attr({id: 'SD',fill: '#F2A57C',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'SD'); 
SD.data({'id':40});

var TN = rsr.path("M697.1,320.6l-51.9,5l-15.8,1.8l-4.6,0.5l-3.9,0v3.9l-8.4,0.5l-7,0.6l-11.1,0.1l-0.3,5.8l-2.1,6.3 l-1,3l-1.3,4.4l-0.3,2.6l-4,2.3l1.5,3.6l-1,4.4l-1,0.8l7.3-0.2l24.1-1.9l5.3-0.2l8.1-0.5l27.8-2.6l10.2-0.8l8.4-1l8.4-1.1l4.8-0.8 l-0.1-4.5l1.8-1.5l2.7-0.6l0.6-3.7l4.2-2.7l3.9-1.5l4.2-3.6l4.4-2.1l0.9-3.5l4.3-3.9l0.6-0.2c0,0,0,1.1,0.8,1.1s1.9,0.3,1.9,0.3 l2.3-3.6l2.1-0.6l2.3,0.3l1.6-3.6l2.1-2.2l0.6-1l0.2-3.9l-1.5-0.3l-2.4,1.9l-7.9,0.2l-12,1.9L697.1,320.6z").attr({id: 'TN',fill: '#F2A57C',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'TN'); 
TN.data({'id':41});

var TX = rsr.path("M357.1,333.4l22.7,1.1l31.1,1.1l-2.3,23.5l-0.3,18.2l0.1,2.1l4.3,3.8l1.7,0.8l1.8,0.3l0.7-1.3 l0.9,0.9l1.7,0.5l1.6-0.7l1.1,0.4l-0.3,3.4l4.3,1l2.7,0.8l4,0.5l2.2,1.8l3.2-1.6l2.8,0.4l2,2.8l1.1,0.3l-0.2,2l3.1,1.2l2.8-1.8 l1.5,0.4l2.4,0.2l0.4,1.9l4.6,2l2.7-0.2l2-4.1h0.3l1.1,1.9l4.4,1l3.3,1.2l3.3,0.8l2.1-0.8l0.8-2.5h3.7l1.9,0.8l3.1-1.6h0.7l0.4,1.1 h4.3l2.4-1.3l1.7,0.3l1.4,1.9l2.9,1.7l3.5,1.1l2.7,1.4l2.4,1.6l3.3-0.9l1.9,1l0.5,10.1l0.3,9.7l0.7,9.5l0.5,4l2.7,4.6l1.1,4.1 l3.9,6.3l0.5,2.9l0.5,1l-0.7,7.5l-2.7,4.4l1,2.9l-0.4,2.5l-0.8,7.3l-1.4,2.7l0.6,4.4l-5.7,1.6l-9.9,4.5l-1,1.9l-2.6,1.9l-2.1,1.5 l-1.3,0.8l-5.7,5.3l-2.7,2.1l-5.3,3.2l-5.7,2.4l-6.3,3.4l-1.8,1.5l-5.8,3.6l-3.4,0.6l-3.9,5.5l-4,0.3l-1,1.9l2.3,1.9l-1.5,5.5 l-1.3,4.5l-1.1,3.9l-0.8,4.5l0.8,2.4l1.8,7l1,6.1l1.8,2.7l-1,1.5l-3.1,1.9l-5.7-3.9l-5.5-1.1l-1.3,0.5l-3.2-0.6l-4.2-3.1l-5.2-1.1 l-7.6-3.4l-2.1-3.9l-1.3-6.5l-3.2-1.9l-0.6-2.3l0.6-0.6l0.3-3.4l-1.3-0.6l-0.6-1l1.3-4.4l-1.6-2.3l-3.2-1.3l-3.4-4.4l-3.6-6.6 l-4.2-2.6l0.2-1.9l-5.3-12.3l-0.8-4.2l-1.8-1.9l-0.2-1.5l-6-5.3l-2.6-3.1v-1.1l-2.6-2.1l-6.8-1.1l-7.4-0.6l-3.1-2.3l-4.5,1.8 l-3.6,1.5l-2.3,3.2l-1,3.7l-4.4,6.1l-2.4,2.4l-2.6-1l-1.8-1.1l-1.9-0.6l-3.9-2.3v-0.6l-1.8-1.9l-5.2-2.1l-7.4-7.8l-2.3-4.7v-8.1 l-3.2-6.5l-0.5-2.7l-1.6-1l-1.1-2.1l-5-2.1l-1.3-1.6l-7.1-7.9l-1.3-3.2l-4.7-2.3l-1.5-4.4l-2.6-2.9l-1.9-0.5l-0.6-4.7l8,0.7l29,2.7 l29.3,1.6l2.3-23.8l3.9-55.6l1.6-18.7l1.4,0 M457.2,567.3l-0.6-7.1l-2.7-7.2l-0.6-7l1.5-8.2l3.3-6.9l3.5-5.4l3.2-3.6l0.6,0.2 l-4.8,6.6l-4.4,6.5l-2,6.6l-0.3,5.2l0.9,6.1l2.6,7.2l0.5,5.2l0.2,1.5L457.2,567.3z").attr({id: 'TX',fill: '#E05F63',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'TX'); 
TX.data({'id':42});

var UT = rsr.path("M253,309.3l-24.6-3.5l-26.6-4.9l-33.8-6l1.6-9.2l3.2-15.2L176,254l2.2-13.6l1.9-8.9l3.8-20.5 l3.5-17.5l1.1-5.6l12.7,2.3l12,2.1l10.3,1.8l8.3,1.4l3.7,0.5l-1.5,10.6l-2.3,13.2l7.8,0.9l16.4,1.8l8.2,0.9l-2.1,22l-3.2,22.6 l-3.8,27.8l-1.7,11.1L253,309.3z").attr({id: 'UT',fill: '#FFA4A7',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'UT'); 
UT.data({'id':43});

var VA = rsr.path("M828.9,269.2l-0.1-1.9l6.5-2.5l-0.8,3.2l-2.9,3.8l-0.4,4.6l0.5,3.4l-1.8,5l-2.2,1.9l-1.5-4.6 l0.4-5.4l1.6-4.2L828.9,269.2z M831.2,297.5L773,310.1l-37.4,5.3l-6.7-0.4l-2.6,1.9l-7.3,0.2l-8.4,1l-8.9,1l8.5-4.9l0-2.1 l1.5-2.1l10.6-11.5l3.9,4.5l3.8,1l2.5-1.1l2.2-1.3l2.5,1.3l3.9-1.4l1.9-4.6l2.6,0.5l2.9-2.1l1.8,0.5l2.8-3.7l0.3-2.1l-1-1.3l1-1.9 l5.3-12.3l0.6-5.7l1.2-0.5l2.2,2.4l3.9-0.3l1.9-7.6l2.8-0.6l1-2.7l2.6-2.3l1.3-2.3l1.5-3.4l0.1-5.1l9.8,3.8 c0.7,0.3,0.7-4.8,0.7-4.8l4.1,1.4l-0.5,2.6l8.2,2.9l1.3,1.8l-0.9,3.7l-1.3,1.3l-0.5,1.7l0.5,2.4l2,1.3l3.9,1.4l2.9,1l4.9,0.9 l2.2,2.1l3.2,0.4l0.9,1.2l-0.4,4.7l1.4,1.1l-0.5,1.9l1.2,0.8l-0.2,1.4l-2.7-0.1l0.1,1.6l2.3,1.5l0.1,1.4l1.8,1.8l0.5,2.5l-2.6,1.4 l1.6,1.5l5.8-1.7L831.2,297.5z").attr({id: 'VA',fill: '#FFA4A7',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'VA'); 
VA.data({'id':44});

var VT = rsr.path("M844.3,153.7l-0.8-5.7l-2.4-10l-0.6-0.3l-2.9-1.3l0.8-2.9l-0.8-2.1l-2.7-4.6l1-3.9l-0.8-5.2 l-2.4-6.5l-0.8-4.9l26.2-6.7l0.3,5.8l1.9,2.7v4l-3.7,4l-2.6,1.1v1.1l1.1,1.8v8.6l-0.8,9.2l-0.2,4.8l1,1.3l-0.2,4.5l-0.5,1.8 l0.7,1.6l-7,1.4L844.3,153.7z").attr({id: 'VT',fill: '#F7DC8A',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'VT'); 
VT.data({'id':45});

var WA = rsr.path("M93.6,6.4l4.4,1.5l9.7,2.7l8.6,1.9l20,5.7l23,5.7l15.2,3.4l-1,3.9l-4.1,13.8l-4.5,20.8 l-3.2,16.1l-0.4,9.4l-13.2-3.9l-15.6-3.4l-13.7,0.6l-1.6-1.5l-5.3,1.9l-4-0.3l-2.7-1.8l-1.6,0.5l-4.2-0.2l-1.9-1.4l-4.8-1.7 l-1.4-0.2l-5-1.3l-1.8,1.5l-5.7-0.3l-4.8-3.8l0.2-0.8l0.1-7.9l-2.1-3.9l-4.1-0.7l-0.4-2.4l-2.5-0.6l-2.9-0.5l-1.8,1l-2.3-2.9 l0.3-2.9l2.7-0.3l1.6-4l-2.6-1.1l0.2-3.7l4.4-0.6l-2.7-2.7l-1.5-7.1l0.6-2.9v-7.9l-1.8-3.2l2.3-9.4l2.1,0.5l2.4,2.9l2.7,2.6 l3.2,1.9l4.5,2.1l3.1,0.6l2.9,1.5l3.4,1l2.3-0.2v-2.4l1.3-1.1l2.1-1.3l0.3,1.1l0.3,1.8l-2.3,0.5l-0.3,2.1l1.8,1.5l1.1,2.4l0.6,1.9 l1.5-0.2l0.2-1.3l-1-1.3l-0.5-3.2l0.8-1.8l-0.6-1.5V19l1.8-3.6l-1.1-2.6l-2.4-4.8l0.3-0.8L93.6,6.4z M84.1,12.3l2-0.2 l0.5,1.4l1.5-1.6h2.3l0.8,1.5l-1.5,1.7l0.6,0.8l-0.7,2l-1.4,0.4c0,0-0.9,0.1-0.9-0.2s1.5-2.6,1.5-2.6l-1.7-0.6l-0.3,1.5l-0.7,0.6 l-1.5-2.3L84.1,12.3z").attr({id: 'WA',fill: '#F7DC8A',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'WA'); 
WA.data({'id':46});

var WI = rsr.path("M612.9,197.2l0.4-3l-1.6-4.5l-0.6-6.1l-1.1-2.4l1-3.1l0.8-2.9l1.5-2.6l-0.6-3.4l-0.6-3.6l0.5-1.8 l1.9-2.4l0.2-2.7l-0.8-1.3l0.6-2.6l0.5-3.2l2.7-5.7l2.9-6.8l0.2-2.3l-0.3-1l-0.8,0.5l-4.2,6.3l-2.7,4l-1.9,1.8l-0.8,2.3l-1.5,0.8 l-1.1,1.9l-1.5-0.3l-0.2-1.8l1.3-2.4l2.1-4.7l1.8-1.6l1.1-2.3l-1.6-0.9l-1.4-1.4l-1.6-10.3l-3.7-1.1l-1.4-2.3l-12.6-2.7l-2.5-1.1 l-8.2-2.3l-8.2-1.1l-4.2-5.4l-0.5,1.3l-1.1-0.2l-0.6-1.1l-2.7-0.8l-1.1,0.2l-1.8,1l-1-0.6l0.6-1.9l1.9-3.1l1.1-1.1l-1.9-1.5 l-2.1,0.8l-2.9,1.9l-7.4,3.2l-2.9,0.6l-2.9-0.5l-1-0.9l-2.1,2.8l-0.2,2.7v8.5l-1.1,1.6l-5.3,3.9l-2.3,5.9l0.5,0.2l2.5,2.1l0.7,3.2 l-1.8,3.2v3.9l0.5,6.6l3,3h3.4l1.8,3.2l3.4,0.5l3.9,5.7l7.1,4.1l2.1,2.7l0.9,7.4l0.7,3.3l2.3,1.6l0.2,1.4l-2.1,3.4l0.2,3.2l2.5,3.9 l2.5,1.1l3,0.5l1.3,1.4l9.2,0l26.1-1.5L612.9,197.2z").attr({id: 'WI',fill: '#FFA4A7',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'WI'); 
WI.data({'id':47});

var WV = rsr.path("M756.4,242.2l1.1,4.9l1.1,6.9l3.6-2.7l2.3-3.1l2.5-0.6l1.5-1.5l1.8-2.6l1.2,0.6l2.9-0.3l2.6-2.1 l2-1.5l1.8-0.5l1.3,1l2.2,1.1l1.9,1.8l1.4,1.3l-0.1,4.7l-5.7-3.1l-4.5-1.8l-0.2,5.3l-0.5,2.1l-1.6,2.7l-0.6,1.6l-3.1,2.4l-0.5,2.3 l-3.4,0.3l-0.3,3.1l-1.1,5.5h-2.6l-1.3-0.8l-1.6-2.7l-1.8,0.2l-0.3,4.4l-2.1,6.6l-5,10.8l0.8,1.3l-0.2,2.7l-2.1,1.9l-1.5-0.3 l-3.2,2.4l-2.6-1l-1.8,4.7c0,0-3.7,0.8-4.4,1c-0.6,0.2-2.4-1.3-2.4-1.3l-2.4,2.3l-2.6,0.6l-2.9-0.8l-1.3-1.3l-2.2-3l-3.1-2 l-2.6-2.7l-2.9-3.7l-0.6-2.3l-2.6-1.5l-0.8-1.6l-0.2-5.3l2.2-0.1l1.9-0.8l0.2-2.7l1.6-1.5l0.2-5l1-3.9l1.3-0.6l1.3,1.1l0.5,1.8 l1.8-1l0.5-1.6l-1.1-1.8v-2.4l1-1.3l2.3-3.4l1.3-1.5l2.1,0.5l2.3-1.6l3.1-3.4l2.3-3.9l0.3-5.7l0.5-5v-4.7l-1.1-3.1l1-1.5l1.3-1.3 l3.5,19.8l4.6-0.8L756.4,242.2z").attr({id: 'WV',fill: '#C8DA98',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'WV'); 
WV.data({'id':48});

var WY = rsr.path("M354.3,143.8l-10.5-0.8l-32.1-3.3l-16.2-2.1l-28.3-4.1l-19.9-3l-1.4,11.2l-3.8,24.3l-5.3,30.4 l-1.5,10.5l-1.7,11.9l6.5,0.9l25.9,2.5l20.6,2.3l36.8,4.1l23.8,2.9l4.5-44.2l1.4-25.4L354.3,143.8z").attr({id: 'WY',fill: '#E05F63',parent: 'outlines','stroke-width': '0','stroke-opacity': '1'}).data('id', 'WY'); 
WY.data({'id':49});

var DC = rsr.circle(801, 251, 5).attr({id: 'DC',fill: '#996633',stroke: '#FFFFFF',"stroke-width": '1.5',parent: 'outlines','stroke-opacity': '1'});
DC.data({'id':50});

outlines.attr({'id': 'outlines','name': 'outlines'});

var rsrGroups = [outlines]; 
outlines.push( AK , HI , AL , AR , AZ , CA , CO , CT , DE , FL , GA , IA , ID , IL , IN , KS , KY , LA , MA , MD , ME , MI , MN , MO , MS , MT , NC , ND , NE , NH , NJ , NM , NV , NY , OH , OK , OR , PA , RI , SC , SD , TN , TX , UT , VA , VT , WA , WI , WV , WY , DC );

var tutorialOn = false; 
// click functions for html objects
var btnInfo = document.getElementById("btnInfo");
btnInfo.onclick = function() {  //when info button is clicked, open info odal
    $("#infoModal").css("display", "block");
    document.getElementById("test").click(); //open How to Use tab 
}

var closeInfo = document.getElementsByClassName("close")[0];
closeInfo.onclick = function() {
    $("#infoModal").css("display", "none");   //when close button is clicked, close info modal
}

var closeState = document.getElementsByClassName("close")[1];
closeState.onclick = function() {
    document.getElementById("input0").reset();  // reset the input form field
    $('#news_title').empty(); // reset div
    $("#stateModal").css("display", "none");   //when close button is clicked, close state modal
    $('#nytimes_wrapper').empty();  // reset div
    $('#guardian_wrapper').empty(); // reset div
    $('#Twitter').empty();  // reset div
    $('#holder').show();      //open the news blurb

    if ($("#stepThree").is(':visible')) {
        next2();  //if tutorial modal seven is open, move to next tutorial modal 
    }
}

window.onclick = function(event) { //if the user clicks out of the modal box, close the modal box
    if (event.target == document.getElementById('infoModal') || event.target == document.getElementById('stateModal') || event.target == document.getElementById('aboutusModal') || event.target == document.getElementById('contactusModal')) {
        document.getElementById("input0").reset(); // reset the input form field
        $('#news_title').empty(); //reset div
        $("#infoModal").css("display", "none"); //if user clicks outside modal box, close info modal
        $("#stateModal").css("display", "none");  //if user clicks outside modal box, close state modal
        $('#nytimes_wrapper').empty();  //reset div
        $('#guardian_wrapper').empty(); //reset div
        $('#Twitter').empty();  //reset div
        $('#holder').show();            //open the news blurb
        
        if (event.target == document.getElementById('stateModal') && $("#stepThree").is(':visible')) {
            next2();  //if tutorial modal seven is open, move to next tutorial modal 
        }
    }

    if (event.target != $('.sprite')) {
        $('.out_modal').css('display', 'none');
    }
}

//tutorial 
var tutorial = document.getElementById("tutorialBtn");

tutorial.onclick = function() { // when button clicked, start tutorial
    if (tutorialOn) { 
        alert('Tutorial has already been started.');  //If tutorial on, alert the user
    } else {
        tutorialOn = true;  //turn tutorial on 
        $("#infoModal").css("display", "none"); //close info modal
        $(".modal").css("background-color", "rgba(0,0,0,0)"); //for tutorial, transparent background
        $("#stepOne").css("display", "block");  //display stepOne modal box
    }

}

function next1() {
    $("#stepTwo").css("display", "none"); //close stepTwo modal
    $("#stateModal").css("display", "block"); // make sure state modal is open
    $("#stepThree").css("display", "block");  //display stepThree
    $("#stepThree").css("z-index", "auto"); //layer indicator
}


function next2() {
    $("#stepThree").css("display", "none"); //close stepThree modal
    $("#stepFour").css("display", "block"); //display stepFour
    $("#stepFour").css("z-index", "40");  //layer indicator

}


function next3() {
    $("#stepFour").css("display", "none");  //close stepFour modal
    $(".tool_wrapper").css("z-index","100");
    $("#stepFive").css("display", "block"); //display stepFive modal
    ("#stepFive").css("z-index", "40"); //layer indicator

}

function next4() {
    $("#stepFive").css("display", "none");  //close stepFive modal
    $(".tool_wrapper").css("z-index","auto");
    $(".modal").css("background-color", "rgba(0,0,0,0.4)"); //reset modal background transparency
    tutorialOn = false; //turn tutorial off

}


// click functions for each state
for (var i = 0; i < rsrGroups.length; i++) {
    rsrGroups[i].mouseover(function() { //when state is hovered, change opacity
        this.node.style.transition = "0.4s";
        this.node.style.opacity = 0.6;
    });
    rsrGroups[i].mouseout(function(e) {
        this.node.style.opacity = 1; //when state is unhovered, return to original color
    });
    rsrGroups[i].click(function(e) { //when a state is clicked,  run the following functions:



        //--------------  change visibility of modal ------------------
        $("#stateModal").toggle();
        $(".out_modal").css("display", "none");

        //--------------  change capital and state name in modal ------------------


        document.getElementById('statename').innerHTML = US[this.data('id')].Name;
        document.getElementById('statecapital').innerHTML = US[this.data('id')].Capital;
        document.getElementById('stateabbreviation').innerHTML = US[this.data('id')].Abbreviation;
        document.getElementById('statepop').innerHTML = US[this.data('id')].Population;
        document.getElementById('statevotes').innerHTML = US[this.data('id')].ElectoralVotes;
        document.getElementById('statearea').innerHTML = US[this.data('id')].TotalArea + " m" + ("2").sup();
        document.getElementById('stateflag').src = "pictures/stateflags/".concat(US[this.data('id')].Abbreviation.toLowerCase(), ".png");
        twttr.widgets.createTimeline({
                sourceType: 'widget',
                widgetId: US[this.data('id')].woeid
            },
            document.getElementById('Twitter')
        );

        if (tutorialOn == true) { //if the tutorial is on
            $(".nextBtn").css("display", "none"); //hide next button in modal 
            $("#stepOne").css("display", "none"); //close stepOne modal 
            $("#stepTwo").css("display", "block");
            $("#stepTwo").css("z-index", "10"); //layer position behind stateModal 
        }


		// makes sure user can't search multiple times within 10 seconds to not overload the news api
        var startSearchWithDelay = _.debounce(startSearch, 10000, true);
        
        var state = US[this.data('id')].Name;
        
        $("#search").click(function() { // when user clicks the search button
            document.getElementById("news_title").innerHTML = "Search is rate limited. Please wait.";
            startSearchWithDelay();		//start searching for news
        });

        $("#input0").keypress(function(event) {		// when key is pressed while in search bar
            if (event.which == 13) {		// if key pressed is the enter key
                event.preventDefault();		// do not execute normal enter key function
                startSearchWithDelay();		// start searching for news
            }
        });

        function startSearch() {
            $('#holder').hide(); //hide the news blurb
            if($('#input').val()==""){
              document.getElementById("news_title").innerHTML = "News in <span style = 'color: #3399ff'>" + state + "</span>";
            } else{
              document.getElementById("news_title").innerHTML = $('#input').val() + " in <span style = 'color: #3399ff'>" + state + "</span>";
            }
            nytimes_api_search(state + " " + $('#input').val()); //query the ny times api with the user's selected state and inputted tpoic
            guardian_api_search("\"" + state + "\"" + " AND " + $('#input').val()); //query the guardian api with the user's selected state and inputted topic

        }
    });

}

var locations = {"Washington":{"x": 115, "y": 55}, "Oregon":{"x": 91, "y": 124}, "California":{"x": 63, "y": 265}, "Alaska":{"x": 118, "y": 493}, "Idaho":{"x": 184, "y": 147}, "Nevada":{"x": 129, "y": 228}, "Montana":{"x": 279, "y": 93}, "Wyoming":{"x": 295, "y": 181}, "Utah":{"x": 216, "y": 250}, "Arizona":{"x": 201, "y": 369}, "Colorado":{"x": 316, "y": 268}, "New Mexico":{"x": 298, "y": 373}, "Hawaii":{"x": 331, "y": 567}, "North Dakota":{"x": 411, "y": 97}, "South Dakota":{"x": 409, "y": 157}, "Nebraska":{"x": 417, "y": 226}, "Kansas":{"x": 432, "y": 288}, "Oklahoma":{"x": 451, "y": 358}, "Texas":{"x": 424, "y": 444}, "Minnesota":{"x": 495, "y": 123}, "Iowa":{"x": 520, "y": 210}, "Missouri":{"x": 534, "y": 289}, "Arkansas":{"x": 540, "y": 369}, "Louisiana":{"x": 543, "y": 447}, "Wisconsin":{"x": 579, "y": 153}, "Illinois":{"x": 597, "y": 241}, "Michigan":{"x": 661, "y": 180}, "Indiana":{"x": 645, "y": 247}, "Kentucky":{"x": 670, "y": 301}, "Tennessee":{"x": 654, "y": 342}, "Mississippi":{"x": 600, "y": 418}, "Ohio":{"x": 691, "y": 232}, "Alabama":{"x": 649, "y": 402}, "Georgia":{"x": 708, "y": 411}, "Florida":{"x": 765, "y": 502}, "South Carolina":{"x": 757, "y": 382}, "North Carolina":{"x": 780, "y": 331}, "Virginia":{"x": 778, "y": 285}, "West Virginia":{"x": 735, "y": 273}, "Pennsylvania":{"x": 778, "y": 213}, "Maryland":{"x": 801, "y": 243}, "Delaware":{"x": 828, "y": 250}, "New Jersey":{"x": 835, "y": 228}, "New York":{"x": 820, "y": 154}, "Connecticut":{"x": 858, "y": 175}, "Rhode Island":{"x": 876, "y": 171}, "Massachusetts":{"x": 864, "y": 159}, "Vermont":{"x": 844, "y": 124}, "New Hampshire":{"x": 864, "y": 135}, "Maine":{"x": 888, "y": 81}};



$(function() {

    $(".choose").click(function() {
        $('#first').css("display", "flex");
        $('#second').css("display", "none");
        $('#third').css("display", "none");

        $(".choose").addClass("active");
        $(".choose > .icon").addClass("active");
        $(".pay").removeClass("active");
        $(".wrap").removeClass("active");
        $(".ship").removeClass("active");
        $(".pay > .icon").removeClass("active");
        $(".wrap > .icon").removeClass("active");
        $(".ship > .icon").removeClass("active");
        $("#line").addClass("one");
        $("#line").removeClass("two");
        $("#line").removeClass("three");  
        if (tutorialOn == true) { //only if tutorial on
            if (document.getElementById('first').style.display == "flex") { //if the Info tab is open display the following text in stepTwo modal
                document.getElementById("text").innerHTML = "View a State Summary in the Info Tab.\nClick the News Tab when ready.";
            }
        }
    });

    $(".pay").click(function() {
        $('#first').css("display", "none");
        $('#second').css("display", "flex");
        $('#third').css("display", "none");

        $("#second").css("z-index", "2005");

        $(".pay").addClass("active");
        $(".pay > .icon").addClass("active");
        $(".choose").removeClass("active");
        $(".wrap").removeClass("active");
        $(".ship").removeClass("active");
        $(".choose > .icon").removeClass("active");
        $(".wrap > .icon").removeClass("active");
        $(".ship > .icon").removeClass("active");
        $("#line").addClass("two");
        $("#line").removeClass("one");
        $("#line").removeClass("three");
        if (tutorialOn == true) {//only if tutorial on 
            if (document.getElementById('second').style.display == "flex") {//if the News tab is open display the following text in stepTwo modal
                document.getElementById("text").innerHTML = "Search for Topic Stories in the State. Hover over Story Bubble to read a preview and click to view the article.\nClick the Twitter tab when ready.";
            }
        }
    });

    $(".wrap").click(function() {
        $('#first').css("display", "none");
        $('#second').css("display", "none");
        $('#third').css("display", "block");

        $("#second").css("z-index", "1995");

        $(".wrap").addClass("active");
        $(".wrap > .icon").addClass("active");
        $(".pay").removeClass("active");
        $(".choose").removeClass("active");
        $(".ship").removeClass("active");
        $(".pay > .icon").removeClass("active");
        $(".choose > .icon").removeClass("active");
        $(".ship > .icon").removeClass("active");
        $("#line").addClass("three");
        $("#line").removeClass("two");
        $("#line").removeClass("one");
        if (tutorialOn == true) {//only if tutorial on 
            if (document.getElementById('third').style.display == "block") {//if the Twitter tab is open display the following text in stepTwo modal
                document.getElementById("text").innerHTML = "Check out the Top Tweets about a state and view trending topics";
                $("#stepTwo").css("z-index", "30");
                $(".nextBtn").css("display", "block");
            }
        }
    });

    $(".choose").click(function() {
        $("#first").addClass("active");
        $("#second").removeClass("active");
        $("#third").removeClass("active");
    });

    $(".pay").click(function() {
        $("#first").removeClass("active");
        $("#second").addClass("active");
        $("#third").removeClass("active");
    });

    $(".wrap").click(function() {
        $("#first").removeClass("active");
        $("#second").removeClass("active");
        $("#third").addClass("active");
    });




    var sock = new WebSocket("ws://localhost:5001");
    sock.onopen = function(event) {
        console.log("news api socket connected successfully");
        setTimeout(function() {
            sock.send("on_load");
        }, 1000);
    }

    var pin_id = 60;
    var n = 1;

    sock.onmessage = function(event) {
        console.log(event.data);
        if (event.data != "done") {
            var m = event.data.split('~');

            pin_location = m[7];
            if (pin_location != "null") {
                n += 1;

                var offsetX = Math.floor((Math.random() * 25) * Math.pow(-1, n));
                var offsetY = Math.floor((Math.random() * 10) * Math.pow(-1, n));

                var spriteX = locations[pin_location].x - $(".sprite").width() / 2 + offsetX;
                var spriteY = locations[pin_location].y - $(".sprite").height() + offsetY;

                if (pin_location == "Washington") {
                    spriteX = Math.floor(Math.random() * 50 + 108) - $(".sprite").width() / 2;
                    spriteY = Math.floor(Math.random() * 65 + 25) - $(".sprite").height();
                } else if (pin_location == "California") {
                    spriteX = Math.floor(Math.random() * 35 + 55) - $(".sprite").width() / 2;;
                    spriteY = Math.floor(Math.random() * 150 + 200) - $(".sprite").height();
                } else if (pin_location == "New York") {
                    spriteX = Math.floor(Math.random() * 28 + 798) - $(".sprite").width() / 2;;
                    spriteY = Math.floor(Math.random() * 62 + 113) - $(".sprite").height();
                }


                var pin_object = "";
                pin_id += 1;

                pin_object += "<img class ='sprite " + m[6] + "' src = 'pictures/loc.png' style = ";
                pin_object += ("'top: " + spriteY + "px; left: " + spriteX + "px;' id = '" + pin_id + "'>");


                var boxX = spriteX + $(".sprite").width();
                var boxY = spriteY;

                if (spriteX > 430) {
                    boxX -= $(".sprite").width() + $(".out_modal").width();
                }
                if (spriteY > 330) {
                    boxY -= $(".out_modal").height();
                }

                box_id = "b" + pin_id;

                var headline = m[1];

                if (m[1].length > 50) {
                    headline = m[1].substring(0, m[1].substring(50).indexOf(" ") + 50) + "...";
                }
                pin_object += create_article_div('out_modal', m[3], 'top: ' + boxY + 'px; left: ' + boxX + 'px;', box_id, m[4], 'TOP', headline, m[2], m[5], m[0], '', m[6]);
                $("#map").prepend(pin_object);

                var clicked_id = "";
                $(".sprite").click(function() {

                    var pin_id = this.id;
                    var box_id = "#b" + pin_id;
                    $('.out_modal').not(box_id).css({
                        "display": "none",
                        "z-index": "10"
                    });
                    //$(box_id).css("display","block"); //.toggle() works weird
                    if ($(box_id).css('display') == "none") {
                        $(box_id).css("z-index", "200");
                        $(box_id).show('slow');
                        return;
                    }
                });

                display_content(); //run the event listner that reveals the article snippet when the article div is hovered

            }
        } else {
            var source_list = ["cnn", "the-new-york-times", "associated-press", "business-insider", "espn", "national-geographic","engadget","reuters","usa-today"];

            console.log('done');
            $('#slct').on('change',function() {
                var value = $(this).val();
                if (value == "hide_all") {
                    $('.sprite').hide('medium');
                    $('#hide').css("display:none;");
                    $('.out_modal').hide();
                } else if (value == "show_all") {
                    $('.sprite').not("#hide").show('slow');
                } else {
                    console.log("dsalfkj", value);
                    for (i = 0; i < source_list.length; i++) {
                        if (source_list[i] != value) {
                            $(".sprite." + source_list[i]).hide('medium');
                        } else {
                          $(".sprite." + source_list[i]).show('slow');
                        }
                    }
                }
            });
        }

    }

    var sock2 = new WebSocket("ws://localhost:5002");
    sock2.onopen = function(event) {
        console.log("twitter socket connected successfully");
        sock2.send("1");
        setTimeout(function() {}, 1000);
    }

    sock2.onmessage = function(event) {
        var m = event.data.split('~');

        var volume = m[2];
        if (volume == "null") {
            volume = "A couple"
        }
        var item = create_twitter_trends(m[0], m[1], volume);
        $(".trend_items").append(item);
    }

});

// adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
function openTab(evt, tabName) { //open the tabs in the Info tab

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function create_article_div(wrapper_type, web_url, additional_style, id, image_url, section_name, headline, snippet, pub_date, author, section_container, source) {
    var article_object = ""; //string that contains the HTML code for each article div

    article_object += '<a href = "' + web_url + '" target="_blank">'; //create a link to the article's web_url
    var style = "";

    pub_date = pub_date.substring(0, pub_date.indexOf('T'));
    if (headline.length >= 60) { //if the headline is longer than 60 characters, make its font size smaller
        style = 'style = \"font-size: 20px;\"';
    }
    article_object += '<div class = "article_wrapper ' + wrapper_type + ' ' + source + '" id = "' + id + '" style = "' + additional_style + '">';
    if (image_url != "null") { //if the article is accompanied by an image, add that image to the article div
        article_object += '<img class = "article_img" src = "' + image_url + '">';
    }
    article_object += '<div class = "article_header"' + style + '> <span class = "section_name">' + section_name + '</span>';
    article_object += '<span style = "color: grey"> | </span>'
    article_object += '<span class = "web_title">' + headline + '</span></div>'
    article_object += '<div class = "article_footer"><marquee id = "footer_content">' + snippet + '</marquee>';
    article_object += '<div id = "publication_date">' + pub_date + '</div></div></div></a>';


    return article_object;
}

function create_twitter_trends(name, url, volume) {
    var item = "";
    item += '<li class = "item"><a class = "trend_link" href = "' + url + '" target="_blank">'
    item += '<h1 class = "trend_heading">' + name + '</h1></a><h2 class = "trend_count">' + volume + ' Tweets</h2></li>'
    return item;
}

function display_content() {
    $('.article_wrapper').hover( //if an article div is hovered, make the publication date disappear and make the snippet appear     
        function() {
            $(this).find(publication_date).css("opacity", "0");
            $(this).find(footer_content).css("opacity", "1")
        },
        function() {
            $(this).find(publication_date).css("opacity", "1"); //when the user unhovers, make the snippet disappear and make the publicaton date appear
            $(this).find(footer_content).css("opacity", "0")
        }
    );
}

// NYTimes API search
function nytimes_api_search(state) {
    document.getElementById("nytimes_wrapper").innerHTML = ""; //clear any preexisting elements in the nytimes_wrapper div
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "67e9f90c7481478cb4698719c087661b",
        'q': state,
        'sort': "newest"
    });
    $.ajax({ //make a GET call to nytimes API, using the user's query term
        async: false,
        url: url,
        method: 'GET',
    }).done(function(result) {
        var articleList = result.response.docs;
        var image_url = "";
        var author = "";
        for (var i = 0; i < articleList.length; i++) {
            try { //try storing the multimedia thumbnail from the json
                image_url = 'http://nytimes.com/' + articleList[i].multimedia[0].url;
            } catch (err) {
                image_url = "null"; //if the json does not contain a multimedia image, set image_url to null
            }
            //create an article div using the extracted data values
            var article_object = create_article_div("in_modal", articleList[i].web_url, "", "null", image_url, articleList[i].section_name, articleList[i].headline.main, articleList[i].snippet, articleList[i].pub_date, author, "#nytimes_wrapper", "the-new-york-times");
            $("#nytimes_wrapper").append(article_object);
        }
        display_content(); //run the event listner that reveals the article snippet when the article div is hovered

    }).fail(function(err) { //if there is an error communicating the the API
        console.log("Error loading nytimes articles:", err);
        console.log(url);
        throw err;
    });
}

// Guardian API search
function guardian_api_search(state) {
    var $guardianList = $('#guardianList');
    var guardianUrl = 'https://content.guardianapis.com/search';
    guardianUrl += '?' + $.param({
        'api-key': "951ed091-d2b9-4461-bcf2-d56e32d4eb91",
        'q': state,
        'show-elements': "image",
        "type": 'article',
        'show-tags': 'contributor',
        'order-by': "newest",
        "show-fields": 'thumbnail'
    });
    console.log(guardianUrl);
    $.ajax({ //make a GET call to guardian API, using the user's query term. the json file should return the state, corresponding images, author, and thumbnail
        async: false,
        type: 'GET',
        url: guardianUrl,
        success: function(guardianData) {
            var articleList = guardianData.response.results;
            var image_url = "";
            for (var i = 0; i < articleList.length; i++) {
                try { //try storing the multimedia thumbnail from the json
                    image_url = articleList[i].fields.thumbnail;
                } catch (err) {
                    image_url = "null"; //if the json does not contain a multimedia image, set image_url to null
                }
                //create an article div using the extracted data values
                var article_object = create_article_div("in_modal", articleList[i].webUrl, "", "null", image_url, articleList[i].sectionName, articleList[i].webTitle, "Sorry, no preview available.", articleList[i].webPublicationDate, articleList[i].tags[2], "#guardian_wrapper", "the-guardian");
                $("#guardian_wrapper").append(article_object);
            }

            display_content(); //run the event listner that reveals the article snippet when the article div is hovered
        },
        error: function() {
            alert('error loading guardianList');
        }
    });
}
