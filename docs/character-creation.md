# Character Creation

Tables with 36 results are organized into six groups with six results each. Roll 2d6, the 1st die references a group, the 2nd references an item within that group. *Ex. rolling a 4, 2 for Appearance is group 4, item 2: Lanky.* **Bold items** refer you to another table on which to roll again.

## 1. Ability Scores

Characters have four abilities: **Power**, **Grace**, **Intellect**, and **Will**. These each start at d6. Choose one ability and step it up to d8. Optionally, reduce an ability to d4 in order to step up an ability a second time.

*Ex.: d8 d6 d6 d6; or d8 d8 d6 d4; or d10 d6 d6 d4.*

## 2. Background

Roll or choose your character's background. This determines starting **wealth** and knowledge.

<div class="flex--lg">
<div class="w33--lg pr1--lg">

**Ud2 Wealth**

<ol class="d36-single-col">
    <li
        v-for="item in backgroundWealthD2"
    >
        {{ item.fields.Background }}
    </li>
</ol>

</div>
<div class="w33--lg pl1--lg pr1--lg">

**Ud4 Wealth**

<ol class="d36-single-col">
    <li
        v-for="item in backgroundWealthD4"
    >
        {{ item.fields.Background }}
    </li>
</ol>

</div>
<div class="w33--lg pl1--lg">

**Ud6 Wealth**

<ol class="d36-single-col">
    <li
        v-for="item in backgroundWealthD6"
    >
        {{ item.fields.Background }}
    </li>
</ol>

</div>
</div>

## 3. Physical Traits

### Appearance

<ol class="d36-table">
    <li
        v-for="item in atAppearance"
    >
        {{ item.fields.Trait }}
    </li>
</ol>

### Physical Detail

<ol class="d36-table">
    <li
        v-for="item in atPhysicalDetail"
    >
        {{ item.fields.Trait }}
    </li>
</ol>

### Clothing

<ol class="d36-table">
    <li
        v-for="item in atClothing"
    >
        {{ item.fields.Trait }}
    </li>
</ol>

## 4. Personality Traits

### Vice

<ol class="d36-table">
    <li
        v-for="item in atVice"
    >
        {{ item.fields.Trait }}
    </li>
</ol>

### Virtue

<ol class="d36-table">
    <li
        v-for="item in atVirtue"
    >
        {{ item.fields.Trait }}
    </li>
</ol>

### Mannerism

<ol class="d36-table">
    <li
        v-for="item in atMannerism"
    >
        {{ item.fields.Trait }}
    </li>
</ol>

## 5. Inventory

Characters have **10 item slots**. Most items take up 1 slot, but **bulky** items take up 2. Slots are also used in abstract ways for [fatigue](getting-wyrd.md#fatigue) and [spellcasting](magic.md#casting-a-spell) (see **Fatigue**).

All **consumable items** are denoted with a usage dice value (see **[Usage Dice](getting-wyrd.md#usage-dice)**). Weapons and armor are considered consumable, as they can become damaged or broken. Note the dice value for each as you roll or choose items.

## 6. Starting Gear

All players begin with:

- Hardtack or pemmican (Ud4, 1 slot)
- A waterskin (Ud4, 1 slot)
- 1 Wealth Die (based on background)

Record these items, then roll once on each of the **[Equipment](equipment.md)** tables on the next page to determine your weapons, armor, and equipment. If indicated, roll on the **[Spell Creation](magic.md#spell-creation)** table. Pick only one item for each result.

For something closer to traditional classes, choose from the list of **[Example Kits](equipment.md#example-kits)**.

## 7. Name Thyself

Pray, do not get too attached. It's a dangerous world out there...
