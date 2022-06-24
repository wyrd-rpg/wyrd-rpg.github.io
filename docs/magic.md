# Magic

Use **[item slots](getting-wyrd.md#item-slots)** to list any prepared spells. Known but unprepared spells can be written down in a **spellbook**.

## Spell Creation

To devise a spell, roll sets of 2d6 to determine the spell formula, then the spell name. The first d6 determines the group, the second the row.

|       | 1-3                              | 4-6                                 |
|:-----:|----------------------------------|-------------------------------------|
| **1** | Physical Effect + Physical Form  | Ethereal Element + Physical Form    |
| **2** | Physical Effect + Ethereal Form  | Ethereal Element + Ethereal Form    |
| **3** | Ethereal Effect + Physical Form  | Physical Effect + Physical Element  |
| **4** | Ethereal Effect + Ethereal Form  | Physical Effect + Ethereal Element  |
| **5** | Physical Element + Physical Form | Ethereal Effect + Physical Element  |
| **6** | Physical Element + Ethereal Form | Ethereal Effect +  Ethereal Element |

## Physical Effects

<ol class="d36-table">
    <li
        v-for="item in atMagicPhysicalEffects"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Physical Elements

<ol class="d36-table">
    <li
        v-for="item in atMagicPhysicalElements"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Physical Forms

<ol class="d36-table">
    <li
        v-for="item in atMagicPhysicalForms"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Ethereal Effects

<ol class="d36-table">
    <li
        v-for="item in atMagicEtherealEffects"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Ethereal Elements

<ol class="d36-table">
    <li
        v-for="item in atMagicEtherealElements"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Ethereal Forms

<ol class="d36-table">
    <li
        v-for="item in atMagicEtherealForms"
    >
        {{ item.fields.Item }}
    </li>
</ol>

## Casting a Spell

Inspired by the spell name, the PC describes the scope of the spell in detail. In mechanical terms, define aspects of the spell's **1. Effect** (what), **2. Range** (where), **3. Area** (who) and **4. Duration** (how long).

| F | 1. Effect          | 2. Range      |
|:-:|:------------------:|:-------------:|
| 0 | *parlor trick (0)*    | *touch*        |
| 1 | *minor (+1/1d6)*      | *close*        |
| 2 | *moderate (+2/2d6)*   | *near*         |
| 3 | *major (+3/3d6)*      | *far*         |
| 4 | *spectacular (+4/4d6)* | *within sight* |
| 5 | *legendary (+5/5d6)*   | *out of sight* |

| F | 3. Area             | 4. Duration  |
|:-:|:-------------------:|:------------:|
| 0 | *self*               | *instant*     |
| 1 | *single target*       | *Ud4*         |
| 2 | *several targets*     | *Ud6*         |
| 3 | *small area*         | *Ud8*         |
| 4 | *large area*         | *Ud10*        |
| 5 | *vast area*          | *permanent*    |

Roll an ability test (usually **Intellect** or **Will**) and add **Fatigue (F)** slots to their inventory equal to the spell's **total** scope.

**Spell components** can be sacrificed to reduce Fatigue cost. Spells cast without an ability test require the performance of a Ritual (*Fd6* min).

## Overcasting

When item slots are all full, **Fatigue** cost becomes damage against the caster, ignoring armor. See **[Health, Injury & Death](combat.md#health-injury-death)**.

## Spell Failure

If a magic-user fails their ability test to cast a spell, reality rushes in to fill the paradoxical void, often with strange results. Roll a **[Paradox](#paradoxes)**.

## Paradoxes

<ol class="d36-table">
    <li
        v-for="item in atMagicParadoxes"
    >
        {{ item.fields.Item }}
    </li>
</ol>
