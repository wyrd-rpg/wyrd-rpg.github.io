# Equipment

Roll or choose one result each from [**Armor & Clothing**](#armor-and-clothing), [**Weapons**](#weapons), and all [**Adventuring Gear**](#adventuring-gear) tables.

## 1. Armor & Clothing :id=armor-and-clothing

<ol class="d36-table gear">
    <li
        v-for="item in atArmor"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice[0] }}<span v-if="item.fields.Dice[1]">,
            {{ item.fields.Dice[1] }}</span>
        </em>
        <div class="gear__items">
            {{ item.fields.Item[0] }}<span v-if="item.fields.Item[1]">,
            {{ item.fields.Item[1] }}</span>
        </div>
    </li>
</ol>

## 2. Weapons

<ol class="d36-table gear">
    <li
        v-for="item in atWeapons"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice[0] }}<span v-if="item.fields.Dice[1]">,
            {{ item.fields.Dice[1] }}</span>
        </em>
        <div class="gear__items">
            {{ item.fields.Item[0] }}<span v-if="item.fields.Item[1]">,
            {{ item.fields.Item[1] }}</span>
        </div>
    </li>
</ol>

## 3. Adventuring Gear

### 3.1. Dungeoneering Gear

<ol class="d36-table gear">
    <li
        v-for="item in atDungeoneeringGear"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice[0] }}<span v-if="item.fields.Dice[1]">,
            {{ item.fields.Dice[1] }}</span>
        </em>
        <div class="gear__items">
            {{ item.fields.Item[0] }}<span v-if="item.fields.Item[1]">,
            {{ item.fields.Item[1] }}</span>
        </div>
    </li>
</ol>

### 3.2. Tools

<ol class="d36-table gear">
    <li
        v-for="item in atTools"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice[0] }}<span v-if="item.fields.Dice[1]">,
            {{ item.fields.Dice[1] }}</span>
        </em>
        <div class="gear__items">
            {{ item.fields.Item[0] }}<span v-if="item.fields.Item[1]">,
            {{ item.fields.Item[1] }}</span>
        </div>
    </li>
</ol>

### 3.3. Trinkets

<ol class="d36-table gear">
    <li
        v-for="item in atTrinkets"
    >
        <em class="gear__Ud" v-if="item.fields.Dice">
            {{ item.fields.Dice[0] }}<span v-if="item.fields.Dice[1]">,
            {{ item.fields.Dice[1] }}</span>
        </em>
        <div class="gear__items">
            {{ item.fields.Item[0] }}<span v-if="item.fields.Item[1]">,
            {{ item.fields.Item[1] }}</span>
        </div>
    </li>
</ol>

## Book Subjects

If one of the gear options rolled is **book**, roll on the table below.

<ol class="d36-table">
    <li
        v-for="item in atBookSubjects"
    >
        {{ item.fields.Item[0] }}
    </li>
</ol>

## Example Kits

<div class="kits-grid">

| Bard *7 slots*     |
|:-------------------|
| ??? Rapier, *Ud6* |
| ??? Padded Doublet, *Ud2* |
| ?????? Antique Lute |
| ??? Austentatious Cape |
| ??? *Compelling Dance* |
| ??? Face Paint, *Ud6* |

| Cleric *8 slots*     |
|:-------------------|
| ??? War Hammer, *Ud6* |
| ??? *Cleansing Blade* |
| ?????? Iron Maille, *Ud6* |
| ??? Holy Symbol |
| ?????? Heater Shield, *Ud4* |
| ??? Cloak of the Order |

| Dwarf  *8 Slots* |
|:-------------------|
| ??? Battleaxe, *Ud6* |
| ?????? Pick axe, *Ud4* |
| ?????? Scale Mail, *Ud6* |
| ??? Poison mushroom |
| ??? Helmet, *Ud4* |
| ??? Hand drill |

| Elf  *6 Slots* |
|:-------------------|
| ??? Elegant Sword, *Ud8* |
| ??? *Mind-reading Gaze* |
| ??? Recurve Bow, *Ud8* |
| ??? Golden Flute |
| ??? Gilt Clothing, *Ud2* |
| ??? Spyglass |

| Fighter  *8 Slots* |
|:-------------------|
| ?????? Glaive, *Ud10* |
| ?????? Coat of Plates, *Ud6* |
| ??? Scimitar, *Ud6* |
| ??? Tobacco pouch, *Ud4* |
| ??? Targe, *Ud2* |
| ??? Dice set |

| Friar  *7 Slots* |
|:-------------------|
| ??? Scepter, *Ud4* |
| ??? Jug of Wine, *Ud2* |
| ??? Deceptive robes, *Ud2* |
| ??? Book of Hymns |
| ??? Censer/Incense, *Ud2* |
| ?????? Cart, *+10 Slots* |

| Halfling  *7 Slots* |
|:-------------------|
| ??? Walking Stick, *Ud4* |
| ??? Pipeweed, *Ud4* |
| ??? Leather Vest, *Ud2* |
| ?????? Cook pots |
| ??? Shortsword, *Ud6* |
| ??? Potatoes, *Ud4* |

| Magic-user  *7 Slots* |
|:-------------------|
| ??? Charred Staff, *Ud4* |
| ??? Robe, Hidden pockets |
| ??? Dagger, *Ud4* |
| ??? Leycap, *-1 Fatigue* |
| ??? Spellbook, *2 Spells* |
| ??? Quill/ink, *Ud6* |

| Ranger  *8 Slots* |
|:-------------------|
| ?????? Longbow, *Ud8* |
?????? Large trap |
??? Axe, *Ud6* |
??? Dog, *d2 POW, Bite Ud6* |
??? Padded Leathers, *Ud4* |
??? Huntsman's Horn |

| Thief  *7 Slots* |
|:-------------------|
| ?????? Two daggers, *U2d4* |
| ??? Caltrops |
| ??? Hooded Jerkin, *Ud2* |
| ??? Grappling hook |
| ??? Lockpicks, *Ud6* |
| ??? Metal file |

</div>

## Homebrew Gear

It's easy to create your own custom gear. Choose a base [usage dice](getting-wyrd.md#usage-dice), then adjust based on quality. Don't forget an evocative name. 

| Usage Die | Example Traits |
| - | - |
| **Ud1** | Single use |
| **Ud2** | Low quality/damage, limited supply |
| **Ud4** | Standard quality/damage, avg. supply |
| **Ud6** | Above avg. quality/damage, md. supply |
| **Ud8** | High quality/damage, lg. supply |
| **+1 step** | Superior material or craftsmanship (masterwork, enchanted, reinforced), an abundance or extra bundle |
| **-1 step** | Inferior material or craftsmanship (rusted, ancient, dull, damaged), sparse amount or half-used bundle |

### Usage Die Examples

| Type | Examples | Usage |
| - | - | - |
| **Lt. Melee** | *Dagger, Dirk, Cudgel* | Ud4 |
| **Md. Melee** | *Smallsword, Mace, Spear, Battleaxe, War hammer* | Ud6 |
| **Hv. Melee** | *Longsword, Halberd, Glaive* | Ud8 |
| **Sm. Ranged** | *Sling, Wheellock Pistol* | Ud6 |
| **Md. Ranged** | *Longbow, Crossbow, Blunderbuss* | Ud8 |
| **Hv. Ranged** | *Arquebus, Musket* | Ud10 |