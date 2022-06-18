# Treasure

## Treasure Dice

As PCs adventure, they can acquire **Treasure dice**. These can be spent immediately by rolling on the tables provided, or dice can be saved for a later discovery. A new treasure die is worth Def or +1 step to an existing treasure die. Dice steps:

**d4 → d6 → d8 → d10 → d12 → d20**

<div class="flex--lg">

<div class="w50--lg mt2 pr1--lg">

### Treasure Table Assortment

|d20| Quality |
|---|----------|
|1|Worthless|
|2-6|Mundane|
|7|Mundane, but useful|
|8-12|Mundane, but high quality|
|13|Cursed|
|14-18|Magic|
|19|Magic and high quality|
|20|Amazing and/or magical|

</div><div class="w50--lg mt2 pl1--lg">

### Item Tags

| | Quality | Details |
|---|----------|--|
|↑|Quality|+1 dice step|
|▲|Durable|Does not step down on a 1|
|✧|Enchanted|+1 dice step, reroll 1's|
|⇈|Sharp|Advantage on Ud rolls|
|⇈|Precise|Advantage on Ud rolls|
|⇈|Impervious|Advantage on Ud rolls|
|⇊|Cursed|Disadvantage, or something else|

</div></div>

## Clothing

<ol class="d20-table gear">
    <li
        v-for="item in atTreasureClothing"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice }}
        </em>
        <div class="gear__items">
            <span class="gear__rank">{{ item.fields.Rank }}</span>
            <span v-if="item.fields.Symbol" class="gear__info" :title="item.fields.Tag">{{ item.fields.Symbol }}&nbsp;</span>
            {{ item.fields.Item }}
        </div>
    </li>
</ol>

## Light Armor

<ol class="d20-table gear">
    <li
        v-for="item in atTreasureLightArmor"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice }}
        </em>
        <div class="gear__items">
            <span class="gear__rank">{{ item.fields.Rank }}</span>
            <span v-if="item.fields.Symbol" class="gear__info" :title="item.fields.Tag">{{ item.fields.Symbol }}&nbsp;</span>
            {{ item.fields.Item }}
        </div>
    </li>
</ol>

## Heavy Armor

<ol class="d20-table gear">
    <li
        v-for="item in atTreasureHeavyArmor"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice }}
        </em>
        <div class="gear__items">
            <span class="gear__rank">{{ item.fields.Rank }}</span>
            <span v-if="item.fields.Symbol" class="gear__info" :title="item.fields.Tag">{{ item.fields.Symbol }}&nbsp;</span>
            {{ item.fields.Item }}
        </div>
    </li>
</ol>

<blockquote>

### Armor Materials

<ol class="d36-table single-space">
    <li
        v-for="item in atMaterialsArmor"
    >
        {{ item.fields.Item }}
    </li>
</ol>

</blockquote>

## One-Handed Weapons

<ol class="d20-table gear">
    <li
        v-for="item in atTreasureOneHandedWeapons"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice }}
        </em>
        <div class="gear__items">
            <span class="gear__rank">{{ item.fields.Rank }}</span>
            <span v-if="item.fields.Symbol" class="gear__info" :title="item.fields.Tag">{{ item.fields.Symbol }}&nbsp;</span>
            {{ item.fields.Item }}
        </div>
    </li>
</ol>

## Two-handed Weapons

<ol class="d20-table gear">
    <li
        v-for="item in atTreasureTwoHandedWeapons"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice }}
        </em>
        <div class="gear__items">
            <span class="gear__rank">{{ item.fields.Rank }}</span>
            <span v-if="item.fields.Symbol" class="gear__info" :title="item.fields.Tag">{{ item.fields.Symbol }}&nbsp;</span>
            {{ item.fields.Item }}
        </div>
    </li>
</ol>

<blockquote>

### Weapon Materials

<ol class="d36-table single-space">
    <li
        v-for="item in atMaterialsWeapons"
    >
        {{ item.fields.Item }}
    </li>
</ol>

</blockquote>

## Books & Maps

<ol class="d20-table gear">
    <li
        v-for="item in atTreasureBooksMaps"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice }}
        </em>
        <div class="gear__items">
            <span class="gear__rank">{{ item.fields.Rank }}</span>
            <span v-if="item.fields.Symbol" class="gear__info" :title="item.fields.Tag">{{ item.fields.Symbol }}&nbsp;</span>
            {{ item.fields.Item }}
        </div>
    </li>
</ol>

## Tools & Gear

<ol class="d20-table gear">
    <li
        v-for="item in atTreasureToolsGear"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice }}
        </em>
        <div class="gear__items">
            <span class="gear__rank">{{ item.fields.Rank }}</span>
            <span v-if="item.fields.Symbol" class="gear__info" :title="item.fields.Tag">{{ item.fields.Symbol }}&nbsp;</span>
            {{ item.fields.Item }}
        </div>
    </li>
</ol>

## Curios

<ol class="d20-table gear">
    <li
        v-for="item in atTreasureCurios"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice }}
        </em>
        <div class="gear__items">
            <span class="gear__rank">{{ item.fields.Rank }}</span>
            <span v-if="item.fields.Symbol" class="gear__info" :title="item.fields.Tag">{{ item.fields.Symbol }}&nbsp;</span>
            {{ item.fields.Item }}
        </div>
    </li>
</ol>
