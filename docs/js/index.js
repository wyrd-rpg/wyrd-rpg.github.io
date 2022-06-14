console.log('index.js')
// END STATE GOALS
// Separate functions/imports for each call which returns needed data from a given table.
// The data should be accessible in an easy to understand way such as dot notation (table.field.value)
// enabling you to loop through a fieldset and output the results as a list or in a table.
// 
// | Table Name              | Fields | Table ID          | 
// |-------------------------|--------|-------------------|
// | Dice Steps              | Dice   | tblmhQjSxPrJzhZWR |
// | Backgrounds             | all    | tblLQYLqGBSooallZ |
// | Traits                  | all    | tbl8yEjmIHuv2QgPi |
// | Live_Starting_Equipment | all    | tblY8k7wldvvxdwVT |

// API URL Method
// -----------------------------------------------------------------------
// Helper Function to fetch records and cell values via Airtable API  and make the field values accessible with dot notation.
async function getRecordsAsList(table, view) {
    let key = 'keymozIRq1SpsUPa6'; // read only api key from Airtable
    let url = `https://api.airtable.com/v0/appIn0GQksTbRvLRb/${table}?api_key=${key}&view=${view}`;
    // Fetches data and encodes as JSON
    async function getData(url) {
        const response = await fetch(url);
        return response.json();
    }
    // Sets data into a variable `data`
    const data = await getData(url);
    return { data };
}


// Example API Calls and Outputs
(async function() {
    let 
        dice,
        backgrounds,
        appearance,
        physicalDetail,
        clothing,
        vice,
        virtue,
        mannerism,
        armor,
        weapons

    // Dice Steps
    // ---------------------------------------------------------------------------------------------------
    dice = await getRecordsAsList('Dice Steps', 'Grid view');
    // Log Items to Console
    console.log('--------------------------------------', '\n', 'Dice Steps', '\n', '--------------------------------------')
    for (let i=0; i<dice.data.records.length; i++) {
        console.log(dice.data.records[i].fields.Dice)
    }

    // Backgrounds
    // ---------------------------------------------------------------------------------------------------
    backgrounds = await getRecordsAsList('Backgrounds', 'Grid view');
    let 
        backgroundData = backgrounds.data.records,
        backgroundsList = document.getElementById('backgrounds-list');
    // for each record, insert a list item
    for (let i=0; i<backgroundData.length; i++) {
        let li = document.createElement('li');
        li.append(backgroundData[i].fields.Background);
        backgroundsList.append(li);
    } 

    // Physical Traits
    // ---------------------------------------------------------------------------------------------------

    // Appearance
    // ----------------------
    appearance = await getRecordsAsList('Traits', 'Appearance');
    let 
        appearanceData = appearance.data.records,
        appearanceList = document.getElementById('appearance-list');
    // for each record, insert a list item
    for (let i=0; i<appearanceData.length; i++) {
        let li = document.createElement('li');
        li.append(appearanceData[i].fields.Trait);
        appearanceList.append(li);
    }

    // Physical Detail
    // ----------------------
    physicalDetail = await getRecordsAsList('Traits', 'Physical Detail');
    let 
        physicalDetailData = physicalDetail.data.records,
        physicalDetailList = document.getElementById('physical-detail-list');
    // for each record, insert a list item
    for (let i=0; i<physicalDetailData.length; i++) {
        let li = document.createElement('li');
        li.append(physicalDetailData[i].fields.Trait);
        physicalDetailList.append(li);
    }

    // Clothing
    // ----------------------
    clothing = await getRecordsAsList('Traits', 'Clothing');
    let 
        clothingData = clothing.data.records,
        clothingList = document.getElementById('clothing-list');
    // for each record, insert a list item
    for (let i=0; i<clothingData.length; i++) {
        let li = document.createElement('li');
        li.append(clothingData[i].fields.Trait);
        clothingList.append(li);
    }

    // Personality Traits
    // ---------------------------------------------------------------------------------------------------

    // Vice
    // ----------------------
    vice = await getRecordsAsList('Traits', 'Vice');
    let 
        viceData = vice.data.records,
        viceList = document.getElementById('vice-list');
    // for each record, insert a list item
    for (let i=0; i<viceData.length; i++) {
        let li = document.createElement('li');
        li.append(viceData[i].fields.Trait);
        viceList.append(li);
    }

    // Virtue
    // ----------------------
    virtue = await getRecordsAsList('Traits', 'Virtue');
    let 
        virtueData = virtue.data.records,
        virtueList = document.getElementById('virtue-list');
    // for each record, insert a list item
    for (let i=0; i<virtueData.length; i++) {
        let li = document.createElement('li');
        li.append(virtueData[i].fields.Trait);
        virtueList.append(li);
    }

    // Mannerism
    // ----------------------
    mannerism = await getRecordsAsList('Traits', 'Mannerism');
    let 
        mannerismData = mannerism.data.records,
        mannerismList = document.getElementById('mannerism-list');
    // for each record, insert a list item
    for (let i=0; i<mannerismData.length; i++) {
        let li = document.createElement('li');
        li.append(mannerismData[i].fields.Trait);
        mannerismList.append(li);
    }

    // Armor & Clothing
    // ---------------------------------------------------------------------------------------------------
    armor = await getRecordsAsList('Live_Starting_Equipment', 'Armor');
    // Log Items to Console
    console.log('--------------------------------------', '\n', 'Armor & Clothing', '\n', '--------------------------------------')
    for (let i=0; i<armor.data.records.length; i++) {
        console.log(armor.data.records[i].fields.Item)
    }

    // Weapons
    // ---------------------------------------------------------------------------------------------------
    weapons = await getRecordsAsList('Live_Starting_Equipment', 'Weapons');
    // Log Items to Console
    console.log('--------------------------------------', '\n', 'Weapons', '\n', '--------------------------------------')
    for (let i=0; i<weapons.data.records.length; i++) {
        console.log(weapons.data.records[i].fields.Item)
    }

})();
